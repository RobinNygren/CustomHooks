import { useState } from "react";

const useToggle = (initvalue: boolean) => {
  const [on, setOn] = useState(initvalue);

  const onToggle = () => {
    setOn(!on);
  };

  return { on, onToggle };
};

export default useToggle;
