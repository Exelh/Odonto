import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  return (
    <button className="button-back" onClick={() => navigate(-1)}>
      VOLVER 🔙
    </button>
  );
};

export default Button;
