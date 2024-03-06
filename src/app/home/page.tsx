import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { Heading } from "../components/home/HomeContents";
import WhatWeOfferSection from "../components/home/WhatWeOfferList";

const Home = () => {
  return (
    <div>
      <Header />
      <Heading />
      <WhatWeOfferSection />
      <Footer />
    </div>
  );
};
export default Home;
