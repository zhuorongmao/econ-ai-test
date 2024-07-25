// Simple chatbot simulation for testing
window.Chatbot = {
  init: function(config) {
    const container = document.querySelector(config.container);
    container.innerHTML = `
      <div style="padding: 10px;">
        <div id="chatbox" style="height: 400px; overflow-y: auto; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;"></div>
        <input type="text" id="userInput" style="width: calc(100% - 80px); padding: 5px;" placeholder="Type your message..."/>
        <button id="sendBtn" style="width: 60px; padding: 5px;">Send</button>
      </div>
    `;

    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    chatbox.innerHTML += `<div><strong>Chatbot:</strong> ${config.welcomeMessage}</div>`;

    sendBtn.addEventListener('click', function() {
      const userMessage = userInput.value;
      if (userMessage.trim() === "") return;
      chatbox.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
      userInput.value = "";

      // Simulate a chatbot response
      setTimeout(function() {
        chatbox.innerHTML += `<div><strong>Chatbot:</strong> This is a response to "${userMessage}".</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
      }, 1000);
    });
  }
};
