

//font
  (function(d) {
    var config = {
      kitId: 'fvo4zjr',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);




  // トピックス用のSwiper
  const topicsSwiper = new Swiper(".js-topics__swiper", {
    // fvSwiperと同じ設定
    loop: true,
    slidesPerView: "auto",
    speed: 4000,
    spaceBetween: 0,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
  });

  // メインビジュアル用のSwiper
  const fvSwiper = new Swiper(".js-fv-slide", {
    loop: true, // ループを有効に
    slidesPerView: 1, // 表示するスライド数を自動に
    speed: 10000, // アニメーション速度
    effect: "fade", // フェードさせる為の設定
    fadeEffect: {
      crossFade: true, //縦横比が統一されない画像の場合、重なる場合がある為、それを防ぐ設定
    },
    autoplay: {
      delay: 0, // 遅延なしで自動再生
    },
  });

  // Swiperの設定
  const staffswiper = new Swiper(".js-staff__swiper", {
    loop: true,
    allowTouchMove: true,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    spaceBetween: 34,
    navigation: {
      nextEl: ".c-btn--right",
      prevEl: ".c-btn--left",
    },
    breakpoints: {
      400: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 34,
      },
    },
  });

// ハンバーガーメニュー
jQuery(function ($) {
  function toggleMenu(isOpen) {
    if (isOpen) {
      $(".gloval-nav-wapper").addClass("is-active");
      $(".c-hamburger-btn").addClass("close");

      // ロゴの切り替えを一括で管理
      $(".l-header__logo-black").addClass("is-active").show(); // 黒ロゴを表示
      $(".l-header__logo-white").removeClass("is-active").hide(); // 白ロゴを隠す

      $("body").addClass("is-drawerActive"); // スクロールを無効にする
      $(".l-header__hamburger-bar").addClass("is-active"); // バツ印に変える
      $(".l-header").addClass("l-header--menu-open"); // ヘッダーの背景をグローバルナビと同じにする
      $(".l-header__hamburger-text").addClass("is-active"); // メニュー消す
    } else {
      $(".gloval-nav-wapper").removeClass("is-active");

      // ロゴの切り替えを一括で管理
      $(".l-header__logo-black").removeClass("is-active").hide(); // 黒ロゴを隠す
      $(".l-header__logo-white").addClass("is-active").show(); // 白ロゴを表示

      $(".c-hamburger-btn").removeClass("close");
      $("body").removeClass("is-drawerActive"); // スクロールを有効にする
      $(".l-header__hamburger-bar").removeClass("is-active"); // バツ印を戻す
      $(".l-header").removeClass("l-header--menu-open"); // ヘッダーの背景を元に戻す
      $(".l-header__hamburger-text").removeClass("is-active"); // バツ印を戻す
    }
  }

  $(".c-hamburger-btn, .c-hamburger-btn--black").on("click", function () {
    const isOpen = $(".gloval-nav-wapper").hasClass("is-active");
    toggleMenu(!isOpen); // 開閉を切り替える
  });

  // 初期状態でメニューを閉じた状態にする
  toggleMenu(false);
});



//ヘッダーの切り替え

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.l-header');
  const logoWhite = document.querySelector('.l-header__logo-white');
  const logoBlack = document.querySelector('.l-header__logo-black');

  if (document.body.classList.contains('home')) { 
    window.addEventListener('scroll', function() {
      if (window.scrollY > window.innerHeight / 2) {
        header.classList.add('l-header--scrolled');
        logoWhite.style.display = 'none'; // 白いロゴを非表示
        logoBlack.style.display = 'block'; // 黒いロゴを表示
      } else {
        header.classList.remove('l-header--scrolled');
        logoWhite.style.display = 'block'; // 白いロゴを表示
        logoBlack.style.display = 'none'; // 黒いロゴを非表示
      }
    });
  }
});




//サイドバーの切り替え
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar-link");
  const sections = document.querySelectorAll(
    ".staff-detail-item, .staff-detail__inner"
  );
  const subContainer = document.querySelector(".staff-detaila__staff-wapper");
  const sideBox = document.querySelector(".side-box");

  // スクロール時にアクティブクラスを切り替える
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(
          `.sidebar-link[href="#${id}"]`
        );

        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove("active")); // すべてのリンクからアクティブを削除
          if (activeLink) activeLink.classList.add("active"); // 表示されているセクションのリンクをアクティブに
        }
      });
    },
    {
      threshold: 0.5, // セクションが50%表示されたときに発火
    }
  );
  // 各セクションにオブザーバーを設定
  sections.forEach((section) => observer.observe(section));

  // main-container を監視
  if (subContainer) {
    mainObserver.observe(subContainer);
  }
});

