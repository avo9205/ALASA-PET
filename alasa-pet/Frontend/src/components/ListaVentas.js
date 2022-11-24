import "../styles/ListaVentas.css";
import Base from "../components/Base";

const ListaVentas = () => {
  return (
    <>
      <Base />
      <div className="container-tabla">
        <table className="table">
          <thead>
            <tr className="main-row">
              <th className="main-row__item">#</th>
              <th className="main-row__item">Fecha</th>
              <th className="main-row__item">Id_Venta</th>
              <th className="main-row__item">Valor</th>
            </tr>
          </thead>
          <tbody >
            <tr className="body-row">
              <th>01</th>
              <td className="body-row__item">11/21/2022</td>
              <td className="body-row__item">001</td>
              <td className="body-row__item">30000</td>
            </tr>
            <tr className="body-row">
              <th>02</th>
              <td className="body-row__item">11/21/2022</td>
              <td className="body-row__item">001</td>
              <td className="body-row__item">40000</td>
            </tr>
            <tr className="body-row">
              <th>03</th>
              <td className="body-row__item">11/21/2022</td>
              <td className="body-row__item">001</td>
              <td className="body-row__item">50000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListaVentas
