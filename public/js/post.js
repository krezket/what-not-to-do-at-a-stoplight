document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();

    const topicObj = {
        title:document.querySelector('#topic').value,
    }
    const postObj = {
        notes:document.querySelector("#post").value,
    }
    
    console.log(topicObj);
    console.log(postObj);

    fetch("/api/topics",{
        method:"POST",
        body:JSON.stringify(topicObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("bruh")
        }
    });

    fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("bruh")
        }
    });
});