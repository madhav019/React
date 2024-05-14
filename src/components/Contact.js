import React from "react";

const Contact = () => {
  return (
    <div className="mt-[30vh] w-[20vw] flex flex-col m-auto gap-2 shadow-2xl p-5 rounded-2xl bg-gray-50">
      <h1 className="text-xl font-bold">Contact Us</h1>
      <p>Please fill the form.</p>

      <div className="flex flex-col gap-2 mt-5">
        <input
          placeholder="First Name"
          className="border border-slate-400 p-2 rounded-md outline-none"
        />
        <input
          placeholder="Last Name"
          className="border border-slate-400 p-2 rounded-md outline-none"
        />
        <button className="bg-orange-400 p-2 rounded-md mt-5 text-white font-bold">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Contact;
