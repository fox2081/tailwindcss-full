module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /[\S\s]/,
    },
  ],
}
