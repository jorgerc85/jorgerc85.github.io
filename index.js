window.onload = function() {
  sectionShow();
};

function sectionShow() {
  var sectionControls = {'home_btn': 'home', 'about_btn': 'about', 'projects_btn': 'projects', 'blog_btn': 'blog'}
  document.getElementById('menu').addEventListener('click', function(event) {
    event.preventDefault();
    hideSections(sectionControls);
    document.getElementById(sectionControls[event.target.id]).style.display = 'inline';
  });
};

function hideSections(sections) {
  for (i in sections) {
    document.getElementById(sections[i]).style.display = 'none';
  };
};