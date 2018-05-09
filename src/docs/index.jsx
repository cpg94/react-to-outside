import React from "react";
import { render } from "react-dom";
import Outside from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <Outside 
        onClickOutside={() => alert('You Clicked Outside.')} 
        onClickInside={() => alert('You Clicked Inside.')}
        >
          <div id="container">
            Click Me or Outside of Me :-)
          </div>
      </Outside>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
