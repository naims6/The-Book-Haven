import React from "react";
import { formatDistanceToNow } from "date-fns";
const CommentItem = ({ comment }) => {
  const timeAgo = formatDistanceToNow(new Date(comment?.timestamp), {
    addSuffix: true,
  });

  return (
    <div key={comment.id} className="bg-surface p-6 rounded-lg shadow">
      <div className="flex gap-4">
        <img
          src={comment.userImage}
          alt={comment.userName}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg">{comment.userName}</h3>
            <span className="text-sm">• {timeAgo}</span>
          </div>
          <p className="leading-relaxed">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
