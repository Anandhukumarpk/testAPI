

let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    users = data;
})
.catch(error => console.error("Error fetching data",error));

function searchdetails(){
    const search = document.getElementById("search").value.trim().toLowerCase();
    const container = document.getElementById("container");

    container.innerHTML = "";

    if (!search){
        return;
    }

    const filterDetails = users.filter(user => user.name.toLowerCase().includes(search));

    if(filterDetails.length >0 ){
        container.innerHTML = filterDetails.map(user => `

            <div>
                        <h3>${user.name}</h3>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                        <hr>
                    </div>
            
            
            
            `).join("");
    }else {
        container.innerHTML = "<p>No users found</p>";
    }
}

function clearSearch(){
    document.getElementById("search").value="";
    document.getElementById("container").innerHTML = "";
};



