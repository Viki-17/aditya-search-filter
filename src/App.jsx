import { CustomSearch } from "./components/CustomSearch";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="customsearch">
        <CustomSearch />
      </div>
      <Footer />
    </>
  );
}

export default App;
