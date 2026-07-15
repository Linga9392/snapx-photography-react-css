import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PreviousContests from './components/PreviousContests'
import Pricing from "./components/Pricing";  
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <PreviousContests />  {/* 1. Previous Contests first */}
      <Pricing />           {/* 2. Pricing tarvatha */}
      <Footer />            {/* 3. Footer last */}
    </div>
  );
}

export default App;