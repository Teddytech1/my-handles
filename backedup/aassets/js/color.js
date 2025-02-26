jQuery(document).ready(function (s) {
  s("#preset1").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/orange.css");
    return false;
  });
  s("#preset2").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/purple.css");
    return false;
  });
  s("#preset3").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/red.css");
    return false;
  });
  s("#preset4").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/violet.css");
    return false;
  });
  s("#preset5").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/blue.css");
    return false;
  });
  s("#preset6").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/golden.css");
    return false;
  });
  s("#preset7").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/magenta.css");
    return false;
  });
  s("#preset8").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/yellowgreen.css");
    return false;
  });
  s("#preset9").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/green.css");
    return false;
  });
  s("#preset10").click(function () {
    s("#style-switch").attr("href", "assets/css/colors/yellow.css");
    return false;
  });
});
$(document).ready(function () {
  $(".style-switch-button").click(function () {
    $(".style-switch-wrapper").toggleClass("active");
  });
  $("a.close-styler").click(function () {
    $(".style-switch-wrapper").removeClass("active");
  });
});
