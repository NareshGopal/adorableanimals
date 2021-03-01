<template>
  <div id="app">
    <nav>
      <router-link class="router-link" @click="activeTab = 'doggie'" :to="{ name: 'Doggie' }">Doggies</router-link>  
      <span>|</span>
      <router-link class="router-link" @click="activeTab = 'kitten'" :to="{ name: 'Kitten' }">Kittens</router-link>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () =>  ({
      activeTab: 'doggie',
  }),
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #eee;
}

#app {
  width: 85%;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 1.5rem;
}

.router-link {
  height: 3.5rem;
  width: 8rem;
  margin: 0 2rem;
  text-decoration: none;
  color: black;
  font-size: 2rem;
}
.router-link-active {
  border-bottom: 3.5px solid gold;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  margin-right: 2rem;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 1rem;
  margin-top: 2rem;
}

.grid-item {
  display: inline-block;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 200ms;
}

.add-image {
  height: 2.5rem;
  min-width: 10rem;
  padding: 0.4rem 1rem;
  border: none;
  background-color: gold;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2rem;
  outline: none;
}
.add-image:hover {
  box-shadow: 0 0 10px rgba(0,0,0, 0.5);
}
.add-image:active {
  box-shadow: 0 0 9px rgba(0,0,0, 0.5);
  transform: scale(0.98)
}
</style>
