import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos',response.data);
    },
    async updateTodo({ commit }, updtodo) {
        const response = await axios.put('https://jsonplaceholder.typicode.com/todos/${updtodo.id}',updtodo);
        console.log(response.data);
        commit('updateTodo', response.data);
    },
    async addTodos({ commit }, title ) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
            {title, completed: false}
        );
         
        commit ('newTodo', response.data); 
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('deleteTodo', id);
    },
    async filterTodos({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodos', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updtodo) => {
        const index = state.todos.findIndex(todo => todo.id === updtodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updtodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};

