import Navbar from "../Components/Navbar";
import RegisterForm from "../Components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row row-cols-lg-2 row-cols-1">
          <img
            className="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvboWNRbSiJ5vTI65YIFyxzBMISntJ3EiG9RCFt7eEQ&s=10"
            alt="register image"
          ></img>
          <div className="p-5">
            <RegisterForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
