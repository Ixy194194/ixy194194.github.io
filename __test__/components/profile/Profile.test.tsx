import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Profile from '../../../components/profile/Profile';

describe('Profile', () => {
  test('Profile名が表示されているか', () => {
    render(<Profile />);
    const text = screen.getByText('Ｉｘｙ（いくしー）');
    expect(text).toBeInTheDocument();
  });
});
