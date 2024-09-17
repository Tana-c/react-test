import React from 'react';

const About = () => {
  return (
    <div className="p-10">
      <div className="flex">
        <div className="w-1/2">
          <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
            <span>400 x 400</span>
          </div>
        </div>
        <div className="w-1/2 px-10">
          <h1 className="text-2xl font-bold mb-5">About Us</h1>
          <p className="text-lg mb-5">
            We are a team of passionate developers dedicated to building modern and responsive web applications. Our goal is to deliver high-quality software that meets the needs of our users.
          </p>
          <p className="text-lg">
            With years of experience in the industry, we have honed our skills in a variety of technologies and methodologies. We are committed to continuous learning and improvement, always staying up-to-date with the latest trends and best practices in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
