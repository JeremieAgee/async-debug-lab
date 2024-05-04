document.getElementById("fetch-user").addEventListener("click", function () {
  fetch("https://randomuser.me/api/") // Question 1: Why does this fetch call fail?
    // The https is incorrect and has an extra i.
    .then((response) => response.json())
    .then((data) => {
      displayUser(data.results[0]); // Question 2: Why is data.results undefined?
    })// you need to add a .then and use .json() before reading the data.
    .catch((error) => console.error("Fetch error:", error));
});

function displayUser(user) {
  const userInfoDiv = document.getElementById("user-info");
  // Question 3: Why isn't the user's name displaying correctly?
  //you need to add a user.name.first and user.name.last
  userInfoDiv.innerHTML = `Name: ${user.name.first} ${user.name.last}<br>
                           Email: ${user.email}`;
}

// Question 4: Why does this API call fail?
//There is no api with the name https://api.example.com/data
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .catch((error) => {
    console.error("Failed to process data:", error);
  });

// Fetches news articles and displays them on the page
function fetchNews() {
  fetch("https://jsonplaceholder.typicode.com/posts") // Simulated news API
    .then((response) => response.json())
    .then((articles) => {
      const container = document.getElementById("news-container");
      // Question 5: Why do the article titles not appear on the screen?
      // You are grabbing the article.name instead of .title and .name doesn't exist
      articles.forEach((article) => {
        const p = document.createElement("p");
        p.textContent = article.title;
        container.appendChild(p);
      });
    })
    .catch((error) => console.log("Error fetching news:", error));
}

fetchNews();
