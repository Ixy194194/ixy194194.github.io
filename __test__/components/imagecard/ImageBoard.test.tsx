import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ImageBoard from '../../../components/imagecard/ImageBoard';

describe('ImageBoard', () => {
  test('12枚の画像が表示されているかどうか', () => {
    render(<ImageBoard />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(12);
  });
});
