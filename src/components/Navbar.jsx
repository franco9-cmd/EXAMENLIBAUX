import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-100 sticky-top z-3 bg-white border-bottom shadow-sm">
        <div className="container-xl d-flex align-items-center justify-content-between py-3 px-3 px-md-4">
          <div className="d-flex align-items-center gap-2">
            <i className="fa-solid fa-car-side text-primary-hw fs-4"></i>
            <span className="fs-5 fw-bold text-primary-hw">Mis Hot Wheels</span>
          </div>

          <nav className="d-none d-md-flex align-items-center gap-2">
            <NavLink
              to="/"
              end
              className={({isActive}) => `text-decoration-none fw-bold px-3 py-2 rounded-3 ${isActive ? 'text-primary-hw bg-light' : 'text-muted'}`}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/coleccion"
              className={({isActive}) => `text-decoration-none fw-bold px-3 py-2 rounded-3 ${isActive ? 'text-primary-hw bg-light' : 'text-muted'}`}
            >
              Mi Colección
            </NavLink>
            <NavLink
              to="/categorias"
              className={({isActive}) => `text-decoration-none fw-bold px-3 py-2 rounded-3 ${isActive ? 'text-primary-hw bg-light' : 'text-muted'}`}
            >
              Categorías
            </NavLink>
          </nav>

          <div className="d-flex align-items-center gap-2">
            <button
              onClick={() => navigate('/coleccion')}
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center border-0"
              style={{width: '40px', height: '40px'}}
              title="Ir a Mi Colección"
            >
              <i className="fa-solid fa-magnifying-glass text-muted"></i>
            </button>
            <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center border-0 d-none d-md-flex" style={{width: '40px', height: '40px'}}>
              <i className="fa-regular fa-user text-muted"></i>
            </button>
          </div>
        </div>
      </header>

      <nav className="d-md-none fixed-bottom w-100 d-flex justify-content-around align-items-center bg-white border-top shadow" style={{height: '65px', zIndex: 1050}}>
        <NavLink
          to="/"
          end
          className={({isActive}) => `d-flex flex-column align-items-center justify-content-center text-decoration-none rounded-3 py-1 px-3 ${isActive ? 'text-primary-hw' : 'text-muted'}`}
        >
          <i className="fa-solid fa-house fs-5 mb-1"></i>
          <span style={{fontSize: '10px'}} className="fw-bold">Inicio</span>
        </NavLink>

        <NavLink
          to="/coleccion"
          className={({isActive}) => `d-flex flex-column align-items-center justify-content-center text-decoration-none rounded-3 py-1 px-3 ${isActive ? 'text-primary-hw' : 'text-muted'}`}
        >
          <i className="fa-solid fa-table-cells-large fs-5 mb-1"></i>
          <span style={{fontSize: '10px'}} className="fw-bold">Colección</span>
        </NavLink>

        <NavLink
          to="/categorias"
          className={({isActive}) => `d-flex flex-column align-items-center justify-content-center text-decoration-none rounded-3 py-1 px-3 ${isActive ? 'text-primary-hw' : 'text-muted'}`}
        >
          <i className="fa-solid fa-layer-group fs-5 mb-1"></i>
          <span style={{fontSize: '10px'}} className="fw-bold">Categorías</span>
        </NavLink>

        <NavLink
          to="/coleccion"
          className={({isActive}) => `d-flex flex-column align-items-center justify-content-center text-decoration-none rounded-3 py-1 px-3 ${isActive ? 'text-primary-hw' : 'text-muted'}`}
        >
          <i className="fa-solid fa-magnifying-glass fs-5 mb-1"></i>
          <span style={{fontSize: '10px'}} className="fw-bold">Buscar</span>
        </NavLink>

        <a href="#" className="d-flex flex-column align-items-center justify-content-center text-muted text-decoration-none py-1 px-3">
          <i className="fa-regular fa-user fs-5 mb-1"></i>
          <span style={{fontSize: '10px'}} className="fw-bold">Perfil</span>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
