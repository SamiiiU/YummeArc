import image from '../Assets/Images/trust.png'
const TrustPilotBadge = ( ) => {
  return (
    <a
      href="https://www.trustpilot.com/review/yumearc.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <img
        src={image} // ✅ apna static image public folder me daal do
        alt="Trustpilot Reviews"
        className="h-fit w-56 cursor-pointer"
      />
    </a>
  );
};

export default TrustPilotBadge;
