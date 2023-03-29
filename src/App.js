import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Details from './Details';
import BlogHome from './BlogHome';
import BlogDetail from './BlogDetail';
import Page from './Page';
import './Style.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/BlogHome" element={<BlogHome/>}/>
        <Route path="/BlogDetail" element={<BlogDetail/>}/>
        <Route path="/Page" element={<Page/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
