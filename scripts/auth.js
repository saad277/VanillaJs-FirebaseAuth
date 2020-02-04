








// tracking auth status

auth.onAuthStateChanged(function (user) {

   if (user) {

     

      setuptui(user);

      console.log("Logged in", user);

      // get data 

      db.collection("guides").onSnapshot(function (snapshot) {



         setupguides(snapshot.docs)


      },function(err){

         console.log(err);

      })


   } else {

      console.log("Logged out");
      setupguides([]);
      setuptui();

   }

});


const createguide=document.querySelector("#create-form");

createguide.addEventListener("submit",function(event){


event.preventDefault();


db.collection("guides").add({

title: createguide["title"].value,
content : createguide["content"].value


}).then(function(){

   const modal = document.querySelector("#modal-create");

   M.Modal.getInstance(modal).close();

   createguide.reset();


})

});



// sign up

var signup = document.querySelector("#signup-form");

signup.addEventListener("submit", function (event) {

   event.preventDefault();

   const email = signup["signup-email"].value;
   const password = signup["signup-password"].value;

  

   // sign up to firebase
   auth.createUserWithEmailAndPassword(email, password).then(function (cred) {

     return db.collection("users").doc(cred.user.id).set({

            bio: signup["signup-bio"].value

      })
      
      
      
   }).then(function(){


      

      const modal = document.querySelector("#modal-signup");

      M.Modal.getInstance(modal).close();

      signup.reset();

      });


   });






//logout 

const logout = document.querySelector("#logout");

logout.addEventListener("click", function (event) {


   event.preventDefault();

   auth.signOut().then(function () {

      console.log("User Signed out");

   });


});


// logging in 

const loginform = document.querySelector("#login-form");

loginform.addEventListener("submit", function (event) {


   event.preventDefault();

   const email = loginform["login-email"].value;

   const password = loginform["login-password"].value;

   auth.signInWithEmailAndPassword(email, password).then(function (cred) {




      const modal = document.querySelector("#modal-login");

      M.Modal.getInstance(modal).close();

      loginform.reset();


   });


});