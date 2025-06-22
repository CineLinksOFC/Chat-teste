
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const message = chatInput.value.trim();
  if (message === "") return;

  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = message;

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;

  chatInput.value = "";
});
