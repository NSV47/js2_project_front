import api from '@/api';
export default {
    state: {
        news: []
    },
    actions: {
        addNews({ state, commit }, article) {
            // отправляем овость на сервер
            // вызываем мутацию
            api.axios.put(api.urls["news"], article).then(res => { // article - это какие данные мы хотим полложить
                // ждем ответа
                article = res.data;
                let newNews = state.news.concat(); // создание копии массива
                // State можно изменять только в mutations
                newNews.push(article); // добавляем новую новость в конец массива
                commit("setNews", newNews) // изменяем состояние
                // для того чтобы вызвать мутацию необходимо использовать commit
            });
        },
        getNews({ state, commit }) {
            api.axios.get(api.urls["news"]).then(res => {
                commit("setNews", res.data);
            });
        }
    },
    mutations: {
        setNews(state, news) {
            state.news = news
        }
    }
};
