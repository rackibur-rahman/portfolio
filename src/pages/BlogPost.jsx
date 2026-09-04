import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { blogs, getBlogBySlug } from "../data/blogs";

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
  const [translatedArticle, setTranslatedArticle] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState(false);

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

  const article = translatedArticle || blog;

  const headingBlocks = article.content
    .map((block, index) => ({
      ...block,
      originalIndex: index,
    }))
    .filter((block) => block.type === "heading");

  const handleTranslation = async () => {
    if (translatedArticle) {
      setIsBangla(!isBangla);
      return;
    }

    setIsTranslating(true);
    setTranslationError(false);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article: {
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Translation failed"
        );
      }

      setTranslatedArticle(data.article);
      setIsBangla(true);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslationError(true);
    } finally {
      setIsTranslating(false);
    }
  };

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

          <h1>{isBangla ? article.title : blog.title}</h1>

          <p className="article-excerpt">
            {isBangla
              ? article.excerpt
              : blog.excerpt}
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
              onClick={handleTranslation}
              disabled={isTranslating}
            >
              {isTranslating ? (
                <>
                  <span className="translation-spinner" />
                  Translating...
                </>
              ) : isBangla ? (
                <>🇬🇧 Read in English</>
              ) : (
                <>🇧🇩 বাংলায় দেখুন</>
              )}
            </button>

            {translationError && (
              <p className="translation-error">
                Translation failed. Please try again.
              </p>
            )}
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
            {article.content.map(renderContentBlock)}

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