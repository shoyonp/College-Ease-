import React from "react";

const page = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Admission Form</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Candidate Name</label>
                <input type="text" className="input" placeholder="Candidate Name" />
                <label className="label">Subject</label>
                <input type="text" className="input" placeholder="Subject" />
                <label className="label">Candidate Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Candidate Phone number</label>
                <input type="tel" className="input" placeholder="Phone number" />
                <label className="label">Address</label>
                <input type="text" className="input" placeholder="Address" />
                <label className="label">Date of Birth</label>
                <input type="date" className="input" placeholder="Date of Birth" />
                <label className="label">Upload Photo</label>
                <input type="file" className="file-input" />
                {/* submit button */}
                <button className="btn btn-neutral mt-4">Submit</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
