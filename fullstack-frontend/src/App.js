
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar.";
import Home from "./Pages/Home";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Adduser from "./users/Adduser";

import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addUser" element={<Adduser />} />
                <Route path="/edituser/:id" element={<EditUser />} />
                <Route path="/viewUser/:id" element={<ViewUser />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
