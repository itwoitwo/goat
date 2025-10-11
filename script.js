/* スクロールでキャストカードをフェードイン */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cast-card');
  const ad = document.querySelector('.ad-banner');
  const btn = document.querySelector('.entry-btn');

  const fadeInOnScroll = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 60;
  };

  const onScroll = () => {
    cards.forEach(card => {
      if (fadeInOnScroll(card)) {
        card.classList.add('visible');
      }
    });
    if (ad && fadeInOnScroll(ad)) ad.classList.add('visible');
    if (btn && fadeInOnScroll(btn)) btn.classList.add('visible');
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  // 波紋エフェクト
  if (btn) {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  }

  // キャスト紹介枠クリックで画像拡大表示
  document.querySelectorAll('.cast-card').forEach(card => {
    card.addEventListener('click', function(e) {
      e.stopPropagation();
      const img = this.querySelector('.cast-img');
      if (!img) return;
      const modalBg = document.createElement('div');
      modalBg.className = 'modal-bg';
      const modalImg = document.createElement('img');
      modalImg.className = 'modal-img';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalBg.appendChild(modalImg);
      document.body.appendChild(modalBg);

      modalBg.addEventListener('click', () => {
        modalBg.remove();
      });
    });
  });
});

  // INTERIOR IMAGE 画像クリックで拡大表示
  document.querySelectorAll('.interior-card').forEach(card => {
    card.addEventListener('click', function(e) {
      e.stopPropagation();
      const img = this.querySelector('.interior-img');
      if (!img) return;
      const modalBg = document.createElement('div');
      modalBg.className = 'modal-bg';
      const modalImg = document.createElement('img');
      modalImg.className = 'modal-img';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalBg.appendChild(modalImg);
      document.body.appendChild(modalBg);

      modalBg.addEventListener('click', () => {
        modalBg.remove();
      });
    });
  });

  // CSSで .visible を使った追加アニメーションを有効化