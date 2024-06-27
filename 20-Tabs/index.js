document
  .getElementById("one")
  .addEventListener("click", () => handleTabSelection(1));
document
  .getElementById("two")
  .addEventListener("click", () => handleTabSelection(2));

const handleTabSelection = (tabId) => {
  const contentContainer =
    document.getElementsByClassName("content")[0].children;
  [...contentContainer].forEach((elem, idx) => {
    if (idx + 1 === tabId) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
};
