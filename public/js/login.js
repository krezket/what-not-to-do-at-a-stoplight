const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#signup-username");
  const email = doument.querySelector("#signup-email");
  const password = document.querySelector("#signup-password");

  if (username && email && password) {
    const response = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { " Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};
const signinFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#signin-username");
  const password = document.querySelector("#signin-password");

  if (email && password) {
    const response = await fetch("/api/users/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("invalid! sign failed due to username or password ");
    }
  }
};

document
  .querySelector(".signin-form")
  .addEventListener("submit", signinFormHandler);
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
