import "./Video.css";

function Video() {
  return (
    <div className="video-container">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/QnqX51KEk40"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/Lr4FSwSRuNU"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/HA_461HmAuc"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/P4XaOQKaBpI"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
