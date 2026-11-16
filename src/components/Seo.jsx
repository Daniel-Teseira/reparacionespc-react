import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metadataTags, pageMetadata, siteOrigin } from '../data/seo';

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const origin = siteOrigin(import.meta.env.VITE_SITE_URL || window.location.origin);
    const meta = pageMetadata(pathname, origin);
    document.title = meta.title;
    document.head.querySelectorAll('[data-seo]').forEach((element) => element.remove());
    document.head.insertAdjacentHTML('beforeend', metadataTags(meta));
  }, [pathname]);
  return null;
}
