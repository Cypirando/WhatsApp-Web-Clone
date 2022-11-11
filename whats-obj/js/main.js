/*---Elementos para renderizar na tela---*/
const elementoParaExibirMsgEnviadas = document.getElementById('chat_box')
const elementoParaExibirContatos = document.getElementById('chats-every')
const elementoParaExibirPerfils = document.getElementById('id-perfil')
const elementoParaExibirMeuPerfil = document.getElementById('profile')

let teste = new Array()
/*---função para imprimir as mensagens no campo direito---*/
function exibirNaTela(perfil) {
// console.log("isso é",typeof perfil)
    elementoParaExibirMsgEnviadas.innerHTML = '';
    Object.keys(contacts).forEach((key) => {
        console.log("isso aqui",key)
        // console.log("perfil da chave", perfil)
        if (perfil == key) {
            console.log("Passou")
            teste = Object.values(contacts[key].messages);
            
            teste.map((key) => {
                if (key.from.id == "you") {
                    console.log("isso aqui",key)
                    elementoParaExibirMsgEnviadas.innerHTML +=
                        ` 
                        <p class="chatMessage my-chat">
                        <span>${key.message}</span>
                        <span class="chat__msg-filler"> </span>
                        <span class="msg-footer">
                            <span>${key.createdAt.substr(11, 5).split('-').reverse().join(':')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"
                                aria-label="read"  ${key.read === 2 ? 'class="chat-icon--text"' : 'class="chat-icon--blue" '}>
                                <path fill="currentColor"
                                    d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                </path>
                            </svg>
                        </span>
                       
                        </p>
                    `
                } else {
                    elementoParaExibirMsgEnviadas.innerHTML +=
                        ` 
                        <p class="chatMessage frnd-chat" >
                        <span>${key.message}</span>
                        <span class="chat__msg-filler"> </span>
                        <span class="msg-footer">
                           <span>${key.createdAt.substr(11, 5).split('-').reverse().join(':')}</span>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"
                               aria-label="read"  ${key.read === 3 ? 'class="chat-icon--blue"' : 'class="chat-icon--text" '}>
                               <path fill="currentColor"
                                   d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                               </path>
                           </svg>
                       </span>
                      
                       </p>
                     `
                }
            }
            );
        }else{
            console.log("não passou")
        }
    })

}

/*---função para imprimir os contatos na tela esquerda---*/
function exibeContatos(contacts) {
    Object.keys(contacts).find(key => {
        elementoParaExibirContatos.innerHTML +=
            `
      <!-- Chats 1 -->
      <div class="block chat-list" onclick="openRightSide(${key})">
          <!-- Img -->
          <div class="imgBox">
              <img src="${contacts[key].avatar}" class="cover">
          </div>
          <!-- Text -->
          <div class="h-text">
              <div class="head">
                  <h4 title="Daniell" aria-label="Daniell">${contacts[key].contactName}</h4>
                  <p class="time"></p>
              </div>
              <div class="message-chat">
                  <div class="tick-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                          aria-label="read" class="blue-tick">
                          <path fill="currentColor"
                              d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                          </path>
                      </svg>
                  </div>
  
                  <div class="chat-text-icon">
                      <span class="thanks"></span>
                      <div class="icon-more">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                              class="hide animate__animated animate__fadeInUp">
                              <path fill="currentColor"
                                  d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                              </path>
                          </svg>
                      </div>
                  </div>
  
              </div>
          </div>
      </div>
  
      `


    })
}

/*---função para exibir o perfil na tela direita---*/
function exibePerfil(perfil) {
    Object.keys(contacts).find(key => {
        if (perfil == key) {
            // console.log(ultimaMensagem)
            elementoParaExibirPerfils.innerHTML =
                `
            <div class="userImg">
              <img src="${contacts[key].avatar}" alt="" class="cover">
            </div>
            <h4 title="Daniel" aria-label="Daniel">${contacts[key].contactName}<br><span aria-label="online">online</span></h4>
            `
        }
    })
}

/*--- função para exibir minhas informaçoes---*/
function exibirMeuPerfil() {
    Object.keys(contacts).find(key => {

        elementoParaExibirMeuPerfil.innerHTML +=
            `
               <img src="${contacts[key].messages[1].from.avatar}" alt="" class="cover">
            `
        // console.log(contacts[key].messages[2].from.id)
    })

}

/*---função para responder as conversas e colocar num novo array---*/
function criaMensagem(contacts) {
   // let i = arraydeobjetoscommensagem.length
    let novoItem = document.getElementById('item')
    console.log(novoItem.value)
    const element = {
        
        message: novoItem.value,
        id: 8,
        from: {
            id: "you",
            avatar: "https://faces-img.xcdn.link/image-lorem-face-3444.jpg",
            name: "Reginaldo rossi",
        },
        read: 3,
        createdAt: new Date(),
    }
   
    teste.push(element)
    document.getElementById('chat_box').innerHTML += ""
    console.log(teste)
    exibirNaTela(teste)

    // document.getElementById('novoItem').scrollIntoView({behavior: "auto"})
    novoItem.value = ""

}
const eviarMsg = document.getElementById('enviar-msg')
eviarMsg.addEventListener('click', criaMensagem)

/*--- Modal intro---*/
function openRightSide(key) {
    exibirNaTela(key);
    exibePerfil(key);
    // criaMensagem(key);
    document.getElementById("rightSide").style.display = "flex";
    document.getElementById("Intro-Left").style.display = "none";

}
