function changeTab(event, tabName) {
  // hide tab content divs
  let tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // remove "active" class from tablinks
  let tabLinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // Show current tab, and add "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
