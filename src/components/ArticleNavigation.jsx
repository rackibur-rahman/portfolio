import { Link } from "react-router-dom";

function ArticleNavigation({ previous, next }) {
  return (
    <nav className="article-navigation" aria-label="Article navigation">
      <div className="article-nav-item article-nav-previous">
        {previous ? (
          <Link to={`/blog/${previous.slug}`}>
            <span className="article-nav-label">← Previous</span>

            <span className="article-nav-title">
              {previous.title}
            </span>
          </Link>
        ) : (
          <Link to="/blog">
            <span className="article-nav-label">← Back</span>

            <span className="article-nav-title">
              All Articles
            </span>
          </Link>
        )}
      </div>

      <div className="article-nav-divider" />

      <div className="article-nav-item article-nav-next">
        {next ? (
          <Link to={`/blog/${next.slug}`}>
            <span className="article-nav-label">Next →</span>

            <span className="article-nav-title">
              {next.title}
            </span>
          </Link>
        ) : (
          <Link to="/blog">
            <span className="article-nav-label">Explore →</span>

            <span className="article-nav-title">
              More QA Articles
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default ArticleNavigation;