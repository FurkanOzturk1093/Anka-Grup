"use client";
import React from "react";
import Image from "next/image";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
const SingleBlogPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const posts = useSelector((state) => state.blog.posts);
  const post = posts.find((post) => pathname === `/blog/${post.slug}`);

  const similarBlogs = useSelector((state) => state.blog.posts)
    .filter((blog) => blog.id !== post.id)
    .slice(0, 3);

  return (
    <div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="common-page-title">
            <h3 className="page-title">{post.title}</h3>
            <div className="d-flex gap-2 align-items-center">
              <p>Ana Sayfa /</p>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div className="pb-5 pb-md-0">
            <div className="next-prev-btn">
              <button
                className="prev-btn button"
                onClick={() => {
                  // route to previous blog
                  // get current blog id

                  const currentBlogId = post.id;
                  const lastBlogId = posts[posts.length - 1].id;
                  const firstBlogId = posts[0].id;
                  const previousBlogId =
                    currentBlogId - 1 > firstBlogId
                      ? currentBlogId - 1
                      : lastBlogId;
                  // get previous blog id
                  // route to previous blog
                  router.push(
                    `/blog/${
                      posts.find((post) => post.id === previousBlogId).slug
                    }`
                  );
                }}
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                className="next-btn button"
                onClick={() => {
                  // route to next blog
                  // get current blog id
                  const currentBlogId = post.id;
                  const lastBlogId = posts[posts.length - 1].id;
                  const firstBlogId = posts[0].id;
                  const nextBlogId =
                    currentBlogId + 1 <= lastBlogId
                      ? currentBlogId + 1
                      : firstBlogId;
                  // get next blog id
                  // route to next blog
                  router.push(
                    `/blog/${posts.find((post) => post.id === nextBlogId).slug}`
                  );
                }}
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="primary-color-border"></div>
      </div>

      <div className="ak-height-75 ak-height-lg-80"></div>
      <div className="container container-customize">
        <div>
          <div className="time-title">
            <p className="time">17.10.2023</p>
            <h4 className="title">{post.title}</h4>
            <div className="ak-height-50 ak-height-lg-30"></div>
          </div>
          <div>
            <Image
              src={post.imageUrl}
              className="img-fluid"
              alt="Single Blog"
              width={800}
              height={500}
            />
            <div className="ak-height-50 ak-height-lg-30"></div>
          </div>

          <div>
            <p className="desp"></p>
            <div className="ak-height-50 ak-height-lg-30"></div>
          </div>
        </div>
        {post.description.map((desc, index) => (
          <div className="single-blog-list" key={index}>
            <h4 className="single-blog-title">
              {index + 1}.
              {desc
                .split(",")[0]
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h4>

            <p className="single-blog-desp">{desc}</p>
          </div>
        ))}

        <div>
          <div className="primary-color-border"></div>

          <div className="mt-3">
            <div className="d-flex align-items-center">
              <p className="me-5">Sosyal Paylaşım:</p>
              <div className="social-icon">
                <a href="#">
                  <FaFacebook size={16} />
                </a>
                <a href="#">
                  <FaInstagram size={16} />
                </a>
                <a href="#">
                  <FaLinkedin size={16} />
                </a>
                <a href="#">
                  <FaTwitch size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-125 ak-height-lg-80"></div>
        <div className="single-blog-list">
          <h4 className="single-blog-title">Yorum (0)</h4>
          <p className="single-blog-desp">Henüz Yorum Yok! Yorum kutusu boş!</p>
        </div>
        <div className="ak-height-75 ak-height-lg-30"></div>
        <div className="post-from">
          <h2 className="contact-form-title ak-white-color text-uppercase">
            Bir Yorum Yapın
          </h2>
          <div className="ak-height-25 ak-height-lg-20"></div>
          <div className="contact-form">
            <form>
              <div className="from-inputs">
                <input
                  placeholder="Ad"
                  type="text"
                  name="firstname"
                  id="firstname"
                />
                <input
                  placeholder="E-posta"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="from-textarea">
                <textarea
                  name="textarea"
                  rows={5}
                  placeholder="Yorum"
                ></textarea>
              </div>
              <div className="ak-height-40 ak-height-lg-20"></div>
              <button type="submit" variant="primary">
                YORUMU GÖNDER
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container mb-5">
        <div className="center-section-heading">
          <div className="ak-section-heading ak-style-1 ak-type-1">
            <h2 className="ak-section-title">BENZER BLOGLAR</h2>
            <p className="ak-section-subtitle">
              Daha fazla ilginizi çekebilecek bloglar
            </p>
          </div>
        </div>
        <div className="ak-height-50 ak-height-lg-50"></div>
        <div className="blog">
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 g-lg-4 pagination-wrapper">
            {similarBlogs.map((post) => (
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
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
