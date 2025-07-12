import React from "react";

const CollegeImage = () => {
  const graduateGallery = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600047502105-69c3381e8306?auto=format&fit=crop&w=800&q=80",
      title: "Greenfield Graduates 2024",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
      title: "Skyline Institute Farewell",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1614728894744-0ec51db9d489?auto=format&fit=crop&w=800&q=80",
      title: "Riverdale Arts Graduation",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1602937440410-a5419b0e44f4?auto=format&fit=crop&w=800&q=80",
      title: "Medical Batch 2023",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
      title: "Engineering Final Day",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1532619675605-1b7b54b93c79?auto=format&fit=crop&w=800&q=80",
      title: "Design School Portfolio Fest",
    },
  ];

  return (
    <section className="py-10 bg-base-200">
      <h2 className="text-2xl font-bold text-center mb-6">Graduate Memories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {graduateGallery.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default CollegeImage;
