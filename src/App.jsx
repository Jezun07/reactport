
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/porfolio/portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </div>
    </div>
  );
}

export default App;
