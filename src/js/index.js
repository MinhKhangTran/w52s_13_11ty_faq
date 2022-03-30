const details = document.querySelectorAll("details");

details.forEach((detail) => {
  detail.addEventListener("click", () => {
    // Remove open from all except the chosen one
    details.forEach((item) => {
      if (item !== detail) {
        item.removeAttribute("open");
      }
    });
  });
});
