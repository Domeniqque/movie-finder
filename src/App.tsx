import "./App.css";
import { Autocomplete } from "./components/Autocomplete";
import { DropdownOption } from "./components/Autocomplete/components/Dropdown";

import moviesData from "./movies.json";
import { delay } from "./utils/delay";

interface Movie {
  label: string;
  value: string;
}

const searchMovieAsync = (text: string) => {
  return new Promise<Movie[]>((resolve) => {
    const result = moviesData.data.filter((movie) =>
      movie.label.match(new RegExp(text, "ig"))
    );

    delay(() => {
      // NOTE: display only the first 10 items is more user friendly,
      // the user can scan the results quickly
      resolve(result.slice(0, 10));
    }, 150);
  });
};

function App() {
  const handleSearchMovie = (text: string) => {
    return searchMovieAsync(text);
  };

  const handleSelect = (option: DropdownOption) => {
    console.log(option);
  };

  return (
    <div className="container">
      <header>
        <h1>Movie Finder</h1>
        <p>Search for the top 100 IMDB movies</p>
      </header>

      <Autocomplete
        placeholder="Type a name, eg. Star Wars"
        onSearchAsync={handleSearchMovie}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default App;
