import RepoCard from "../components/RepoCard";
import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    return <p className="text-center">No items are chosen as favourites</p>;
  }

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <div className="container relative w-[560px]">
          {favourites.map((f) => (
            <RepoCard repo={f} />
          ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
