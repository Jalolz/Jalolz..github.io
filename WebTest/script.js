	const loginForm = document.getElementById('loginForm');
	const correctCode = 'R3B8Y6'; // Code

	loginForm.addEventListener('submit', function(event) {
		event.preventDefault();
		const enteredCode = document.getElementById('code').value;

		if (enteredCode === correctCode) {
			window.location.href = 'home.html'; // Redirect naar de homepagina
		} else {
			alert('Oops.');
		}
	});
