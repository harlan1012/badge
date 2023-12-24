<template>
  <div>
    <router-view />
  </div>
</template>
<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.app-nav {
  padding: 32px 0;
}

.router-link-exact-active {
  color: #f00;
}
</style>
