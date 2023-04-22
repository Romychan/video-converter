import { RenderResult, render, screen } from '@testing-library/react';

import { Section } from './Section';

describe('Section', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<Section>Content</Section>);
  });

  it('should render correctly', () => {
    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
