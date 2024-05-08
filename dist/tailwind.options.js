const tailwind_options = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          "from": {
            transform: "translateY(-0.75rem)",
            opacity: '0'
          },
          "to": {
            transform: "translateY(0rem)",
            opacity: '1'
          }
        },
        'fade-out-down': {
          "from": {
            transform: "translateY(0rem)",
            opacity: '1'
          },
          "to": {
            transform: "translateY(+0.75rem)",
            opacity: '0'
          }
        }
      },
      animation: {
        'fade-in-down': "fade-in-down 0.2s ease-in-out both",
        'fade-out-down': "fade-out-down 0.2s ease forwards"
      },
      colors: {
        'hi-blue': '#00B4FF',
        'hi-dark': '#45454d'
      },
    },
    fontFamily: {
      'sans-pro': 'SourceSansPro-Regular, Arial, sans-serif',
      'sans-semi': 'SourceSansPro-Semibold, Arial, sans-serif',
      'cond-b': 'OpenSans-CondBold, Arial, sans-serif',
    }
  },
  plugins: ['@tailwindcss/forms'],
}
export default tailwind_options