import Hero from './layout/hero'
import About from './about/about'
import Experience from './components/Experience'
import Projects from './portfolio/portfolio'
import Blog from './components/Blog'

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-purple-500 selection:text-white">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Blog />
            </div>
        </main>
    )
}
