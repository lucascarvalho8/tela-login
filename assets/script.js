// ========== CONTROLE DE TEMA ========== //

// Elementos DOM
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar tema armazenado no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleButton();
}

// Função para atualizar o ícone do botão de tema
function updateToggleButton() {
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Event listener para alternância de tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Salvar preferência no localStorage
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : '');
    updateToggleButton();
});

// ========== VALIDAÇÃO DE LOGIN ========== //

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir comportamento padrão
    
    // Obter valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Validação de campos vazios
    if(username === '' || password === '') {
        showMessage('Preencha todos os campos!', 'error');
        return;
    }
    
    // Validação de tamanho da senha
    if(password.length < 6) {
        showMessage('Senha deve ter pelo menos 6 caracteres!', 'error');
        return;
    }
    
    // Simulação de login bem-sucedido
    showMessage('Login realizado com sucesso!', 'success');
    this.reset(); // Limpar formulário
});

// Função para exibir mensagens de feedback
function showMessage(text, type) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = type; // Define classe para estilização
    
    // Limpar mensagem após 3 segundos
    setTimeout(() => {
        message.textContent = '';
        message.className = '';
    }, 3000);
}

// ========== RECUPERAÇÃO DE SENHA ========== //

document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir comportamento padrão do link
    
    // Solicitar e-mail do usuário
    const email = prompt('Digite seu e-mail cadastrado:');
    if (email) {
        // Simular envio de instruções
        showMessage(`Instruções enviadas para: ${email}`, 'success');
    }
});