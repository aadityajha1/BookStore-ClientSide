import React from "react";
import { CircularProgress } from "@material-ui/core";
const ActionLoading = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9dbdb",
        height: "100vh",
      }}
    >
      <CircularProgress
        style={{ marginTop: "20%", marginLeft: "50%" }}
        color="secondary"
      />
    </div>
  );
};

export default ActionLoading;
