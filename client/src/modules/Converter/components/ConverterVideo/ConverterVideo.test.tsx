import { fireEvent, screen, act, RenderResult } from '@testing-library/react';

import { renderWithProviders } from '@tests/helpers/renderWithProviders';
import { ConverterVideo } from './ConverterVideo';

describe('ConverterVideo', () => {
  let container: RenderResult;

  beforeEach(async () => {
    container = renderWithProviders(<ConverterVideo />, {
      preloadedState: {
        video: {
          uri: 'test',
          extension: 'mp4',
          duration: '00:00:00',
        },
      },
    });

    const inlineVideo = screen.getByTestId('video-player');
    Object.defineProperty(inlineVideo, 'duration', {
      writable: true,
      value: 10,
    });

    await act(async () => fireEvent.loadedMetadata(inlineVideo));
  });

  it('should render correctly', async () => {
    expect(screen.getByText(/00:00:10/i)).toBeInTheDocument();
    expect(screen.getByTestId('video-player')).toHaveAttribute('src', 'test');
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
