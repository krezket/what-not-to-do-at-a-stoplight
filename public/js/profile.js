const delbtn = document.querySelectorAll("#del-post");
delbtn.forEach(button => {
  button.addEventListener("click", () => {
    const delId = button.getAttribute("button is-link is-outlined");
    fetch(`/api/profile/${delId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        location.reload();
      } else {
        alert("unable to delete");
      }
    });
  });
});
//delete route
