"use strict";

$(function() {
  // 読み込みテスト
  // -----------
  // 検証ツール＞コンソールに「hello」が出ているか。
  // 検証ツール＞上部「ソース」・下段の「ページ」に、jsフォルダ、main.jsファイルが読み込まれているか
  // console.log('hello');

  // ハンバーガーをクリックでつけ外し
  // -----------
  $('#js-hamburger').click(function() {
    $(this).toggleClass('is-active')
    $(".p-header__menu").toggleClass("is-open");

    // メニュー表示中は背景をスクロールさせない
    $("body").toggleClass("is-fixed");
  })

  /* リンクのクリックでもメニューを閉じる */
  $(".p-header__menu a").click(function () {
    $("#js-hamburger").removeClass("is-active");
    $(".p-header__menu").removeClass("is-open");

    // スクロール禁止を解除
    $("body").removeClass("is-fixed");
  });

  /* スクロールでヘッダー背景色の変更 */
  // const header = document.querySelector('.header');
  // const about = document.querySelector('#about');

  // window.addEventListener('scroll', function () {

  //   const headerHeight = header.offsetHeight;
  //   const aboutTop = about.offsetTop;

  //   if (window.scrollY >= aboutTop - headerHeight) {
  //     header.classList.add('is-move');
  //   } else {
  //     header.classList.remove('is-move');
  //   }

  // });

  // アコーディオン
  // -----------
  $('.j-question').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });



  // ToTop
  // -----------
  // 基本はbottom: 0に固定、最初は非表示、
  // MVが画面上から消えたら表示
  // footerにぶつかったらfooterより上で止める
  $(function () {

    const $buttons = $("#buttons");
    // const $mv = $(".p-top__mv");
    const $trigger = $(".js-button-trigger");
    const $footer = $(".p-footer");
    const $contactButton = $(".p-button-area__contact");

    // お問い合わせページでは、お問い合わせボタンだけ非表示
    if ($(".p-page-contact").length > 0) {
      $contactButton.hide();
    }

    // 重要！次の3つの条件が全部揃っている時だけ実行。存在しない場合はここで終了
    // 例えばjs-button-triggerなどはブログ詳細ページには存在しない。
    if (
      $buttons.length === 0 ||
      // $trigger.length === 0 ||
      $footer.length === 0
    ) {
      return;
    }

    // 最初は非表示
    $buttons.hide();

    function updateButtons() {

      // -------------------------
      // ファーストビューが見えている間は非表示
      // triggerが存在するときだけ判定
      // -------------------------

      if ($trigger.length > 0 ) {
        // const mvBottom = $mv[0].getBoundingClientRect().bottom;
        const mvBottom = $trigger[0].getBoundingClientRect().bottom;
  
        if (mvBottom > 0) {
          $buttons.stop(true, true).fadeOut(300);
          return;
        }
      }
      $buttons.stop(true, true).fadeIn(300);


      // -------------------------
      // footerにぶつかったら
      // footerより上で止める
      // -------------------------
      // footerの上端が画面のどこにあるかを確認
      const footerTop = $footer[0].getBoundingClientRect().top;
      const buttonHeight = $buttons.outerHeight();
      const windowHeight = window.innerHeight;

      // ボタンの通常位置の上端（未使用のため削除も可）
      const buttonTop = windowHeight - buttonHeight;

      if (footerTop < windowHeight) {

        // footerが画面内に入った量だけ
        // ボタンを上へ移動
        const overlap = windowHeight - footerTop;

        $buttons.css("bottom", overlap + "px");

      } else {

        // footerがまだ見えていなければ画面下部
        $buttons.css("bottom", "0");
      }
    }


    // スクロール時
    $(window).on("scroll", updateButtons);

    // 画面サイズ変更時
    $(window).on("resize", updateButtons);

    // 最初にも一度実行
    updateButtons();


    // -------------------------
    // ToTopだけクリック処理
    // -------------------------

    $("#toTop").on("click", function (e) {
      e.preventDefault();

      $("body, html").animate({
        scrollTop: 0
      }, 1000);
    });

  });


})


// swiper（トップページのみに使用）
// -----------
if (typeof Swiper !== 'undefined' && document.querySelector('.swiper')) {
  const swiper = new Swiper(".swiper", {
    loop: true, // ループ
  
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    // スライドの表示枚数：768px未満の場合
    slidesPerView: 1,
  
    breakpoints: {
      // スライドの表示枚数：768px以上の場合
      768: {
        slidesPerView: 3, // 一度に表示する枚数
        spaceBetween: 35,
      }
    }
  });

}

// 文字数制限（blog-detailページ、関連記事）
// const TextLimit = () => {
//   const maxLength = 14;
//   const limitedTexts = document.querySelectorAll('.js-blog-detail-article-limited');

//   limitedTexts.forEach((limitedText) => {
//     const originalText = limitedText.innerText;

//     if (originalText.length > maxLength) {
//       // limitedText.innerText = originalText.substring(0, maxLength) + '...';
//       limitedText.innerText = originalText.substring(0, maxLength);
//     }
//   });
// };

// TextLimit();

  