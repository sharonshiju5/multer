async function getUsers() {
    const res = await fetch('http://localhost:3000/api/getuser');
    console.log(res);
    const users = await res.json();
    str=``
    users.map((user)=>{
        // const file=user.file[0];
        // const file1=user.file[1];
        // const file2=user.file[2];
        // console.log(file.filename);
        str+=`
        <div class="card">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="http://localhost:3000/api/image/${user.file[0].filename}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="http://localhost:3000/api/image/${user.file[1].filename}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="http://localhost:3000/api/image/${user.file[2].filename}" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <h4>${user.username}</h4>
                  <h5>${user.email}</h5>
                  <h5>${user.phone}</h5>
            </div>
        
        
        `
    })
    document.getElementById('container').innerHTML=str;
    
}
getUsers()