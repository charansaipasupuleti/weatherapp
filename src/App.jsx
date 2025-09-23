import { useState } from "react";
import "./App.css";
import Item1 from "./Item1.jsx";
import Item2 from "./Item2.jsx";
import Item3 from "./Item3.jsx";
import image1 from "./assets/bodybackground1.jpg";
import image2 from "./assets/bodybackground2.jpg";

function App() {
  const [currentTheme, setCurrentTheme] = useState("theme1");

  const handleThemeChange = () => {
    switch (currentTheme) {
      case "theme1":
        setCurrentTheme("theme2");
        break;
      default:
        setCurrentTheme("theme1");
    }
  };

  let backgroundImage;
  if (currentTheme === "theme1") {
    backgroundImage = `url(${image1})`;
  } else {
    currentTheme === "theme2";
    backgroundImage = `url(${image2})`;
  }

  const [location, setLocation] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData.entries());
    setLocation(formDataObj.place);
  };

  return (
    <div className="bg" style={{ backgroundImage: backgroundImage }}>
      <div className="grid-container">
        <Item1 handleThemeChange={handleThemeChange} handleform={handleForm} />

        <Item2 location={location} />

        <Item3 />
      </div>
    </div>
  );
}

export default App;
