      const showYear = document.querySelector(".showYear");
      const dropdownMenu = document.querySelector(".dropdown-menu");
      const closeYear = document.querySelector(".closeYear");

      showYear.addEventListener("click", () => {
        showYear.classList.add("no-display");
        dropdownMenu.style.display = "flex";
      });

      closeYear.addEventListener("click", () => {
        showYear.classList.remove("no-display");
        dropdownMenu.style.display = "none";
      });
