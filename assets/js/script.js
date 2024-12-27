
  // Swiperの設定
  const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".c-btn--right",
      prevEl: ".c-btn--left",
    }
  });
  
  //tab切り替え
  $(function () {
    $(".staff-tabs__item").on("click", function () {
      // タブを切り替え
      $(".staff-tabs__item[aria-selected='true']").attr({
        "aria-selected": "false",
        tabindex: -1,
      });
      $(this).attr({
        "aria-selected": "true",
        tabindex: 0,
      });
  
      // コンテンツを切り替え
      const targetId = $(this).attr("aria-controls");
      $(".staff-tabs__content").attr("hidden", true);
      $(`#${targetId}`).removeAttr("hidden");
    });
  });

  // FAQ アコーディオンメニュー
$(document).ready(function() {
  // FAQの質問をクリックしたときの処理
  $(".faq__question").click(function() {
    // faq__answerクラスを開いたり閉じたりする
    $(this).next(".faq__answer").slideToggle().toggleClass("faq--open");
    // 矢印を回転させる
    $(this).toggleClass("rotate--315");
  });

  // ページロード時に全てのfaq__answerを閉じる
  $(".faq__answer").hide();
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



