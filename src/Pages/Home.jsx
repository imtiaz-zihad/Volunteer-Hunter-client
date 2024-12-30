import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import LimitCard from "../Components/LimitCard";
import WhyVolunteer from "../Components/WhyVolunteer";
import RecentOrganizer from "../Components/RecentOrganizer";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-306px)]">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <LimitCard />
      <RecentOrganizer />
      <WhyVolunteer />
    </div>
  );
};

export default Home;
