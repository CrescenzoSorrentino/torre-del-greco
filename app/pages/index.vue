<script setup lang="ts">
import aggiornamenti from "~/data/aggiornamenti.json";
</script>

<template>
  <main class="pagina">
    <h1 class="pagina__titolo">Aggiornamenti</h1>
    <div class="pagina__lista">
      <AggiornamentoCard
        v-for="aggiornamento in aggiornamenti"
        :key="aggiornamento.id"
        :aggiornamento="aggiornamento"
      />
    </div>
  </main>
</template>

<style scoped>
.pagina {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 16px;
}

.pagina__titolo {
  margin-bottom: 16px;
  font-size: 1.75rem;
  color: var(--golfo-scuro);
}

.pagina__lista {
  display: grid;
  gap: 16px;
}

@media (min-width: 768px) {
  .pagina {
    padding: 40px 24px;
  }

  .pagina__titolo {
    margin-bottom: 24px;
    font-size: 2.25rem;
  }

  .pagina__lista {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
</style>
