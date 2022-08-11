const VideoItem = ({video, handleVideoSelect}) => {
    console.log(video);
    return (
        <div className="video-list-item" onClick={() => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className="video-list-item-detail">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
            </div>
        </div>
    );
}
 
export default VideoItem;