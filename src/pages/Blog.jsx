import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import FeaturedBlog from "../components/FeaturedBlog";

import { blogs } from "../data/blogs";

import "../styles/Blog.css";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(blogs.map((blog) => blog.category)),
    ];
  }, []);

  const featuredBlog = blogs.find((blog) => blog.featured);

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog) => blog.category === activeCategory
        );

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-container">
          <Link to="/" className="blog-back-home">
            ← Back to Portfolio
          </Link>

          <div className="blog-hero-content" data-aos="fade-up">
            <span className="blog-eyebrow">
              QA JOURNAL
            </span>

            <h1>
              Thoughts, Lessons &{" "}
              <span>Practical QA Experiences.</span>
            </h1>

            <p>
              Practical insights from my journey in Software
              Quality Assurance — covering testing, quality
              engineering, tools, and lessons learned from
              real projects.
            </p>
          </div>
        </div>
      </section>

      {featuredBlog && (
        <section className="blog-featured-section">
          <div className="blog-container">
            <FeaturedBlog blog={featuredBlog} />
          </div>
        </section>
      )}

      <section className="blog-list-section">
        <div className="blog-container">
          <div
            className="blog-section-heading"
            data-aos="fade-up"
          >
            <div>
              <span className="blog-eyebrow">
                KNOWLEDGE BASE
              </span>

              <h2>All Articles</h2>
            </div>

            <p>
              Ideas, practical approaches, and lessons from
              software testing.
            </p>
          </div>

          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "blog-filter active"
                    : "blog-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredBlogs
              .filter((blog) => blog.slug !== featuredBlog?.slug)
              .map((blog) => (
                <BlogCard
                  key={blog.slug}
                  blog={blog}
                />
              ))}
          </div>

          {filteredBlogs.filter(
            (blog) => blog.slug !== featuredBlog?.slug
          ).length === 0 && (
            <div className="blog-empty">
              <span>More articles are coming soon.</span>
            </div>
          )}
        </div>
      </section>

      <section className="blog-cta-section">
        <div className="blog-container">
          <div className="blog-cta" data-aos="fade-up">
            <span className="blog-eyebrow">
              KEEP EXPLORING
            </span>

            <h2>
              Quality isn't a phase.
              <br />
              It's a mindset.
            </h2>

            <p>
              Explore my experience, projects, and approach
              to software quality.
            </p>

            <Link to="/" className="blog-cta-button">
              Explore Portfolio →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;