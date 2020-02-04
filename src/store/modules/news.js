export default {
    state: {
        news: [
            {
                title: "хранилище",
                text: "Здесь что-то есть",
                img: ""
            }
        ]
    },
    mutations: {
        setNews(state, news) {
            state.news = news
        }
    },
    actions: {
        addNews({ state, commit }, article) {
            // отправляем овость на сервер
            // ждем ответа
            // вызываем мутацию
            let newNews = state.news.concat() // создание копии массива
            // State можно изменять только в mutations
            newNews.push(article) // добавляем новую новость в конец массива
            commit('setNews', newNews) // изменяем состояние
            // для того чтобы вызвать мутацию необходимо использовать commit
        }
    }
};
