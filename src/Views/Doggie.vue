<template>
    <div>
        <div class="title-container">
            <h2 class="title">Adorable Doggies</h2>
            <button class="add-image" @click="fetchDoggy">Add a doggie</button>
        </div>

        <div class="image-container">
            <img class="grid-item" v-for="(image, index) in dogImages" :key="index" :src="image"  alt="Cute Doggy">
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "Doggie",
        data: () =>  ({
            dogImages: [],
        }),
        mounted(){
            this.dogImages = this.$store.getters.getDogImages
        },
        methods: {
            ...mapActions({fetchDoggy: "fetchDoggy"})
        },
        computed: {
            ...mapGetters({getDogImages: "getDogImages"})
        }
    }
</script>
