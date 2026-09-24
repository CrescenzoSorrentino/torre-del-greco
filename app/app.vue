<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<style>
/* il piede resta in fondo anche quando la pagina è corta */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app > main {
  flex: 1;
  width: 100%;
}
</style>
