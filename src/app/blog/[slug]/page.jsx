import { fetchDataFromApi } from "@/utils/api";
import Image from "next/image";
import SidebarHighlight from "@/components/SidebarHighlight/sidebarHighlight";
import Likes from "@/components/Likes/likes";
import Links from "@/components/Links/links";
import Views from "@/components/ViewsCount/views";

export async function generateStaticParams() {
  const blog = await fetchDataFromApi("/api/blogs?populate=*");

  return blog?.data?.map((blog) => ({
    slug: blog.attributes.slug,
  }));
}

export async function getBlog(slug) {
  const blog = await fetchDataFromApi(
    `/api/blogs?populate=*&filters[slug][$eq]=${slug}`
  );

  return blog;
}

export default async function Page({ params }) {
  const blog = await getBlog(params.slug);
  const blogId = blog?.data?.[0]?.id;
  const data = blog?.data?.[0]?.attributes;
  const contentInCode = data?.content_in_code;

  return (
    <main>
      <div className="blogContainer">
        <article className="article">
          <header className="hero">
            <div className="category-container">
              <div className="categories">
                {data?.categories?.data &&
                  data?.categories?.data
                    .map((category) => category.attributes.name)
                    .join(", ")}
              </div>
              <div>{data?.read_time} min read</div>
            </div>

            <div className="time-container">
              <div>
                Published on{" "}
                <time className="time" dateTime="2023-01-15T10:30:00Z">
                  {data?.date}
                </time>{" "}
              </div>
              <div>
                by <span className="author">{data?.author}</span>
              </div>
            </div>

            <h1 className="title">{data?.title}</h1>
            <h3 className="subtitle">{data?.subtitle}</h3>
            <div className="link-container">
              <Links />
              <div className="like-container">
                <Likes
                  like={data?.likes}
                  dislike={data?.dislikes}
                  id={blogId}
                />
                <Views views={data?.view_count} id={blogId} />
              </div>
            </div>
          </header>

          <Image
            className="main-img"
            src={data?.main_img_url}
            alt="main image"
            width={1200}
            height={675}
            priority
          />
          {contentInCode && (
            <div dangerouslySetInnerHTML={{ __html: contentInCode }} />
          )}
        </article>
        <div className="highlight-container">
          <SidebarHighlight sections={data?.sections} />
        </div>
      </div>
    </main>
  );
}
