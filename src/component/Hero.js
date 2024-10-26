import React from "react";
import cover from '../assets/cover2.jpg'

const Hero = () => {
    return (
        <section className="bg-cover bg-center h-screen text-white"
        style={{backgroundImage: `url(${cover})`}}>
            <div className="bg-black bg opacity-60 h-full flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-5xl font-bold mb-4">Soraaly1</h2>
                <p className="text-2xl font-light mb-8"> Student & Fullstack Programmer</p>
                <a href="#projects" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-lgm transition duration-300">
                    My Project's
                </a>
            </div>
        </section>
    )
}

export default Hero