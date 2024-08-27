import { Link } from "react-router-dom";
import { links } from "../../utils/links";

function UserDrawer() {
  const menu_items = [
    {
      path: links.dashboard,
      name: "Dashboard",
      icon: <i className="bi bi-house mx-1"></i>,
    },
    {
        path: links.files,
        name: "Files",
        icon: <i className="bi bi-files mx-1"></i>,
      },
  ];

  return (
    <div className="d-flex flex-column p-2 border rounded my-2">
      <div className="d-flex flex-column justify-content-center">
        <h2 style={{ textAlign: "center" }}>
          Cloud<strong>BOX</strong>
        </h2>
        <hr />
      </div>

      <div className="mt-2 mb-2 d-flex ">
        <button type="button" className="btn btn-outline-primary flex-grow-1">
          + Create New
        </button>
      </div>
      <div>
        <ul className="my-2">
          {menu_items.map((item, index) => (
            <li key={index} className="my-1">
              <Link to={item.path}>
                <div className="">
                  {item.icon} {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        <div className="d-flex flex-column">
          <div className="d-flex">
            <i className="bi bi-cloud"></i>
            <h4 className="mx-2">Storage</h4>
          </div>
          <div className="my-1" >
            <span className="text-body-secondary">17.1 / 20 GB Used</span>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{width: "0%"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDrawer;
