import {
  fireEvent,
  screen,
  render,
  waitFor,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { UploadFile } from './UploadFile';

describe('UploadFile', () => {
  const handleChange = vi.fn();
  let container: RenderResult;

  beforeEach(() => {
    container = render(
      <UploadFile types={['mp4']} uploadFile={handleChange} />,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText(/Перетащите видео/i)).toBeInTheDocument();
    expect(screen.getByText(/Выбрать файл/i)).toBeInTheDocument();
  });

  it('should upload file', async () => {
    const file = new File(['Filename'], 'Filename.mp4', { type: 'video/mp4' });
    const dropzoneInput = screen.getByTestId(
      'dropzone-input',
    ) as HTMLInputElement;

    await waitFor(() =>
      fireEvent.change(dropzoneInput, {
        target: { files: [file] },
      }),
    );

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(dropzoneInput.files?.[0]).toStrictEqual(file);
    expect(dropzoneInput.files).toHaveLength(1);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
