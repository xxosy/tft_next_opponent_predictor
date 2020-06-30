import React, { useState } from "react";

function GateMovementView({ state }) {
  const {
    gateMovement: [gateMovement],
  } = {
    gateMovement: useState([]),
    ...(state || {}),
  };
  return <div></div>;
}

export default GateMovementView;
