"use client";

import styles from "./views.module.css";
import { useEffect, useState } from "react";
import { putDataToApi } from "@/utils/api";

export default function Views(props) {
  const [viewCount, setViewCount] = useState(props.views || 0);

  useEffect(() => {
    incrementViews();
  }, [props.id]);

  const incrementViews = async () => {
    try {
      const response = await putDataToApi(`/api/blogs/${props.id}`, {
        data: {
          view_count: viewCount + 1,
        },
      });

      if (response.data) {
        setViewCount(response.data.attributes.view_count);
      } else {
        console.error("Failed to update views:", response.error.message);
      }
    } catch (error) {
      console.error("Error updating views:", error.message);
    }
  };

  return (
    <div className={styles.viewText}>{viewCount.toLocaleString()} Views</div>
  );
}
