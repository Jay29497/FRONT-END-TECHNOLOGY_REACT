import { useState } from "react";
import "./App.css";

function App() {
  // const [state, stateHandler] = useState(InitialValue);

  const [result, setResult] = useState("");

  const handleClick = (e) => {
    /* alert(e.target.value);
       alert(typeof e.target.value); */
    setResult(result.concat(e.target.value));
  };

  const clear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <section>
      <div>
        <h1>CALCULATOR-PROJECT</h1>
        <input type="text" name="calc" id="calc" value={result}/>
        <table>
        <tr>
            <td colSpan={2}>
              <button type="button" onClick={clear}>
                AC
              </button>
            </td>
            <td>
              <button type="button" onClick={handleDelete}>
                DEL
              </button>
            </td>
            <td>
              <button type="button" value={'/'} onClick={handleClick}>
                &divide;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" value={'7'} onClick={handleClick}>7</button>
            </td>
            <td>
              <button type="button" value={'8'} onClick={handleClick}>8</button>
            </td>
            <td>
              <button type="button"value={'9'} onClick={handleClick}>9</button>
            </td>
            <td>
              <button type="button" value={'*'} onClick={handleClick}>
                &times;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" value={'4'} onClick={handleClick}>4</button>
            </td>
            <td>
              <button type="button" value={'5'} onClick={handleClick}>5</button>
            </td>
            <td>
              <button type="button" value={'6'} onClick={handleClick}>6</button>
            </td>
            <td>
              <button type="button" value={'-'} onClick={handleClick}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" value={'1'} onClick={handleClick}>1</button>
            </td>
            <td>
              <button type="button" value={'2'} onClick={handleClick}>2</button>
            </td>
            <td>
              <button type="button" value={'3'} onClick={handleClick}>3</button>
            </td>
            <td>
              <button type="button" value={'+'} onClick={handleClick}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" value={'0'} onClick={handleClick}>0</button>
            </td>
            <td>
              <button type="button" value={'.'} onClick={handleClick}>.</button>
            </td>
            <td colSpan={2}>
              <button type="button" onClick={calculate}>
                =
              </button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default App;
