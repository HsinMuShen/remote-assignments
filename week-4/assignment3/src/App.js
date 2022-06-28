import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import Homepage from "./layout/Homepage";
import "./styles/style.scss";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
