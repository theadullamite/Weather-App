
import './VideoBackground.css'; // Import the styles

function VideoBackground() {
  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
        <source src="https://pikbest.com/video/rain-drops-on-leaves-of-the-plants_10627125.html" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;
