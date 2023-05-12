document.querySelector("#post-form").addEventListener("submit",e=>{
    e.preventDefault();

    const searchParam = document.location.pathname.split('/')
    const [last] = searchParam.slice(-1)
    post(last);
    
    function post(topic) {
        const postObj = {
            notes:document.querySelector("#post").value,
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