import Header from "./Header/Header";
import Search from "./Search/Search";
import Navbar from "../Navbar/Navbar";
import Popular from "./Popular/Popular";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Popular/>
    </>
  );
};

export default Home;
