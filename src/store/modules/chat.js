//import api from '@/api';
export default {
    state: {
        chats: [
            {
                id: 0,
                title: "чат 1"
            },
            {
                id: 1,
                title: "чат 2"
            }
        ],
        messages: [
            {
                id: 0,
                from: 1,
                chat: 0,
                text: "Проба пробочка!"
            },
            {
                id: 1,
                from: 2,
                chat: 0,
                text: "на связи пробочка"
            },
        ]
    },

    getters: {
        // ф-я chatMessages возвращает ф-ю, кот-я принимает id и возвращает все сообщения в chat c этим id
        chatMessages: state => id => { // функция id, которая в себя принимает state
            return state.messages.filter(messages => messages
                .id == id)} // и далее возвращает(фильтр на вход получает messages и возвращает message.id == id)
    },
    
    mutations: {
        setMessages(state, news) {
            state.news = news
        }
    },
    actions: {
        // getMessages({ state, commit }){

        // },
        // sendMessage({ state, commit }, message) {
        //     // отправляем овость на сервер
        //     // ждем ответа
        //     // вызываем мутацию
        // }
    }
};
