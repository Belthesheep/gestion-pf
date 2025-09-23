import "../index.css"
const Cuadrodeprecios = () => {

  const memberships = [
    { type: 'Una clase', trainer:'No', price: 3000 },
    { type: 'Tres clases en una semana', trainer:'No', price: 8000 },
    { type: 'Tres clases en una semana', trainer:'Si', price: 10000 },
    { type: 'Membresia mensual', trainer:'No', price: 20000 },
    { type: 'Membresia mensual', trainer:'Si', price: 25000 },
  ];

  return (
    <div className="frame">
      <h2>Membresias</h2>
      <table className="frame-table">
        <thead>
          <tr>
            <th>Tipo de Membresia</th>
            <th>Entrenador</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {memberships.map((membership, index) => (
            <tr key={index}>
              <td>{membership.type}</td>
              <td>{membership.trainer}</td>
              <td>${membership.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cuadrodeprecios;