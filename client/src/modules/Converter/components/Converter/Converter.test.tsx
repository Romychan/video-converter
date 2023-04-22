import { renderTestApp } from '@tests/helpers/renderTestApp';
import { Converter } from './Converter';

describe('Converter', () => {
  it('should match snapshot', () => {
    const container = renderTestApp(<Converter />, {
      preloadedState: {
        video: {
          uri: 'test',
          extension: 'mp4',
          duration: '00:00:10',
        },
      },
    });

    expect(container).toMatchSnapshot();
  });
});
