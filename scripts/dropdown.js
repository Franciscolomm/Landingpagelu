document.addEventListener("DOMContentLoaded", () => {

  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdown = document.querySelector('.dropdown');

  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  }

});