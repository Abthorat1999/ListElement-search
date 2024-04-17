function myFunction() {
    let filter, input, li, ul, a, txtValue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    console.log(filter);
    ul = document.getElementById("myul");
    li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      console.log("inside for loop")
      console.log(li[i])
      a = document.getElementsByTagName("li")[i];
      // console.log(a);
    if(a){
      txtValue = a.textContent || a.innerText;
      console.log(a.textContent)
      console.log(a.innerText)
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    }
  }
// function myFunction() {
//   let x = document.getElementById("myinput");
//   x.value = x.value.toUpperCase();
// }
  function hello(){
    console.log("heelo function call")
  }