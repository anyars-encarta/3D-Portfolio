import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';

const projectsCount = myProjects.length;
const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prev) => {
            if (direction === 'previous') {
                return prev === 0 ? projectsCount - 1 : prev - 1;
            } else {
                return prev === projectsCount - 1 ? 0 : prev + 1;
            }
        })
    };

    return (
        <section className='c-space my-20' id='work'>
            <p className='head-text'>A small selection of my Projects</p>

            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                    <div className='absolute top-0 right-0'>
                        <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </div>

                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                    </div>

                    <div className='flex flex-col gap-5 text-white-600 my-5'>
                        <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                        <p className='animatedText'>{currentProject.desc}</p>
                        <p className='animatedText'>{currentProject.subdesc}</p>
                    </div>

                    <div className='flex items-center justify-between flex-wrap gap-5'>
                        <div className='flex  items-center gap-3'>
                            {currentProject.tags.map((tag, i) => (
                                <div key={i} className='tech-logo'>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <a href={currentProject.github} target="_blank" rel="noreferrer" className='flex items-center gap-2 cursor-pointer text-white-600'>
                            <p>View Repo</p>
                            <img src="/assets/github.png" alt="arrow" className='w-5 h-5' />
                        </a>

                        <a href={currentProject.href} target="_blank" rel="noreferrer" className='flex items-center gap-2 cursor-pointer text-white-600'>
                            <p>Check Live Site</p>
                            <img src="/assets/live_stream.png" alt="arrow" className='w-4 h-4' />
                        </a>
                    </div>

                    <div className='flex items-center justify-between mt-7'>
                        <button className='arrow-left-btn group' onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4 cursor-pointer animate-bounce-left-right group-hover:animate-none' />
                        </button>

                        <span className='text-white-500'>{selectedProjectIndex + 1} of {projectsCount}</span>

                        <button className='arrow-right-btn group' onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4 cursor-pointer animate-bounce-left-right group-hover:animate-none' />
                        </button>
                    </div>
                </div>

                <div className='border border-black-300 backround-black-200 rounded-lg h-96 md:h-full'>
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                        </Center>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects