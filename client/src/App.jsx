import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateStudent from "./assets/components/CreateStudent";
import ViewStudent from "./assets/components/ViewStudent";
import UpdateStudent from "./assets/components/UpdateStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/read/:id" element={<ViewStudent />} />
        <Route path="/edit/:id" element={<UpdateStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
