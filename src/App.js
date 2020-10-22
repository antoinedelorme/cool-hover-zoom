import React from "react";
const base_url = "http://1246419539.rsc.cdn77.org/compressed_images/";

const url = base_url + "img1.png";
const url2 = base_url + "img2.png";
const url3 = base_url + "img3.png";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <img src={url} alt="" className="myImage" />
      </div>
      <div className="container">
        <img src={url2} alt="" className="myImage" />
      </div>
      <div className="container">
        <img src={url3} alt="" className="myImage" />
      </div>
    </div>
  );
};
export default App;
