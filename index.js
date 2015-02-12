window.onload = function() {
  sectionShow();
  blogController();
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

function blogController() {
  document.getElementById('blog_control').addEventListener('click', function(event) {
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
      if (xml.readyState == 4 && xml.status == 200) {
        blog_div = document.getElementById('blog_show');
        blog_div.style.display = 'inline';
        blog_div.innerHTML = xml.responseText;
      };
    };
    xml.open('GET', 'blog/t1-git-blog.html', true);
    xml.send();
  });
}