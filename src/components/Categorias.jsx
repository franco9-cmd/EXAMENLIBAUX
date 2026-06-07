import { useState } from 'react';

function Categorias({ vehicles }) {
  const categorias = [...new Set(vehicles.map(v => v.categoria))];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0] || '');

  const vehiculosCategoria = vehicles.filter(
    v => v.categoria === categoriaSeleccionada
  );

  const obtenidos = vehiculosCategoria.filter(v => v.obtenido).length;
  const faltantes = vehiculosCategoria.length - obtenidos;
  const porcentaje = vehiculosCategoria.length > 0
    ? Math.round((obtenidos / vehiculosCategoria.length) * 100)
    : 0;

  const iconoCategoria = {
    'Muscle Cars': 'fa-bolt',
    'Deportivos': 'fa-gauge-high',
    'Clásicos': 'fa-star',
    'Todoterreno': 'fa-mountain',
    'Competición': 'fa-flag-checkered',
  };

  return (
    <div className="py-4">

      <div className="d-flex flex-column gap-2 mb-4">
        <h2 className="fw-bold mb-0">Explorar Series</h2>
        <div style={{height: '4px', width: '60px', backgroundColor: 'var(--primary-color)', borderRadius: '2px'}}></div>
      </div>

      <div className="row g-4">

        <div className="col-12 col-lg-3">
          <div className="bg-white p-3 rounded-4 shadow-sm border" style={{borderColor: '#e5e7eb'}}>
            <h5 className="fw-bold mb-3 px-2">Categorías</h5>
            <div className="d-flex flex-row flex-lg-column gap-2 overflow-auto pb-2 pb-lg-0">
              {categorias.map(cat => (
                <button
                  key={cat}
                  className="btn text-start px-3 py-2 rounded-3 border-0 d-flex justify-content-between align-items-center flex-shrink-0"
                  style={
                    categoriaSeleccionada === cat
                      ? { backgroundColor: '#e6f4fc', color: '#00628c', fontWeight: 'bold' }
                      : { backgroundColor: 'transparent', color: 'var(--text-muted)' }
                  }
                  onClick={() => setCategoriaSeleccionada(cat)}
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className={`fa-solid ${iconoCategoria[cat] || 'fa-tag'}`}></i>
                    {cat}
                  </div>
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: categoriaSeleccionada === cat ? '#00628c' : '#e5e7eb',
                      color: categoriaSeleccionada === cat ? 'white' : 'var(--text-muted)'
                    }}
                  >
                    {vehicles.filter(v => v.categoria === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-9">

          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-4 position-relative overflow-hidden" style={{borderColor: '#e5e7eb'}}>
            <div className="position-absolute top-0 end-0 p-4 d-none d-md-block" style={{opacity: 0.06}}>
              <i className={`fa-solid ${iconoCategoria[categoriaSeleccionada] || 'fa-tag'}`} style={{fontSize: '120px'}}></i>
            </div>

            <h3 className="display-6 fw-bold mb-4 position-relative" style={{zIndex: 1}}>
              <i className={`fa-solid ${iconoCategoria[categoriaSeleccionada] || 'fa-tag'} me-2 text-primary-hw`}></i>
              {categoriaSeleccionada}
            </h3>

            <div className="d-flex flex-wrap gap-4 mb-4 position-relative" style={{zIndex: 1}}>
              <div className="d-flex flex-column">
                <span className="text-muted text-uppercase fw-bold mb-1" style={{fontSize: '0.7rem', letterSpacing: '1px'}}>Completado</span>
                <span className="fs-2 fw-bold text-success">{porcentaje}%</span>
              </div>
              <div style={{width: '1px', backgroundColor: '#e5e7eb'}}></div>
              <div className="d-flex flex-column">
                <span className="text-muted text-uppercase fw-bold mb-1" style={{fontSize: '0.7rem', letterSpacing: '1px'}}>Obtenidos</span>
                <span className="fs-3 fw-bold">{obtenidos}</span>
              </div>
              <div style={{width: '1px', backgroundColor: '#e5e7eb'}}></div>
              <div className="d-flex flex-column">
                <span className="text-muted text-uppercase fw-bold mb-1" style={{fontSize: '0.7rem', letterSpacing: '1px'}}>Faltantes</span>
                <span className="fs-3 fw-bold text-danger">{faltantes}</span>
              </div>
            </div>

            <div className="progress rounded-pill position-relative" style={{height: '8px', backgroundColor: '#e5e7eb', zIndex: 1}}>
              <div
                className="progress-bar rounded-pill"
                role="progressbar"
                style={{width: `${porcentaje}%`, backgroundColor: 'var(--primary-color)'}}
              ></div>
            </div>
          </div>

          <div className="row g-3">
            {vehiculosCategoria.map(v => (
              <div key={v.id} className="col-6 col-md-4">
                <div className="h-100" style={{opacity: v.obtenido ? 1 : 0.6}}>
                  <div className="position-relative rounded-4 overflow-hidden shadow-sm mb-2" style={{height: '140px', backgroundColor: '#e9ecef'}}>
                    <img
                      src={v.imagen}
                      className="w-100 h-100 object-fit-cover"
                      alt={v.nombre}
                    />
                  </div>
                  <div className="px-1">
                    <h6 className="fw-bold mb-1 text-truncate" title={v.nombre}>{v.nombre}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">{v.anio}</span>
                      <i
                        className={`fa-solid ${v.obtenido ? 'fa-circle-check text-success' : 'fa-circle text-secondary'}`}
                        style={{fontSize: '16px'}}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="d-md-none" style={{height: '30px'}}></div>

    </div>
  );
}

export default Categorias;
