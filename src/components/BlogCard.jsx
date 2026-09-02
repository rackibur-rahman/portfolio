import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <article className="blog-card" data-aos="fade-up">
      <Link
        to={`/blog/${blog.slug}`}
        className="blog-card-image-link"
        aria-label={`Read ${blog.title}`}
      >
        <div className="blog-card-image-wrapper">
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-card-image"
            loading="lazy"
          />

          <span className="blog-card-category">
            {blog.category}
          </span>
        </div>
      </Link>

      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <h3>{blog.title}</h3>

        <p>{blog.excerpt}</p>

        <Link
          to={`/blog/${blog.slug}`}
          className="blog-read-more"
        >
          Read Article
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;