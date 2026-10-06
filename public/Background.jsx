function VideoBackground() {
  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://pixabay.com/videos/download/video-281814_medium.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoBackground;
