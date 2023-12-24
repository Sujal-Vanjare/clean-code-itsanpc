"use client";
// Import necessary dependencies
import { useEffect, useState } from "react";
import styles from "./likes.module.css";
import { putDataToApi } from "@/utils/api";

export default function Likes(props) {
  const [likes, setLikes] = useState(props.like);
  const [dislikes, setDislikes] = useState(props.dislike);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const likedStatus = localStorage.getItem(`liked_${props.id}`);
    const dislikedStatus = localStorage.getItem(`disliked_${props.id}`);

    if (likedStatus === "true") {
      setIsLiked(true);
    }

    if (dislikedStatus === "true") {
      setIsDisliked(true);
    }

    setLoading(false);
  }, [props.id]);

  const handleLikeClick = async () => {
    if (!isLiked && !isDisliked && !loading) {
      const newLikes = likes + 1;

      try {
        const response = await putDataToApi(`/api/blogs/${props.id}`, {
          data: {
            likes: newLikes,
          },
        });

        if (response.data) {
          setLikes(response.data.attributes.likes);
          setIsLiked(true);

          // Remove dislike status if user switches from dislike to like
          setIsDisliked(false);
          localStorage.setItem(`liked_${props.id}`, "true");
          localStorage.removeItem(`disliked_${props.id}`);
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
        const response = await putDataToApi(`/api/blogs/${props.id}`, {
          data: {
            likes: newLikes,
          },
        });

        if (response.data) {
          setLikes(response.data.attributes.likes);
          setIsLiked(false);

          // Remove like status if user unlikes
          localStorage.removeItem(`liked_${props.id}`);
        } else {
          console.error("Failed to update likes:", response.error.message);
        }
      } catch (error) {
        console.error("Error updating likes:", error.message);
      }
    }
  };

  const handleDislikeClick = async () => {
    if (!isLiked && !isDisliked && !loading) {
      const newDislikes = dislikes + 1;

      try {
        const response = await putDataToApi(`/api/blogs/${props.id}`, {
          data: {
            dislikes: newDislikes,
          },
        });

        if (response.data) {
          setDislikes(response.data.attributes.dislikes);
          setIsDisliked(true);

          // Remove like status if user switches from like to dislike
          setIsLiked(false);
          localStorage.setItem(`disliked_${props.id}`, "true");
          localStorage.removeItem(`liked_${props.id}`);
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
        const response = await putDataToApi(`/api/blogs/${props.id}`, {
          data: {
            dislikes: newDislikes,
          },
        });

        if (response.data) {
          setDislikes(response.data.attributes.dislikes);
          setIsDisliked(false);

          // Remove dislike status if user undislikes
          localStorage.removeItem(`disliked_${props.id}`);
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
