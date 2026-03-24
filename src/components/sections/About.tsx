export default function About() {
    return (
        <section id="about" className="pt-20 pb-5 sm:pt-24 sm:pb-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">About Me</h1>
            <p className="text-base md:text-xl">I am Rusty Trim, a software developer focused on building reliable, scalable applications.</p>
            <br />
            <p className="text-base md:text-xl">I primarily work with C and C++, and I also build web applications using TypeScript with modern frameworks like React. I’m particularly interested in designing systems that handle real-world constraints such as concurrency, data consistency, and performance.</p>
            <br />
            <p className="text-base md:text-xl">Right now, I’m focused on improving my algorithmic thinking and building projects that resemble real SaaS products.</p>
        </section>
    );
}
