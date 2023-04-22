import {
  fireEvent,
  screen,
  render,
  RenderResult,
} from '@testing-library/react';
import { vi } from 'vitest';

import { TimeInputs } from './TimeInputs';

describe('TimeInputs', () => {
  const handleChangeStartTime = vi.fn();
  const handleChangeEndTime = vi.fn();
  let container: RenderResult;

  beforeEach(() => {
    container = render(
      <TimeInputs
        startVideoValue="00:00:00"
        endVideoValue="00:00:12"
        duration="00:00:12"
        setStartVideo={handleChangeStartTime}
        setEndVideo={handleChangeEndTime}
      />,
    );
  });

  it('should render correctly', () => {
    const firstInputElement = screen.getByDisplayValue(/00:00:00/);
    const secondInputElement = screen.getByDisplayValue(/00:00:12/);

    expect(firstInputElement).toBeInTheDocument();
    expect(secondInputElement).toBeInTheDocument();
  });

  it('should handle change', () => {
    const firstInputElement = screen.getByDisplayValue(/00:00:00/);
    const secondInputElement = screen.getByDisplayValue(/00:00:12/);

    fireEvent.change(firstInputElement, { target: { value: '00:00:03' } });
    fireEvent.change(secondInputElement, { target: { value: '00:00:10' } });

    expect(handleChangeStartTime).toHaveBeenCalledWith('00:00:03');
    expect(handleChangeEndTime).toHaveBeenCalledWith('00:00:10');
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
