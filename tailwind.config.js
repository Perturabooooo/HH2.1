/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                background: '#E0F9FF',
                secondLayer: '#A39171',
                trim: '#0B5351',
                accent: '#AEECEF',
                text: '#040F11',
            }
        },
    },
    plugins: [],
}
