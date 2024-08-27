import { Link } from "react-router-dom";

function MainDashboard() {
  return (
    <div className="d-flex flex-column p-3 bg-body-tertiary">
      <div>
        <h3>My Drive</h3>
      </div>

      <div className="d-flex flex-column my-1">
        <div className="d-flex justify-content-between align-items-center">
          <span className="lead">
            <strong>Documents</strong>
          </span>

          <Link to={""}>
            <span className="link-opacity-25-hover">View all</span>
          </Link>
        </div>

        <div className="d-flex flex-row my-2">

                <div className="d-flex flex-column p-2 shadow  rounded">

                        <img alt="..." />

                        <span>file.word</span>

                </div>

        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
