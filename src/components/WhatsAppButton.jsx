const WhatsAppButton = ({
  phone = "+919094319216",
  message = "Hi, I'm interested",
  children = "Chat on WhatsApp",
  className = "",
}) => {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-black ${className}`}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;