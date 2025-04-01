const VideoCard = ({ thumbnail, title, channel, views, uploadTime, duration, videoUrl }) => {
  return (
    <div className="w-80 bg-gray-800 p-3 rounded-lg shadow-lg">
      <a href={videoUrl}>
        <img src={thumbnail} alt={title} className="w-full rounded-md" />
      </a>
      <div className="mt-2">
        <h3 className="text-white font-bold truncate">{title}</h3>
        <p className="text-gray-400 text-sm">{channel} • {views} views • {uploadTime}</p>
        <p className="text-gray-500 text-xs">Duration: {duration}</p>
      </div>
    </div>
  );
};

export default VideoCard;
