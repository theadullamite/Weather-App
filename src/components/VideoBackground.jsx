function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source
        src="/VID-20261007-WA0000.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default VideoBackground;
