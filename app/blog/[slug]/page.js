import { posts } from '../../data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Mermaid from '../../components/Mermaid';


export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <Link
                    href="/#blog"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    Back to insights
                </Link>

                <article className="space-y-12">
                    <header className="space-y-8">
                        {post.image && (
                            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-slate-800">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                            </div>
                        )}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-purple-400 font-medium">
                                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                <span>Architecture</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                {post.title}
                            </h1>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-purple max-w-none prose-headings:text-white prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-purple-400 prose-code:text-purple-300 prose-img:rounded-2xl prose-pre:bg-transparent prose-pre:p-0">
                        <ReactMarkdown
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');

                                    if (!inline && match && match[1] === 'mermaid') {
                                        return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                                    }

                                    return !inline && match ? (

                                        <div className="rounded-2xl overflow-hidden border border-slate-800 my-8">
                                            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                                                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{match[1]}</span>
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                                                </div>
                                            </div>
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                customStyle={{
                                                    margin: 0,
                                                    padding: '1.5rem',
                                                    fontSize: '0.9rem',
                                                    lineHeight: '1.6',
                                                    background: 'transparent',
                                                }}
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        </div>
                                    ) : (
                                        <code className={`${className} bg-purple-500/10 px-1.5 py-0.5 rounded text-purple-300 font-mono text-sm`} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </div>
        </main>
    );
}
