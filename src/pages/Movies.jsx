import { useLoaderData } from "react-router";
import { Card } from "../components/UI/Card";

const Movies = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <ul className="container grid grid-four--cols">
      {moviesData && moviesData.Search.map((currentMovie) => {
        return <Card key={currentMovie.imdbID} currentMovie={currentMovie} />;
      })}{" "}
    </ul>
  );
};

export default Movies;
