import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
//import stylesheets
import "./App.scss";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Admin from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';
import TattooArtists from './components/TattooArtists';
import Footer from './components/Footer';

const App = () => {
 return (
   <div>
     <Header /> 
     <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route exact path="admin" element={<Admin />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/about" element={<About />} /> 
       <Route path="*" element={<NoPage />} /> 
       <Route path="/tattooartists" element={<TattooArtists />} /> 
     </Routes>
     <Footer />
   </div>
 );
};
 
export default App;