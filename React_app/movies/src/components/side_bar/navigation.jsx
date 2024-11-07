import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="container-fluid">
      {/* Toggle Button for smaller screens */}
      <button
        className="btn btn-primary d-md-none my-2"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <div className="row">
        {/* Sidebar - Hidden on tablet and mobile by default */}
        <div className={`col-md-3 col-lg-2 bg-dark text-white vh-100 d-flex flex-column 
                     ${isSidebarOpen ? "d-block" : "d-none d-md-block"}`}>
          <ul className="nav flex-column py-4">
            <li className="nav-item">
              <a className="nav-link text-white" href="#dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#inventory">
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#orders">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#grn">
                GRN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#invoice">
                Invoice
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#settings">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#logout">
                Log out
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col bg-light p-4">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">This is the first card's content.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">
                    This is the second card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">This is the third card's content.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 4</h5>
                  <p className="card-text">
                    
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            {/* <div className="col-md-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">This is the third card's content.</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="scope bg-dark-subtle">PID</th>
                      <th className="scope bg-dark-subtle">Name</th>
                      <th className="scope bg-dark-subtle">Color</th>
                      <th className="scope bg-dark-subtle">QTY/Unit</th>
                      <th className="scope bg-dark-subtle">Status</th>
                      <th className="scope bg-dark-subtle">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="scope">001</th>
                      <th className="scope">Cotton Fabric</th>
                      <th className="scope">#121212</th>
                      <th className="scope">500 Rolls</th>
                      <th className="scope bg-danger">Out of Stock</th>
                      <th className="scope">Location-1</th>
                    </tr>
                    <tr>
                      <th className="scope">001</th>
                      <th className="scope">Cotton Fabric</th>
                      <th className="scope">#121212</th>
                      <th className="scope">500 Rolls</th>
                      <th className="scope bg-danger">Out of Stock</th>
                      <th className="scope">Location-1</th>
                    </tr>
                    <tr>
                      <th className="scope">001</th>
                      <th className="scope">Cotton Fabric</th>
                      <th className="scope">#121212</th>
                      <th className="scope">500 Rolls</th>
                      <th className="scope bg-danger">Out of Stock</th>
                      <th className="scope">Location-1</th>
                    </tr>
                    <tr>
                      <th className="scope">001</th>
                      <th className="scope">Cotton Fabric</th>
                      <th className="scope">#121212</th>
                      <th className="scope">500 Rolls</th>
                      <th className="scope bg-danger">Out of Stock</th>
                      <th className="scope">Location-1</th>
                    </tr>
                    <tr>
                      <th className="scope">001</th>
                      <th className="scope">Cotton Fabric</th>
                      <th className="scope">#121212</th>
                      <th className="scope">500 Rolls</th>
                      <th className="scope bg-danger">Out of Stock</th>
                      <th className="scope">Location-1</th>
                    </tr>
                    <tr>
                      <th className="scope">001</th>
                      <th className="scope">Cotton Fabric</th>
                      <th className="scope">#121212</th>
                      <th className="scope">500 Rolls</th>
                      <th className="scope bg-danger">Out of Stock</th>
                      <th className="scope">Location-1</th>
                    </tr>
                    <tr>
                      <th className="scope">001</th>
                      <th className="scope">Cotton Fabric</th>
                      <th className="scope">#121212</th>
                      <th className="scope">500 Rolls</th>
                      <th className="scope bg-danger">Out of Stock</th>
                      <th className="scope">Location-1</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card w-50">
                  <div className="card-body">
                    <div className="card-title">Recent Avtivities</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
