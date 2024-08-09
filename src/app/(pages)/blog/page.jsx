"use client";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  const posts = useSelector((state) => state.blog.posts);

  return (
    <div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <div className="common-page-title">
          <h3 className="page-title">Blog Sayfası</h3>
          <div className="d-flex gap-2 align-items-center">
            <p>Anasayfa /</p>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="primary-color-border"></div>
      </div>

      <div className="ak-height-75 ak-height-lg-80"></div>
      <section className="container">
        <div className="blog-feature">
          {posts.length > 0 && (
            <>
              <div className="feature-content">
                <p className="data">{posts[0].date}</p>
                <h4 className="title">{posts[0].title}</h4>
                <p className="desp">{posts[0].description[0]}...</p>
                <Link href={`/blog/${posts[0].slug}`} className="more-btn">
                  DEVAMI OKU
                </Link>
              </div>
              <div className="feature-img">
                <Image
                  src={posts[0].imageUrl}
                  className="ak-bg"
                  alt="..."
                  width={600}
                  height={400}
                />
              </div>
            </>
          )}
        </div>
      </section>

      <div className="ak-height-50 ak-height-lg-50"></div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 g-lg-4 pagination-wrapper">
          {posts.slice(1).map((post) => (
            <div className="col" key={post.id}>
              <div className="blog-card">
                <Link href={`/blog/${post.slug}`}>
                  <div className="blog-header-info">
                    <Image
                      src={post.imageUrl}
                      alt="..."
                      width={600}
                      height={400}
                    />
                  </div>
                </Link>
                <div className="blog-body-info">
                  <p className="blog-text">{post.date}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-title">
                    {post.title}
                  </Link>
                </div>
                <div className="blog-footer-info">
                  <Link href={`/blog/${post.slug}`} className="more-btn">
                    DEVAMI OKU
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ak-height-100 ak-height-lg-60"></div>
        <div id="pagination-container" className="pagination-style"></div>
      </div>
    </div>
  );
};

export default BlogPage;
