function openTab(event, tabName) {
    // Hide all tab content
    var i, tabcontent, tabs;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tabs
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");
    }

    // Show the clicked tab and add active class
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active-tab");
}

// Open the first tab by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Hide all sections by default
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Show only the Objective section (section1) by default
    document.getElementById('section1').style.display = "block"; // Show Objective section
    document.querySelector('.tab').classList.add('active-tab');  // Highlight Objective tab
});