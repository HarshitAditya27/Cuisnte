import { Search } from "lucide-react";

import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

function Homepage() {
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipies = async (searchQuery) => {
    setLoading(true);
    setRecipies([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      setRecipies(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipies("paneer");
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipies(e.target[0].value);
  };

  return (
    <div className="bg-[#BFF6C3] p-10 flex-1">
      {/*faf9fb*/}
      <div className="max-w-screen-lg mx-auto  ">
        <form onSubmit={handleSearchRecipe}>
          <label className="bg-white input shadow-md flex items-center gap-2">
            <Search className="text-black" size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow "
              placeholder="What do you want to cook today"
            />
          </label>
        </form>
        <h1 className="font-bold text-black text-3xl md:text-5xl mt-4">
          Culinary Favorites
        </h1>
        <p className="text-slate-700 font-semibold ml-1 my-2 text-xl tracking-light ">
          Chef's Choice
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipies.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
