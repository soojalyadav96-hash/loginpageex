import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import { useRef } from "react";

const LoginPage = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row row-cols-lg-2 row-cols-1">
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/32228263/pexels-photo-32228263.jpeg"
            alt="register image"
          ></img>
          <div className="p-5">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;