import "./Video.css";

function Video() {
  const videos = [
    "https://www.youtube.com/embed/QnqX51KEk40",
    "https://www.youtube.com/embed/Lr4FSwSRuNU",
    "https://www.youtube.com/embed/HA_461HmAuc",
    "https://www.youtube.com/embed/P4XaOQKaBpI",
  ];

  return (
    <div className="video-container">
      {videos.map((video) => (
        <iframe
          className="video"
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}

export default Video;
