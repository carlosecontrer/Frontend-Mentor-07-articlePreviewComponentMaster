((d) => {
  const shareButton = d.querySelector(".footer__share"),
    toolTip = d.querySelector(".tooltip");
  shareButton.addEventListener("click", (e) => {
    toolTip.classList.toggle("tooltip--active");
  });
})(document);
