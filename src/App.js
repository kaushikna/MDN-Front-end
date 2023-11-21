import RoutesLayout from "./Routes";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RoutesLayout />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
