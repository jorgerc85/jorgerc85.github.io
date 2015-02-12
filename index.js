window.onload = function() {
  sectionShow();
};

function sectionShow() {
  var sectionControls = {'home_btn': 'home', 'about_btn': 'about', 'projects_btn': 'projects', 'blog_btn': 'blog'}
  document.getElementById('menu').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById(sectionControls[event.target.id]).style.display = 'inline';
  });
};
