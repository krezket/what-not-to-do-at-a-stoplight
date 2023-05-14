const delbtn = document.querySelectorAll("#del-post");
delbtn.forEach(button => {

  button.addEventListener("click", () => {
    const value = button.value
    fetch(`/api/topics/${value}`, {
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
