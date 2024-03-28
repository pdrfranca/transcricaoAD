document.addEventListener('DOMContentLoaded', function() {
    var blackAndWhiteButton = document.getElementById('blackAndWhite');
    var logoImage = document.getElementById('logo');
    var adeamorElements = document.querySelectorAll('.adeamor');
    var adeamorButton = document.querySelector('.btnVerSobre');
    
    if (blackAndWhiteButton && logoImage && adeamorButton) {
      blackAndWhiteButton.addEventListener('click', function() {
        document.body.classList.toggle('black-and-white');
        adeamorButton.classList.toggle('btnPreto');
        
        // Itera sobre cada elemento com a classe 'adeamor' e alterna a classe 'branco'
        adeamorElements.forEach(function(element) {
          element.classList.toggle('branco');
        });
  
        toggleImage();
      });
    }

    const transcription = document.getElementById('transcription');;
    const startButton = document.getElementById('startButton');

    let recognizing = false;
    let finalTranscript = '';

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;4

    if (window.SpeechRecognition) {
      // Cria uma instância do reconhecimento de fala
      var recognition = new SpeechRecognition();
      // Configurações do reconhecimento de fala
      recognition.continuous = true; // Reconhecimento contínuo
      recognition.interimResults = true; // Resultados intermediários
      recognition.lang = 'pt-BR'; // Define o idioma como Português- Brasil
  
      // Evento acionado quando o reconhecimento de fala inicia
      recognition.onstart = function() {
        recognizing = true; // Define que o reconhecimento está ocorrendo
        startButton.textContent = 'Parar Transcrição'; // Atualiza o texto do botão
      };
  
      // Evento acionado em caso de erro durante o reconhecimento
      recognition.onerror = function(event) {
        console.log('Erro de reconhecimento: ' + event.error); // Registra o erro no console
      };
  
      // Evento acionado quando o reconhecimento de fala termina
      recognition.onend = function() {
        recognizing = false; // Define que o reconhecimento não está mais ocorrendo
        startButton.textContent = 'Iniciar Transcrição'; // Atualiza o texto do botão
      };
  
      // Evento acionado quando resultados de reconhecimento de fala estão disponíveis
      recognition.onresult = function(event) {   
        let interimTranscript = ''; // Variável para transcrição intermediária
        // Itera sobre os resultados do reconhecimento
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            // Se a transcrição for final, adiciona ao texto final
            finalTranscript += event.results[i][0].transcript;
          } else {
            // Caso contrário, é uma transcrição intermediária
            interimTranscript += event.results[i][0].transcript;
          }
        }
        // Exibe o texto reconhecido ao usuário
        transcription.textContent = finalTranscript + interimTranscript;
      };
  
      // Adiciona evento de clique ao botão de início/parada da transcrição
      startButton.addEventListener('click', function() {
        transcription.classList.remove('none');
        transcription.classList.remove('espaco') // Esconde ou exibe a área de trans
        if (recognizing) {
          recognition.stop(); // Para o reconhecimento se já estiver ocorrendo
          return;
        }
        // Se não estiver ocorrendo, limpa o texto e inicia o reconhecimento
        finalTranscript = '';
        transcription.textContent = '';
        recognition.start();
      }, false);
  
    } else {
      // Se a API não é suportada, esconde o botão e exibe uma mensagem
      startButton.style.visibility = 'hidden';
      transcription.textContent = 'Seu navegador não suporta a API de reconhecimento de fala.';
    }

      const c1 = document.querySelector('.c1');
      const c2 = document.querySelector('.c2');
      const c3 = document.querySelector('.c3');
      const c4 = document.querySelector('.c4');
      const t1 = document.querySelector('.t1');
      const t2 = document.querySelector('.t2');
      const t3 = document.querySelector('.t3');
      c1.addEventListener('click', () => {
        c1.classList.toggle('expandir');
        t1.classList.toggle('none');
        c2.classList.toggle('quebrar');
        c1.classList.toggle('expandirV1');
      });

      c3.addEventListener('click', () => {
        c3.classList.toggle('expandir');
        c1.classList.toggle('expandirV');
        t2.classList.toggle('none');
        c2.classList.toggle('quebrar2');
      });

      c4.addEventListener('click', () => {
        c4.classList.toggle('expandir');
        c1.classList.toggle('expandirV1');
        c3.classList.toggle('expandirV');
        t3.classList.toggle('none');
        c2.classList.toggle('quebrar3');
      });
  });
  