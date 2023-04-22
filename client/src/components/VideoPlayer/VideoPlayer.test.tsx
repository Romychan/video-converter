/* eslint-disable @typescript-eslint/no-empty-function */
import {
  fireEvent,
  screen,
  render,
  act,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { VideoPlayer } from './VideoPlayer';

describe('TimeLine', () => {
  const handleChange = vi.fn();
  let container: RenderResult;

  beforeEach(async () => {
    container = render(
      <VideoPlayer uri="test" handleLoadedVideo={handleChange} />,
    );

    const inlineVideo = screen.getByTestId('video-player');
    Object.defineProperty(inlineVideo, 'duration', {
      writable: true,
      value: 60,
    });

    await act(async () => fireEvent.loadedMetadata(inlineVideo));
  });

  it('should render correctly', async () => {
    expect(screen.getByTestId('video-player')).toHaveProperty('duration', 60);
    expect(screen.getByText(/00:01:00/i)).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalled();
  });

  it('should change time', async () => {
    const timelineElement = screen.getByLabelText('Timeline');

    fireEvent.change(timelineElement, { target: { value: '10' } });
    expect(timelineElement).toHaveValue('10');
    expect(screen.getByText(/00:00:06/i)).toBeInTheDocument();
  });

  it('should play video', async () => {
    const playSub = vi
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation((): any => {});
    const buttonElement = screen.getByTestId('actions-button');
    fireEvent.click(buttonElement);

    expect(playSub).toHaveBeenCalled();
    playSub.mockRestore();
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
