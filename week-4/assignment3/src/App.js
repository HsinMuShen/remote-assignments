import Footer from "./layout/footer";
import Nav from "./layout/nav";
import Homepage from "./layout/homepage";
import "./styles/style.css";

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
