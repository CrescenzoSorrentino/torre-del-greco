<template>
  <footer class="piede">
    <div class="piede__contenuto">
      <p class="piede__nome">
        <IconaCorallo class="piede__corallo" />
        Torre in Chiaro
      </p>
      <p>Sito indipendente, non affiliato al Comune di Torre del Greco.</p>
      <p>
        Ogni aggiornamento riporta le sue fonti. Per informazioni ufficiali fa
        fede il Comune.
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* centrato: le pagine hanno colonne di larghezza diversa (960 la lista,
   720 il dettaglio), e un testo centrato sta bene sotto entrambe */
.piede {
  margin-top: 16px;
  background-color: #163a4d;
  box-shadow: inset 0 3px 0 var(--golfo);
}

.piede__contenuto {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 16px 40px;
  font-size: 0.8125rem;
  text-align: center;
  color: #b9cbd6;
}

.piede__nome {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
}

.piede__corallo {
  width: 1.2em;
  height: 1.2em;
  color: var(--corallo);
}

@media (min-width: 768px) {
  .piede__contenuto {
    padding: 40px 24px 48px;
  }
}
</style>
