import React, { useEffect, useState } from "react";
import HeaderBreadcrumb from "../../HeaderBreadcrumb";
import SectionHeader from "../../commonComp/SectionHeader";
import { useParams } from "react-router-dom";
import { apiService } from "../../../services/apiService";
import { blog_details } from "../../../utils/api-endpoints";
import { formatSingleDate } from "../../../utils/formate-date";
import { getImageUrl } from "../../../utils/getImageUrl";

const BlogDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await apiService(`${blog_details}/${id}`, "get");

        if (response?.success && response?.data) {
          setData(response.data);
        } else {
          setError("No blog details found.");
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError("Failed to load blog details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlogDetails();
  }, [id]);

  if (loading)
    return (
      <div className="loader set-height">
        <div className="box box-1">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-2">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-3">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
        <div className="box box-4">
          <div className="side-left"></div>
          <div className="side-right"></div>
          <div className="side-top"></div>
        </div>
      </div>
    );
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;
  if (!data) return null;

  return (
    <>
      <HeaderBreadcrumb />
      <div className="container blog_details_page">
        <SectionHeader title={data.title || "Blog Details"} />

        <p className="blog_date">
          {formatSingleDate(data.createdAt, true)}{" "}
          <span>{data.publish_by || "Admin"}</span>
        </p>

        <div className="row blog_detail_main">
          <div className="col-12">
            {data.coverImage && (
              <div className="blog_detail_img mb-4">
                <img
                  src={getImageUrl(data.coverImage)}
                  alt={data.title || "Blog Cover"}
                  className="img-fluid rounded"
                />
              </div>
            )}

            {data.summary && <h3 className="mb-3">{data.summary}</h3>}

            {/* Safely render HTML content */}
            {data.contentHTML ? (
              <div
                className="blog_content"
                dangerouslySetInnerHTML={{ __html: data.contentHTML }}
              />
            ) : (
              <p>No content available.</p>
            )}

            {data.tags && (
              <p className="mt-4">
                <strong>Tags:</strong> {data.tags}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
