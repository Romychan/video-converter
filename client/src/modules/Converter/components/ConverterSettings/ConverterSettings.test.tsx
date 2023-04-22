import { vi } from 'vitest';

import { renderTestApp } from '@tests/helpers/renderTestApp';
import { ConverterSettings } from './ConverterSettings';

describe('ConverterSettings', () => {
  it('should match snapshot', () => {
    const handleChange = vi.fn();
    const container = renderTestApp(
      <ConverterSettings startVideoProcessing={handleChange} />,
    );

    expect(container).toMatchSnapshot();
  });
});
