import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { blogs, getBlogBySlug } from "../data/blogs";
import { blogTranslations } from "../data/blogTranslations";

import ArticleNavigation from "../components/ArticleNavigation";

import "../styles/BlogPost.css";

import profileImage from "../assets/Profile.png";

function renderContentBlock(block, index) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          id={`section-${index}`}
          className="article-heading"
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p key={index} className="article-paragraph">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul key={index} className="article-list">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );

    case "code":
      return (
        <pre key={index} className="article-code">
          <code>{block.code}</code>
        </pre>
      );

    case "callout":
      return (
        <aside key={index} className="article-callout">
          <div className="article-callout-icon">✦</div>

          <div>
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </div>
        </aside>
      );

    default:
      return null;
  }
}

function BlogPost() {
  const { slug } = useParams();

  const blog = getBlogBySlug(slug);

  const [isBangla, setIsBangla] = useState(false);

  if (!blog) {
    return (
      <main className="article-not-found">
        <div>
          <span className="blog-eyebrow">404</span>

          <h1>Article Not Found</h1>

          <p>
            The article you're looking for doesn't exist
            or may have been moved.
          </p>

          <Link to="/blog" className="article-back-button">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = blogs.findIndex(
    (item) => item.slug === blog.slug
  );

  const previous =
    currentIndex < blogs.length - 1
      ? blogs[currentIndex + 1]
      : null;

  const next =
    currentIndex > 0
      ? blogs[currentIndex - 1]
      : null;

  // Static Bangla translation
  const translation = blogTranslations[blog.slug];

  const displayedTitle = isBangla
    ? translation?.title || blog.title
    : blog.title;

  const displayedExcerpt = isBangla
    ? translation?.excerpt || blog.excerpt
    : blog.excerpt;

  const displayedContent = isBangla
    ? translation?.content || blog.content
    : blog.content;

  // Generate sidebar headings from the currently displayed content
  const headingBlocks = displayedContent
    .map((block, index) => ({
      ...block,
      originalIndex: index,
    }))
    .filter((block) => block.type === "heading");

  return (
    <main className="article-page">
      {/* Article Header */}
      <header className="article-header">
        <div className="article-container">
          <Link to="/blog" className="article-back">
            ← Back to Blog
          </Link>

          <div className="article-category">
            {blog.category}
          </div>

          <h1>{displayedTitle}</h1>

          <p className="article-excerpt">
            {displayedExcerpt}
          </p>

          <div className="article-meta">
            <div className="article-author">
              <div className="article-author-avatar">
                <img
                  src={profileImage}
                  alt="Rackibur Rahman"
                />
              </div>

              <div>
                <strong>Rackibur Rahman</strong>
                <span>QA Lead Engineer</span>
              </div>
            </div>

            <div className="article-meta-divider" />

            <div className="article-date">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Translation Button */}
          <div className="article-translation">
            <button
              type="button"
              className="article-translation-button"
              onClick={() => setIsBangla((prev) => !prev)}
            >
              {isBangla
                ? "🇬🇧 Read in English"
                : "🇧🇩 বাংলায় দেখুন"}
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="article-container">
        {/* Cover Image */}
        <div
          id="article-start"
          className="article-cover-wrapper"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="article-cover"
          />
        </div>

        <div className="article-layout">
          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="article-sidebar-inner">
              <span>
                {isBangla
                  ? "এই আর্টিকেলে"
                  : "IN THIS ARTICLE"}
              </span>

              <div className="article-sidebar-line" />

              {headingBlocks.map((block) => (
                <a
                  key={block.originalIndex}
                  href={`#section-${block.originalIndex}`}
                  className="article-sidebar-item"
                >
                  {block.text}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Article */}
          <article className="article-content">
            {displayedContent.map(renderContentBlock)}

            {/* Tags */}
            {blog.tags?.length > 0 && (
              <div className="article-tags">
                {blog.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </article>
        </div>

        {/* Previous / Next Article */}
        <ArticleNavigation
          previous={previous}
          next={next}
        />
      </div>
    </main>
  );
}

export default BlogPost;