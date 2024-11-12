import "./ProgressBar.css";

type Props = {
  progress: number;
};

function ProgressBar({ progress }: Props) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
