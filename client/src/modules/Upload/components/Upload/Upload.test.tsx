import {
  RenderResult,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import { vi } from 'vitest';

import { renderTestApp } from '@tests/helpers/renderTestApp';
import { Upload } from './Upload';

const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as any;

  return {
    ...actual,
    useNavigate: () => mockedUsedNavigate,
  };
});

describe('Upload', () => {
  let container: RenderResult;

  beforeEach(() => {
    mockedUsedNavigate.mockReset();

    container = renderTestApp(<Upload />);
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

    expect(dropzoneInput.files?.[0]).toStrictEqual(file);
    expect(dropzoneInput.files).toHaveLength(1);

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/convert');
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
