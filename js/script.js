function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('content');
  sidebar.classList.toggle('collapsed');
  if (sidebar.classList.contains('collapsed')) {
    content.style.marginLeft = '60px';
  } else {
    content.style.marginLeft = '250px';
  }
}
