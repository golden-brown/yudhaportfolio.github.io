import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import About from './pages/About';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
