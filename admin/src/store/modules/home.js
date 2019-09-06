const home = {
  state: {
    message_logs: []
  },
  mutations: {
    SET_MESSAGE_LOGS: (state, lines) => {
      state.message_logs = lines
    }
  },
  actions: {}
}

export default home
