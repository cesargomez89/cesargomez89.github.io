import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "KIDD🌀TS",
      description: "Minimalistic dotfiles designed for productivity and performance. Featuring Kitty terminal, Zsh with Antidote, and a power-user Neovim setup.",
      image: "/kiddots.png",
      tags: ["Neovim", "Zsh", "Kitty", "Lua"],
      link: "https://github.com/cesargomez89/kiddots"
    },
    {
      title: "DotFlakes",
      description: "A reproducible NixOS configuration using Flakes and Home Manager. Prioritizes system stability with a polished GNOME desktop environment.",
      image: "/dotflakes.png",
      tags: ["NixOS", "Flakes", "Home Manager", "GNOME"],
      link: "https://github.com/cesargomez89/dotflakes"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Personal Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 block"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 bg-blue-600 rounded-full text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="text-sm font-semibold text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                  Read More <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
