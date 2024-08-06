import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogPost = ({ post }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
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
          <motion.p
            className="blog-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {post.date}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/blog-single" className="blog-title">
              {post.title}
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="blog-footer-info"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/blog-single" className="more-btn">
            DEVAMINI OKU
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

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
      <div className="container mb-10">
        <motion.div
          className="center-section-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="ak-section-heading ak-style-1">
            <div className="text-md-center">
              <motion.h2
                className="ak-section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Blog / Haberler
              </motion.h2>
              <motion.p
                className="ak-section-subtitle "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Anka Grup, araç bakımı ve onarımı hakkında en son haberleri ve
                ipuçlarını paylaşır.
              </motion.p>
            </div>
          </div>
        </motion.div>
        <div className="h-[50px] lg:h-[50px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-4">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogNews;
