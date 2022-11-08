const conteudo = [
    {
      message: "Olá tudo bem",
      id: 1,
      from: {
        id: "55",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-3444.jpg",
        name: "Reginaldo rossi",
      },
      read: 3,
      createdAt: "2022-11-07T16:41:17.720Z",
    },
    {
      message: "Olá tudo bem e por ai?",
      id: 2,
      from: {
        id: "you",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-2989.jpg",
        name: "José maria",
      },
      read: 3,
      createdAt: "2022-11-07T16:41:17.720Z",
    },
    {
      message: "Estou bem",
      id: 3,
      from: {
        id: "55",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-3444.jpg",
        name: "Reginaldo rossi",
      },
      read: 3,
      createdAt: "2022-11-07T16:42:17.720Z",
    },
    {
      message: "Como está seus investimentos?",
      id: 4,
      from: {
        id: "55",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-3444.jpg",
        name: "Reginaldo rossi",
      },
      read: 3,
      createdAt: "2022-11-07T16:43:17.720Z",
    },
    {
      message: "Infelizmente perdi tudo",
      id: 5,
      from: {
        id: "you",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-2989.jpg",
        name: "José maria",
      },
      read: 3,
      createdAt: "2022-11-07T16:45:19.720Z",
    },
    {
      message: "Estou falido e vendendo picolés para sobreviver",
      id: 6,
      from: {
        id: "you",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-2989.jpg",
        name: "José maria",
      },
      read: 3,
      createdAt: "2022-11-07T16:46:17.720Z",
    },
    {
      message: "Pode me emprestar uma grana?",
      id: 7,
      from: {
        id: "you",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-2989.jpg",
        name: "José maria",
      },
      read: 2,
      createdAt: "2022-11-07T16:48:17.720Z",
    },
    {
      message: "Não",
      id: 8,
      from: {
        id: "55",
        avatar: "https://faces-img.xcdn.link/image-lorem-face-3444.jpg",
        name: "Reginaldo rossi",
      },
      read: 3,
      createdAt: "2022-11-07T16:49:17.720Z",
    },
  ];
  
  // --- campo read:
  // 0 = pendente
  // 1 = enviado
  // 2 = recebido
  // 3 = lido
  
  // from.id é o id do usuario que mandou a msg, se for "you" foi vc que enviou
  // 
  
const elementoParaExibirMsgEnviadas = document.getElementById('chat_box')

// filtraHora(conteudo)
exibirNaTela(conteudo)
function exibirNaTela(mensagens){
    mensagens.forEach(item => {
      
        if (item.from.id == 'you') {
        elementoParaExibirMsgEnviadas.innerHTML +=
        ` 
        <p class="chatMessage my-chat">
        <span>${item.message}</span>
        <span class="chat__msg-filler"> </span>
        <span class="msg-footer">
            <span>${item.createdAt.substr(11, 5 ).split('-').reverse().join(':')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"
                aria-label="read" class="chat-icon--blue">
                <path fill="currentColor"
                    d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                </path>
            </svg>
        </span>
        <button aria-label="Message options" class="chat__msg-options"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                class="chat__msg-options-icon">
                <path fill="currentColor"
                    d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                </path>
            </svg>
        </button>
        </p>
           
        
        `} else {
            elementoParaExibirMsgEnviadas.innerHTML +=
            `<p class="chatMessage frnd-chat" >
             <span>${item.message}</span>
            <span class="chat__msg-filler"> </span>
            <span class="msg-footer">
                <span>${item.createdAt.substr(11, 5 ).split('-').reverse().join(':')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"
                    aria-label="read" class="chat-icon--blue">
                    <path fill="currentColor"
                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                    </path>
                </svg>
            </span>
            <button aria-label="Message options" class="chat__msg-options"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                    class="chat__msg-options-icon">
                    <path fill="currentColor"
                        d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                    </path>
                </svg>
            </button>
            </p>
           
            `
        }
    });
}

function opemRightSide(){
  document.getElementById("rightSide").style.display ="flex"
  document.getElementById("Intro-Left").style.display ="block"

}