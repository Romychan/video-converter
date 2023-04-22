import { RenderResult, render, screen } from '@testing-library/react';

import { Label } from './Label';

describe('Label', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<Label label="Testing">Content</Label>);
  });

  it('should render correctly', () => {
    expect(screen.getByText(/Testing/i)).toBeInTheDocument();
    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
