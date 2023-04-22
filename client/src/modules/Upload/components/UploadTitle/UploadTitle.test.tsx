import { RenderResult, render, screen } from '@testing-library/react';

import { UploadTitle } from './UploadTitle';

describe('UploadTitle', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<UploadTitle />);
  });

  it('should render correctly', () => {
    expect(screen.getByText(/Конвертер видео/)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
