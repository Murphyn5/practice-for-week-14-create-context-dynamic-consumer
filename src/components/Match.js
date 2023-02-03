import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);

  if (match === false) {
    return (
      <button
        onClick={() => {
          setMatch(!match);
        }}
      >
        Click here to reveal your sign's match!
      </button>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            setMatch(!match);
          }}
        >
          Click here to reveal your sign's match!
        </button>
        <div>{sign.match}</div>
      </>
    );
  }
};

export default Match;
