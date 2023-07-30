import classes from "./ResultsTable.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const ResultsTable = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          <th>% Change in Savings</th> {/* new column */}
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData, index, data) => {
          let percentChange = 0;

          if (index > 0) {
            const previousYearData = data[index - 1];
            const previousYearInvestedCapital =
              props.initialInvestment +
              previousYearData.yearlyContribution * previousYearData.year;
            const currentYearInvestedCapital =
              props.initialInvestment +
              yearData.yearlyContribution * yearData.year;

            percentChange =
              ((currentYearInvestedCapital - previousYearInvestedCapital) /
                previousYearInvestedCapital) *
              100;
          }

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearData.savingsEndOfYear -
                    props.initialInvestment -
                    yearData.yearlyContribution * yearData.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    yearData.yearlyContribution * yearData.year
                )}
              </td>
              <td>{percentChange.toFixed(2)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
