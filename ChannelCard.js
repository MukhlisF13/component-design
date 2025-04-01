const ChannelCard = ({ channelName, profilePic, subscribers, channelUrl, description }) => {
  return (
    <div className="w-72 bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
      <img src={profilePic} alt={channelName} className="w-16 h-16 rounded-full mr-3" />
      <div>
        <a href={channelUrl} className="text-white font-semibold hover:underline">{channelName}</a>
        <p className="text-gray-400 text-sm">{subscribers} subscribers</p>
        <p className="text-gray-500 text-xs truncate">{description}</p>
      </div>
    </div>
  );
};

export default ChannelCard;
