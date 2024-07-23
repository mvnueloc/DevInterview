import StatsIcon from '../icons/Stats';
import BookIcon from '../icons/Book';
import IAicon from '../icons/IA';
import TimeIcon from '../icons/Time';

const MetricsItems = () => {
    return(
        <>
            <div className='flex-1 flex flex-col sm:flex-row base:flex-col gap-4'>
                <div className='flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5 backdrop-blur-sm'>
                    <div className='p-4 bg-[#32C766]/30 rounded-xl'>
                        <IAicon className='size-5' color="#32C766"/>
                    </div>
                    <div className='text-base lg:text-xl font-bold'>
                        Retroalimentación con IA
                    </div>
                </div>
                <div className='flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5'>
                    <div className='p-4 bg-[#FECC17]/30 rounded-xl'>
                        <StatsIcon className='size-5' color="#FECC17"/>
                    </div>
                    <div className='text-base lg:text-xl font-bold'>
                        Métricas de Desempeño
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col sm:flex-row base:flex-col gap-4'>
                <div className='flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5 backdrop-blur-sm'>
                    <div className='p-4 bg-red-400/30 rounded-xl'>
                        <TimeIcon className='size-5' color="#ED2939"/>
                    </div>
                    <div className='text-base lg:text-xl font-bold'>
                        Cronometraje de Pruebas
                    </div>
                </div>
                <div className='flex-1 bg-[#2f2f31]/30 px-8 py-7 inline-flex items-center rounded-xl gap-4 base:py-0 base:px-5 backdrop-blur-sm'>
                    <div className='p-4 bg-[#164DFF]/30 rounded-xl'>
                        <BookIcon className='size-5' color="#164DFF"/>
                    </div>
                    <div className='text-base lg:text-xl font-bold'>
                        Recursos de Aprendizaje
                    </div>
                </div>
            </div>
            
        </>
    )
};

export default MetricsItems;