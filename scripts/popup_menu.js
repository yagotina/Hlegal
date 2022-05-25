const popupMenu = document.getElementById("showMenu");
      let popMenu = document.getElementById("menu");

      popupMenu.addEventListener("click", () => {
        popMenu.classList.add("show");
      });

      function closeMenu() {
        popMenu.classList.remove("show");
      }