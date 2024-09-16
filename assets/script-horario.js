function verificarStatus() {
    const status = document.querySelector('.aber-fech');
    const agora = new Date();
    const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const horas = agora.getHours();
    
    // Horários de funcionamento simplificados (apenas início e fim em horas)
    const horarios = {
      1: { inicio: 8, fim: 20 }, // Segunda
      2: { inicio: 8, fim: 20 }, // Terça
      3: { inicio: 8, fim: 20 }, // Quarta
      4: { inicio: 8, fim: 20 }, // Quinta
      5: { inicio: 8, fim: 20 }, // Sexta
      6: { inicio: 8, fim: 13 },  // Sábado
      0: { inicio: 0, fim: 0 }   // Domingo (Fechado)
    };
  
    // Verifica se está dentro do horário de funcionamento
    const horarioHoje = horarios[diaSemana];
    const aberto = horas >= horarioHoje.inicio && (horas < horarioHoje.fim || (diaSemana === 6 && horas < 24));
  
    // Atualiza o status
    if (aberto) {
      status.textContent = 'Aberto';
      status.style.backgroundColor = 'green';
      status.style.color = 'white';
    } else {
      status.textContent = 'Fechado';
      status.style.backgroundColor = 'red';
      status.style.color = 'white';
    }
  }
  
  // Executa a verificação quando a página carrega
  document.addEventListener('DOMContentLoaded', verificarStatus);