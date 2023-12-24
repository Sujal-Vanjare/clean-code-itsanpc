"use client";

import styles from "./views.module.css";
// views.jsx
import { useEffect, useState } from "react";
import { putDataToApi } from "@/utils/api";

export default function Views(props) {
  // Use 0 as the default value if props.views is undefined
  const [viewCount, setViewCount] = useState(props.views || 0);

  useEffect(() => {
    // Increment view count when the component mounts
    incrementViews();
  }, [props.id]);

  const incrementViews = async () => {
    try {
      // Increment views using the API
      const response = await putDataToApi(`/api/blogs/${props.id}`, {
        data: {
          view_count: viewCount + 1,
        },
      });

      if (response.data) {
        // Update the local state with the updated view count
        setViewCount(response.data.attributes.view_count);
      } else {
        console.error("Failed to update views:", response.error.message);
      }
    } catch (error) {
      console.error("Error updating views:", error.message);
    }
  };

  return <div>{viewCount.toLocaleString()} Views</div>;
}
