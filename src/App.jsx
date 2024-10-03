import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import "./App.css";

function App() {
  return (
    <div >
      <div className="wrapper">

      <RouterProvider router={myRouter} />
      </div>
    </div>
  );
}

export default App;
