import { useState } from 'react';

function MiColeccion({ vehicles, onToggleObtenido, onToggleFavorito }) {
  const [search, setSearch] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  const vehiculosFiltrados = vehicles
    .filter(v => v.nombre.toLowerCase().includes(search.toLowerCase()))
    .filter(v => {
      if (filtro === 'Obtenidos') return v.obtenido === true;
      if (filtro === 'Faltantes') return v.obtenido === false;
      if (filtro === 'Favoritos') return v.favorito === true;
      return true;
    });

  return (
    <div className="py-4">

      <div className="d-flex flex-column gap-2 mb-4">
        <h2 className="fw-bold mb-0">Mi Colección</h2>
        <div style={{height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px'}}></div>
      </div>

      <div className="bg-white p-4 rounded-4 shadow-sm border mb-4" style={{borderColor: '#e5e7eb'}}>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="fa-solid fa-magnifying-glass text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control bg-light border-start-0 ps-0"
                placeholder="Buscar por nombre..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex gap-2 flex-wrap">
            {['Todos', 'Obtenidos', 'Faltantes', 'Favoritos'].map(f => (
              <button
                key={f}
                className="btn fw-bold px-3 py-2 rounded-3 flex-grow-1 flex-md-grow-0"
                style={
                  filtro === f
                    ? { backgroundColor: 'var(--primary-color)', color: 'white', border: 'none' }
                    : { backgroundColor: '#f8f9fa', color: 'var(--text-muted)', border: '1px solid var(--secondary-container)' }
                }
                onClick={() => setFiltro(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-muted small mb-3">
        <i className="fa-solid fa-filter me-1"></i>
        Mostrando <strong>{vehiculosFiltrados.length}</strong> vehículos
      </p>

      <div className="row g-4">
        {vehiculosFiltrados.map(v => (
          <div key={v.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div
              className="card h-100 rounded-4 border shadow-level-1 card-hover overflow-hidden"
              style={{
                opacity: v.obtenido ? 1 : 0.75,
                borderColor: '#e5e7eb'
              }}
            >
              <div className="position-relative" style={{height: '200px', backgroundColor: '#e9ecef'}}>
                <img
                  src={v.imagen}
                  className="w-100 h-100 object-fit-cover"
                  alt={v.nombre}
                />
                {!v.obtenido && (
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{backgroundColor: 'rgba(0,0,0,0.25)'}}
                  >
                    <span className="badge bg-dark bg-opacity-75 fs-6 px-3 py-2">
                      <i className="fa-solid fa-lock me-1"></i> Por obtener
                    </span>
                  </div>
                )}
                <button
                  className="btn btn-light rounded-circle position-absolute shadow-sm d-flex align-items-center justify-content-center p-0"
                  style={{top: '10px', right: '10px', width: '38px', height: '38px', border: 'none'}}
                  onClick={() => onToggleFavorito(v.id)}
                  title="Favorito"
                >
                  <i
                    className={`fa-${v.favorito ? 'solid' : 'regular'} fa-star`}
                    style={{color: v.favorito ? '#f59e0b' : '#9ca3af', fontSize: '18px'}}
                  ></i>
                </button>
              </div>

              <div className="card-body p-3 pb-2">
                <h5 className="card-title fw-bold mb-1" style={{fontSize: '1rem'}}>{v.nombre}</h5>
                <p className="text-muted small mb-3 d-flex align-items-center gap-1">
                  <i className="fa-solid fa-tag" style={{fontSize: '12px'}}></i>
                  {v.categoria}
                  <span className="mx-1">·</span>
                  <i className="fa-regular fa-calendar" style={{fontSize: '12px'}}></i>
                  {v.anio}
                </p>

                <span className={`badge px-3 py-2 rounded-pill fw-bold ${v.obtenido ? 'bg-success bg-opacity-10 text-success' : 'bg-secondary bg-opacity-10 text-secondary'}`}>
                  <i className={`fa-solid ${v.obtenido ? 'fa-circle-check' : 'fa-circle-xmark'} me-1`}></i>
                  {v.obtenido ? 'En Garaje' : 'Lista de Deseos'}
                </span>
              </div>

              <div className="p-3 pt-2 bg-white border-top" style={{borderColor: '#f3f4f6'}}>
                <button
                  className="btn fw-bold w-100 py-2 rounded-3"
                  style={
                    v.obtenido
                      ? { backgroundColor: '#f8f9fa', color: '#6c757d', border: '1px solid #e5e7eb' }
                      : { backgroundColor: 'var(--primary-color)', color: 'white', border: 'none' }
                  }
                  onClick={() => onToggleObtenido(v.id)}
                >
                  <i className={`fa-solid ${v.obtenido ? 'fa-minus-circle' : 'fa-plus-circle'} me-2`}></i>
                  {v.obtenido ? 'Quitar del Garaje' : 'Añadir al Garaje'}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {vehiculosFiltrados.length === 0 && (
        <div className="text-center py-5 my-5">
          <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm mb-3" style={{width: '80px', height: '80px'}}>
            <i className="fa-solid fa-magnifying-glass fa-2x text-muted"></i>
          </div>
          <h4 className="fw-bold text-muted mt-3">Sin resultados</h4>
          <p className="text-muted">Intenta ajustando los filtros o tu búsqueda.</p>
        </div>
      )}

      <div className="d-md-none" style={{height: '30px'}}></div>

    </div>
  );
}

export default MiColeccion;
