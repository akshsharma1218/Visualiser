const ak = document.getElementsByClassName("aksh-menu");

const div = document.querySelector(".ak_container");

for (i=0;i<ak.length;i++){
    ak[i].addEventListener("click", function() {
      div.classList.toggle("shekhar");
    });
};
