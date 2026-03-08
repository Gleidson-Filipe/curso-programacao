/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#c9a74a",
                "background-light": "#f8f7f6",
                "background-dark": "#0D0D12",
                "card-dark": "#16161D",
                "slate-100": "#f1f5f9",
                "slate-300": "#cbd5e1",
                "slate-400": "#94a3b8",
                "slate-500": "#64748b",
                "slate-600": "#475569",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
                "pixel": ["VT323", "monospace"],
                "title": ["Inter", "sans-serif"],
                "drama": ["Playfair Display", "serif"],
                "data": ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "full": "9999px",
                "premium": "2rem",
                "premium-lg": "3rem"
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, rgba(201, 167, 74, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(201, 167, 74, 0.05) 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    },
}
