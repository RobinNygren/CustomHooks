import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import "./DebounceColorBox.scss";

const DebounceColorBox: React.FC = () => {
  const [color, setColor] = useState("white");
  const debouncedColor = useDebounce(color, 500);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="debounceContainer">
      <div
        className="color-box"
        style={{ backgroundColor: debouncedColor }}
      ></div>
      <input
        type="text"
        value={color}
        onChange={handleColorChange}
        placeholder="Enter color name or HEX code"
        className="color-input"
      />
      <p className="textColor" style={{ color: debouncedColor }}>
        Current Color: {debouncedColor}
      </p>
    </div>
  );
};

export default DebounceColorBox;
