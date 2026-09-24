<script setup lang="ts">
import aggiornamenti from "~/data/aggiornamenti.json";

const id = useRoute().params.id;
const aggiornamento = aggiornamenti.find(
  (elemento) => elemento.id === Number(id),
);
</script>
<template>
  <main class="dettaglio">
    <NuxtLink to="/" class="dettaglio__indietro">
      ← Tutti gli aggiornamenti
    </NuxtLink>

    <article v-if="aggiornamento" class="dettaglio__articolo">
      <h1 class="dettaglio__titolo">{{ aggiornamento.titolo }}</h1>

      <div class="dettaglio__dati">
        <p>{{ aggiornamento.zona }}</p>
        <p class="dettaglio__stato">
          {{ fraseStato(aggiornamento.stato, aggiornamento.dataInizio) }}
        </p>
        <p v-if="aggiornamento.costo">
          Costo: <strong>{{ aggiornamento.costo }}</strong>
        </p>
      </div>

      <p class="dettaglio__descrizione">{{ aggiornamento.descrizione }}</p>

      <footer class="dettaglio__fonti">
        Fonti:
        <a
          v-for="fonte in aggiornamento.fonti"
          :key="fonte.url"
          :href="fonte.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ fonte.nome }}</a
        >
      </footer>
    </article>

    <div v-else class="dettaglio__vuoto">
      <h1 class="dettaglio__titolo">Aggiornamento non disponibile</h1>
      <p>Il link potrebbe essere sbagliato o l'aggiornamento è stato rimosso.</p>
    </div>
  </main>
</template>

<style scoped>
/* stessa colonna da 960px della testata e della lista, così i bordi
   sinistri coincidono; la card resta a 720px per la leggibilità */
.dettaglio {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 16px;
}

.dettaglio__indietro {
  display: inline-block;
  margin-bottom: 16px;
  font-size: 0.875rem;
  color: #4b5563;
  text-decoration: none;
}

.dettaglio__indietro:hover {
  color: var(--corallo-scuro);
}

.dettaglio__articolo,
.dettaglio__vuoto {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 16px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.dettaglio__titolo {
  font-size: 1.5rem;
  line-height: 1.25;
}

.dettaglio__dati {
  font-size: 0.875rem;
  color: #6b7280;
}

.dettaglio__stato {
  font-weight: 500;
  color: #374151;
}

.dettaglio__dati strong {
  color: #374151;
}

.dettaglio__descrizione {
  color: #374151;
}

.dettaglio__fonti {
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
  font-size: 0.75rem;
  color: #6b7280;
}

.dettaglio__fonti a {
  font-weight: 500;
  color: var(--golfo);
  text-decoration: none;
}

.dettaglio__fonti a:hover {
  color: var(--golfo-scuro);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.dettaglio__fonti a + a::before {
  content: " · ";
  display: inline-block;
  white-space: pre;
  color: #6b7280;
}

.dettaglio__vuoto p {
  color: #6b7280;
}

@media (min-width: 768px) {
  .dettaglio {
    padding: 40px 24px;
  }

  .dettaglio__articolo,
  .dettaglio__vuoto {
    padding: 32px;
  }

  .dettaglio__titolo {
    font-size: 2rem;
  }
}
</style>
