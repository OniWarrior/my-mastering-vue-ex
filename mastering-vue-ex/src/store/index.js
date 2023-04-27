import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Stephen Aranda' },
    categories: ['sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'],
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '... ', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: '...', organizer: '...' }
    ]
  },

  getters: {
    catLength: state => {
      return state.categories.length
    },

    getEventByID: state => id => {
      return state.events.find(event => event.id === id)

    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event);
      commit("ADD_EVENT", event);

    }
  },
  modules: {},
});
