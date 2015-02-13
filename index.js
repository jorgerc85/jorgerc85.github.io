window.onload = function() {
  sectionShow();
};

function sectionShow() {
  var sectionControls = {'home_btn': 'home', 'about_btn': 'about', 'projects_btn': 'projects', 'blog_btn': 'blog'}
  document.getElementById('menu').addEventListener('click', function(event) {
    event.preventDefault();
    hideSections(sectionControls);
    document.getElementById(sectionControls[event.target.id]).style.display = 'inline';
    if (event.target.id == 'blog_btn') { blogController() };
  });
};

function hideSections(sections) {
  for (i in sections) {
    document.getElementById(sections[i]).style.display = 'none';
  };
};

function blogController() {
  document.getElementById('blog_control').addEventListener('click', function(event) {
    event.preventDefault();
      ajaxWrapper(blogList[i]);
    };
  });
};

function ajaxWrapper(blog_page) {
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.readyState == 4 && xml.status == 200) {
      blog_div = document.getElementById('blog_show');
      blog_div.style.display = 'inline';
      blog_div.innerHTML = xml.responseText;
    };
  };
  xml.open('GET', blog_page, true);
  xml.send();
};