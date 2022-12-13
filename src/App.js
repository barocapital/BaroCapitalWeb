import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Home from './page_Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//npm install react-bootstrap bootstrap
//npm install react-bootstrap-icons --save
//npm install animate.css --save
//npm install react-on-screen
//$ npm install react-multi-carousel
//$ npm install react-router-hash-link
//$ npm install react-mailchimp-subscribe


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/*
      <Banner />
      <Skills />
      <Projects />
      <Contact />
       */}
      <Footer />
    </div>
  );
}

export default App;
