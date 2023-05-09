const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  const userObj = {
    username: document.querySelector("#signup-username").value,
    email: document.querySelector("#signup-email").value,
    password: document.querySelector("#signup-password").value,
  };
  fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) {
      location.href = "/";
    } else {
      alert("Failed to sign up! whoops whoops please try again");
    }
  });
});

const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener("submit", e => {
  e.preventDefault();
  const userObj = {
    username: document.querySelector("#signin-username").value,
    password: document.querySelector("#signin-password").value,
  };
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) {
      location.href = "/";
    } else {
      alert("Failed to sign in! whoops whoops please try again");
    }
  });
});
