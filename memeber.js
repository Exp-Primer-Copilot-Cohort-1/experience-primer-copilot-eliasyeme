function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = "";
    for (var i = 0; i < member.skills.length; i++) {
        skillsMember += "<span>" + member.skills[i] + "</span>";
    }
    skills.innerHTML = skillsMember;
}