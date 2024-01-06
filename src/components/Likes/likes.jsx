"use client";
import { useEffect, useState } from "react";
import styles from "./likes.module.css";
import { fetchDataFromApi, putDataToApi } from "@/utils/api";

export default function Likes(props) {
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromApi(
      `/api/blogs/${props.blogId}?fields[0]=likes&fields[1]=dislikes`
    )
      .then((data) => {
        setLikes(data.data.attributes.likes || 0);
        setDislikes(data.data.attributes.dislikes || 0);

        const likedStatus = localStorage.getItem(`liked_${props.blogId}`);
        const dislikedStatus = localStorage.getItem(`disliked_${props.blogId}`);

        if (likedStatus === "true") {
          setIsLiked(true);
        }

        if (dislikedStatus === "true") {
          setIsDisliked(true);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch like and dislike counts", error);
        setLoading(false);
      });
  }, [props.blogId]);

  const handleLikeClick = async () => {
    if (!isLiked && !isDisliked && !loading) {
      const newLikes = likes + 1;

      try {
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            likes: newLikes,
          },
        });

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
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            likes: newLikes,
          },
        });

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

  const handleDislikeClick = async () => {
    if (!isLiked && !isDisliked && !loading) {
      const newDislikes = dislikes + 1;

      try {
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            dislikes: newDislikes,
          },
        });

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
        const response = await putDataToApi(`/api/blogs/${props.blogId}`, {
          data: {
            dislikes: newDislikes,
          },
        });

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
