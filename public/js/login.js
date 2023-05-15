const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener("submit", e => {
  e.preventDefault();
  const userObj = {
    username: document.querySelector("#signin-username").value,
    password: document.querySelector("#signin-password").value,
  };
  //console.log(userObj);
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    console.log(res);
    if (res.status === 200) {
      //return res.json()
      window.location.assign("/")
      //location.href = "/";
    } else {
      alert("Failed to sign in! whoops whoops please try again");
    }
  }).then((res)=>{
    console.log(res);
  })
});



const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const userObj = {
    username: document.querySelector("#signup-username").value,
    email: document.querySelector("#signup-email").value,
    password: document.querySelector("#signup-password").value,
  };
  //console.log(userObj);
  fetch("/api/email",{
    method: "GET",
    
    headers: { "Content-Type": "application/json" },
  }).then((res)=>{
    console.log(res);
  })




  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.status===200) {
      // return res.json()
      //location.href = "/";
      window.location.assign("/")
    } else {
      alert("Failed to sign up! whoops whoops please try again");
    }
  }).then((res)=>{
    console.log(res);
  });
});

