import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResults from "./GPTSearchResults";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="logo"
        />
      </div>
      <GPTSearchBar />
      <GPTSearchResults />
    </div>
  );
};

export default GPTSearch;
