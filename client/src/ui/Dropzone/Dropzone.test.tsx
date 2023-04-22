import {
  fireEvent,
  screen,
  render,
  waitFor,
  createEvent,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { Dropzone } from './Dropzone';

describe('Dropzone', () => {
  let container: RenderResult;
  const handleChange = vi.fn();

  beforeEach(() => {
    container = render(
      <Dropzone
        title="Test"
        uploadFileHandler={handleChange}
        acceptedTypes={['png']}
      >
        <button>Upload</button>
      </Dropzone>,
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly', () => {
    expect(screen.queryByText(/Test/i)).toBeInTheDocument();
    expect(screen.queryByText(/Upload/i)).toBeInTheDocument();
  });

  it('should upload file', async () => {
    const file = new File(['Filename'], 'Filename.png', { type: 'image/png' });
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

  it('should drag and drop upload file', async () => {
    const file = new File(['Filename'], 'Filename.png', { type: 'image/png' });
    const dropzoneContainer = screen.getByTestId('dropzone-container');

    fireEvent.dragEnter(dropzoneContainer);

    const dropzoneZone = screen.getByTestId('dropzone-zone');
    const dropzoneZoneEvent = createEvent.drop(dropzoneZone);

    Object.defineProperty(dropzoneZoneEvent, 'dataTransfer', {
      value: {
        files: [file],
      },
    });
    fireEvent(dropzoneZone, dropzoneZoneEvent);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should handle error for not supported file', async () => {
    const file = new File(['Filename'], 'Filename.jpg', { type: 'image/jpg' });
    const dropzoneInput = screen.getByTestId(
      'dropzone-input',
    ) as HTMLInputElement;

    await waitFor(() =>
      fireEvent.change(dropzoneInput, {
        target: { files: [file] },
      }),
    );

    const dropzoneError = screen.getByTestId('dropzone-error');

    expect(dropzoneError).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
