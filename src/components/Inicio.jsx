import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio({ vehicles }) {
  const navigate = useNavigate();

  const resumen = useMemo(() => {
    const total = vehicles.length;
    const obtenidos = vehicles.filter(v => v.obtenido).length;
    const faltantes = total - obtenidos;
    const porcentaje = total > 0 ? Math.round((obtenidos / total) * 100) : 0;
    return { total, obtenidos, faltantes, porcentaje };
  }, [vehicles]);

  return (
    <div className="py-4">

      <section className="mt-2 mb-5">
        <div className="hero-banner shadow">
          <img
            className="hero-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbSjGZaJhQuGQ4W4VmkssHjPvPa4xUguwEyKuYic68tuS-7Y6a56QxAmlTgaxSCu_cJ-Ka1xl3Q9kl8fg0WHB4YsWL8EanM9MTd96K8gWrbpJObp4cXBmAJVgaayZXaNbsxuYArpam1Rl--RHw7a1QWf7xSGENv0BbX3RtHKM0o2UmUnkwtHiFEM11vME70PHm9eBF8sUydC2IPOnkGc-2denNPewzjcgce1xqjmYuWljjn5kDJisJCNEbJPxf5hlo0YdCuTlDn3o"
            alt="Hero Hot Wheels"
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="display-5 fw-bold mb-3">Tu Garaje Digital de Hot Wheels</h1>
            <p className="fs-5 mb-4" style={{opacity: 0.85}}>
              Organiza, rastrea y expande tu colección legendaria. Cada auto tiene una historia, mantén la tuya al día.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/coleccion')}
                className="btn btn-lg bg-primary-hw px-4 fw-bold text-uppercase shadow-sm"
                style={{fontSize: '0.85rem', letterSpacing: '1px'}}
              >
                <i className="fa-solid fa-table-cells-large me-2"></i>
                Ver Mi Colección
              </button>
              <button
                onClick={() => navigate('/coleccion')}
                className="btn btn-lg btn-outline-light px-4 fw-bold text-uppercase"
                style={{fontSize: '0.85rem', letterSpacing: '1px'}}
              >
                <i className="fa-solid fa-plus me-2"></i>
                Añadir Nuevo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="d-flex flex-column gap-2 mb-4">
          <h2 className="fw-bold mb-0">Resumen de Colección</h2>
          <div style={{height: '4px', width: '80px', backgroundColor: 'var(--primary-color)', borderRadius: '2px'}}></div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="bg-white p-4 rounded-4 border shadow-level-1 card-hover h-100" style={{borderColor: '#e5e7eb'}}>
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="p-2 rounded-3 bg-light">
                  <i className="fa-solid fa-car-side fa-lg text-primary-hw"></i>
                </div>
                <span className="badge bg-light text-muted fw-normal small">Meta: 500</span>
              </div>
              <p className="text-muted text-uppercase fw-bold mb-1" style={{fontSize: '0.75rem', letterSpacing: '1px'}}>Total de vehículos</p>
              <h3 className="display-5 fw-bold mb-4">{resumen.total}</h3>
              <div className="progress w-100 rounded-pill" style={{height: '8px', backgroundColor: 'var(--secondary-container)'}}>
                <div className="progress-bar rounded-pill" style={{width: `${resumen.porcentaje}%`, backgroundColor: 'var(--primary-color)'}}></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-white p-4 rounded-4 border shadow-level-1 card-hover h-100" style={{borderColor: '#e5e7eb', borderLeft: '4px solid #00628c'}}>
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="p-2 rounded-3" style={{backgroundColor: '#e6f4fc'}}>
                  <i className="fa-solid fa-circle-check fa-lg" style={{color: '#00628c'}}></i>
                </div>
                <span className="fw-bold small" style={{color: '#00628c'}}>{resumen.porcentaje}% Logrado</span>
              </div>
              <p className="text-muted text-uppercase fw-bold mb-1" style={{fontSize: '0.75rem', letterSpacing: '1px'}}>Obtenidos</p>
              <h3 className="display-5 fw-bold mb-3">{resumen.obtenidos}</h3>
              <p className="text-muted small mb-0"><i className="fa-solid fa-arrow-trend-up me-1 text-success"></i> +3 este mes</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-white p-4 rounded-4 border shadow-level-1 card-hover h-100" style={{borderColor: '#e5e7eb', borderLeft: '4px solid #ba1a1a'}}>
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="p-2 rounded-3" style={{backgroundColor: '#fceced'}}>
                  <i className="fa-solid fa-bookmark fa-lg" style={{color: '#ba1a1a'}}></i>
                </div>
                <span className="fw-bold small" style={{color: '#ba1a1a'}}>Lista de Deseos</span>
              </div>
              <p className="text-muted text-uppercase fw-bold mb-1" style={{fontSize: '0.75rem', letterSpacing: '1px'}}>Faltantes</p>
              <h3 className="display-5 fw-bold mb-3">{resumen.faltantes}</h3>
              <p className="text-muted small mb-0"><i className="fa-solid fa-flag-checkered me-1"></i> Próximo: Treasure Hunt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="fw-bold mb-1">Categorías Destacadas</h2>
            <p className="text-muted mb-0">Explora tu colección por series.</p>
          </div>
          <button
            onClick={() => navigate('/categorias')}
            className="btn btn-link text-primary-hw fw-bold text-decoration-none d-flex align-items-center gap-1 p-0"
          >
            Ver todas <i className="fa-solid fa-arrow-right ms-1"></i>
          </button>
        </div>

        <div className="row g-3">
          {[
            { nombre: 'Muscle Cars', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoz-ywehQQdZghbSK8SFEFzSLBm0767DJ3q8g5ct-boFnqU1v1TaTlxnvsI4Tsm0byqOMWkcqlWzNA6d8f3cO2jlc1RZjf2yXD_hEWUJR8KqvDRgqeBu3ITPXiF7wNmJIYG8EXKc5hQZai8GyFc1lcYiIZxRRDbrsRHkk4pDzp3AuNHzJvvZI_-F1nh_x-mKPDnS7hKxmWMRQ87WLMDar84hTcIqJ51K6wxr4rVu1WPtjucpKX2oJxXrf0sEI_Wx8r6HQqqlctwx8' },
            { nombre: 'Todoterreno', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGQFyaMDCBLT4diLv2ZzFQ_HH792-hwten0S4xCN9kVh6liOmSuBaLEKJnYtrl_0QOsC_NS_QUxoWAyP1Kv0aAj5T1MaEVuYyRZabSBmw5vVOGtxbUJUmKKW26J0fhmejscxoxwToZVTmsrXIqUL39quPxoU6ovyaaiEEEeNmtdDMow1wDUDeQJ_43lGrShlg5qIgtg6ligShYe_b2AwxuwjrqCLFYb9DSGnnmqgoceY332zOrnMaau6nFWnevrOK7gLGCThoMhY4' },
            { nombre: 'Deportivos', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeVLyWXcEvc9TDsXB1nbCIxOj9jpjWnjNJlPGhjKlylH17YZZAVlmhnRkHcN4XT2ALbGj7GuLyI0ZdUA6KT7LfFis1ciD0JEbDxx1acMge1HKURa-yg5tSlq8OB5YgDgVrhAuIhqAmqgs9imWTr54oSwPgMSUJfSu1s7dABzzjLR3FHGfAi3tO4tiH5FiZ5ctRrltATnWZIjqoprlC_p5HQRp9qEzju4asWdV1HCPThRBNglfJH9YJJSjRnK0QTcyEIbw_HrmBnlY' },
            { nombre: 'Competición', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_EgzxwP4dVd_4dWVf-y20NPyKeD5QoonRfOQ-6XAD-B1kBSuAXpVDwDMOTIvVOMj2BHCHLhnKLts3lWVp3szHZrZVGQIIKHZTp0UYdDxUO-QuRdripWQ0VcKqJIchXzoMB-FM8bHepCmbmo7_2l0BORvuw3uiqAV-OlChvNe4aNQ37O3C_97a3iTI5ZrPhibBtcoKWEkEcxoeKCExQwEssRUXsSXjiBLD061uoaTUX-fecqJcgeMYcQCaFPErasGEYwC2KzOAofU' },
          ].map(cat => (
            <div key={cat.nombre} className="col-6 col-md-3">
              <div
                className="position-relative rounded-4 overflow-hidden shadow-sm"
                style={{height: '160px', cursor: 'pointer'}}
                onClick={() => navigate('/categorias')}
              >
                <img
                  src={cat.img}
                  className="w-100 h-100 object-fit-cover"
                  alt={cat.nombre}
                  style={{transition: 'transform 0.4s ease'}}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
                  <span className="text-white fw-bold text-uppercase" style={{letterSpacing: '2px', fontSize: '0.85rem'}}>{cat.nombre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button
        className="d-md-none btn bg-primary-hw rounded-circle shadow-lg d-flex align-items-center justify-content-center position-fixed"
        style={{width: '58px', height: '58px', bottom: '85px', right: '20px', zIndex: 1040}}
      >
        <i className="fa-solid fa-plus fa-lg text-white"></i>
      </button>

    </div>
  );
}

export default Inicio;
