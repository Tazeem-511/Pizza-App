import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          About Pizza Wizza
        </h1>

        <div className="flex flex-col md:flex-row mb-10">
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 relative h-72">
            <Image
              src="https://wallpaperaccess.com/full/8300629.jpg" // Replace with your image path
              alt="Delicious Pizza"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed">
              At Pizza Wizza, we believe in serving the best pizza with the
              freshest ingredients. Our journey started with a passion for
              creating authentic Italian pizzas that bring friends and families
              together. Every pizza is made with love, and our secret recipe has
              been passed down through generations.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-36 h-36 mx-auto mb-2">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                    className="rounded-full"
                  />
                </div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "John Doe",
    role: "Chef",
    image: "/team-member1.jpg", // Replace with your image path
  },
  {
    name: "Jane Smith",
    role: "Manager",
    image: "/team-member2.jpg", // Replace with your image path
  },
  {
    name: "Mike Johnson",
    role: "Delivery Expert",
    image: "/team-member3.jpg", // Replace with your image path
  },
];

export default About;
