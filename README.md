# ⚔️ Clash Royale Deck Builder

Un site simplu și elegant pentru a crea, gestiona și exporta deckuri din Clash Royale. Perfect pentru jucătorii care vor să-și organizeze strategiile și să experimenteze cu diferite combinații de cărți.

![Clash Royale Deck Builder](https://img.shields.io/badge/Clash%20Royale-Deck%20Builder-blue?style=for-the-badge)

## 🎮 Cum Funcționează

### 🔨 Deck Builder - Creează Deckuri Noi

Pagina principală unde îți construiești deckurile:

1. **Selectează un slot** - Click pe unul din cele 8 sloturi goale (se evidențiază cu galben)
2. **Alege o carte** - Scroll jos și caută cartea dorită în listă
3. **Click pe carte** - Cartea apare automat în slotul selectat
4. **Repetă** - Următorul slot gol se selectează automat
5. **Vezi media de elixir** - Se calculează automat pe măsură ce adaugi cărți

**Funcții utile:**
- **Căutare rapidă** - Tastează numele cărții în bara de căutare
- **Drag & Drop** - Trage cărțile între sloturi pentru a le rearanja
- **Clear Deck** - Șterge toate cărțile și începe de la zero
- **Export Deck** - Când ai 8 cărți, adaugă un nume și apasă "Export Deck" pentru a descărca JSON-ul

### 💾 My Decks - Deckurile Tale Salvate

Aici găsești toate deckurile pe care le-ai salvat:

- **Vezi toate deckurile** - Fiecare deck afișează numele, cele 8 cărți și media de elixir
- **Încarcă în builder** - Click pe un deck pentru a-l deschide în Deck Builder
- **Modifică** - După ce încarci un deck, poți schimba cărțile și exporta din nou

### 🃏 All Cards - Toate Cărțile

Galerie completă cu toate cele 164 de cărți disponibile (125 cărți normale + 39 evoluții):

- **Explorează cărțile** - Vezi toate cărțile din joc într-un grid organizat
- **Căutare** - Găsește rapid orice carte după nume
- **Cărți speciale** - Evoluțiile, Legendare și Eroii au dimensiuni mai mari pentru a fi ușor de identificat

## 📝 Workflow Tipic

### Prima Utilizare

1. Intri pe site → vezi pagina **Deck Builder**
2. Explorezi cărțile disponibile în grid-ul de jos
3. Creezi primul deck selectând 8 cărți
4. Dai **Export Deck** și salvezi JSON-ul pe PC

### Salvare Permanentă

Pentru ca deckul să apară în **My Decks**, trebuie să adaugi JSON-ul exportat în fișierul `decks.json` din repository. După ce faci asta și refreshezi pagina, deck-ul va apărea salvat.

### Utilizare Zilnică

1. **Explorare** - Mergi la "My Decks" pentru a vedea toate strategiile tale
2. **Modificare** - Click pe un deck → se încarcă în builder → schimbi cărțile
3. **Testare** - Creezi variante ale aceluiași deck cu cărți diferite
4. **Organizare** - Exportezi noile versiuni și le salvezi

## 🎯 Caracteristici Cheie

### Interfață Intuitivă
- **Dark theme** elegant și plăcut pentru ochi
- **Hover effects** pe toate cărțile - se măresc și se luminează
- **Animații fluide** pentru tranziții și selecții
- **Responsive** - funcționează perfect pe telefon, tabletă și desktop

### Cărți Speciale
Site-ul recunoaște automat 3 tipuri de cărți speciale care primesc dimensiuni mai mari:
- **🌟 Evolution** - Cărțile cu evoluție
- **💎 Legendary** - Cărți legendare
- **👑 Hero** - Eroii

Aceste cărți "ies" din container-ul lor pentru a fi mai ușor de remarcat.

### Navigare Rapidă
- **Click pe logo** ("Clash Royale Deck Builder") pentru a reveni instant la Deck Builder
- **3 tab-uri** clare pentru navigare între secțiuni
- **Tab activ** evidențiat cu galben

## 💡 Tips pentru Utilizatori

### Crearea Deckurilor
- **Experimentează** - Nu te limita doar la meta decks, încearcă combinații noi
- **Media elixir** - Încearcă să menții media între 3.0-4.0 pentru deckuri echilibrate
- **Nume descriptive** - "Hog Cycle 2.6", "Giant Beatdown", "Miner Control" etc.

### Organizarea Deckurilor
- **Categorii mentale** - Grupează deckuri după stil: Cycle, Beatdown, Control, Siege
- **Variante** - Salvează multiple versiuni ale aceluiași deck cu small tweaks
- **Experimente** - Creează deckuri "fun" separate de cele competitive

### Navigare Eficientă
- **Căutare** - Folosește bara de search în loc să scrollezi
- **Drag & Drop** - Cel mai rapid mod de a rearanja cărțile în deck
- **Auto-select** - Nu trebuie să apeși manual pe fiecare slot, se selectează automat

## 🎨 Detalii Vizuale

### Design-ul Sloturilor
- **Slot gol** - Background cu imagine de carte blank, afișează "+"
- **Slot selectat** - Contur galben strălucitor
- **Slot cu carte** - Cartea afișată în întregime, poate fi trasă pentru rearanjare

### Grid-ul de Cărți
- **Cărți disponibile** - Culori normale, clickabile
- **Cărți în deck** - Opacitate redusă (30%), nu pot fi selectate din nou
- **Hover** - Cartea se mărește ușor și primește o umbră galbenă

### Deckuri Salvate
- **Card design** - Fundal dark cu border subtil
- **Hover effect** - Se ridică ușor și primește shadow mai puternic
- **Layout 4x2** - Cele 8 cărți afișate în 2 rânduri de câte 4

---

**Gata de Battle!** ⚔️ Creează-ți strategia perfectă și domină arena! 🏆
