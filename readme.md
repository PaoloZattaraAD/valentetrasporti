# Guida al progetto Astro Tailwind: Astro + Tailwind

Questa guida ti aiuterà a iniziare a lavorare con il progetto basato su Astro e Tailwind CSS.

## Introduzione

Il progetto è stato convertito da Vite + HTML a **Astro**, un moderno framework web che offre:
- Componenti riutilizzabili
- Routing basato su file
- Ottima integrazione con Tailwind CSS
- Maggiore semplicità nella creazione di template HTML

## Struttura del progetto

```
valentetrasporti/
├── public/              # File statici (immagini, font, ecc.)
├── src/
│   ├── components/      # Componenti riutilizzabili
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/         # Layout riutilizzabili
│   │   └── Layout.astro
│   ├── pages/           # Pagine (routing basato su file)
│   │   ├── index.astro  # Homepage (route: /)
│   │   ├── servizi.astro # Pagina Servizi (route: /servizi)
│   │   └── servizi/     # Sottopagine dei servizi
│   ├── styles/          # Stili CSS
│   │   └── tailwind.css # CSS compilato da Tailwind
│   └── input.css        # File con direttive Tailwind
├── astro.config.mjs     # Configurazione Astro
├── tailwind.config.js   # Configurazione Tailwind
└── package.json         # Dipendenze e script
```

## Come iniziare

1. **Installa le dipendenze**:
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```
   Il sito sarà disponibile all'indirizzo `http://localhost:4321`

3. **Compilazione per produzione**:
   ```bash
   npm run build
   ```
   I file compilati saranno nella cartella `dist/`

## Lavorare con i componenti Astro

### Struttura di un componente Astro

I componenti Astro hanno l'estensione `.astro` e sono divisi in due parti:
- **Script** (frontmatter): Racchiuso tra `---` dove puoi scrivere JavaScript/TypeScript
- **Template**: HTML con supporto per espressioni JavaScript e componenti

```astro
---
// Script (frontmatter)
const { title = "Titolo predefinito" } = Astro.props;
const items = ["Item 1", "Item 2", "Item 3"];
---

<!-- Template HTML -->
<div class="container">
  <h1>{title}</h1>
  <ul>
    {items.map(item => <li>{item}</li>)}
  </ul>
</div>

<style>
  /* Stili isolati solo per questo componente */
  .container {
    padding: 1rem;
  }
</style>
```

### Utilizzo dei componenti

Per utilizzare un componente in un altro file:

```astro
---
import MioComponente from '../components/MioComponente.astro';
---

<MioComponente title="Titolo personalizzato" />
```

## Routing

Astro utilizza un routing basato sui file nella cartella `src/pages/`:

- `src/pages/index.astro` → `/`
- `src/pages/servizi.astro` → `/servizi`
- `src/pages/chi-siamo.astro` → `/chi-siamo`
- `src/pages/servizi/trasporto-industriale.astro` → `/servizi/trasporto-industriale`

## Tailwind CSS

Tailwind CSS è già configurato nel progetto. Puoi utilizzare tutte le classi di Tailwind nei tuoi componenti:

```astro
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h2 class="text-2xl font-bold text-gray-800 mb-2">Titolo</h2>
  <p class="text-gray-600">Descrizione</p>
</div>
```

## Creare nuove pagine

1. Crea un nuovo file nella cartella `src/pages/`, ad esempio `contatti.astro`
2. Utilizza il layout di base e aggiungi il contenuto specifico:

```astro
---
import Layout from '../layouts/layout.astro';
---

<Layout
  title="Astro Tailwind - Contatti"
  description="Contatta Astro Tailwind per informazioni e preventivi"
  activeLink="contatti"
>
  <!-- Contenuto della pagina -->
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold mb-6">Contattaci</h1>
      <!-- Form di contatto o altre informazioni -->
    </div>
  </section>
</Layout>
```

## Vantaggi per i developer junior

1. **Approccio component-based**: Facilita la creazione e il riutilizzo di componenti
2. **Sintassi familiare**: HTML e JavaScript standard, senza necessità di imparare nuovi framework
3. **Più facile da debuggare**: Gli errori sono più chiari e facili da individuare
4. **Routing semplice**: Il routing basato su file è intuitivo

## Risorse utili

- [Documentazione Astro](https://docs.astro.build/en/getting-started/)
- [Documentazione Tailwind](https://tailwindcss.com/docs)
- [Componenti Astro](https://docs.astro.build/en/core-concepts/astro-components/)
