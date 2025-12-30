import Link from 'next/link';
import { posts } from '../data/posts';

export default function Blog() {
    return (
        <section id="blog" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Writings & Insights
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Deep dives into software architecture, patterns, and my daily learnings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 block"
                        >
                            <div className="relative aspect-video w-full overflow-hidden">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                        <span className="text-slate-600 font-mono italic">No preview available</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="px-6 py-2 bg-purple-600 rounded-full text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Read Article
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                                        Architecture
                                    </span>
                                    <span className="text-xs font-mono text-slate-500 bg-slate-500/10 px-2 py-1 rounded">
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="text-sm font-semibold text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                                    View Breakdown <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
