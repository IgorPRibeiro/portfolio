import React, { useState } from "react";
interface ISwitchToggle {
  onSwitch: (toggled: boolean) => void;
}

const SwitchToggle = ({ onSwitch }: ISwitchToggle) => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
    onSwitch(isToggled);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchToggle;
