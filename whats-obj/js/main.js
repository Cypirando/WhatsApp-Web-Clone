/*---Elementos para renderizar na tela---*/
const elementForConversation = document.getElementById('chat_box')
const elementForContacts = document.getElementById('chats-every')
const elementForOpemIfonsContactsName = document.getElementById('id-perfil')
const elementForMyProfile = document.getElementById('profile')

/*---Variavel para acessar o objeto---*/
let listOfObject

/*--- Exibir minha foto---*/
function myProfile() {
    Object.keys(contacts).find(index => {
        elementForMyProfile.innerHTML +=
            `
            <img src="${contacts[index].messages[1].from.avatar}" alt="" class="cover">
        `
    })
}


/*--- Exibir os contatos---*/
function opemContacts() {
    Object.values(contacts).forEach((value, index) => {
        // console.log(value.messages[0].createdAt)
        elementForContacts.innerHTML +=
            `
        <!-- Chats 1 -->
        <div class="block chat-list" onclick="opemRightSide(${index})">
            <!-- Img -->
            <div class="imgBox">
                <img src="${value.avatar}" class="cover">
            </div>
            <!-- Text -->
            <div class="h-text" >
                <div class="head">
                    <h4 title="Daniell" aria-label="Daniell">${value.contactName}</h4>
                    <p class="time">${value.messages[0].createdAt.substr(11, 5).split('-').reverse().join(':')}</p>
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
                        <span class="thanks">${value.messages[0].message}</span>
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


/*--- Modal intro---*/
function opemRightSide(index) {
    const position = Object.keys(contacts)[index]
    elementForConversation.innerHTML = ""
    listOfObject = contacts[position]
    opemConversations()
    myProfile()
    document.getElementById("rightSide").style.display = "flex";
    document.getElementById("Intro-Left").style.display = "none";
    scrolView()
}


/*--- Exibir dados das conversas---*/
function opemConversations() {
    elementForConversation.innerHTML = ""
    elementForOpemIfonsContactsName.innerHTML =
        `
        <div class="userImg">
            <img src="${listOfObject.avatar}" alt="" class="cover">
        </div>
        <h4 title="Daniel" aria-label="Daniel">
            ${listOfObject.contactName}<br>
        <span aria-label="online">
            online
        </span></h4>
    
    `
    // scrolView()

    /*--- Exibir conversas---*/
    listOfObject.messages.forEach(local => {
        if (local.from.id == 'you') {
            elementForConversation.innerHTML +=
                `
                <div  id="teste">
                <p class="chatMessage my-chat">
                <span>${local.message}</span>
                <span class="chat__msg-filler"> </span>
                <span class="msg-footer">
                    <span>${new Date(local.createdAt).getHours()}:${new Date(local.createdAt).getMinutes()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"
                        aria-label="read"  ${local.read === 2 ? 'class="chat-icon--text"' : 'class="chat-icon--blue" '}>
                        <path fill="currentColor"
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                        </path>
                    </svg>
                </span>
                </p>
                </div>
            
            `
        } else {
            elementForConversation.innerHTML +=
                `
                <div  id="teste">
                <p class="chatMessage frnd-chat" >
                <span>${local.message}</span>
                <span class="chat__msg-filler"> </span>
                <span class="msg-footer">
                    <span>${new Date(local.createdAt).getHours()}:${new Date(local.createdAt).getMinutes()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"
                        aria-label="read"  ${local.read === 3 ? 'class="chat-icon--blue"' : 'class="chat-icon--text" '}>
                        <path fill="currentColor"
                            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                    </path>
                    </svg>
                </span>
                </p>
                </div>

                
            `
        }
    })
    // scrolView()
}



/*--- Modo Para respondes os contatos---*/
function newAnswer() {
    let incrementId = listOfObject.messages.length
    let sendMessge = document.getElementById('answer')
    const newObject = {
        message: sendMessge.value,
        id: incrementId++,
        from: {
            id: "you",
            avatar: "https://faces-img.xcdn.link/image-lorem-face-3444.jpg",
            name: "Reginaldo rossi",
        },
        read: 2,
        createdAt: new Date(),
    }
    if(sendMessge.value == ""){
        console.log(sendMessge.value)
    }else {
        listOfObject.messages.push(newObject)
        opemConversations()
        sendMessge.value = ''
    scrolView() 
    }
    
    

}



/*--- Modo Para respondes os contatos---*/
function scrolView(){
    let container = document.querySelector(".chatBox")
        container.scrollTop = container.scrollHeight
}


/*--- Modo popup---*/
$(document).ready(function () {
    $("#chat-popup").click(function (event) {
        $(".popup").toggle(700);
        event.stopPropagation();
    });
});