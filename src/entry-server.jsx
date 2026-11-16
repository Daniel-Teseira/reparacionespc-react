import { renderToString } from 'react-dom/server';
import { Router } from './router';
import App from './App';

export function render(url) {
  return renderToString(<Router url={url}><App /></Router>);
}

export { pageMetadata, metadataTags, siteOrigin } from './data/seo';
