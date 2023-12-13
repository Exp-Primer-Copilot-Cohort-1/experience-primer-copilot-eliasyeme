function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberText = document.getElementById("member-text");
    var skillsText = document.getElementById("skills-text");
    if (member.style.display === "none") {
        member.style.display = "block";
        skills.style.display = "none";
    }
}