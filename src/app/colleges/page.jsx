"use client"
import Card from "../components/Card";
import { useAxiosPublic } from "../(hooks)/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Colleges = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: colleges = [] } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axiosPublic.get("/colleges");
      return res.data;
    },
  });
  

  return (
    <div className=" ">
      <h1 className="text-2xl font-bold mb-4">Colleges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {colleges.map((college) => (
          <Card key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
