import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="col bg-light p-4">
      <div className="row">
            {/* Card 1 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">This is the first card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">This is the second card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">This is the third card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 4</h5>
                  <p className="card-text">This is the fourth card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
