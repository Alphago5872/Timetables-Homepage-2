import FooterWebsite from "./FooterWebsite";
import HeaderSomething from "./HeaderWebsite";

const WebCard = (props) => {
  return (
    <div>
      <HeaderSomething />
      {props.children}
      <FooterWebsite />
    </div>
  );
};

export default WebCard;
