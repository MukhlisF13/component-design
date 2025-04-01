const Comment = ({ username, profilePic, commentText, timestamp, likes, replies }) => {
  return (
    <div className="flex space-x-3 p-2 bg-gray-900 rounded-lg">
      <img src={profilePic} alt={username} className="w-10 h-10 rounded-full" />
      <div>
        <p className="text-white font-semibold">{username} <span className="text-gray-500 text-xs">• {timestamp}</span></p>
        <p className="text-gray-300 text-sm">{commentText}</p>
        <div className="text-gray-500 text-xs flex space-x-2">
          <span>👍 {likes}</span>
          <span>💬 {replies} replies</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
