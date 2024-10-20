import {getHtml} from '../react-apps/src/main.tsx';

const html = getHtml();

// Basic HTML template
const fullHtml = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Static React App</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>
`;

// Output the HTML to console (or write to a file)
console.log(fullHtml);
