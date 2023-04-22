import { fireEvent, screen, render } from '@testing-library/react';
import { vi } from 'vitest';

import { Dropdown } from './Dropdown';

const MOCK_DROPDOWN_ITEM = ['react', 'html', 'js'];

describe('Dropdown', () => {
  it('should render correctly', () => {
    const handleClick = vi.fn();
    render(
      <Dropdown label="Testing" onChange={handleClick}>
        {MOCK_DROPDOWN_ITEM.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Dropdown>,
    );

    const dropdownHeader = screen.getByTestId('dropdown-header');
    const dropdownBody = screen.queryByTestId('dropdown-body');

    expect(dropdownHeader).toBeInTheDocument();
    expect(screen.queryByText(/react/i)).toBeInTheDocument();

    expect(dropdownBody).not.toBeInTheDocument();
  });

  it('should render correctly without label', () => {
    const handleClick = vi.fn();
    render(
      <Dropdown onChange={handleClick}>
        {MOCK_DROPDOWN_ITEM.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Dropdown>,
    );

    const dropdownLabel = screen.queryByTestId('dropdown-label');

    expect(dropdownLabel).not.toBeInTheDocument();
  });

  it('should render correctly with initialState', () => {
    const handleClick = vi.fn();
    render(
      <Dropdown onChange={handleClick} initialValue={2}>
        {MOCK_DROPDOWN_ITEM.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Dropdown>,
    );

    expect(screen.queryByText(/js/i)).toBeInTheDocument();
  });

  it('should opens and closes without selecting an item', () => {
    const handleClick = vi.fn();
    render(
      <Dropdown onChange={handleClick}>
        {MOCK_DROPDOWN_ITEM.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Dropdown>,
    );

    const dropdownContainer = screen.getByTestId('dropdown-container');
    const dropdownHeader = screen.getByTestId('dropdown-header');

    fireEvent.click(dropdownHeader);

    const dropdownBody = screen.queryByTestId('dropdown-body');

    expect(dropdownBody).toBeInTheDocument();
    expect(dropdownContainer.getAttribute('class')).toMatch(/active/gi);
    expect(screen.queryByText(/js/i)).toBeInTheDocument();

    fireEvent.click(document);

    expect(dropdownBody).not.toBeInTheDocument();
    expect(dropdownContainer.getAttribute('class')).not.toMatch(/active/gi);
  });

  it('should opens and closes with selecting an item', () => {
    const handleClick = vi.fn();
    render(
      <Dropdown onChange={handleClick}>
        {MOCK_DROPDOWN_ITEM.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Dropdown>,
    );

    const dropdownHeader = screen.getByTestId('dropdown-header');

    fireEvent.click(dropdownHeader);

    const dropdownItem = screen.getByText(/js/i);

    fireEvent.click(dropdownItem);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(dropdownItem).not.toBeInTheDocument();

    expect(screen.getByText(/js/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const handleClick = vi.fn();
    const container = render(
      <Dropdown label="Test" onChange={handleClick}>
        {MOCK_DROPDOWN_ITEM.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Dropdown>,
    );

    expect(container).toMatchSnapshot();
  });
});
