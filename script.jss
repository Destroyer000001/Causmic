function toggleMenu() {

  const menu = document.getElementById("navMenu");

  if (menu.style.display === "flex") {

    menu.style.display = "none";

  } else {

    menu.style.display = "flex";

    menu.style.position = "absolute";
    menu.style.top = "74px";
    menu.style.left = "0";
    menu.style.right = "0";

    menu.style.padding = "20px 5%";

    menu.style.background = "white";

    menu.style.flexDirection = "column";

    menu.style.borderBottom =
      "1px solid #e4e8f2";
  }
}


document.querySelectorAll("#navMenu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      if (window.innerWidth < 900) {

        document.getElementById("navMenu")
          .style.display = "none";

      }

    });

  });
