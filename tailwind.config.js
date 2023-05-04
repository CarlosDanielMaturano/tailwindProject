/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html, js}"],
    theme: {
        extend: {
            colors: {
                black: "#232931",
                gray: "#393E46",
                green: "#4ECCA3",
                dark_green: "#3A9188",
                white: "#EEEEEE",
            },
            fontFamily: {
                work_sans: ['Work Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
