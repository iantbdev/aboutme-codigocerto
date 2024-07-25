import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Preloader = ({ loading }) => {
  return (
    <div>
      {loading && <HashLoader size={50} color={"#e53939"} loading={loading} />}
    </div>
  );
};

export default Preloader;
