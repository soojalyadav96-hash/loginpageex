import axios from "axios";
import { useRef, useState } from "react";

const RegisterForm = () => {
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value)
    try {
      axios
        .post("http://localhost:5000/api/v1/rrcollege/user/register", {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          npassword: passwordRef.current.value,
        })
        .then((res) => {
            //success block
            setMessage(res.data.message)
            usernameRef.current.value=""
            emailRef.current.value=""
            passwordRef.current.value=""
        })
        .catch((err,res)=>{
            //err
            usernameRef.current.value=""
            emailRef.current.value=""
            passwordRef.current.value=""
            setMessage(err.response.data.message)
            console.log(err.response.data.message)
            //setMessage(err)
        });
    } catch (err) {
        setMessage(err)
    }
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-center text-success">REGISTER FORM</h2>
        <p className="text-center">{message}</p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="text"
                ref={usernameRef}
                className="form-control border border-1  border-secondary"
                id="exampleInputUsername"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ">
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
              <label htmlFor="exampleInputPassword1" className="form-label">
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

export default RegisterForm;
