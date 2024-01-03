import BlogCard from "@/components/BlogCard/blogCard";
import styles from "./page.module.css";
import HeroCarousel from "@/components/HeroCarousel/heroCarousel";
import { fetchDataFromApi } from "@/utils/api";

export async function getCarousalBlog() {
  const data = await fetchDataFromApi("/api/pages/6?populate=*");

  return data;
}
export async function getBlog() {
  const data = await fetchDataFromApi(
    "/api/pages/5?populate[0]=blogs&populate[1]=blogs.categories"
  );

  return data;
}

export default async function Page() {
  const CarousalBlog = await getCarousalBlog();
  const Blog = await getBlog();

  return (
    <>
      <div className={styles.page}>
        <section className={styles.topSection}>
          <HeroCarousel data={CarousalBlog.data.attributes.blogs.data} />
        </section>
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            Latest Blogs&nbsp;&nbsp;
            <span className={styles.sectionHead2}>check this out!</span>
          </div>
          <BlogCard data={Blog.data.attributes.blogs.data} />
        </section>
      </div>
    </>
  );
}
