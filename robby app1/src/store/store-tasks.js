const state = {

    tasks: {
      '1': {
      name: "Go Shopping",
      completed: false,
      dueDate: "2022/05/22",
      dueTime: "8:30 AM",

      },
      '2': {
        name: "Walk The Dog",
        completed: false,
        dueDate: "2022/05/23",
        dueTime: "8:45 PM",

      },
      '3': {
  
      name: "Practice Coding",
      completed: false,
      dueDate: "2022/05/24",
      dueTime: "12:30 PM",

      },
      '4': {
      name: "Cook Dinner",
      completed: false,
      dueDate: "2022/05/24",
      dueTime: "5:30 PM",

      },

    }
  }


const mutations = {};

const actions = {};

const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
