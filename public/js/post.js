document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();

    const topicObj = {
        title:document.querySelector('#topic').value,
    }
    
    console.log(topicObj);

    fetch("/api/topics",{
        method:"POST",
        body:JSON.stringify(topicObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
        //    location.reload()
        getPost()
        } else {
            alert("bruh")
        }
    });
});

function getPost() {
    fetch("/api/topics",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json()).then(res=>{
        [last]=res.slice(-1);
        console.log(last.id)
        addPost(last.id)
    });
}

function addPost(currentTopic){
    const postObj = {
        notes:document.querySelector("#post").value,
        topic_id:currentTopic
    }
    fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify(postObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.assign('/')
        } else {
            alert("bruh")
        }
    });
}