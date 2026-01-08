import GithubIcon from '../icons/github'
import LinkedinIcon from '../icons/linkedin'
import HeartIcon from '../icons/heart'

export default function Footer() {
    return (
        <footer className="w-full py-12 mt-20 border-t border-white/5 bg-[#1a1614]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2 text-[#d6d3d1]/60 text-sm">
                        <span>Built with Next.js & Tailwind</span>
                        <HeartIcon className="w-4 h-4 text-red-500 fill-current" />
                    </div>
                    <p className="text-[#5c5450] text-xs">
                        © {new Date().getFullYear()} Cesar Gomez. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/cesargomez89" target="_blank" rel="noopener noreferrer"
                        className="text-[#d6d3d1]/60 hover:text-white transition-colors transform hover:scale-110">
                        <GithubIcon size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/cesargomez89/" target="_blank" rel="noopener noreferrer"
                        className="text-[#d6d3d1]/60 hover:text-[#e32c22] transition-colors transform hover:scale-110">
                        <LinkedinIcon size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
