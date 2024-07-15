import Header from "../components/Header"
function Main() {
    return (
        <>
            <Header />
            <main>
                <div className="h-screen w-full bg-gray-900 text-gray-100 flex justify-center items-center">
                    <h1 className="text-3xl font-semibold">DevInterview</h1>
                </div>
            </main>
        </>
    );
}

export default Main;