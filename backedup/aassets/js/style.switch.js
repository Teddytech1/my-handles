"use strict";

var myCursor = jQuery(".mouse-cursor");
if (myCursor.length && $("body")) {
  const r = document.querySelector(".cursor-inner");
  const e = document.querySelector(".cursor-outer");
  let o;
  let s = 0;
  let t = false;
  window.onmousemove = function (i) {
    if (!t) {
      e.style.transform = "translate(" + i.clientX + "px, " + i.clientY + "px)";
    }
    r.style.transform = "translate(" + i.clientX + "px, " + i.clientY + "px)";
    o = i.clientY;
    s = i.clientX;
  };
  $("body").on("mouseenter", "a,.trigger, .cursor-pointer", function () {
    r.classList.add("cursor-hover");
    e.classList.add("cursor-hover");
  });
  $("body").on("mouseleave", "a,.trigger, .cursor-pointer", function () {
    if (!$(this).is("a") || !$(this).closest(".cursor-pointer").length) {
      r.classList.remove("cursor-hover");
      e.classList.remove("cursor-hover");
    }
  });
  r.style.visibility = "visible";
  e.style.visibility = "visible";
}
var wrapper = jQuery(".gaspar");
var button = jQuery(".style-switch-wrapper .cursor li a");
var show = jQuery(".style-switch-wrapper .cursor li a.show");
var hide = jQuery(".style-switch-wrapper .cursor li a.hide");
button.on("click", function () {
  var r = jQuery(this);
  if (!r.hasClass("showme")) {
    button.removeClass("showme");
    r.addClass("showme");
  }
  return false;
});
show.on("click", function () {
  wrapper.attr("data-magic-cursor", "");
});
hide.on("click", function () {
  wrapper.attr("data-magic-cursor", "hide");
});
var isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var preloader = $("#preloader");
if (isMobile) {
  preloader.remove();
} else {
  setTimeout(function () {
    preloader.addClass("preloaded");
  }, 800);
  setTimeout(function () {
    preloader.remove();
  }, 2000);
}
