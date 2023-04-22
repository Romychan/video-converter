import { RenderResult, fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@tests/helpers/renderWithProviders';

import { DropdownList } from './DropdownList';

describe('DropdownList', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = renderWithProviders(<DropdownList />);
  });

  it('should change value in dropdown', async () => {
    const qualityDropdownElement = screen.getByText(/360/i);

    fireEvent.click(qualityDropdownElement);
    fireEvent.click(screen.getByText(/720/i));

    expect(screen.getByText(/720/i)).toBeInTheDocument();
  });

  it('should change value in accordion', async () => {
    const accordionElement = screen.getByText(/Дополнительные настройки/i);
    fireEvent.click(accordionElement);

    const fpsDropdownElement = screen.getByText(/24 FPS/i);
    fireEvent.click(fpsDropdownElement);

    fireEvent.click(screen.getByText(/60 FPS/i));

    expect(screen.getByText(/60 FPS/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
