function toggleDay(dayId) {
  const content = document.getElementById(dayId);

  // Toggle open/close
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
