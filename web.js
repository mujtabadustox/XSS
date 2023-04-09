export { abc };
document.getElementById("submit_button").addEventListener("click", () => {
  abc = document.querySelector("#cmnt").value;
  alert(abc);
  //window.location.href = "comments.html";
});

document.getElementById("view_comment").onclick = function () {
  location.href = "comments.html";
};
