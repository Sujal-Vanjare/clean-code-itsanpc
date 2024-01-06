"use client";

import styles from "./views.module.css";
import { useEffect, useState } from "react";
import { fetchDataFromApi, putDataToApi } from "@/utils/api";

export default function Views(props) {
  const [viewCount, setViewCount] = useState("");

  useEffect(() => {
    // Fetch the current view count
    fetchDataFromApi(`/api/blogs/${props.blogId}?fields[0]=view_count`)
      .then((data) => {
        setViewCount(data.data.attributes.view_count);

        // Increment the view count and update it in the backend
        const updatedViewCount = data.data.attributes.view_count + 1;
        return putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            view_count: updatedViewCount,
          },
        });
      })
      .then((updatedData) => {
        // Update the view count in the state
        setViewCount(updatedData.data.attributes.view_count);
      })
      .catch((error) => {
        console.error("Failed to fetch or update View Count", error);
      });
  }, [props.blogId]);

  return (
    <div className={styles.viewText}>{viewCount.toLocaleString()} Views</div>
  );
}
