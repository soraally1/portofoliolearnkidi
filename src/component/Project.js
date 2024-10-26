import React from "react";
import app from '../assets/pandhu.png'
import mart from '../assets/smart.png'
import coffe from '../assets/coffe.png'

const Project = () => {
    return (
        <section id="project" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">My Project's</h2>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={app} alt="Pandhu" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Pandhu</h3>
                        <p className="text-gray-700"> Backend Development Using SQLite</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={mart} alt="S'MART" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">S'MART</h3>
                        <p className="text-gray-700"> Fullstack Development</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={coffe} alt="CoffeF&B" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">CoffeF&B</h3>
                        <p className="text-gray-700"> Fullstack Development Software</p>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Project