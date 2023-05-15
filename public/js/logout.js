document.querySelector("#logout").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/api/users/logout", {
    method: "POST",
  }).then((res) => {
    if (res.ok) {
      document.location.replace("/");
    } else {
      alert("failed to log out");
    }
  });
});
