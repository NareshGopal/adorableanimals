<template>
    <div>
        <div class="title-container">
            <h2 class="title">Adorable Kittens</h2>
            <button class="add-image" @click="fetchKitten">Add a kitten</button>
        </div>

        <div class="image-container">
            <img class="grid-item" v-for="(image, index) in catImages" :key="index" :src="image"  alt="Cute Kitten">
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
    export default {
        name: "Kitten",
        data: () =>  ({
            catImages: [],
        }),
        mounted(){
            this.catImages = this.$store.getters.getCatImages
        },
        methods: {
            ...mapActions({fetchKitten: "fetchKitten"})
        },
        computed: {
            ...mapGetters({getCatImages: "getCatImages"})
        }
    }
</script>
