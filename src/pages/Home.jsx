import Glance from "../components/Homepage-components/Glance";
import NewtonNews from "../components/Homepage-components/NewtonNews"
import TeachersTimetable from "../components/Homepage-components/TeachersTimetable";
import WebCard from "../components/Wrapper-Components/WebCard";

const Home = (props) => {
  return (
    <WebCard>
      <Glance />
      <NewtonNews />
      <TeachersTimetable />
    </WebCard>
  );
};

export default Home;
