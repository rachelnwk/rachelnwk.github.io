document.getElementById('lightdark').addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
});

document.getElementById('fontToggleBtn').addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('comic-sans');
});

document.getElementById('animations').addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('disableani');
});