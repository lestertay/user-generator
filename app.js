const username = document.getElementById("username"),
	  title = document.getElementById("title"),
	  email = document.getElementById("email"),
	  city = document.getElementById("city"),
	  url = "https://randomuser.me/api/",
	  image = document.getElementById("profile-picture"),
	  button = document.getElementById("btn");

function generateUser(){
	fetch(url)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(data);
		let dataName = data.results[0].name.first + " " + data.results[0].name.last;
		username.innerText = dataName.toUpperCase();
		let dataTitle = data.results[0].name.title;
		title.innerText = dataTitle.toUpperCase();
		email.innerText = data.results[0].email;
		city.innerText = data.results[0].location.city;
		image.src = data.results[0].picture.medium;

	});

}

generateUser();

button.addEventListener("click", generateUser);