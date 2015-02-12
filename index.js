window.onload = function() {
  sectionShow();
};

function sectionShow() {
  document.getElementById('about_btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').style.display = 'inline'
  })
}