// Swiperの設定
const swiper = new Swiper(".swiper", {
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//tab切り替え
$(function () {
  $(".staff-tabs__item").on("click", function () {
    let index = $(".staff-tabs__item").index(this);

    // タブの切り替え
    $(".staff-tabs__item").removeClass("is-tab-active");
    $(this).addClass("is-tab-active");

    // コンテンツの切り替え
    $(".staff-tabs__content")
      .css("display", "none")
      .removeClass("is-contents-active");
    $(".staff-tabs__content")
      .eq(index)
      .css("display", "grid")
      .addClass("is-contents-active");
  });
});

// FAQ アコーディオンメニュー
$(function () {
  $(".staff-tabs__item").on("click", function () {
    // クリックされたタブのインデックスを取得
    let index = $(".staff-tabs__item").index(this);

    // タブボタンのアクティブ状態を切り替え
    $(".staff-tabs__item").removeClass("is-tab-active");
    $(this).addClass("is-tab-active");

    // タブコンテンツの表示切り替え
    $(".staff-tabs__content").removeClass("is-contents-active");
    $(".staff-tabs__content").eq(index).addClass("is-contents-active");
  });
});

// ハンバーガーメニュー
jQuery(function ($) {
  function toggleMenu(isOpen) {
    if (isOpen) {
      $(".gloval-nav-warpper").addClass("is-active");
      $(".c-hamburger-btn").addClass("close");

      // ロゴの切り替えを一括で管理
      $(".l-header__logo-black").addClass("is-active").show(); // 黒ロゴを表示
      $(".l-header__logo-white").removeClass("is-active").hide(); // 白ロゴを隠す

      $("body").addClass("is-drawerActive"); // スクロールを無効にする
      $(".l-header__hamburger-bar").addClass("is-active"); // バツ印に変える
      $(".l-header").addClass("l-header--menu-open"); // ヘッダーの背景をグローバルナビと同じにする
      $(".l-header__hamburger-text").addClass("is-active"); // メニュー消す
    } else {
      $(".gloval-nav-warpper").removeClass("is-active");

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
    const isOpen = $(".gloval-nav-warpper").hasClass("is-active");
    toggleMenu(!isOpen); // 開閉を切り替える
  });

  // 初期状態でメニューを閉じた状態にする
  toggleMenu(false);
});
