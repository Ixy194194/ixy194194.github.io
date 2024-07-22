/** @type {import('tailwindcss').Config} */
const defaultFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Helvetica Neue"',
  '"Segoe UI"',
  '"Hiragino Kaku Gothic ProN"',
  '"Hiragino Sans"',
  '"ヒラギノ角ゴ ProN W3"',
  'Arial',
  'メイリオ',
  'Meiryo',
  'sans-serif',
];

module.exports = {
  content: ['./**/*.{ts,tsx}', './**/*.{ts,tsx}', './**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: [defaultFonts, { fontFeatureSettings: '"palt"' }],
      },
    },
  },
  plugins: [],
};
