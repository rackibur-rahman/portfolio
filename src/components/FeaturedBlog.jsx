import { Link } from "react-router-dom";

function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <article className="featured-blog" data-aos="fade-up">
      <div className="featured-blog-image-wrapper">
        <img
          src={blog.image}
          alt={blog.title}
          className="featured-blog-image"
        />

        <div className="featured-blog-overlay" />
      </div>

      <div className="featured-blog-content">
        <div className="featured-blog-label">
          FEATURED ARTICLE
        </div>

        <span className="featured-blog-category">
          {blog.category}
        </span>

        <h2>{blog.title}</h2>

        <p>{blog.excerpt}</p>

        <div className="featured-blog-meta">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <Link
          to={`/blog/${blog.slug}`}
          className="featured-blog-button"
        >
          Read Article
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}

export default FeaturedBlog;