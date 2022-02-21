function ProgressBar({ progress }) {
  let progressValue = progress.toString() + "%";
  return (
    <div className="progress-bar">
      <div className="back-progress"></div>
      <div className="front-progress " style={{ width: progressValue }}></div>
    </div>
  );
}

export default ProgressBar;
