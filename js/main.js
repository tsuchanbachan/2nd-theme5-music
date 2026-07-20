"use strict";

$(function() {
  // 読み込みテスト
  // 検証ツール＞コンソールに「hello」が出ているか。
  // 検証ツール＞上部「ソース」・下段の「ページ」に、jsフォルダ、main.jsファイルが読み込まれているか
  // console.log('hello');

  // ハンバーガーをクリックでつけ外し
  $('#js-hamburger').click(function() {
    $(this).toggleClass('is-active')
    $(".p-header__menu").toggleClass("is-open");
  })

  /* リンクのクリックでもメニューを閉じる */
  $(".p-header__menu a").click(function () {
    $("#js-hamburger").removeClass("is-active");
    $(".p-header__menu").removeClass("is-open");
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

})