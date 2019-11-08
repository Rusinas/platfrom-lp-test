import Vue from 'vue'
import Vuex from 'vuex'
import dialogs from '@/data/dialogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: 'Petr',
    dialogs: [],
    messagesForSelectedDialog: [],
    totalMessages: 0
  },
  mutations: {
    SET_DIALOGS(state, dialogs) {
      state.dialogs = dialogs
    },
    SET_MESSAGES(state, messages) {
      state.messagesForSelectedDialog = messages
    },
    PUSH_NEW_MESSAGE(state, message) {
      state.messagesForSelectedDialog.push(message)
    },
    SET_TOTAL_MESSAGES_COUNT(state, count) {
      state.totalMessages = count
      console.log('Сообщения посчитаны!', count)
    }
  },
  actions: {
    getDialogs({ commit, dispatch }) {
      commit('SET_DIALOGS', dialogs)
      dispatch('countMessages')

      console.log('Диалоги успешно получены')
    },
    getMessages({ commit }, dialog_id) {
      return new Promise((resolve, reject) => {
        // Обращаюсь не к стейту, потому, что он не готов в момент вызова данной функции
        const dialog = dialogs.find(dialog => dialog.id == dialog_id)
        const messages = dialog.parts

        commit('SET_MESSAGES', messages)
        setTimeout(resolve, 1200)
      })
    },
    addMessageToDialog({ state, commit, dispatch }, message) {
      return new Promise((resolve, reject) => {
        message.id = state.messagesForSelectedDialog.length + 2
        
        setTimeout(() => {
          commit('PUSH_NEW_MESSAGE', message)
          dispatch('countMessages')
          return resolve()
        }, 1000)

      })
    },
    countMessages({ state, commit }) {
      const count = state.dialogs.reduce((acc, current) =>  acc + current.parts.length, 0)
      commit('SET_TOTAL_MESSAGES_COUNT', count)
    }
  }
})
