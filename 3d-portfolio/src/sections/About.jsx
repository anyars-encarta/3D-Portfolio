import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';
import StarsCanvas from '../components/StarsCanvas';
import Tech from './Tech';

const About = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText('anyarsencarta@gmail.com');
            setCopied(true);

            setTimeout(() => {
                setCopied(false)
            }, 3000);
        } else {
            console.error("Clipboard API is not supported");
        }
    };

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>Hi, I'm Anyars</p>
                            <p className='grid-subtext'>
                                With almost 3 years of experience, I have honed my skills in frontend,
                                backend, and full-stack development, with a focus on React, Rails,
                                Next.js, and animated 3D websites
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>
                                I specialised in JavaScript/TypeScript with a focus on React,
                                Rails, and Next.js ecosystems
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container relative z-0'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                                labelsData={[{
                                    lat: 6.6666, lng: 1.6163,
                                    text: "I'm here",
                                    color: 'white',
                                    size: 20,
                                }]}
                            />
                        </div>

                        <div>
                            <p className='grid-headtext'>I work remotely accross most timezones</p>
                            <p className='grid-subtext'>I am based in Kumasi, Ghana, West Africa, with remote work available</p>

                            <a href="#contact">
                                <Button name="Contact Me" isBeam containerClass='w-full mt-10' />
                            </a>
                        </div>
                        
                        <StarsCanvas />
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

                        <div>
                            <p className='grid-headtext'>My passion for coding</p>
                            <p className='grid-subtext'>I love solving problems, learning new technologies,
                                and building things through code. Coding isn't just my profession - it is my passion
                            </p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact me</p>

                            <div className='copy-container' onClick={handleCopy}>
                                <img src={copied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>anyarsencarta@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tech />
        </section>
    )
}

export default About