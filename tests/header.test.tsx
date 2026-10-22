import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/core/header/Header';

it('React 19 でメニューを開閉し、遷移リンクでも閉じられる', () => {
  render(<Header />);
  fireEvent.click(screen.getByText('MENU', { exact: true }));
  expect(screen.getByText('CLOSE', { exact: true })).toBeInTheDocument();
  fireEvent.click(screen.getByText('CLOSE', { exact: true }));
  expect(screen.getByText('MENU', { exact: true })).toBeInTheDocument();
  fireEvent.click(screen.getByText('MENU', { exact: true }));
  fireEvent.click(screen.getByRole('link', { name: /C\s*o\s*n\s*t\s*a\s*c\s*t/ }));
  expect(screen.getByText('MENU', { exact: true })).toBeInTheDocument();
});
