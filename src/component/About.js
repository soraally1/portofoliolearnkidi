import React from "react";
import Profile from '../assets/cover.jpeg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                    About Me
                </h2>

                <div className="flex flex-col items-center mb-12">
                    <img src={`${Profile}`} alt="Profile-Picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-gray-600 font-light mb-2"> Student & Fullstack Developer</p>
                    <p className="text-xg text-gray-700 font-light mb-2"> I'm a student and freelance fullstack developer</p>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4 text-rose-700">Web Programmer</h3>
                <p className="text-gray-700 mb-4">
                    I learn a lot about frontend and backend to be fullstack programmer
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4 text-rose-700">Web Programmer</h3>
                <p className="text-gray-700 mb-4">
                    I learn a lot about frontend and backend to be fullstack programmer
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4 text-rose-700">Web Programmer</h3>
                <p className="text-gray-700 mb-4">
                    I learn a lot about frontend and backend to be fullstack programmer
                </p>
            </div>
            </div>
            
            <p className="text-lg text-gray-600 mt-8">
                I also learning much about software engineer and game developer
            </p>
            </div>
        </section>
    )
}

export default About