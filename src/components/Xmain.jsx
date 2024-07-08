import React from "react";
import Link from "./Link";
function Xmain(params) {
  return (
    <div>
      <main className="wrapper">
        <div className="hero-div1 hero-div">
          <img className="x" src="src/image/x.jpg" alt="" />
        </div>
        <section className="hero-sec">
          <div className="hero-form">
            <h1 className="headline">Happening now</h1>
            <div className="hero-join-in">
              <h2 className="headline-below">Join Today.</h2>
              <Link ></Link>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Xmain;
