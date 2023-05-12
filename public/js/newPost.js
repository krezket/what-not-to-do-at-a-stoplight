document.querySelector("#post-form").addEventListener("submit",e=>{
    e.preventDefault();

    const searchParam = document.location.pathname.split('/')
    const [last] = searchParam.slice(-1)
    post(last);
    
    function post(topic) {
        const postObj = {
            text:document.querySelector("#comment").value,
            topic_id:topic
        }
        console.log(topic)
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
    };
});  

document.querySelector("#comment-form").addEventListener("submit",e=>{
    e.preventDefault();
    
    function comment(topic) {
        const commentObj = {
            text:document.querySelector("#comment").value,
            post_id:
        }
        console.log(topic)
        fetch("/api/comments",{
            method:"POST",
            body:JSON.stringify(commentObj),
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
    };
});  