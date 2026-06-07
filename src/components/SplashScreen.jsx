function SplashScreen() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 w-100 position-fixed top-0 start-0"
      style={{ backgroundColor: '#f8f9fa', zIndex: 9999 }}
    >
      <div className="text-center">
        <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>
          <i className="fa-solid fa-car-side me-3"></i>
          Mis Hot Wheels
        </h1>
        <p className="text-muted fs-5">Preparando el garaje...</p>
        <div
          className="spinner-border mt-3"
          style={{ color: 'var(--primary-color)', width: '2.5rem', height: '2.5rem' }}
          role="status"
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
