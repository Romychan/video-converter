import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import { renderTestApp } from '@tests/helpers/renderTestApp';
import { ConverterProcessing } from './ConverterProcessing';

describe('ConverterProcessing', () => {
  it('processing video work correctly', () => {
    const handleChange = vi.fn();

    renderTestApp(
      <ConverterProcessing
        type={QueryStatus.pending}
        file="test"
        onCancel={handleChange}
      />,
    );

    expect(screen.getByText(/Идет обработка видео/i)).toBeInTheDocument();
    expect(screen.getByText(/0%/i)).toBeInTheDocument();
  });

  it('error processing video work correctly', () => {
    const handleChange = vi.fn();

    renderTestApp(
      <ConverterProcessing
        type={QueryStatus.rejected}
        file="test"
        onCancel={handleChange}
      />,
    );

    expect(
      screen.getByText(/Во время обработки вашего файла произошла ошибка/i),
    ).toBeInTheDocument();
  });

  it('success processing video work correctly', () => {
    const handleChange = vi.fn();

    renderTestApp(
      <ConverterProcessing
        type={QueryStatus.fulfilled}
        file="test"
        onCancel={handleChange}
      />,
    );

    expect(screen.getByText(/Видео успешно обработано/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const handleChange = vi.fn();
    const container = renderTestApp(
      <ConverterProcessing
        type={QueryStatus.pending}
        file="test"
        onCancel={handleChange}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
