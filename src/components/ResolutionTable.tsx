import { useMemo } from "react";
import "./ResolutionTable.css";

interface IResolutionTable {
  firstNum: number;
  secondNum: number;
}

const ResolutionTable: React.FC<IResolutionTable> = ({
  firstNum = 23,
  secondNum = 32,
}) => {
  const firstNumDigts = useMemo(() => {
    return firstNum.toString().length;
  }, [firstNum, secondNum]);
  const secondNumDigts = useMemo(() => {
    return secondNum.toString().length;
  }, [firstNum, secondNum]);

  const subresults = useMemo(() => {
    const multiplyResults: Number[] = [];
    secondNum
      .toString()
      .split("")
      .reverse()
      .forEach((secondNumItem) => {
        multiplyResults.push(Number.parseInt(secondNumItem) * firstNum);
      });
    return multiplyResults;
  }, [firstNum, secondNum]);

  const result = useMemo(() => {
    return firstNum * secondNum;
  }, [firstNum, secondNum]);
  return (
    <div className="resolution-table">
      <table border={1}>
        <tbody>
          <tr>
            {" "
              .repeat(7 - firstNumDigts)
              .split("")
              .map(() => (
                <td></td>
              ))}
            {firstNum
              .toString()
              .split("")
              .map((n, idx) => (
                <td key={"f" + idx} id={"f" + idx}>
                  {n}
                </td>
              ))}
          </tr>
          <tr style={{ borderBottom: "3px solid white" }}>
            {" "
              .repeat(6 - secondNumDigts)
              .split("")
              .map(() => (
                <td></td>
              ))}
            <td>X</td>
            {secondNum
              .toString()
              .split("")
              .map((n, idx) => (
                <td key={"s" + idx} id={"s" + idx}>
                  {n}
                </td>
              ))}
          </tr>
          {subresults.map((subresult, idx) => (
            <tr>
              {fillStart(subresult.toString(), 7 - idx, " ")
                .split("")
                .map((d) => (
                  <td>{d}</td>
                ))}
              {" "
                .repeat(idx)
                .split("")
                .map((x) => (
                  <td></td>
                ))}
            </tr>
          ))}
          <tr style={{ borderTop: "3px solid white" }}>
            {fillStart(result.toString(), 7, " ")
              .split("")
              .map((r) => (
                <td>{r}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
function fillStart(str: string, total: number, fillWith: string) {
  const totalWords = str.length;
  if (total > totalWords) {
    return fillWith.repeat(total - totalWords) + str;
  }
  return str;
}

export default ResolutionTable;
