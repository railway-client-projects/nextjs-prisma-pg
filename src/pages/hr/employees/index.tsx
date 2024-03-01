import React from "react";
import { Resend } from "resend";

const resend = new Resend("re_jYC7HXS5_3aJ36AEybCXrwSGtVvsWjRzN");
const Employees = () => {
  const sendEmail = async () => {
    try {
      let res = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "messi10010@gmail.com",
        subject: "Hello World",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
      });
      console.log(res);
    } catch (error) {
      console.log("cannot send email");
    }
  };

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <button
          className="m-w-[6rem] bg-slate-800 text-slate-200 font-bold text-xl"
          onClick={sendEmail}
        >
          Send Email
        </button>
      </div>
      <div className="col-span-3"></div>
    </div>
  );
};

export default Employees;
