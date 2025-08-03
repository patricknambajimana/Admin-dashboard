import React from "react";
const AuthLogin = () => {
  

   return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 rounded-lg bg-whate shadow-md text-robot capitalize ">
        <form action="" className="space-y-6 ">
          <h2 className="text-center text-2xl pb-4">login your account</h2>
          <div className="w-full text-xl capitalize ">
            <label htmlFor="email" className="text-2xl">email</label>
            <input type="email" name="email" id="email" required className="border focus:border w-full rounded-md"/>
          </div>
          <div className="w-full text-xl ">
            <label htmlFor="password" className="text-2xl ">Password</label>
            <input type="password" name="password" id="name" className="border focus:border w-full rounded-md"/>
          </div>
          <div className="bg-primary-500 w-full rounded-md text-center p-2 text-2xl">
            <button type="submit">sign</button>
          </div>
        </form>
        <div className="text-center text-xl pt-2 underline">
          <a href="">forget your password</a>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
