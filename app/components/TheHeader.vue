<template>
  <header class="testata">
    <div class="testata__contenuto">
      <NuxtLink to="/" class="testata__nome">
        <IconaCorallo class="testata__corallo" />
        Torre in Chiaro
      </NuxtLink>
      <p class="testata__sottotitolo">
        Strisce blu, semafori e novità di Torre del Greco, con le fonti.
      </p>
    </div>

    <!-- due strati: il vulcano mantiene le proporzioni ("meet") così la cima
         non viene tagliata; il mare è una fascia che si allunga quanto serve -->
    <div class="testata__paesaggio" aria-hidden="true">
      <svg
        class="testata__vulcano"
        viewBox="0 0 800 100"
        preserveAspectRatio="xMaxYMax meet"
      >
        <!-- Monte Somma a sinistra, Gran Cono con il cratere a destra -->
        <path
          d="M0 100 L120 88 L220 64 L280 50 L320 46 L350 52 L380 44 L440 18
             L468 14 L480 19 L492 14 L520 20 L600 52 L700 80 L800 96 L800 100 Z"
        />
      </svg>
      <div class="testata__mare"></div>
    </div>
  </header>
</template>

<style scoped>
.testata {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #ffffff, var(--cielo));
  border-bottom: 1px solid #dbe6ee;
}

.testata__contenuto {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 16px 64px;
}

.testata__nome {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--golfo-scuro);
  text-decoration: none;
}

.testata__corallo {
  width: 1.25em;
  height: 1.25em;
  color: var(--corallo);
}

.testata__sottotitolo {
  margin-top: 4px;
  max-width: 34ch;
  font-size: 0.9375rem;
  color: var(--testo-secondario);
}

.testata__paesaggio {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
}

.testata__vulcano {
  position: absolute;
  right: 0;
  bottom: 14px;
  width: 100%;
  height: calc(100% - 14px);
  fill: #c9d8e3;
}

.testata__mare {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 14px;
  background-color: var(--golfo);
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.18);
}

@media (min-width: 768px) {
  .testata__contenuto {
    padding: 32px 24px 104px;
  }

  .testata__nome {
    font-size: 2rem;
  }

  .testata__sottotitolo {
    max-width: none;
    font-size: 1rem;
  }

  .testata__paesaggio {
    height: 120px;
  }

  .testata__vulcano {
    bottom: 20px;
    height: calc(100% - 20px);
  }

  .testata__mare {
    height: 20px;
  }
}
</style>
