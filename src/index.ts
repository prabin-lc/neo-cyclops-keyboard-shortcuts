document.body.addEventListener("keydown", (e) => {
  if (e.metaKey && e.key === "r") {
    e.preventDefault();
    document.getElementById("refresh-host-table")?.click();
  }
});
