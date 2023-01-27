import React from "react";
import "./FactoriesManagement.css";

const data = {
  factories: [
    {
      name: "enicarthage",
      address: "charguia 2",
    },
    { name: "uzina", address: "marsa" },
    {
      name: "D-sap",
      address: "lac1",
    },
  ],
};

const FactoriesManagement = () => {
  return (
    <table className="table table-hover">
      <thead className="text-bg-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Activites</th>
        </tr>
      </thead>
      <tbody>
        {data.factories.map((factorie, index) => (
          <tr key={index}>
            <td scope="row" WIDTH="500">
              {factorie.name}
            </td>
            <td scope="row" WIDTH="500">
              {factorie.address}
            </td>
            <td>
              <button id="delete" type="button" className="btn btn-outline-danger">
                Delete factory
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <input
              type="text"
              className="form-control"
              placeholder="Factory's name"
              aria-label="Factory's name"
              aria-describedby="addon-wrapping"
            />
          </td>

          <td>
            <input
              type="text"
              className="form-control"
              placeholder="Factory's address"
              aria-label="Factory's address"
              aria-describedby="addon-wrapping"
            />
          </td>
          <td>
            <button id="add" type="button" className="btn btn-outline-success ">
              Add factory
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FactoriesManagement;
