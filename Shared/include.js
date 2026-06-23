window.addEventListener("DOMContentLoaded", async () => {
  const components = ["header", "footer"];

  await Promise.all(
    components.map(async (id) => {
      const res = await fetch(`https://cebastien29.github.io/sebastien.mace/Shared/${id}.html`);
      const html = await res.text();
      document.getElementById(id).innerHTML = html;
    })
  );

  // IMPORTANT : après injection du header
  const subtitle = document.body.dataset.subtitle;

  const subtitleEl = document.querySelector("#page-subtitle");
  if (subtitleEl && subtitle) {
    subtitleEl.textContent = subtitle;
  }
});