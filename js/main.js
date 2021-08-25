// inizializazzione Vuejs
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        newTask: "",
        searchedTask: '',
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
        addTask() {
            if (!this.newTask.trim() == '')
                this.tasks.push(this.newTask);
            this.newTask = '';
        },
        filterTask(task) {
            if (this.searchedTask.trim() == '') {
                return true;
            }
            const filter = this.searchedTask.trim().toLowerCase();
            task = task.toLowerCase();
            return task.includes(filter);
        },
    }
});