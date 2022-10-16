const plugin = require('tailwindcss/plugin')

const generateColor = (hue, saturation) => {
    const result = {}
    for (let i = 0; i <= 1000; i += 25) {
        result[i] = `hsl(${hue}, ${saturation}%, ${100 - i / 10}%)`
    }
    return result
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{tsx,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                display: `'EB Garamond', serif`,
                other: `'Cormorant', serif`
            },
            colors: {
                gray: generateColor(30, 1),
                primary: generateColor(5, 40),
                tan: generateColor(30, 40),
                white: `#FFFFFF`
            }
        }
    },
    plugins: [
        plugin(({ addBase, addComponents, addUtilities }) => {
            addUtilities({
                '.cols-l': {
                    gridTemplateColumns: 'max-content auto'
                },
                '.cols-c': {
                    gridTemplateColumns: 'max-content auto max-content'
                },
                '.cols-m': {
                    gridTemplateColumns: 'auto max-content auto'
                },
                '.cols-r': {
                    gridTemplateColumns: 'auto max-content'
                },
                '.rows-t': {
                    gridTemplateRows: 'max-content auto'
                },
                '.rows-b': {
                    gridTemplateRows: 'auto max-content'
                },
                '.rows-c': {
                    gridTemplateRows: 'max-content auto max-content'
                },
                '.pad': {
                    padding: '.5rem 1rem'
                }
            })
        })
    ]
}
