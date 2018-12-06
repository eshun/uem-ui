
const app = {
    state: {
        collapse: false,
    },
    mutations: {
        TOGGLE_COLLAPSE: (state, isCollapse) => {
            if (isCollapse !== null && isCollapse !== undefined) {
                state.collapse = isCollapse
            } else {
                state.collapse = !state.collapse
            }
        },
    },
    actions: {
        toggleCollapse({ commit }, isCollapse) {
            commit('TOGGLE_COLLAPSE', isCollapse)
        },
    }
}

export default app
