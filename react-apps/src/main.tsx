import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOMServer from 'react-dom/server';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export const getHtml = () => ReactDOMServer.renderToStaticMarkup(<App />);
