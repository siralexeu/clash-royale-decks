# ⚔️ Clash Royale Deck Builder

Un site simplu și elegant pentru a crea, gestiona și exporta deckuri din Clash Royale. Perfect pentru jucătorii care vor să-și organizeze strategiile și să experimenteze cu diferite combinații de cărți.

![Clash Royale Deck Builder](https://img.shields.io/badge/Clash%20Royale-Deck%20Builder-blue?style=for-the-badge)

## 🎮 Funcționalități

### 📦 Deck Builder
- **Interfață intuitivă** cu 8 sloturi pentru cărți
- **Selectare ușoară**: Click pe slot → alege carte din listă
- **Căutare rapidă** a cărților
- **Calcul automat** al mediei de elixir
- **Export JSON** pentru salvare
- **Drag & Drop** pentru rearanjarea cărților în deck
- **Auto-select** următorul slot gol după adăugarea unei cărți

### 💾 My Decks
- Vizualizează toate deckurile salvate
- Design cu carduri elegante
- Click pe un deck pentru a-l încărca în builder
- Afișare medie elixir pentru fiecare deck

### 🃏 All Cards
- Vizualizează toate cele 164 de cărți (125 normale + 39 evoluții)
- Căutare rapidă după nume
- Grid responsive cu hover effects
- Suport special pentru cărți Evolution, Legendary și Hero (dimensiuni mai mari)

## 📁 Structura Proiectului

```
clash-royale-deck-builder/
├── index.html          # Pagina principală cu cele 3 secțiuni
├── style.css           # Design dark theme cu animații
├── app.js              # Logica aplicației
├── cards.json          # Baza de date cu toate cărțile
├── decks.json          # Deckurile tale salvate
└── README.md           # Documentație
```

## 🚀 Instalare & Setup

### 1. Clone/Download Repository
```bash
git clone https://github.com/username/clash-royale-deck-builder.git
cd clash-royale-deck-builder
```

### 2. Creează `cards.json`

Fișierul trebuie să conțină un array cu toate cărțile. Exemple de structură:

```json
[
  {
    "id": "skellies",
    "name": "Skeletons",
    "image": "https://www.deckshop.pro/img/card_ed/Skellies.png",
    "elixir": 1,
    "rarity": "common"
  },
  {
    "id": "skellies_evo",
    "name": "Skeletons Evo",
    "image": "https://www.deckshop.pro/img/card_ed_evo/Skellies.png",
    "elixir": 1,
    "rarity": "evolution"
  },
  {
    "id": "little_prince",
    "name": "Little Prince",
    "image": "https://www.deckshop.pro/img/card_ed/LittlePrince.png",
    "elixir": 3,
    "rarity": "hero"
  },
  {
    "id": "mega_knight",
    "name": "Mega Knight",
    "image": "https://www.deckshop.pro/img/card_ed/MegaKnight.png",
    "elixir": 7,
    "rarity": "legendary"
  }
]
```

**Rarități disponibile:**
- `common` - Cărți comune
- `rare` - Cărți rare
- `epic` - Cărți epice
- `legendary` - Cărți legendare (dimensiune mărită)
- `evolution` - Evoluții (dimensiune mărită)
- `hero` - Eroi (dimensiune mărită)

### 3. Creează `decks.json`

Începe cu un array gol:
```json
[]
```

### 4. Deschide `index.html`

Poți deschide direct fișierul în browser sau folosi un server local:

```bash
# Cu Python 3
python -m http.server 8000

# Cu Node.js (http-server)
npx http-server

# Cu VS Code - Live Server extension
```

## 📝 Cum să Folosești

### Creare Deck Nou

1. **Mergi la "Deck Builder"**
2. **Click pe un slot** (1-8) - se evidențiază cu galben
3. **Scroll jos** și caută cartea dorită
4. **Click pe carte** - apare în slot
5. Repetă până ai 8 cărți
6. **Adaugă un nume** pentru deck
7. **Apasă "Export Deck"** - se descarcă JSON

### Salvare Deck

1. Deschide fișierul JSON descărcat (ex: `hog-cycle.json`)
2. Copiază conținutul
3. Deschide `decks.json` din repository
4. Adaugă obiectul în array:

```json
[
  {
    "id": 1733234567890,
    "name": "Hog Cycle",
    "cards": [
      { "id": "hog_rider", "name": "Hog Rider", ... },
      { "id": "musketeer", "name": "Musketeer", ... },
      ...
    ],
    "avgElixir": "3.1"
  }
]
```

5. **Salvează fișierul**
6. **Refreshează site-ul** - deck-ul apare în "My Decks"!

### Încărcare Deck Existent

1. Mergi la **"My Decks"**
2. **Click pe un deck** - se încarcă automat în builder
3. Modifică cărțile după preferință
4. Exportează din nou dacă vrei să salvezi modificările

## 🎨 Caracteristici Design

- **Dark Theme** elegant (#0a0a0a background)
- **Glassmorphism effects** pentru carduri
- **Hover animations** pe toate elementele interactive
- **Responsive design** pentru mobile și desktop
- **Custom scrollbars** stilizate
- **Cărți speciale** (Evolution, Legendary, Hero) au dimensiuni mai mari
- **Drag & Drop** pentru rearanjarea cărților în deck

## 🔗 URL-uri pentru Imagini Cărți

Site-ul folosește imaginile de pe **deckshop.pro**:

**Cărți normale:**
```
https://www.deckshop.pro/img/card_ed/[NumeCard].png
```

**Cărți evoluții:**
```
https://www.deckshop.pro/img/card_ed_evo/[NumeCard].png
```

**Exemple:**
- `Skellies.png` → Skeletons
- `IceSpirit.png` → Ice Spirit
- `PEKKA.png` → P.E.K.K.A
- `LittlePrince.png` → Little Prince

## 📦 Deploy pe GitHub Pages

### Pasul 1: Creează Repository
```bash
git init
git add .
git commit -m "Initial commit - Clash Royale Deck Builder"
git remote add origin https://github.com/username/clash-royale-deck-builder.git
git push -u origin main
```

### Pasul 2: Activează GitHub Pages
1. Mergi la **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → folder: **/ (root)**
4. **Save**

### Pasul 3: Accesează Site-ul
După 1-2 minute, site-ul va fi live la:
```
https://username.github.io/clash-royale-deck-builder/
```

## 💡 Tips & Tricks

### Completare `cards.json`
- Există **125 cărți normale** + **39 evoluții** = **164 total**
- Folosește nume consistente (ex: `PEKKA`, `IceSpirit`, `LittlePrince`)
- Verifică că URL-urile imaginilor funcționează

### Organizare Deckuri
- Folosește nume descriptive: "Hog Cycle 2.6", "Giant Beatdown", "Miner Control"
- Grupează deckuri similare
- Exportează backup periodic al `decks.json`

### Editare Directă
Poți edita `decks.json` manual pentru:
- Redenumire deckuri
- Ștergere deckuri
- Modificare cărți
- Reordonare listă

## 🛠️ Tehnologii Folosite

- **HTML5** - Structură
- **CSS3** - Design modern cu animații
- **Vanilla JavaScript** - Logică fără dependencies
- **JSON** - Stocare date
- **GitHub Pages** - Hosting gratuit

## 🎯 Caracteristici Viitoare (Opțional)

- [ ] Import deck din clipboard (link RoyaleAPI)
- [ ] Statistici deck (win rates, usage rates)
- [ ] Categorii de deckuri (Meta, Fun, Tournament)
- [ ] Partajare deckuri (link direct)
- [ ] Dark/Light mode toggle
- [ ] Export ca imagine

## 📄 Licență

Acest proiect este open-source și poate fi folosit liber. Imaginile cărților aparțin Supercell (Clash Royale).

## 🤝 Contribuții

Pull requests sunt binevenite! Pentru schimbări majore, deschide mai întâi un issue pentru discuție.

## 📧 Contact

Creat pentru jucătorii pasionați de Clash Royale! 🏆

---

**Happy Deck Building!** ⚔️🃏
