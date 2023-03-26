import React  from "react";
import {Link} from "react-router-dom";
import Adduser from "../users/Adduser";



export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>React,Springboot,MySQL practice</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className={"btn btn-outline-light"} to={"/addUser"}>Add User</Link>

                </div>
            </nav>

        </div>
    )

}