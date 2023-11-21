import React, { useState } from "react";
import Img from "../../Assets/Images/login.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Formik } from "formik";
import { AuthAPI } from "../../API";
import {
  initialRegisterSchema,
  initialRegisterValue,
} from "../../Schema/RegisterSchema";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
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
              initialValues={initialRegisterValue}
              validationSchema={initialRegisterSchema}
              onSubmit={async (value) => {
                try {
                  const response = await AuthAPI("/auth/register", {
                    method: "POST",
                    data: value,
                  });
                  if (response?.status === "Faild") {
                    toast.error("Something went to wrong...");
                  } else {
                    toast.success("Successfully signup...");
                  }
                  setCreate(!create);
                } catch (error) {
                  toast.error("Something went to wrong...");
                  console.error(error);
                }
              }}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <div className="md:w-[50%] sm:p-[30px] p-[30px_16px]  border-l-[1px] border-l-[#f1f1f1]">
                  <form onSubmit={handleSubmit}>
                    <h1 className="text-[#3e337c] text-center  sm:text-[34px] text-[26px] font-semibold">
                      Create Account
                    </h1>
                    <div>
                      <div className="sm:mt-[60px] mt-[30px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={values.firstName}
                          onChange={handleChange}
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.firstName}
                      </p>
                      <div className="sm:mt-[30px] mt-[20px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          type="text"
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.lastName}
                      </p>
                      <div className="sm:mt-[30px] mt-[20px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          type="text"
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.email}
                      </p>
                      <div className="sm:mt-[30px] mt-[20px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          Username
                        </label>
                        <input
                          id="userName"
                          name="userName"
                          value={values.userName}
                          onChange={handleChange}
                          type="text"
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.userName}
                      </p>
                      <div className="sm:mt-[30px] mt-[20px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          Contact Number
                        </label>
                        <input
                          id="contactNumber"
                          name="contactNumber"
                          value={values.contactNumber}
                          onChange={handleChange}
                          type="text"
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.contactNumber}
                      </p>
                      <div className="sm:mt-[30px] mt-[20px]">
                        <label className="text-[#3e337c] text-[14px] block font-medium">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          type="text"
                          className="text-[14px] mt-2 outline-none border-[1px] border-[#e0daff] rounded-sm w-full p-[8px_10px]"
                        />
                      </div>
                      <p className="text-[#3e337c] text-[14px] block font-medium text-red-500">
                        {errors.password}
                      </p>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="bg-[#c4403e] text-white p-[8px_20px] sm:mt-[80px] mt-[40px] w-full max-w-[320px] sm:text-[20px] text-[16px] font-medium rounded-lg"
                        >
                          Create
                        </button>
                      </div>
                      <p className="text-[#3e337c] font-normal text-center mt-[30px] text-[14px]">
                        Already have an account?
                        <button
                          onClick={() => navigate("/login")}
                          className="font-semibold"
                        >
                          Login
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

export default Signup;
