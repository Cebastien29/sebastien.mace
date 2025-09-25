window.addEventListener("DOMContentLoaded", () => {
  const components = ["header", "nav", "footer"];
  let navLoaded = false;

  components.forEach((id) => {
    fetch(`${id}.html`)
      .then((res) => res.text())
      .then((html) => {
        document.getElementById(id).innerHTML = html;

        if (id === "nav") {
          navLoaded = true;
          setTimeout(updateSubtitleFromNav, 0);
        }
      });
  });

  function updateSubtitleFromNav() {
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    for (const link of links) {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        const subtitle = link.textContent.trim();
        const subtitleElement = document.getElementById("page-subtitle");
        if (subtitleElement) {
          subtitleElement.textContent = subtitle;
        }
        break;
      }
    }
  }
});
