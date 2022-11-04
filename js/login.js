const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnEntrar = document.querySelector('#btnLogin');

btnEntrar.addEventListener('click', (evento) => {

	evento.preventDefault();
	
	if (email.value == 'eduardo.pereira@email.com' && senha.value == '123456') {
		localStorage.setItem('acesso', true); 

		window.location.href = 'https://paolakossa.github.io/task-app-teste/todoList';

	} else {

		alert("Nome do usuário ou e-mail ou senha errados. Tente novamente.");
	}
})