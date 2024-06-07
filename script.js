function clicar() {
    

const container = document.getElementById('container');
const cadastroBtn = document.getElementById('cadastro');
const loginBtn = document.getElementById('login');

cadastroBtn.addEventListener('click', () =>
{
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => 
{
    container.classList.remove('active');
});
}