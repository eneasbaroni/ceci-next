/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                moneta: ["var(--font-moneta)"],
            },
            screens: {
                notebook: { max: "1280px" },
                tablet: { max: "1024px" },
                mobile: { max: "768px" },
            },
        },
    },
    plugins: [],
};
