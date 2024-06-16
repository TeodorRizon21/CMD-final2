const header = document.getElementById("header");
const check = document.getElementById("check");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) { // Adjust the value as needed
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

let checkCount = 0;
check.onclick = () =>
{
  checkCount = checkCount + 1;



 if (checkCount%2==1)
{
  console.log(checkCount);
  header.classList.add('checked');
}

if (checkCount%2==0)
{
  console.log(checkCount);
  header.classList.remove('checked');

}
}

document.addEventListener("touchstart", function() {}, true);