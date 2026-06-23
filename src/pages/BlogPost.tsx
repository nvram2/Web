import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./Blog";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Madlabs Digital Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, B2B Growth, Madlabs Digital`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <link rel="canonical" href={`https://madlabs.digital/blog/${post.slug}`} />
      </Helmet>

      <div className="pt-24 pb-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-brand-text/60 hover:text-brand-purple mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          <div className="mb-12">
            <div className={`inline-flex px-4 py-1.5 rounded-full text-xs font-bold mb-6 ${post.color}`}>
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-brand-text/50">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By Kevin Sequeira</span>
            </div>
          </div>

          <div className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-brand-text/80 max-w-none">
            <p className="lead text-xl text-brand-text/90 font-medium mb-10">
              {post.excerpt}
            </p>
            
            {post.content?.map((block, i) => {
              if (block.type === 'h2') {
                return <h2 key={i} className="text-2xl mt-12 mb-6">{block.text}</h2>;
              }
              if (block.type === 'p') {
                return <p key={i} className="mb-6">{block.text}</p>;
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={i} className="border-l-4 border-brand-purple pl-6 py-2 my-10 italic text-xl text-brand-text/80 bg-brand-bg rounded-r-xl">
                    "{block.text}"
                  </blockquote>
                );
              }
              return null;
            })}

            <div className="mt-16 p-8 bg-brand-bg rounded-3xl border border-brand-grey text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">Ready to scale your business?</h3>
              <p className="text-brand-text/70 mb-8">
                Book a strategy call with us to discuss how we can implement these solutions for you.
              </p>
              <Link to="/contact">
                <Button>Book Strategy Call</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
