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
// SION問い合わせアイコンクリックでモーダル表示
const sionImg = document.getElementById('sion-contact-img');
if (sionImg) {
  sionImg.addEventListener('click', function(e) {
    e.stopPropagation();
    const modalBg = document.createElement('div');
    modalBg.className = 'modal-bg';

    // modalCard: 画像とキャプション
    const modalCard = document.createElement('div');
    modalCard.className = 'modal-card';

    const modalImg = document.createElement('img');
    modalImg.className = 'modal-img';
    modalImg.src = sionImg.src;
    modalImg.alt = sionImg.alt;

    // キャプション
    const caption = document.createElement('div');
    caption.className = 'modal-caption';
    const nameEl = document.createElement('div');
    nameEl.className = 'modal-name';
    nameEl.textContent = 'SION';
    const quoteEl = document.createElement('div');
    quoteEl.className = 'modal-quote';
    quoteEl.textContent = '「最高の時間をご用意させていただきました。」';
    caption.appendChild(nameEl);
    caption.appendChild(quoteEl);

    modalCard.appendChild(modalImg);
    modalCard.appendChild(caption);
    modalBg.appendChild(modalCard);
    document.body.appendChild(modalBg);

    modalBg.addEventListener('click', () => {
      modalBg.remove();
    });
  });
}
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
  
    // CASTポートレートカードクリックで拡大表示（セリフオーバーレイ付き）
    document.querySelectorAll('.cast-card-portrait').forEach(card => {
      card.addEventListener('click', function(e) {
        e.stopPropagation();
        const img = this.querySelector('.cast-img-portrait');
        if (!img) return;

        // キャスト名取得（存在しない場合は画像のaltを利用）
        const name = (this.querySelector('.cast-name-portrait') && this.querySelector('.cast-name-portrait').textContent.trim()) || img.alt || 'CAST';

        // キャラ別のサンプルセリフ（適宜追加可能）
        const phrases = {
          'TORO': '今夜は君だけに囁いてあげるよ。',
          'MAKI': '今、誰が前にいると思ってんだって話。',
          'MIRA': '勝利の笑顔は、君と見るためにある。',
          'NEGI': '世界を抱きしめるように、君を守るよ。'
        };

        const phrase = phrases[name] || 'その瞳に、迷いは似合わない。';

        const modalBg = document.createElement('div');
        modalBg.className = 'modal-bg';

        // modalCard: 画像とキャプションをまとわせるラッパー（相対配置）
        const modalCard = document.createElement('div');
        modalCard.className = 'modal-card';

        const modalImg = document.createElement('img');
        modalImg.className = 'modal-img';
        modalImg.src = img.src;
        modalImg.alt = img.alt;

        // キャプション要素（画像の上に重なる）
        const caption = document.createElement('div');
        caption.className = 'modal-caption';
        const nameEl = document.createElement('div');
        nameEl.className = 'modal-name';
        nameEl.textContent = name;
        const quoteEl = document.createElement('div');
        quoteEl.className = 'modal-quote';
        quoteEl.textContent = `「${phrase}」`;
        caption.appendChild(nameEl);
        caption.appendChild(quoteEl);

        modalCard.appendChild(modalImg);
        modalCard.appendChild(caption);
        modalBg.appendChild(modalCard);
        document.body.appendChild(modalBg);

        modalBg.addEventListener('click', () => {
          modalBg.remove();
        });
      });
    });
  
    // CSSで .visible を使った追加アニメーションを有効化