function toggleDay(dayId) {
  const content = document.getElementById(dayId);

  // Toggle open/close
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.itinerary-panel').forEach(p => {
    p.style.display = 'none';
    p.setAttribute('aria-hidden', 'true');
  });
  document.querySelectorAll('.itinerary-toggle').forEach(btn => {
    btn.setAttribute('aria-expanded','false');
    btn.addEventListener('click', () => {
      const block = btn.closest('.itinerary-block');
      const panel = block.querySelector('.itinerary-panel');
      const opened = block.classList.toggle('open');
      panel.style.display = opened ? 'block' : 'none';
      panel.setAttribute('aria-hidden', String(!opened));
      btn.setAttribute('aria-expanded', String(opened));
    });
  });
});
