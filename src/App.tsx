import { useState, useCallback } from "react";
import Joyride, { STATUS, EVENTS } from "react-joyride";
import type { CallBackProps } from "react-joyride";
import "./App.css";
import CustomTourTooltip from "./components/CustomTooltip";
import { steps } from "./constants/yoyrideConfig";
import MockedPage from "./components/MockedPage";

function App() {
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = useCallback((data: CallBackProps) => {
    const { action, index, status, type } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      setStepIndex(index + (action === "prev" ? -1 : 1));
    }
  }, []);

  const handleStartTour = () => {
    setRun(true);
    setStepIndex(0);
  };

  return (
    <div className="app-container">
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        hideBackButton
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={steps}
        run={run}
        stepIndex={stepIndex}
        tooltipComponent={CustomTourTooltip}
        styles={{
          options: {
            primaryColor: "#3498db",
            zIndex: 1000,
          },
        }}
      />
      <MockedPage onStartTour={handleStartTour} />
    </div>
  );
}

export default App;
