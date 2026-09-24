<script setup lang="ts">
defineProps<{
  aggiornamento: {
    id: number;
    titolo: string;
    categoria: string;
    zona: string;
    lat: number;
    lng: number;
    descrizione: string;
    costo: string | null;
    dataInizio: string | null;
    stato: string;
    fonti: {
      nome: string;
      url: string;
    }[];
  };
}>();
</script>

<template>
  <article class="card">
    <NuxtLink
      :to="`/aggiornamenti/${aggiornamento.id}`"
      class="card__link"
      ><h2 class="card__titolo">{{ aggiornamento.titolo }}</h2></NuxtLink
    >
    <div class="card__dettagli">
      <p>{{ aggiornamento.zona }}</p>
      <p class="card__stato">
        {{ fraseStato(aggiornamento.stato, aggiornamento.dataInizio) }}
      </p>
      <p v-if="aggiornamento.costo" class="card__costo">
        Costo: <strong>{{ aggiornamento.costo }}</strong>
      </p>
    </div>
    <p class="card__descrizione">{{ aggiornamento.descrizione }}</p>
    <footer class="card__piede">
      <p class="card__fonti">
        Fonti:
        <a
          v-for="fonte in aggiornamento.fonti"
          :key="fonte.url"
          :href="fonte.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ fonte.nome }}</a
        >
      </p>
    </footer>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: border-color 0.15s;
}

.card__link {
  color: inherit;
  text-decoration: none;
}

/* stretched link: un rettangolo invisibile grande quanto la card rende
   cliccabile tutta la card senza annidare link (le fonti sono già <a>) */
.card__link::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.card:hover {
  border-color: var(--corallo);
}

.card__titolo {
  font-size: 1.25rem;
  line-height: 1.3;
}

.card__dettagli {
  font-size: 0.875rem;
  color: #6b7280;
}

/* il testo completo andrà nella pagina di dettaglio: qui solo 3 righe */
.card__descrizione {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  color: #374151;
}

/* margin-top: auto spinge il piede in fondo quando nella griglia
   una card è più alta del suo contenuto */
.card__piede {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #f3f4f6;
}

.card__costo {
  color: #374151;
}

.card__fonti {
  font-size: 0.75rem;
  color: #6b7280;
}

/* sopra il rettangolo del link, così le fonti restano cliccabili */
.card__fonti a {
  position: relative;
  z-index: 1;
  font-weight: 500;
  color: var(--golfo);
  text-decoration: none;
}

/* senza sottolineatura fissa: il colore dice "cliccabile", il passaggio
   del mouse lo conferma */
.card__fonti a:hover {
  color: var(--golfo-scuro);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.card__fonti a + a::before {
  content: " · ";
  display: inline-block;
  white-space: pre;
  color: #6b7280;
}

.card__stato {
  font-weight: 500;
  color: #374151;
}

@media (min-width: 768px) {
  .card {
    padding: 20px;
  }
}
</style>
