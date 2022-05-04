import { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [timerId, setTimerId] = useState();
  const [isSearchBoxShowing, setIsSearchBoxShowing] = useState(false);

  //debouncing in search
  const serchRan = (val) => {
    if (val === "") {
      if (timerId) clearTimeout(timerId);
      props.searchName(val);
    } else {
      let id;
      if (timerId) {
        clearTimeout(timerId);
        setTimerId();
      }
      id = setTimeout(() => {
        props.searchName(val);
      }, 3000);
      setTimerId(id);
    }
  };
  return (
    <div className="pa4 black-80 flex">
      <div className="w-70"></div>
      <div className="flex container w-30 mr2">
        {isSearchBoxShowing && (
          <div className="measure flex items-center mr1">
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100 br2"
              type="text"
              aria-describedby="name-desc"
              placeholder="Enter a card name"
              onChange={(e) => {
                e.preventDefault();
                serchRan(e.target.value);
              }}
            />
          </div>
        )}
        <div className="flex">
          <div
            className="w-100 mr2 mb2 flex items-center pointer"
            onClick={() => setIsSearchBoxShowing(!isSearchBoxShowing)}
          >
            <i className="gg-play-list-search"></i>
          </div>
          <div className="filter-container flex justify-around pa2 mb2 pointer">
            <div className="inverted-triangle">
              <i class="gg-filters"></i>
            </div>
            <div>
              <span className="silver">Filter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
