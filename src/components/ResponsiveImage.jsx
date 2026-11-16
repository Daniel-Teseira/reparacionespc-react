export default function ResponsiveImage({ image, sizes = '100vw', alt = '', ...props }) {
  return <img src={image.src} srcSet={image.srcSet} sizes={sizes}
    width={image.width} height={image.height} alt={alt} decoding="async" {...props} />;
}
