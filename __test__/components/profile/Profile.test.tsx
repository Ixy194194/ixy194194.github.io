import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Profile from '../../../components/profile/Profile';

describe('Profile', () => {
  test('Profile名が表示されているか', () => {
    render(<Profile />);
    const { getByText } = within(screen.getByText('Ｉｘｙ'));
    expect(getByText('いくしー')).toBeInTheDocument();
  });
});
