import wave from "../../assets/wave.svg"

export default function AboutHero() {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 py-4">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-3xl md:text-4xl xl:text-6xl">Hi, I'm</h2>
                    <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold">Rusty Trim</h1>
                    <p className="uppercase text-2xl xl:text-4xl">Software Engineer</p>
                    <p className="uppercase text-2xl xl:text-4xl flex md:gap-2">
                        <span className="text-yellow-500">Systems</span>
                        <span> • </span>
                        <span className="text-red-500">Backend</span>
                        <span> • </span>
                        <span className="text-blue-500">Web</span>
                    </p>

                    <div className="flex w-full justify-center gap-8 py-4">
                        <button onClick={() => window.open("https://github.com/rusty-trim", "_blank")} className="bg-green-500 p-2 rounded-md cursor-pointer">View GitHub</button>
                        <button onClick={() => window.open("resume.pdf")} className="bg-blue-500 p-2 rounded-md cursor-pointer">View Resume</button>
                    </div>
                </div>

            </div>
            <div className="relative w-full flex justify-center items-center overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" width={512} height={512} className="bg-black w-3/4 lg:w-[512px] border-none rounded-full shadow-blue-500 shadow-md z-1" />
            </div>
        </section>
    );
}
