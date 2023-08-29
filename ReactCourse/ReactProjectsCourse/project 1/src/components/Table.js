import React from "react";
import styles from "./Table.module.css";
import DataItem from "./DataItem";

const Table = ({ yearArr, initialInvestment }) => {
  if (yearArr.length === 0) {
    return <h2>Found no expenses.</h2>;
  } else {
    return (
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearArr.map((yearData) => {
            return (
              <DataItem
                key={yearData.year}
                yearItem={yearData}
                investment={initialInvestment}
              ></DataItem>
            );
          })}
        </tbody>
      </table>
    );
  }
};

export default Table;
