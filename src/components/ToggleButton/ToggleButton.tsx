import useToggle from "../../hooks/useToggle";
import "./ToggleButton.scss";

type ToggleButtonProps = {
  initialOn?: boolean;
  onText?: string;
  offText?: string;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialOn = false,
  onText = "On",
  offText = "Off",
}) => {
  const { on, onToggle } = useToggle(initialOn);

  return (
    <>
      <div className="buttonsContainer">
        <button onClick={onToggle} className="toggleButton">
          {on ? onText : offText}
        </button>
      </div>
    </>
  );
};

export default ToggleButton;
