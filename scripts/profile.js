let user = JSON.parse(localStorage.getItem("user"));

const profileSection = document.getElementById("profile-section");

// Initial load
if (user) {
  showProfile(user);
} else {
  showLoginForm();
}

/* =========================
   LOGIN FORM
========================= */
function showLoginForm() {
  profileSection.innerHTML = `
    <input
      type="text"
      id="name"
      placeholder="Enter Name"
      class="profile-input"
    />

    <input
      type="email"
      id="email"
      placeholder="Enter Email"
      class="profile-input"
    />

    <button class="profile-btn" onclick="login()">Login</button>
  `;
}

/* =========================
   LOGIN ACTION
========================= */
function login() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter all details");
    return;
  }

  const userData = { name, email };
  localStorage.setItem("user", JSON.stringify(userData));

  showProfile(userData);
}

/* =========================
   PROFILE VIEW
========================= */
function showProfile(user) {
  profileSection.innerHTML = `
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>

    <button class="profile-btn" onclick="logout()">Logout</button>
  `;
}

/* =========================
   LOGOUT
========================= */
function logout() {
  localStorage.removeItem("user");
  showLoginForm();
}
