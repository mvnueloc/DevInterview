import MetricsItems from "./MetricsItems";

const Metrics = () => {
    return(
        <div className="w-full py-20">
            <div className="">
                <h2 className="text-center text-2xl md:text-4xl font-semibold">
                    Feedback Detallado
                </h2>
                <p className="m-auto max-w-3xl text-center my-10">
                    Recibe feedback detallado con métricas detalladas para que puedas mejorar tus habilidades técnicas y conseguir el trabajo de tus sueños.
                </p>
            </div>
            <div className="w-full flex flex-col gap-10 base:flex-row base:gap-0">
                <div className="flex-1 flex flex-col base:mr-5 gap-4">
                    <MetricsItems />
                </div>
                <div className="flex-1">
                    <img src="images/stats-landing.png" alt="Estadísticas Ejemplo" className="w-full rounded-xl md:max-h-[28rem] md:object-cover"/>
                </div>
            </div>
        </div>
    )
}

export default Metrics;