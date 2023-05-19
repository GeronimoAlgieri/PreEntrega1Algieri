import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "15px", display: "flex", gap: "15px" }}>
      <Button
        style={{ color: "green" }}
        startIcon={<AddCircleIcon />}
        onClick={sumar}
        size="80"
      >
        {" "}
      </Button>
      <h2>{counter}</h2>
      <Button
        style={{ color: "red", width: "20px" }}
        startIcon={<RemoveCircleIcon />}
        onClick={restar}
        size="80"
      ></Button>
      <Button variant="contained" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentation;
