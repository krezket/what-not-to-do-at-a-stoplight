const logout = async () => {
    const response = await fetch('/api/users/login',{
        method : 'POST',
        header: {'Content-type':'application.json'} 
    })
    if(response.ok){
        document.location.replace('/')
    } else{
        alert('unable to logout')
    }
}

document.querySelector("#logout").addEventListener('click',logout)