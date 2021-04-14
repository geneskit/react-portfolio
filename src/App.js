import React from "react";
import About from "../src/components/About.js";
import Body from "./components/CardContainer.js";
import Contact from "../src/components/Contact.js";
import Footer from "../src/components/Footer.js";
import Header from "../src/components/Header.js";
import Nav from "../src/components/Nav.js";
import Portfolio from "../src/components/Portfolio.js";
import Resume from "../src/components/Resume.js";

function App() {
  const headerLinks = ["About Me", "Portfolio", "Contact", "Resume"];
  const [current, pageChange] = useState(pages[0]);

  function displayPage(pageName) {
    switch (pageName) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  }
  return (
  <div className="container">
    <Header>
      <Nav tabs={tabs} currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
    </Header>
    {displayPage(currentPage)}
    <Footer></Footer>
  </div>
  )
}

export default App;
