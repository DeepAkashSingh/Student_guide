<template>
  <AdminPanel>
    <h1 class="heading">Chat Bot</h1>
    <div class="container chatbot">
      <div class="chatbox" id="chatBox">
        <div class="message">
          Hey there if you need any assistance, i'm always here
        </div>
      </div>
      <input
        type="text"
        class="chat-input w100 p1"
        id="userInput"
        placeholder="enter your message..."
      />
      <img
        src="../../assets/images/message.svg"
        alt="msg-icon"
        class="msgimg"
      />
    </div>
  </AdminPanel>
</template>
<script>
import AdminPanel from "./AdminPanel.vue";

export default { name: "ChatBot", components: { AdminPanel } };
</script>
