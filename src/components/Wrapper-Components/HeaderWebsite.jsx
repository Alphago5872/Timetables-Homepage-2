import newton_logo from "../../image/Icons/Newton_logo.png";
import User_logo from "../../image/Icons/User_logo.webp";
import { Link } from "react-router-dom";

const HeaderWebsite = (props) => {
  return (
    <div>
      <div>
        <img src={newton_logo} alt="Newton logo" />
        <Link to='/'>Timetables</Link>
        <h3>Beta</h3>
        <h2>Schedule Matters</h2>
      </div>
      <div>
        <h1>Good Morning,</h1>
        <h1>{props.userName}</h1>
        <img src={User_logo} alt="User logo" />
      </div>
    </div>
  );
};

export default HeaderWebsite;
