import VideoItem from './VideoItem';

const VideoList = ({videos, handleVideoSelect}) => {
    const listOfVideo = videos.map((video, id) => <VideoItem handleVideoSelect={handleVideoSelect} key={id} video={video} />);

    return (
        <div className="videos-container">
            {listOfVideo}
        </div>
    );
}
 
export default VideoList;