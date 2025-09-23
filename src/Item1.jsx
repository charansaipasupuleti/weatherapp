import "./App.css";
import City1 from "./City1.jsx";
import City2 from "./City2.jsx";
import City3 from "./City3.jsx";

function Item1(props) {
  return (
    <>
      <div className="item item1">
        <div className="subitem1 heading">Weather Forecast</div>
        <div className="subitem1">
          <form onSubmit={props.handleform}>
            <div className="form">
              <input
                className="searchbar"
                type="search"
                placeholder="Enter location"
                name="place"
              ></input>
            </div>
          </form>
        </div>
        <div className="subitem1">
          <City1 />
          <City2 />
          <City3 />
        </div>
        <div className="subitem1">
          <button onClick={props.handleThemeChange}>Theme</button>
        </div>
      </div>
    </>
  );
}
export default Item1;
