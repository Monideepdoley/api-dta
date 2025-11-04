document.getElementById("fetchBtn").addEventListener("click", fetchUsers);

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayUsers(data))
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById("userList").innerHTML = "<p>Failed to load data.</p>";
    });
}

function displayUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = ""; // clear previous data

  users.slice(0, 5).forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    userList.appendChild(card);
  });
}
