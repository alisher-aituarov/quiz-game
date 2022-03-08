module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slide: {
                    '0%, 100%': { left: '-100%' },
                    '50%': { left: '0' },
                    '100%': { left: '100%' },
                },
            },
            animation: {
                slide: 'slide 1s ease-in-out infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
