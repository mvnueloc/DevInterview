import PopOver from "./PopOver";
import GaugeChart from "./GaugeChart";
import BulletPoints from "./BulletPointsCross";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const ResumenPreguntas = ({data}) => {

    return(
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="md:px-6 py-6 rounded-lg">
                <h2 className="mb-6 text-3xl font-bold border-b border-white">Preguntas Técnicas</h2>
                <div className="flex flex-col  gap-3 justify-between w-full base:flex-row base:items-stretch">
                    <div className="w-full flex flex-col p-6 min-h-64 bg-[#1B1D20] rounded-lg base:w-[60%] ">
                        <h3 className="inline-flex text-xl font-semibold items-center">
                            <span className="flex w-2.5 h-2.5 bg-blue-800    rounded-full me-1.5 flex-shrink-0"></span> 
                            Métricas 
                        </h3>
                        <div className="">
                            Métricas de desempeño de las preguntas técnicas...
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                        
                            { data["status"] ? (
                                
                                <Skeleton height="156px" width="100%"/>
                                
                            ): (
                                <div className="relative w-full flex flex-col sm:flex-row justify-between">

                                    <GaugeChart 
                                        height={250} 
                                        data = {
                                            (data.metrics[0]["precision"] + data.metrics[1]["precision"]) / 2
                                        } 
                                        title = { "precision" }
                                    />
                                    <GaugeChart 
                                        height={250} 
                                        data = {
                                            (data.metrics[0]["claridad"] + data.metrics[1]["claridad"]) / 2
                                        } 
                                        title = "Claridad"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full p-6 bg-[#1B1D20] rounded-lg base:max-w-[40%]">
                        <h3 className="inline-flex text-xl font-semibold items-center">
                            <span className="flex w-2.5 h-2.5 bg-yellow-500 rounded-full me-1.5 flex-shrink-0"></span> 
                            Puntos de mejora
                        </h3>
                        <div className="mt-2 ml-4 feedback-content text-[#b3b3b3] text-base">
                            {data["status"] ? (
                                    <>
                                        <Skeleton count={3} className="mt-4"/>
                                    </>
                            ) : (
                                <>
                                    <BulletPoints points={ data.weaknessBullets }/> 
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-3 w-full p-6 bg-[#1B1D20] rounded-lg">
                    <div className="w-full min-h-28">
                        {data["status"] ? (
                            <>
                                <Skeleton count={3}/>

                                <Skeleton className="mt-3"/>
                                <Skeleton />
                            </>
                        ) : (
                            <>
                                <div className="mt-2 feedback-content text-[#b3b3b3] text-base">
                                    { data["feedback-1"] }
                                </div>
                                <div className="mt-4 feedback-content text-[#b3b3b3] text-base">
                                    { data["feedback-2"] }
                                </div>
                            </>
                        )}
                    </div>
                    
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default ResumenPreguntas;