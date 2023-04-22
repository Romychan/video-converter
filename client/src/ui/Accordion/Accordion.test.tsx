import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { Accordion } from './Accordion';

describe('Accordion', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<Accordion title="Testing">Content</Accordion>);
  });

  it('should render correctly', () => {
    expect(screen.getByText(/Testing/i)).toBeInTheDocument();
  });

  it('should opens and closes', () => {
    const accordion = screen.getByTestId('accordion');
    const header = screen.getByTestId('accordion-header');
    const body = screen.getByTestId('accordion-body');

    fireEvent.click(header);
    expect(body).toHaveStyle({
      'max-height': '1200px',
    });
    expect(accordion.getAttribute('class')).toMatch(/active/gi);

    fireEvent.click(header);
    expect(body).toHaveStyle({
      'max-height': '0px',
    });
    expect(accordion.getAttribute('class')).not.toMatch(/active/gi);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
