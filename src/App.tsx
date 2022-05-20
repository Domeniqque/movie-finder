import "./App.css";
import { Autocomplete } from "./components/Autocomplete";

function App() {
  return (
    <div className="container">
      <h1>Movie Search</h1>

      <Autocomplete label="Type a movie name" />
    </div>
  );
}

export default App;
