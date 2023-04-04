import React from "react";
import { useState } from "react";

function HideText (props) {

  const maxChars = 200;

  const [hidden, setHidden] = useState(true);

  if (props.text.length <= maxChars) {
    return (
      <span>{props.text}</span>
    );
  }

 return (
    <span>
      {hidden ? `${props.text.substr(0, maxChars).trim()} ...` : props.text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> show more</a>
      ) : (
        <a onClick={() => setHidden(true)}> show less</a>
      )}
    </span>
  );

}

export default HideText;