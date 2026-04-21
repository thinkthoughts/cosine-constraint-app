document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyBtn");
  const qrImg = document.getElementById("qrImg");

  const pageUrl = window.location.href;

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pageUrl);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "✓ copied";
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 1500);
      } catch (err) {
        console.error("Copy failed:", err);
        alert("Copy failed");
      }
    });
  }

  if (qrImg) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(pageUrl);
  }
});
