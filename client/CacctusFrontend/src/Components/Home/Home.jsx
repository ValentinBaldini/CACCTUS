import Header from "./Header/Header";
import Search from "./Search/Search";
import Navbar from "../Navbar/Navbar";
import Popular from "./Popular/Popular";
import Meet from "./meetTheArtist/Meet";
import About from "./aboutCacctus/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Popular/>
      <Meet />
      <About />
      <Meet />

    </>
  );
};

export default Home;
