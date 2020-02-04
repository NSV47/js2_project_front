<template>
  <div>
    <h2>Чат</h2>
    <div v-for="chat in chats" :key="chat.id">{{ chat }}
      <v-btn color="orange" @click="chatId = chat.id">Открыть чат</v-btn>
    </div>
    <h2>Сообщения</h2>
    <div v-if="chatId >= 0">
      <div v-for="message in chatMessages(chatId)" :key="message.id">
        <div>
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: "chat",
  data:()=>({
    chatId: -1
  }),
  computed: {
    ...mapState({
      // чтобы получить чаты
      chats: state => state.chat.chats
    }),
    ...mapGetters(["chatMessages"])
  }
};
</script>
