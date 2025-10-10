import BlogCard from "./BlogCard";
import SectionHeader from "../../commonComp/SectionHeader";

const BlogMain = ({data}) => {
  return (
    <>
      <div className="astro_main_Section blog_section_main my-md-5 my-5">
        <div className="container my-md-5 my-3">
          <div className="cate_header">
            <SectionHeader title="Our Blog" />
          </div>
          <BlogCard blog={data}/>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
