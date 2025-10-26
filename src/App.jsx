import { useState } from "react";
import MasterComponent from "./components/MasterComponent";
import { ThemeProvider } from "./Provider/Themeprovider";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <MasterComponent></MasterComponent>
    </ThemeProvider>
  );
}

export default App;
