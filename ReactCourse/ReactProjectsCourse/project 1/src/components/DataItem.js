import React from "react";

const DataItem = ({ yearItem, investment }) => {

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{yearItem.year}</td>
      <td>{formatter.format(yearItem.savingsEndOfYear)}</td>
      <td>{formatter.format(yearItem.yearlyInterest)}</td>
      <td>
        {formatter.format(
          yearItem.savingsEndOfYear -
            investment -
            yearItem.yearlyContribution * yearItem.year
        )}
      </td>
      <td>{formatter.format(
            investment +
            yearItem.yearlyContribution * yearItem.year
        )}</td>
    </tr>
  );
};

export default DataItem;
