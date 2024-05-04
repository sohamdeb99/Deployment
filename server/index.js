import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './Landing Page/App';
import fs from 'fs';
import path from 'path';

// Generate the HTML content by rendering the App component to a string
const appHtml = ReactDOMServer.renderToString(<App />);

// You might load an HTML file as a template or simply use a string template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf8');

// Insert the rendered app into your template
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

// Write the HTML to a file or send it over the network
fs.writeFileSync(path.resolve(__dirname, 'output.html'), html);
