import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">PenguinNews</span>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <Link
                to="/user"
                className="nav-link dropdown-toggle"
                role="button"
              >
                <img
                  className="rounded-circle"
                  width="40px"
                  height="40px"
                  alt="avatar"
                  src="https://nftnow.com/wp-content/uploads/2022/08/pudgy-penguin-6873.png"
                />
              </Link>
              <div className="dropdown-menu"></div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
