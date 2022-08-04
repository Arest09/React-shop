import "./App.css";
import "./reset.css";

import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { Footer } from "./components/Footer";

import { ContextPorvider } from "./context";

function App() {
  return (
    <div className="App">
      <Header />
      <ContextPorvider>
        <Shop />
      </ContextPorvider>
      <Footer />
    </div>
  );
}

export default App;
