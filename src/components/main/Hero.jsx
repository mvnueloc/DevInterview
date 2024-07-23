import Github from '../icons/Github';

const Hero = () => {
    return (
        <div className="pt-8 pb-24 font-onest grid-container">
            <div className="base:w-full ">
                <h1 className="text-3xl md:text-5xl font-bold mb-0.5">
                    Mejora tus habilidades técnicas con ayuda de Inteligencia Artificial
                </h1>
                <p className="mt-6 text-base text-[#C8C8C8]">
                    Entrena tus habilidades técnicas con IA: responde preguntas y recibe evaluaciones instantáneas.
                </p>
                <div className="inline-flex mt-7 gap-4">
                    <a href="" className='bg-[#4545E6] px-6 pt-[14px] pb-3 rounded text-sm font-medium neon-shadow'>Prácticar</a>
                    <a href="" className='inline-flex bg-black px-6 pt-[14px] items-center gap-2 pb-3 rounded font-medium text-sm '>
                        <Github className='size-4'/>
                        Repositorio
                    </a>
                </div>
            </div>
            <div className="w-full">
                <img src="images/hero-image.png" alt="Dev Interview Presentación" className='base:hidden img-gradient-bottom rounded-b-lg' />
                <img src="images/hero-image-crop.png" alt="Dev Interview Presentación" className='w-full hidden base:block img-gradient-right' />   
            </div>
        </div>
    );
};


export default Hero;