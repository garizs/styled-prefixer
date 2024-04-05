# styled-prefixer

A utility for applying vendor prefixes to CSS styles in JavaScript and converting them into a string format.

## Installation

```bash
npm install styled-prefixer
```

## Usage

```javascript
import styledPrefixer from 'styled-prefixer';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const prefixedStyles = styledPrefixer(styles);
// Use prefixedStyles as inline style or CSS class content
```

## Features

- Automatically applies necessary vendor prefixes.
- Converts JavaScript style objects into a string format.
- Can be used for inline styling or CSS classes.

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
