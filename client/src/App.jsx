import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PreviousContests from "./components/previousContests"
import Pricing from "./components/Pricing";  
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <PreviousContests />  
      <Pricing />           
      <Footer />            
    </div>
  );
}

export default App;