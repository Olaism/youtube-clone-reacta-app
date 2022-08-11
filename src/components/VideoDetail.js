const VideoDetail = ({video}) => {
    if (!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <>
            <iframe src={videoSrc} frameBorder="0" height="100%" width="100%" title="Video player"></iframe>
            {/* <Paper elevation={6} className="video-detail">
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
            </Paper> */}
        </>
    );
}
 
export default VideoDetail;