const menu = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')
const chatButton = document.querySelector('#chat-button')
const chatBox = document.querySelector('#chat-box')
const chatInput = document.querySelector('#chat-input')
const chatContent = document.querySelector('#chat-content')
const sendButton = document.querySelector('#send-button')

chatButton.addEventListener('click', function () {
  if (chatBox.style.display === 'none') {
    chatBox.style.display = 'block'
  } else {
    chatBox.style.display = 'none'
  }
})

chatInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    appendMessage(chatInput.value)

    chatInput.value = ''
  }
})

sendButton.addEventListener('click', function () {
  appendMessage(chatInput.value)

  chatInput.value = ''
})

document.addEventListener('click', function (event) {
  const isClickInside = chatBox.contains(event.target)
  const isClickOnButton = chatButton.contains(event.target)

  if (!isClickInside && !isClickOnButton && chatBox.style.display === 'block') chatBox.style.display = 'none'
})

menu.onclick = () => {
  toggleMenu(!menu.classList.contains('bx-x'))
}

window.onscroll = () => {
  toggleMenu(false)
}

document.querySelectorAll('.footer i').forEach(icon => {
  icon.addEventListener('click', function () {
    open(this.children[0].href, '_blank')
  })
})

function appendMessage(inputValue) {
  const message = document.createElement('p')

  message.textContent = inputValue
  chatContent.appendChild(message)
}

function toggleMenu(active) {
  if (active) {
    menu.classList.add('bx-x')
    navbar.classList.add('active')
  } else {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
  }
}
