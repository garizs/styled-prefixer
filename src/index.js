import auto_prefix_with_styles from 'autoprefixer-css-js';
import postcss from 'postcss';

function convertStylesToCSS(styles) {
    const cssString = Object.keys(styles)
        .map(property => {
            const value = styles[property];
            return `${property}: ${value};`;
        })
        .join(' ');

    return cssString;
}

function styledPrefixer(styles) {
    const cssString = convertStylesToCSS(styles);
    const processedCss = postcss([auto_prefix_with_styles]).process(cssString).css;
    return processedCss;
}

export default styledPrefixer;

