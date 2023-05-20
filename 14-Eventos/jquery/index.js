// $(document).ready(() =>{

// });
$(() => {
  // $("#el-1").hide();
  $(".hide-btn").click(() => {
    console.log("Ocultando...");
    // $("h1").hide();
    $("h1").fadeOut();
  });
  $(".show-btn").click(() => {
    console.log("Mostrando...");
    // $("h1").show();
    $("h1").fadeIn();
  });
  $("li").click(() => {
    $("h1").css({ color: "green" });
  });
  $(".new-element").click(() => {
    // $("ul").append("<li>New Element</li>");
    $("ul").prepend("<li>New Element</li>");
  });
  $("li").mouseenter((elem) => {
    elem.target.style.color = "blue";
    // console.log("Ha entrado el ratón (hover)");
  });
  $("li").mouseleave((elem) => {
    elem.target.style.color = "black";
  });
});
