const url = window.location.href;

  // Copy button
  document.getElementById("copyBtn").onclick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      const btn = document.getElementById("copyBtn");
      btn.textContent = "✓ copied";
      setTimeout(() => (btn.textContent = "🔗 copy link"), 1500);
    } catch {
      alert("Copy failed");
    }
  };

  // QR code (using free API)
  document.getElementById("qrImg").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(url);
