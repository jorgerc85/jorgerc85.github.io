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
  var i = 0;
  var blogList = ['blog/t8-tech.html', 'blog/t7-JavaScript.html', 'blog/t6-oop-concepts.html', 'blog/t5-ruby-classes.html',
                  'blog/t4-enumerable-methods.html', 'blog/t3-arrays-hashes.html', 'blog/t2-css-design.html',
                  'blog/t1-git-blog.html'];
  ajaxWrapper(blogList[i])
  document.getElementById('blog_control').addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.id == 'show_older_btn') {
      i += 1;
      ajaxWrapper(blogList[i]);
    } else if (event.target.id == 'show_newer_btn') {
      i -= 1;
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