const buttonRef = document.querySelector(".click_button");
const changeUser = document.querySelector(".changeUser");

const headeing = document.querySelector(".heading");

const handleClick = (e) => {
  console.log("Button clicked!");
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    headeing.classList.add("clicked");
    headeing.innerHTML = `Hello ${user.name}`;
    console.log(user.name);
  } else {
    localStorage.setItem("user", JSON.stringify({ name: "John Doe" }));
  }
};

const handleChangeUser = (e) => {
    console.log("Change User clicked!");
    localStorage.setItem("user", JSON.stringify({ name: "Suraj " }));
}



buttonRef.addEventListener("click", handleClick);

changeUser.addEventListener("click",handleChangeUser )
