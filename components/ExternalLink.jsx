const ExternalLink = ({ className, href, text }) => (
  <a
    className={
      className ||
      "underline underline-offset-2 decoration-primary-50 hover:decoration-primary transition"
    }
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {text}
  </a>
);

export default ExternalLink;
