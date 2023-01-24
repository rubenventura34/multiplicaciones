const OperationInput = () => {
  return (
    <div style={{ display: "flex", gap: ".5em", alignItems: "center" }}>
      <input type="number" width={60} />
      <span>X</span>
      <input type="number" width={60} />
      <button>Empezar</button>
    </div>
  );
};
export default OperationInput;
