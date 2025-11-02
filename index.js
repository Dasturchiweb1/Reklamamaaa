// DOM to'liq yuklanganda ishlaydi
document.addEventListener('DOMContentLoaded', () => {
  // Adexium widgetini yaratish (ammo avtomatik rejimni o'chiramiz)
  const adexiumWidget = new AdexiumWidget({
    wid: 'a02f1861-5f60-4748-aefe-3bd7192dfc0e',
    adFormat: 'interstitial'
  });

  // Tugmani olish
  const reklamaBtn = document.getElementById("reklama");

  // Tugma bosilganda reklama chiqarish
  reklamaBtn.addEventListener("click", () => {
    adexiumWidget.showInterstitial();
  });
});
