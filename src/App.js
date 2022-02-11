import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Profil from "./components/Profil";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Profil />
      <SignIn />
      <ChangeColor />
    </div>
  );
}

export default App;
