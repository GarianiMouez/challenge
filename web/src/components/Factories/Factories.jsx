import React from "react";
import "./Factories.css";

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

const Factories = () => {
  return (
    <table className="table table-hover">
      <caption>List of Factories</caption>
      <thead className="text-bg-primary">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Factories;
