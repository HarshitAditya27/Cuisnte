import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
};
function RecipeCard({ recipe, bg, badge }) {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavourite, setIsFavourite] = useState(
    localStorage.getItem("favourites")?.includes(recipe.label)
  );

  function addRecipetofavourite() {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isRecipeAlreadyInFavourites = favourites.some(
      (fav) => fav.label === recipe.label
    );

    if (isRecipeAlreadyInFavourites) {
      favourites = favourites.filter((fav) => fav.label !== recipe.label);
      setIsFavourite(false);
    } else {
      favourites.push(recipe);
      setIsFavourite(true);
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }

  return (
    <div
      className={`flex  flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        className="relative h-32"
      >
        <div className=" skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt=""
          className="w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500
          "
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm text-black font-semibold">
          <Soup className="text-black" size={16} /> {recipe.yield} servings
        </div>
        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            addRecipetofavourite();
          }}
        >
          {!isFavourite && (
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500 text-black"
            />
          )}
          {isFavourite && (
            <Heart size={20} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>
      <div className="font-bold text-black flex mt-1">
        <p>{recipe.label}</p>
      </div>
      <p className="text-black my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}{" "}
        Kitchen
      </p>
      <div className="text-black flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div
            key={index}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeCard;
