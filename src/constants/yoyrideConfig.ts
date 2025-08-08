import type { Step } from "react-joyride";

export const steps: Step[] = [
  {
    target: ".welcome-header",
    content:
      "Welcome to our Dashboard! Let me show you around this amazing interface.",
    title: "Welcome! 👋",
    placement: "bottom",
    disableBeacon: true,
  },
  {
    target: ".stats-section",
    content:
      "Here you can see all your key metrics at a glance. Each card shows important data about your business.",
    title: "Key Metrics 📊",
    placement: "bottom",
  },
  {
    target: ".user-card",
    content:
      "This shows your total number of active users. You can click on it to see detailed user analytics.",
    title: "User Statistics 👥",
    placement: "right",
  },
  {
    target: ".project-card",
    content:
      "Track all your active projects here. This number updates in real-time as projects are created or completed.",
    title: "Project Management 📁",
    placement: "left",
  },
  {
    target: ".task-card",
    content: "Monitor your task completion rate and see what needs attention.",
    title: "Task Overview ✅",
    placement: "top",
  },
  {
    target: ".revenue-card",
    content:
      "Your revenue tracking - this is the most important metric for your business growth!",
    title: "Revenue Tracking 💰",
    placement: "bottom",
  },
  {
    target: ".action-buttons",
    content:
      'Use these buttons to perform common actions. The "Add New" button creates new items, and "Export Data" downloads your reports.',
    title: "Quick Actions ⚡",
    placement: "top",
  },
  {
    target: ".data-table",
    content:
      "This table shows recent activity across your platform. It helps you stay updated on what's happening.",
    title: "Activity Feed 📋",
    placement: "top",
  },
  {
    target: ".tour-button",
    content:
      "You can always restart this tour by clicking this button. It's perfect for new team members!",
    title: "Tour Control 🔄",
    placement: "left",
  },
];
