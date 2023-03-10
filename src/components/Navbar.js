import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext.js";

const Navbar = () => {
  const { setCurrentSign } = useContext(HoroscopeContext);

  const horoscopes = Object.keys(horoscopesObj);

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span
          key={sign}
          onClick={() => {
            setCurrentSign(sign);
          }}
        >
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
