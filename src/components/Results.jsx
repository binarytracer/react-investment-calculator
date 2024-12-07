import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results(props) {
  const { input } = props;

  const resultData = calculateInvestmentResults(input);
  const [firstResult] = resultData;
  const initialInvestment =
    firstResult.valueEndOfYear -
    firstResult.interest -
    firstResult.annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invement Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((rowData, index) => {
          const totalInterest =
            rowData.valueEndOfYear -
            rowData.annualInvestment * rowData.year -
            initialInvestment;

          const totalAmountInvested = rowData.valueEndOfYear - totalInterest;

          return (
            <tr key={index}>
              <td> {rowData.year} </td>
              <td> {formatter.format(rowData.valueEndOfYear)} </td>
              <td> {formatter.format(rowData.interest)} </td>
              <td> {formatter.format(totalInterest)} </td>
              <td> {formatter.format(totalAmountInvested)} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
