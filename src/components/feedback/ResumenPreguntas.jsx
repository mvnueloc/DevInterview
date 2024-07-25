import PopOver from "./PopOver";
import GaugeChart from "./GaugeChart";
import BulletPoints from "./BulletPointsCross";

const ResumenPreguntas = ({
    data
}) => {

    return(
        <div className="p-6  rounded-lg">
            <h2 className="mb-6 text-3xl font-bold border-b border-white">Preguntas Técnicas</h2>
            <div className="flex flex-col  gap-3 justify-between w-full base:flex-row base:items-stretch">
                <div className="w-full p-6 h-64 bg-[#111] rounded-lg base:w-[60%] base:min-h-64">
                    <h3 className="inline-flex text-xl font-semibold items-center">
                        <span className="flex w-2.5 h-2.5 bg-blue-800    rounded-full me-1.5 flex-shrink-0"></span> 
                        Métricas 
                        <PopOver />
                    </h3>
                    <div className="mt-2">
                        Métricas de desempeño de las preguntas técnicas
                    </div>
                    <div className="w-full  flex flex-row justify-between">
                        <GaugeChart 
                            height={250} 
                            data = {
                                (data.metrics[0]["precisión"] + data.metrics[1]["precisión"]) / 2
                            } 
                            title = { "Precisión" }
                        />
                        <GaugeChart 
                            height={250} 
                            data = {
                                (data.metrics[0]["claridad"] + data.metrics[1]["claridad"]) / 2
                            } 
                            title = "Claridad"
                        />
                    </div>
                    
                </div>
                <div className="w-full p-6 bg-[#111] rounded-lg base:max-w-[40%]">
                    <h3 className="inline-flex text-xl font-semibold items-center">
                        <span className="flex w-2.5 h-2.5 bg-yellow-500 rounded-full me-1.5 flex-shrink-0"></span> 
                        Puntos de mejora
                    </h3>
                    <div className="mt-2 ml-4 feedback-content text-[#b3b3b3] text-base">
                           <BulletPoints points={
                            data.weaknessBullets
                           }/> 
                    </div>
                </div>
            </div>
            <div className="mt-3 w-full p-6 bg-[#111] rounded-lg">
                <div className="inline-flex w-full flex-wrap  justify-center base:max-h-96">
                    <div className="mt-2 feedback-content text-[#b3b3b3] text-base">
                        { data["feedback-1"] }
                    </div>
                    <div className="mt-4 feedback-content text-[#b3b3b3] text-base">
                        { data["feedback-2"] }
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ResumenPreguntas;