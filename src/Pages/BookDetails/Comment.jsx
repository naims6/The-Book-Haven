import React, { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthContex";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";

import toast from "react-hot-toast";
import CommentItem from "./CommentItem";

const Comment = ({ bookId }) => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();
  const [commentText, setCommentText] = useState("");
  const [usersComments, setUsersComments] = useState([]);

  const handleUserComment = () => {
    if (!commentText) {
      return;
    }

    const userComment = {
      bookId,
      userName: user.displayName,
      userImage: user.photoURL,
      comment: commentText,
      timestamp: new Date().toISOString(),
    };

    axiosInstance.post("/comments", userComment).then((data) => {
      if (data?.data?.insertedId) {
        setUsersComments([userComment, ...usersComments]);
        toast.success("your comment posted");
        setCommentText("");
      }
    });
  };

  useEffect(() => {
    axiosInstance.get(`comments/${bookId}`).then((data) => {
      setUsersComments(data.data);
    });
  }, [axiosInstance, bookId]);

  return (
    <div className="mt-16 border-t pt-12">
      <h2 className="text-3xl font-bold mb-8">Comments</h2>

      {/* Comment Form */}
      <div className="mb-8 bg-surface p-6 rounded-lg shadow">
        <div className="flex gap-4">
          <img
            src={user.photoURL}
            alt="Your profile image"
            className="size-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              placeholder="Share your thoughts about this book..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full p-3 border-2 rounded-lg min-h-[100px] resize-none focus:outline-none focus:border-blue-600"
            />
            <button
              disabled={commentText ? false : true}
              onClick={handleUserComment}
              className={`mt-3 px-6 py-2 text-white cursor-pointer rounded-lg font-semibold ${
                commentText ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600/60"
              }`}
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {usersComments.length === 0 ? (
          <h1>No Comments for this book</h1>
        ) : (
          usersComments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default Comment;
