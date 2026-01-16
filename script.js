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
          'NEGI': '世界を抱きしめるように、君を守るよ。',
          'CAMEL': 'ねぇ、一服付き合ってよ。',
          'SION': '俺が用意した甘い罠から逃げられる？',
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

// 3Dカルーセル（スマホ・PC対応）
document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.cast-list-portrait');
  const carouselRoot = document.querySelector('.carousel-root');
  const carouselCards = Array.from(document.querySelectorAll('.cast-card-portrait'));

  if (!carouselContainer || !carouselRoot || carouselCards.length === 0) return;

  // -- 変数定義 --
  const cardCount = carouselCards.length;
  const theta = 360 / cardCount;
  let radius = 0;
  
  // 初期位置をランダムで決定
  const initialIndex = Math.floor(Math.random() * cardCount);
  let currentAngle = -1 * theta * initialIndex; 
  
  let isDragging = false;
  let startX = 0;
  let lastX = 0;
  let currentX = 0;
  let velocity = 0;
  let rafId = null;
  let lastDragEndTime = 0;

  // -- 関数 --

  const rotateCarousel = () => {
    // 視点調整: 
    // コンテナ中心(0,0)にいると重なって見えるため、半径分奥(-Z)に下げて回転軸を奥に置く。
    // perspective設定と合わせる。
    carouselRoot.style.transform = `translateZ(${-radius}px) rotateY(${currentAngle}deg)`;
  };

  const updateLayout = () => {
    const cardWidth = carouselCards[0].offsetWidth || 300; 
    // 半径計算 (カード幅 / 2) / tan(PI / n) * 係数(隙間)
    radius = Math.round( (cardWidth / 2) / Math.tan( Math.PI / cardCount ) * 1.2 );

    carouselCards.forEach((card, index) => {
      const cellAngle = theta * index;
      card.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
    });
    rotateCarousel();
  };

  const AUTO_SPEED = -0.08; // 自動回転速度（逆回転）

  const autoRotate = () => {
    // ドラッグ中はループさせない（onDragStartで止めているが念のため描画更新しない）
    if (isDragging) return;

    // ディレイ判定: ドラッグ終了から2秒間は純粋な慣性のみ、その後自動回転へ復帰
    const timeSinceDragEnd = Date.now() - lastDragEndTime;

    if (timeSinceDragEnd < 2000) {
      // 2秒以内: 減衰のみ（通常の慣性）
      velocity *= 0.95;
    } else {
      // 2秒経過後: 自動回転速度へ向けてLerp
      velocity = velocity * 0.95 + AUTO_SPEED * 0.05;
    }

    currentAngle += velocity;
    rotateCarousel();
    rafId = requestAnimationFrame(autoRotate);
  };

  const onDragStart = (x) => {
    isDragging = true;
    startX = x;
    lastX = x;
    currentX = x; // 初期化
    velocity = 0;
    if (rafId) cancelAnimationFrame(rafId);
    carouselRoot.style.transition = 'none';
  };

  const onDragMove = (x) => {
    if (!isDragging) return;
    currentX = x;
    const dx = currentX - lastX;
    lastX = currentX;
    // 回転感度
    currentAngle += dx * 0.4;
    velocity = dx * 0.4;
    rotateCarousel();
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    lastDragEndTime = Date.now(); // 終了時刻を記録
    // 自動回転再開（慣性を引き継ぐ）
    autoRotate();
  };

  // -- イベントリスナー --

  // Mouse
  carouselContainer.addEventListener('mousedown', e => {
    // 画像ドラッグ防止
    // e.preventDefault(); // ここでするとinput等に触れないが今回は画像MainなのでOKか?
    // とりあえずなしで開始
    onDragStart(e.clientX);
  });
  window.addEventListener('mousemove', e => {
    if (isDragging) {
        e.preventDefault(); 
        onDragMove(e.clientX);
    }
  });
  window.addEventListener('mouseup', onDragEnd);

  // Touch
  carouselContainer.addEventListener('touchstart', e => {
    onDragStart(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', e => {
    if (isDragging) {
        // 横スクロールとして処理されるよう、縦スクロールをブロックするかはUX次第
        // ここでは親切心でブロックしない(passive: true相当)とブラウザバック暴発するかも
        // ただし passive: false を指定するには addEventListenerのオプションが必要
        // React等なら preventDefault() できるが。
        // ここでは簡易実装。
        onDragMove(e.touches[0].clientX);
    }
  }); // passive default
  
  window.addEventListener('touchend', onDragEnd);

  // クリック判定 (ドラッグ操作後のclickイベントを無効化)
  carouselCards.forEach(card => {
    card.addEventListener('click', e => {
       // isDraggingはfalseになっている(mouseup/touchend後なので)
       // なので移動距離で判定
       const dist = Math.abs(currentX - startX);
       if (dist > 10) { // 遊びを持たせる
         e.stopPropagation();
         e.preventDefault();
       }
    }, true); // capture
  });

  // 初期化
  window.addEventListener('resize', updateLayout);
  // 画像ロード安定待ち
  setTimeout(() => {
    updateLayout();
    autoRotate(); // 自動回転開始
  }, 100);
  setTimeout(updateLayout, 500); 
});