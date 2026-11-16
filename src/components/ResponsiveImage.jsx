// AVIF para los navegadores que lo admiten y WebP como alternativa.
// `fetchpriority` va en minúsculas: React 18 no reconoce la prop `fetchPriority` y avisa en desarrollo.
export default function ResponsiveImage({ image, sizes = '100vw', alt = '', fetchPriority, ...props }) {
  const img = <img src={image.src} srcSet={image.srcSet} sizes={sizes}
    width={image.width} height={image.height} alt={alt} decoding="async" fetchpriority={fetchPriority} {...props} />;
  if (!image.avifSrcSet) return img;
  return (
    <picture>
      <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
      {img}
    </picture>
  );
}
