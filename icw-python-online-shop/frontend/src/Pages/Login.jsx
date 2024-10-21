import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let dataObj;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dataObj = data;
      });
    if (dataObj.success) {
      localStorage.setItem("auth-token", dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  };

  const signup = async () => {
    let dataObj;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dataObj = data;
      });

    if (dataObj.success) {
      localStorage.setItem("auth-token", dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  };

  return (
    <div className="w-full min-h-screen bg-primary py-20">
      <div className="w-[90%] max-w-xl bg-white bg-opacity-75 backdrop-blur-lg mx-auto p-10 md:p-20 rounded-xl">
        <h1 className="text-2xl md:text-3xl mb-6">{state}</h1>
        <div className="flex flex-col gap-4 mt-4 md:mt-8">
          {state === "Sign Up" ? (
            <input
              className="h-12 md:h-16 border border-accent rounded-xl px-4"
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}
          <input
            className="h-12 md:h-16 border border-accent rounded-xl px-4"
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            className="h-12 md:h-16 border border-accent rounded-xl px-4"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="w-full h-12 rounded-xl md:h-16 bg-third hover:bg-primary text-white font-semibold mt-8 md:mt-12 duration-200"
        >
          Continue
        </button>
        {state === "Login" ? (
          <p className="mt-6 md:mt-10 text-sm ">
            Create an account{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-primary font-bold cursor-pointer"
            >
              Sign up here
            </span>
          </p>
        ) : (
          <p className="mt-6 md:mt-10 text-sm ">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-primary font-bold cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
        <div className="flex items-center mt-6 md:mt-10 text-sm">
          <input type="checkbox" className="mr-2" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
