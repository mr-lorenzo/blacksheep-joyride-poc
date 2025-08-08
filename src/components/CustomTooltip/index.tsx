import type { TooltipRenderProps } from "react-joyride";
import Button from "../Button";

// Custom Tour Component
const CustomTourTooltip = ({
  step,
  tooltipProps,
  isLastStep,
  backProps,
  closeProps,
  primaryProps,
  skipProps,
}: TooltipRenderProps) => {
  return (
    <div
      {...tooltipProps}
      className="custom-tooltip"
      style={{
        backgroundColor: "#2c3e50",
        borderRadius: "8px",
        padding: "20px",
        color: "white",
        maxWidth: "300px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        border: "2px solid #3498db",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ margin: "0 0 10px 0", color: "#3498db" }}>{step.title}</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="max.jpeg"
            alt="{step.title}"
            style={{ width: "10rem", height: "10rem", objectFit: "contain", margin: "1rem 0" }}
          />
        </div>
        <p style={{ margin: 0, lineHeight: "1.5" }}>{step.content}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <Button onClick={backProps.onClick} variant="tertiary">
            Back
          </Button>
          <button {...skipProps}>Skip</button>
        </div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <Button onClick={primaryProps.onClick}>
            {isLastStep ? "Finish" : "Next"}
          </Button>
          <Button onClick={closeProps.onClick} variant="secondary">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomTourTooltip;
