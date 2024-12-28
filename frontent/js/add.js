document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const data = new FormData(e.target);
    console.log(data);
    
    fetch("http://localhost:3000/api/adduser", {
        method: "POST",
        body: data,
        
    }).then((res)=>{
        console.log(res);
    }).catch((error )=> {
        console.error(error);
    });
});