"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoIosArrowRoundForward } from "react-icons/io";

const page = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
router.push("/mycollege");
    console.log(data);
  };
  return (
    <>
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-4xl mx-auto my-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Admission Form
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Candidate Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600 uppercase font-semibold ">
                Candidate Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Row: Subject, Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 uppercase font-semibold ">
                  Subject
                </span>
              </label>
              <input
                type="text"
                placeholder="Your subject"
                {...register("subject", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 uppercase font-semibold ">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Row: Phone, Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 uppercase font-semibold ">
                  Phone Number
                </span>
              </label>
              <input
                type="tel"
                placeholder="+8801XXXXXXXXX"
                {...register("phone", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-600 uppercase font-semibold ">
                  Address
                </span>
              </label>
              <input
                type="text"
                placeholder="Your address"
                {...register("address", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-gray-600 uppercase font-semibold ">
                Upload Candidate Photo
              </span>
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button type="submit" className="btn btn-success w-full md:w-1/2">
              Submit <IoIosArrowRoundForward className="ml-2 text-xl" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
