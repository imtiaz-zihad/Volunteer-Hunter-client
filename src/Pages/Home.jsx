import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import LimitCard from "../Components/LimitCard";
import WhyVolunteer from "../Components/WhyVolunteer";
import RecentOrganizer from "../Components/RecentOrganizer";
import UpcomingEvent from "../Components/UpcomingEvent";
import VolunteerStory from "../Components/VolunteerStory";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-306px)]">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <LimitCard />
      <RecentOrganizer />
      <UpcomingEvent />
      <VolunteerStory />
      <WhyVolunteer />
    </div>
  );
};

export default Home;
