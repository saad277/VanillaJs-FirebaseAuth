
const account = document.querySelector(".account-details");

const loggedoutlinks = document.querySelectorAll(".logged-out");
const loggedinlinks = document.querySelectorAll(".logged-in");

const setuptui = function (user) {

  if (user) {


      loggedinlinks.forEach(function(item){

          item.style.display="block";

          const html= ` <div> Logged in as ${user.email} </div>`

          account.innerHTML=html;

      });

      loggedoutlinks.forEach(function(item){

          item.style.display="none";


      });

  }

  else {


    loggedoutlinks.forEach(function(item){

      item.style.display="block";



  });

  loggedinlinks.forEach(function(item){

      item.style.display="none";


  });





  }



}



// setup guides as data
const guidelist = document.querySelector(".guides");

const setupguides = function (data) {


  if (data.length) {
    data.forEach(function (doc) {

      guide = doc.data();

      

      li = `    
          <li>   
          <div class="collapsible-header grey lighten-4" >   ${guide.title}  </div>
          <div class="collapsible-body grey white" >   ${guide.content}  </div>

          </li>
        ` ;

      guidelist.innerHTML += li;


    })

  } else {

    guidelist.innerHTML = "<h5> Login to view guides  </h5>  "


  }



}










// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});