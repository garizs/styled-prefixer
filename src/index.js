import autoprefix from 'autoprefixer';

function auto_prefix_with_styles(styles) {
    const prefixedStyles = {};

    // Apply autoprefixer to each style property
    Object.keys(styles).forEach(key => {
        const value = styles[key];
        prefixedStyles[key] = autoprefix.process(value).css;
    });

    return prefixedStyles;
}
export default auto_prefix_with_styles;
