import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const [isFav, setIsFav] = useState(favourites.includes(repo));

  const addToFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavourite(repo);
    setIsFav(true)
  };
  const removeFromFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavourite(repo);
    setIsFav(false)
  };

  return (
    <div className="border py-3 px-5 mb-2 rounded hover:shadow-md hover:text-sky-500 transition-all">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2"> {repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="font-thin text-sm">{repo?.description}</p>

        {isFav ? (
          <button
            className="py-2 px-4 mr-2 bg-red-600 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourites}
          >
            Remove from favourites
          </button>
        ) : (
          <button
            className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
            onClick={addToFavourites}
          >
            Add to favourites
          </button>
        )}
      </a>
    </div>
  );
}

export default RepoCard;
