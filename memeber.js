function skillsMember() {
  const member = document.querySelectorAll('.member');
  const memberSkills = document.querySelectorAll('.member__skills');
  const memberSkillsBtn = document.querySelectorAll('.member__skills-btn');

  member.forEach((item, index) => {
    item.addEventListener('click', () => {
      memberSkills[index].classList.toggle('member__skills--active');
      memberSkillsBtn[index].classList.toggle('member__skills-btn--active');
    });
  });
}