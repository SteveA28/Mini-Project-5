const timeDisplayEl = $("#time-display");
const projectDisplayEl = $("#project-display");
const projectFormEl = $("#project-form");
const projectNameInputEl = $("#project-name-input");
const projectTypeInputEl = $("#project-type-input");
const projectDateInputEl = $("#project-date-input");

function displayTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formattedTime = now.toLocaleString("en-US", options);
  timeDisplayEl.textContent = formattedTime;
}

function readProjectsFromStorage() {
  try {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    return projects;
  } catch (error) {
    console.error("Error reading projects from storage:", error);
    return [];
  }
}
