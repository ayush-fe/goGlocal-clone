import { useState } from 'react';
import './App.css';
import NavBar from './Components/Generic/NavBar';
import BottomStaticInfo from './Components/Generic/BottomStaticInfo';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutUs from './Pages/AboutUs';
import Solutions from './Pages/Solutions';
import themes from './themes';
import Products from './Pages/Products';
import Careers from './Pages/Careers';
import SignIn from './Pages/SignIn';
import WrongURL from './Components/Generic/WrongURL';



function App() {
  const [selectedTheme, setSelectedTheme] = useState("day");

  const themeDataFinder = () => {
    if (selectedTheme === "day") {
      return themes.day;
    } else {
      return themes.night;
    }
  };

  return (
    <div className="App" style={{ background: themes[selectedTheme].bgColor }}>
      <BrowserRouter>
        <NavBar currentTheme={themeDataFinder()}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        />
        <Routes>
          <Route path="/" element={<LandingPage currentTheme={themeDataFinder()} />} />
          <Route path="/about" element={<AboutUs currentTheme={themeDataFinder()} />} />
          <Route path="/products" element={<Products currentTheme={themeDataFinder()} />} />
          <Route path="/service" element={<Solutions currentTheme={themeDataFinder()} />} />
          <Route path="/careers" element={<Careers currentTheme={themeDataFinder()} />} />
          <Route path="/signIn" element={<SignIn currentTheme={themeDataFinder()} />} />
          <Route path="*" element={<WrongURL currentTheme={themeDataFinder()} />} />
        </Routes>
        <BottomStaticInfo />
      </BrowserRouter>

    </div>
  );
}

export default App;
