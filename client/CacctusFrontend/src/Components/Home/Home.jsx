import Header from "./Header/Header";
import Search from "./Search/Search";
import Navbar from "../Navbar/Navbar";
import Popular from "./Popular/Popular";
import Meet from "./meetTheArtist/Meet";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Popular/>
      <Meet />
    </>
  );
};

export default Home;
