import React from "react";

const Review = () => {
  const reviews = [
    {
      id: 1,
      student: "Nafisa Ahmed",
      college: "Greenfield International College",
      review:
        "Loved the environment and teachers! Their research labs are amazing. I also enjoyed the cultural events a lot.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      student: "Arif Hossain",
      college: "Skyline Institute of Technology",
      review:
        "Very modern campus and a strong tech culture. However, the admission process was a bit complex.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      student: "Sadia Rahman",
      college: "Riverdale Science & Arts University",
      review:
        "Great faculty and plenty of research opportunities. Sports facilities could be improved a bit.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      student: "Imran Kabir",
      college: "Evergreen Medical Institute",
      review:
        "One of the best institutes for medical students. Friendly professors and clean labs. Highly recommend!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      student: "Mehjabin Islam",
      college: "Mount Valley Art & Design School",
      review:
        "If you're into creativity, this place is heaven. Got tons of exposure in exhibitions and workshops.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      student: "Rakibul Hasan",
      college: "Horizon Engineering College",
      review:
        "Academically strong, but I faced some delay in documentation. Overall, still a good experience.",
      rating: 3,
      image: "https://i.pravatar.cc/150?img=6",
    },
  ];

  return (
    <section className="py-10 px-4 bg-base-100">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        What Students Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-md rounded-xl p-6 space-y-3 border hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={review.image} alt="User" />
                </div>
              </div>
              <div>
                <p className="font-semibold">{review.student}</p>
                <p className="text-sm text-gray-500">{review.college}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm">“{review.review}”</p>

            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(review.rating)].map((_, star) => (
                <span key={star}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
