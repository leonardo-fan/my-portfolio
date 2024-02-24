export default function ImageLinkButton({ link, src } : { link : string, src : string }) {
  return (
    <a href={link}>
      <img src={src} className="h-6 sm:h-9" alt={`Icon Link to ${link}`} />
    </a>
  );
}