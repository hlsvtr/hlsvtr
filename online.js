(function () {
  const box = document.createElement('div');
  box.id = "onlineBox";
  box.style.position = "fixed";
  box.style.bottom = "20px";
  box.style.right = "20px";
  box.style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
  box.style.color = "white";
  box.style.padding = "10px 20px";
  box.style.borderRadius = "12px";
  box.style.fontFamily = "Inter, sans-serif";
  box.style.fontSize = "16px";
  box.style.fontWeight = "600";
  box.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  box.style.zIndex = "9999";
  box.innerText = "Ziyaretçi sayısı yükleniyor...";
  document.body.appendChild(box);

  function updateCount() {
    fetch("https://istekformu.rf.gd/online.json?t=" + Date.now())
      .then((res) => res.json())
      .then((data) => {
        box.innerText = `👥 Anlık Ziyaretçi: ${data.count}`;
      })
      .catch(() => {
        box.innerText = "Ziyaretçi sayısı alınamadı.";
      });
  }

  updateCount();
  setInterval(updateCount, 5000);
})();