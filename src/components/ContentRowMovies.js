import PropTypes from "prop-types";
function ContentRowMovies(props) {
  return (
    <div className="row">
      {/* Content Row Movie */}
      {props.items.map((item, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div className={`card border-left-${item.color} shadow h-100 py-2`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    {item.titulo}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {item.cifra}
                  </div>
                </div>
                <div className="col-auto">
                  <i className={`fas fa-${item.icono} fa-2x text-gray-300`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ContentRowMovies.propTypes = {
  titulo: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary","success","warning"]).isRequired,
  cifra: PropTypes.number.isRequired,
  icono: PropTypes.string.isRequired,
};

ContentRowMovies.defaultProps = {
  titulo: 'Ingresa un titulo',
  color: 'Ingresa una de las siguientes: primary,success,warning',
  cifra: 'Ingresa una cifra',
  icono: 'Ingresa un icono',
}

export default ContentRowMovies;
