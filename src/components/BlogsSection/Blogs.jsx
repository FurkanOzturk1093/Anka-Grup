import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogNews = () => {
  const blogPosts = [
    {
      id: 1,
      date: "17.10.2023",
      title: "Düzenli Araç Bakımının Önemi",
      image: "/assets/img/blog_3.jpg",
    },
    {
      id: 2,
      date: "05.11.2023",
      title: "Güvenilirliğe Giden Yol: Temel Araç Bakım İpuçları",
      image: "/assets/img/blog_1.jpg",
    },
    {
      id: 3,
      date: "12.11.2023",
      title: "Garajdan Zafer Yolu: Araç Sağlığınızı Dönüştürün",
      image: "/assets/img/blog_2.jpg",
    },
  ];

  return (
    <>
      <div className="ak-height-160 ak-height-lg-50"></div>
      <div className="container">
        <div className="center-section-heading">
          <div className="ak-section-heading ak-style-1">
            <div className="background-text">Blog / Haberler</div>
            <div className="text-md-center">
              <h2 className="ak-section-title">Blog / Haberler</h2>
              <p className="ak-section-subtitle">
                Anka Grup, araç bakımı ve onarımı hakkında en son haberleri ve
                ipuçlarını paylaşır.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[50px] lg:h-[50px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="h-full">
              <div className="blog-card">
                <Link href="/blog-single">
                  <div className="blog-header-info">
                    <Image
                      src={post.image}
                      alt="Blog gönderisi"
                      width={400}
                      height={250}
                    />
                  </div>
                </Link>
                <div className="blog-body-info">
                  <p className="blog-text">{post.date}</p>
                  <Link href="/blog-single" className="blog-title">
                    {post.title}
                  </Link>
                </div>
                <div className="blog-footer-info">
                  <Link href="/blog-single" className="more-btn">
                    DEVAMINI OKU
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogNews;
