"use client";
import { useEffect, useState } from "react";
import styles from "./likes.module.css";
import { fetchDataFromApi, putDataToApi } from "@/utils/api";

export default function Likes(props) {
  // for Like & Dislike Numbers Data
  const [likes, setLikes] = useState("..");
  const [dislikes, setDislikes] = useState("..");

  // for Like & Dislike Images active or not
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  //
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API for the specified blogId, including likes and dislikes.
    fetchDataFromApi(
      `/api/blogs/${props.blogId}?fields[0]=likes&fields[1]=dislikes`
    )
      .then((data) => {
        // Set the 'likes' state with the fetched value or default to 0 if falsy.
        setLikes(data.data.attributes.likes || 0);
        // Set the 'dislikes' state with the fetched value or default to 0 if falsy.
        setDislikes(data.data.attributes.dislikes || 0);

        // Retrieve liked and disliked status from local storage based on the blogId.
        const likedStatus = localStorage.getItem(`liked_${props.blogId}`);
        const dislikedStatus = localStorage.getItem(`disliked_${props.blogId}`);

        // If the liked status is 'true', set the 'isLiked' state to true.
        if (likedStatus === "true") {
          setIsLiked(true);
        }

        // If the disliked status is 'true', set the 'isDisliked' state to true.
        if (dislikedStatus === "true") {
          setIsDisliked(true);
        }

        // Set loading to false since data fetching is completed.
        setLoading(false);
      })
      .catch((error) => {
        // Log an error message if there is a failure in fetching like and dislike counts.
        console.error("Failed to fetch like and dislike counts", error);
        // Set loading to false even if there is an error to indicate that the loading is complete.
        setLoading(false);
      });
  }, [props.blogId]); // useEffect will run whenever the value of props.blogId changes.

  // For Like
  const handleLikeClick = async () => {
    // Check if the user hasn't already liked, disliked, and if there's no ongoing loading operation
    if (!isLiked && !isDisliked && !loading) {
      // Increment the likes count
      const newLikes = likes + 1;

      try {
        // Send a PUT request to update the likes count on the server
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            likes: newLikes,
          },
        });

        // If the request is successful, update state and local storage
        if (response.data) {
          setLikes(response.data.attributes.likes);
          setIsLiked(true);

          // Remove dislike status if user switches from dislike to like
          setIsDisliked(false);
          localStorage.setItem(`liked_${props.blogId}`, "true");
          localStorage.removeItem(`disliked_${props.blogId}`);
        } else {
          console.error("Failed to update likes:", response.error.message);
        }
      } catch (error) {
        console.error("Error updating likes:", error.message);
      }
    } else if (isLiked && !loading) {
      // If already liked, remove the like
      const newLikes = likes - 1;

      try {
        // Send a PUT request to update the likes count on the server
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            likes: newLikes,
          },
        });

        // If the request is successful, update state and local storage
        if (response.data) {
          setLikes(response.data.attributes.likes);
          setIsLiked(false);

          // Remove like status if user unlikes
          localStorage.removeItem(`liked_${props.blogId}`);
        } else {
          console.error("Failed to update likes:", response.error.message);
        }
      } catch (error) {
        console.error("Error updating likes:", error.message);
      }
    }
  };

  // For Dislike
  const handleDislikeClick = async () => {
    // Check if the user hasn't already liked, disliked, and if there's no ongoing loading operation
    if (!isLiked && !isDisliked && !loading) {
      // Increment the dislikes count
      const newDislikes = dislikes + 1;

      try {
        // Send a PUT request to update the dislikes count on the server
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            dislikes: newDislikes,
          },
        });

        // If the request is successful, update state and local storage
        if (response.data) {
          setDislikes(response.data.attributes.dislikes);
          setIsDisliked(true);

          // Remove like status if user switches from like to dislike
          setIsLiked(false);
          localStorage.setItem(`disliked_${props.blogId}`, "true");
          localStorage.removeItem(`liked_${props.blogId}`);
        } else {
          console.error("Failed to update dislikes:", response.error.message);
        }
      } catch (error) {
        console.error("Error updating dislikes:", error.message);
      }
    } else if (isDisliked && !loading) {
      // If already disliked, remove the dislike
      const newDislikes = dislikes - 1;

      try {
        // Send a PUT request to update the dislikes count on the server
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            dislikes: newDislikes,
          },
        });

        // If the request is successful, update state and local storage
        if (response.data) {
          setDislikes(response.data.attributes.dislikes);
          setIsDisliked(false);

          // Remove dislike status if user undislikes
          localStorage.removeItem(`disliked_${props.blogId}`);
        } else {
          console.error("Failed to update dislikes:", response.error.message);
        }
      } catch (error) {
        console.error("Error updating dislikes:", error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.likes} onClick={handleLikeClick}>
        <img
          src={isLiked ? "/like-active.svg" : "/like.svg"}
          alt="like icon"
          className={styles.icon}
        />
        <div className={styles.likeText}>{likes.toLocaleString()}</div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.dislikes} onClick={handleDislikeClick}>
        <img
          src={isDisliked ? "/dislike-active.svg" : "/dislike.svg"}
          alt="dislike icon"
          className={styles.icon}
        />
        <div className={styles.likeText}>{dislikes.toLocaleString()}</div>
      </div>
    </div>
  );
}
