import { useState } from "react";
import OperationInput from "./components/OperationInput";
import "./App.css";
import ResolutionTable from "./components/ResolutionTable";
import WrongAnswerMessage from "./components/WrongAnswerMessage";
import NextOperation from "./components/NextOperation";

function App() {
  return (
    <div className="App">
      <h1>Resolver Multiplicaciones</h1>

      <OperationInput />
      <WrongAnswerMessage />

      <NextOperation />

      <ResolutionTable firstNum={34} secondNum={123} />
    </div>
  );
}

export default App;
