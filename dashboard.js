function like(e) {
  e.style.color = "#0566ff";
}


function expand(e) {
  let content = e.previousElementSibling;
  let contents = content.previousElementSibling;
  let postHeight = content.parentElement.parentElement;
  let btn = e;
  if (btn.innerHTML.toLowerCase() == "see more") {
    e.previousElementSibling.classList.remove("hidden")
    e.previousElementSibling.classList.add("show");
    contents += e.previousElementSibling
    btn.innerHTML = "See less"
    postHeight.style.height = "860px"

  }
  else {
    e.previousElementSibling.classList.remove("show")
    e.previousElementSibling.classList.add("hidden")
    contents+= e.previousElementSibling;
    btn.innerHTML = "See more"
    postHeight.style.height = "820px"
  }
}

