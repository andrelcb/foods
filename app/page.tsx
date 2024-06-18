import Header from "./_components/header";
import Search from "./_components/search";

const home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
    </>
  );
};

export default home;
