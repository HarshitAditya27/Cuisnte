import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";

function FavouritePage() {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  return (
    <div className="bg-[#BFF6C3] flex-1 p-10 min-h-screen">
      {/*faf9fb*/}

      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4 text-black ">
          My Favourites
        </p>
        {/* {!favourites && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" className="h-3/4" />
          </div>
        )} */}

        {favourites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/c3.png" className="h-3/4" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.label}
              recipe={recipe}
              {...getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavouritePage;
