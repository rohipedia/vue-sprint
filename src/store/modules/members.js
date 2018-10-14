const state = {
    members: [
        {
            name: 'Rohit Vhora',
            adid: 'au542755',
            email: 'rohit.vhora@accenture.com',
            scrum: {
                id: 8,
                name: 'WhiteWalkers'
            },
            leaves: []
        }
    ]
}

const getters = {
    member: (state, payload) => {
        return state.members.find(member => member.adid === payload.adid);
    },
    members: (state) => {
        return state.members;
    }
}

const mutations = {
    addMembers: (state, payload) => {
        state.members.push(payload);
    }
}

export default {
    state,
    getters,
    mutations
}