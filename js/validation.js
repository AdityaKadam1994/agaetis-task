//Declarations
const blogHead = document.getElementById("head");
const author = document.getElementById("author");
const date = document.getElementById("date");
const subHead = document.getElementById("sub-head");
const ta = document.querySelector("textarea");
const submitBtn = document.getElementById("submit");
const allInput = document.querySelectorAll("input");
const postHead = document.querySelector(".head");
const postDate = document.querySelector(".date");
const postAuthor = document.querySelector(".author");
const postSubhead = document.querySelector(".subhead");
const postContent = document.querySelector(".description");

let headChar = 50;
let authorChar = 20;

//Setting Date
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
maxDate = today + 1;
date.setAttribute("min", today);

//Adding EventListener
date.addEventListener("change", function(e) {
  let HeadValue = e.target.value;
  let nameValue = this.getAttribute("type");
  let strCount = HeadValue.length;
  validator(this, strCount, nameValue, HeadValue);
});

blogHead.addEventListener("keyup", function(e) {
  let HeadValue = e.target.value;
  let nameValue = this.getAttribute("type");
  let strCount = HeadValue.length;
  validator(this, strCount, nameValue, HeadValue);
});

subHead.addEventListener("keyup", function(e) {
  let HeadValue = e.target.value;
  let nameValue = this.getAttribute("type");
  let strCount = HeadValue.length;
  validator(this, strCount, nameValue, HeadValue);
});

author.addEventListener("keyup", function(e) {
  let HeadValue = e.target.value;
  let nameValue = this.getAttribute("type");
  let authorName = this.getAttribute("name");
  let strCount = HeadValue.length;
  validator(this, strCount, nameValue, HeadValue, authorName);
});

ta.addEventListener("keyup", function(e) {
  let HeadValue = e.target.value;
  let nameValue = this.getAttribute("data-text");
  let strCount = HeadValue.length;

  validator(this, strCount, nameValue, HeadValue);
});

//Validator Function
const validator = (ele, eleLength, attr, eleVal, elename) => {
  const letterValidator = /^[a-zA-Z]+$/;

  const checker = /^[a-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/i;

  if (attr === "text") {
    if (elename === "author" && eleLength > authorChar) {
      ele.classList.remove("success");
      ele.classList.add("error");
      ele.nextElementSibling.innerHTML = "Character should not exceed 20";
    } else if (eleLength > headChar) {
      ele.classList.remove("success");
      ele.classList.add("error");
      ele.nextElementSibling.innerHTML = "Character should not exceed 50";
    } else if (eleVal === "" || eleVal === null) {
      ele.classList.remove("success");
      ele.classList.add("error");
      ele.nextElementSibling.innerHTML = "This field cannot be blank";
    } else if (eleVal.match(checker) && !eleVal.match(letterValidator)) {
      ele.classList.remove("success");
      ele.classList.add("error");
      ele.nextElementSibling.innerHTML =
        "Numbers and Special Characters are not allowed";
    } else {
      ele.classList.remove("success");
      ele.classList.add("success");
      ele.nextElementSibling.innerHTML = "";
    }
  }
  if (attr === "date" || attr === "ta") {
    if (eleVal === "" || eleVal === null) {
      ele.classList.remove("success");
      ele.classList.add("error");
      ele.nextElementSibling.innerHTML = "This field cannot be blank";
    } else {
      ele.classList.remove("success");
      ele.classList.add("success");
      ele.nextElementSibling.innerHTML = "";
    }
  }

  //Enabling submit button on check
  for (let i = 0; i < allInput.length; i++) {
    if (allInput[i].classList.contains("success")) {
      if (ta.classList.contains("success")) {
        submitBtn.disabled = false;
      }
    } else {
      submitBtn.disabled = true;
    }
  }
};

//Submitting form

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  alert("Form Successfully Submitted. Scroll down for posted content");
  postHead.innerHTML = blogHead.value;
  postSubhead.innerHTML = subHead.value;
  postAuthor.innerHTML = author.value;
  postDate.innerHTML = date.value;
  postContent.innerHTML = ta.value;
});
