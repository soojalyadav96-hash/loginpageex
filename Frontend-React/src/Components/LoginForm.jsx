import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    //sending login request server
    axios
      .post("http://localhost:5000/api/v1/rrcollege/user/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        toast(res.data.message);
        localStorage.setItem("token", res.data.Btoken);
        localStorage.setItem("userid",res.data.user.id)
        localStorage.setItem("useremail",res.data.user.email)
        emailRef.current.value = "";
        passwordRef.current.value = "";
      })
      .catch((err) => {
        toast(err.response.data.message);
      });
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-center text-success">Login</h2>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label ">
                Email address
              </label>
              <input
                type="email"
                ref={emailRef}
                className="form-control border border-1  border-secondary"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                className="form-control border border-1  border-secondary"
                id="exampleInputPassword1"
              ></input>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
