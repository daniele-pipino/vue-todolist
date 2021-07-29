// inizializazzione Vuejs
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        tasks: [
            'Completare todoList',
            'Aggiungere componente estetica',
            'Inserire progetto nel portfolio se valido'
        ],
    },
    methods: {
        deleteTask(i) {
            this.tasks.splice(i, 1);
        },
    }
});