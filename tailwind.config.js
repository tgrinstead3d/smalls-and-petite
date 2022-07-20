/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            color: {
            },
            fontFamily: {
                sans: ['proxima-nova', 'sans-serif'],
                script: ['relation-one', 'sans-serif'],
            }
        },
    },

    plugins: [require('daisyui')],
}
