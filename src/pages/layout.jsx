import { Outlet, useNavigate } from "react-router-dom";
import UserDrawer from "../components/navbar/Drawer";
import SignIn from "./SignIn";
import { getCookie } from "../hooks/useCookie";
import { AUTH_TOKEN } from "../utils/constants";
import { links } from "../utils/links";



function Layout({children}) {

  const cookie = getCookie(AUTH_TOKEN);

  const navigate = useNavigate();

if(!cookie){
  navigate(links.auth)
}

    return (
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-2">
            <UserDrawer />
          </div>
          <div className="col-10">
            <div className="d-flex flex-column ">
              <div className="d-flex justify-content-between p-2 border rounded my-2">
                <nav className="navbar bg-body-tertiary">
                  <div className="container-fluid">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </nav>
                <button
                  type="button"
                  className="btn btn-light"
                  id="liveToastBtn"
                >
                  <i className="bi bi-person-circle"></i>
                </button>
              </div>

            {children}
            </div>
          </div>
        </div>
      </div>
    );

}

export default Layout;
