import React, { useState } from "react";
import Img from "../../Assets/Images/login.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Formik } from "formik";
import { initialLoginValue, loginSchema } from "../../Schema/loginSchema";
import { AuthAPI } from "../../API";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  //hooks
  const navigate = useNavigate();

  //state
  const [create, setCreate] = useState(true);
  const [forgot, setForgot] = useState(false);
  return (
    <div>
      <Header />
      <div className="py-[80px]">
        <div className="shadow-[rgba(100,100,111,0.2)0px_7px_29px_0px] max-w-[1080px] xl:mx-auto bg-white md:flex items-center justify-between mx-[20px]">
          <div className="md:w-[50%] p-[30px] md:block hidden">
            <img
              src={Img}
              alt="Login"
              className="lg:max-w-[440px] max-w-[360px] mx-auto w-full"
            />
          </div>
          {forgot ? (
            <div className="md:w-[50%] sm:p-[30px] p-[30px_16px]  border-l-[1px] border-l-[#f1f1f1]">
              <h1 className="text-[#3e337c] text-center sm:text-[34px] text-[22px] font-semibold">
                Reset your password
              </h1>
              <p className="sm:text-[14px] text-[12px] text-center">
                We will send you an email to reset your password.
              </p>
              <div className="mt-[40px]">
                <label className="text-[#3e337c] text-[14px] block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                />
              </div>
              <div className="flex justify-center gap-4 mt-[40px]">
                <button className="bg-[#3e337c] text-white p-[8px_20px] w-full max-w-[320px] lg:text-[20px] text-[14px] font-medium rounded-lg">
                  Submit
                </button>
                <button
                  className="bg-[#c4403e] text-white p-[8px_20px] w-full max-w-[320px] lg:text-[20px] text-[14px] font-medium rounded-lg"
                  onClick={() => setForgot(!create)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <Formik
              initialValues={initialLoginValue}
              validationSchema={loginSchema}
              onSubmit={async (value) => {
                try {
                  const payload = {
                    email: value.email,
                    password: value.password,
                  };
                  const response = await AuthAPI("/auth/login", {
                    method: "POST",
                    data: payload,
                  });
                  if (response?.data?.error) {
                    toast.error("Something went to wrong...");
                  }
                  toast.success("Successfully logged in...");
                  //   setCreate(!create);
                } catch (error) {
                  toast.error("Something went to wrong...");
                  console.error(error);
                }
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue,
              }) => (
                <div className="md:w-[50%] sm:p-[30px] p-[30px_16px]  border-l-[1px] border-l-[#f1f1f1]">
                  <form onSubmit={handleSubmit}>
                    <h1 className="text-[#3e337c] text-center sm:text-[34px] text-[30px] font-semibold">
                      Log In
                    </h1>
                    <div>
                      <div className="sm:mt-[60px] mt-[30px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          Email
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="text"
                          value={values.email}
                          onChange={handleChange}
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.email}
                      </p>
                      <div className="sm:mt-[30px] mt-[20px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          Password
                        </label>
                        <input
                          name="password"
                          id="password"
                          type="text"
                          value={values.password}
                          onChange={handleChange}
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.password}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-2">
                          <input
                            name="rememberMe"
                            id="rememberMe"
                            type="checkbox"
                            value={values.password}
                            onChange={(e) =>
                              setFieldValue("rememberMe", e.target.checked)
                            }
                            className="cursor-pointer"
                          />
                          <label
                            for="check"
                            className="text-[#3e337c] text-[12px] font-medium select-none cursor-pointer"
                          >
                            Remember me
                          </label>
                        </div>
                        <p
                          className="text-[#3e337c] text-[12px] font-medium cursor-pointer"
                          onClick={() => setForgot(!forgot)}
                        >
                          Forgot Password?
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="bg-[#c4403e] text-white p-[8px_20px] sm:mt-[80px] mt-[40px] w-full max-w-[320px] sm:text-[20px] text-[16px] font-medium rounded-lg"
                        >
                          Log In
                        </button>
                      </div>
                      <p className="text-[#3e337c] font-normal text-center mt-[30px] text-[14px]">
                        Don't have an account yet?{" "}
                        <button
                          onClick={() => navigate("/signup")}
                          className="font-semibold"
                        >
                          Create account
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </Formik>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
