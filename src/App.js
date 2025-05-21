import RestaurantsContainer from "./components/RestaurantsContainer";
import { data } from "./data/data.js"; // <-- Make sure this import is here
import "./App.css";

function App() {
  return (
    <div className="App">
      <RestaurantsContainer restaurants={data} />
    </div>
  );
}

export default App;
