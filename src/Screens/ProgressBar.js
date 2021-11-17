import { useAuth } from "../Context/auth-context";

const ProgressBar = () => {
  const {
    stepInfo: { progress },
  } = useAuth();

  return (
    <div class="progress-wrapper">
      <div class="progress-info">
        <div class="progress-label">
          <span>Task completed</span>
        </div>
        <div class="progress-percentage">
          <span>{progress}</span>
        </div>
      </div>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
