import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Shope from './Pages/Shope';
import Slider from './Pages/Slider';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='' element={<Header />} />
          <Route path='' element={<Slider />} />
          <Route path='' element={<About />} />
          <Route path='' element={<Shope />} />
          <Route path='' element={<Contact />} />
          <Route path='' element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>

      <Header />
      <Slider />
      <About />
      <Shope />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
