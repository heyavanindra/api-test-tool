import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ApiTest from "./pages/ApiTest";

const App = () => {
  return <div>
    <Routes>
      <Route element={<Home></Home>} path="/"></Route>
      <Route element={<ApiTest/>} path="/test"></Route>
    </Routes>
  </div>;
};

export default App;
