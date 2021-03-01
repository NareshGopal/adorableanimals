import Vue from "vue";
import Vuex from "vuex";
// import Doggie from "../Views/Doggie.vue";
// import Kitten from "../Views/Kitten.vue";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dogImages: [],
        catImages: []
    },
    mutations: {
        addDoggy(state, payload) {
            state.dogImages.unshift(payload)
        },
        addKitten(state, payload) {
            state.catImages.unshift(payload)
        }
    },
    actions: {
        async fetchDoggy(state) {
            try {
                const res = await fetch("https://dog.ceo/api/breeds/image/random")
                const data = await res.json();
                state.commit("addDoggy", data.message)
            } catch (error) {
                console.log(error)
            }
        },
        async fetchKitten(state) {
            try {
                const res = await fetch("https://aws.random.cat/meow")
                const data = await res.json();
                state.commit("addKitten", data.file)
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        getDogImages: state => state.dogImages,
        getCatImages: state => state.catImages,
    },
    modules: {
        // Doggie,
        // Kitten
    }
})