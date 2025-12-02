// Global state
let cards = [];
let savedDecks = [];
let currentDeck = Array(8).fill(null);
let selectedSlotIndex = null;

// Load data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    loadDecks();
    setupNavigation();
    setupEventListeners();
    setupDragAndDrop();
});

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show corresponding page
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(`${page}-page`).classList.add('active');
            
            // Refresh content based on page
            if (page === 'all-cards') {
                displayAllCards();
            } else if (page === 'my-decks') {
                displaySavedDecks();
            }
        });
    });
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-page="deck-builder"]').classList.add('active');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('deck-builder-page').classList.add('active');
    });
}

// Event Listeners
function setupEventListeners() {
    // Deck slots
    const slots = document.querySelectorAll('.slot');
    slots.forEach((slot, index) => {
        slot.addEventListener('click', () => selectSlot(index));
    });
    
    // Card search
    const cardSearch = document.getElementById('card-search');
    cardSearch.addEventListener('input', (e) => {
        displayCards(e.target.value);
    });
    
    // All cards search
    const allCardsSearch = document.getElementById('all-cards-search');
    allCardsSearch.addEventListener('input', (e) => {
        displayAllCards(e.target.value);
    });
    
    // Buttons
    document.getElementById('export-deck-btn').addEventListener('click', exportDeck);
    document.getElementById('clear-deck-btn').addEventListener('click', clearDeck);
}

// Load cards from cards.json
async function loadCards() {
    try {
        const response = await fetch('cards.json');
        cards = await response.json();
        displayCards();
    } catch (error) {
        console.log('No cards.json found or error loading cards');
        displayEmptyState('cards-grid', 'No cards available', 'Add a cards.json file to your repository');
    }
}

// Load saved decks from decks.json
async function loadDecks() {
    try {
        const response = await fetch('decks.json');
        savedDecks = await response.json();
        displaySavedDecks();
    } catch (error) {
        console.log('No decks.json found or error loading decks');
    }
}

// Select a slot
function selectSlot(index) {
    selectedSlotIndex = index;
    
    // Update visual state
    document.querySelectorAll('.slot').forEach((slot, i) => {
        if (i === index) {
            slot.classList.add('selected');
        } else {
            slot.classList.remove('selected');
        }
    });
    
    // Display cards for selection
    displayCards();
}

// Display cards in grid
function displayCards(searchTerm = '') {
    const cardsGrid = document.getElementById('cards-grid');
    
    if (cards.length === 0) {
        displayEmptyState('cards-grid', 'No cards available', 'Add a cards.json file to your repository');
        return;
    }
    
    const filteredCards = cards.filter(card => 
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    cardsGrid.innerHTML = filteredCards.map(card => {
        const isInDeck = currentDeck.some(c => c && c.id === card.id);
        return `
            <div class="card-item ${isInDeck ? 'disabled' : ''} rarity-${card.rarity}" onclick="selectCard('${card.id}')">
                <img src="${card.image}" alt="${card.name}">
            </div>
        `;
    }).join('');
}

// Select a card for the slot
function selectCard(cardId) {
    if (selectedSlotIndex === null) {
        alert('Please select a slot first!');
        return;
    }
    
    const card = cards.find(c => c.id === cardId);
    
    // Check if card already in deck
    if (currentDeck.some(c => c && c.id === cardId)) {
        return;
    }
    
    // Add card to deck
    currentDeck[selectedSlotIndex] = card;
    updateDeckDisplay();
    updateAvgElixir();
    displayCards(document.getElementById('card-search').value);
    
    // Auto-select next empty slot
    const nextEmptySlot = currentDeck.findIndex(c => c === null);
    if (nextEmptySlot !== -1) {
        selectSlot(nextEmptySlot);
    } else {
        selectedSlotIndex = null;
        document.querySelectorAll('.slot').forEach(slot => slot.classList.remove('selected'));
    }
}

// Update deck display
function updateDeckDisplay() {
    const slots = document.querySelectorAll('.slot');
    
    slots.forEach((slot, index) => {
        const card = currentDeck[index];
        
        if (card) {
            slot.classList.remove('empty');
            slot.classList.add('filled');
            slot.innerHTML = `
                <div class="card-wrapper rarity-${card.rarity}">
                    <img src="${card.image}" alt="${card.name}">
                </div>
            `;
        } else {
            slot.classList.add('empty');
            slot.classList.remove('filled');
            slot.innerHTML = `
                <div class="slot-number">${index + 1}</div>
                <div class="slot-placeholder">+</div>
            `;
        }
    });
}
// Setup drag and drop for deck slots
function setupDragAndDrop() {
    const slots = document.querySelectorAll('.slot');

    slots.forEach((slot, index) => {
        slot.addEventListener('dragstart', e => {
            if (!currentDeck[index]) {
                e.preventDefault(); // nu tragem slot gol
                return;
            }
            e.dataTransfer.setData('text/plain', index);
        });

        slot.addEventListener('dragover', e => {
            e.preventDefault();
            slot.classList.add('drag-over');
        });

        slot.addEventListener('dragleave', e => {
            slot.classList.remove('drag-over');
        });

        slot.addEventListener('drop', e => {
            e.preventDefault();
            slot.classList.remove('drag-over');

            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const toIndex = index;

            // Swap cards
            const temp = currentDeck[fromIndex];
            currentDeck[fromIndex] = currentDeck[toIndex];
            currentDeck[toIndex] = temp;

            updateDeckDisplay();
        });
    });
}


// Update average elixir
function updateAvgElixir() {
    const filledCards = currentDeck.filter(c => c !== null);
    if (filledCards.length === 0) {
        document.getElementById('avg-elixir').textContent = '0.0';
        return;
    }
    
    const total = filledCards.reduce((sum, card) => sum + card.elixir, 0);
    const avg = (total / filledCards.length).toFixed(1);
    document.getElementById('avg-elixir').textContent = avg;
}

// Export deck
function exportDeck() {
    const filledCards = currentDeck.filter(c => c !== null);
    
    if (filledCards.length !== 8) {
        alert('Deck must have exactly 8 cards!');
        return;
    }
    
    const deckName = document.getElementById('deck-name').value.trim();
    if (!deckName) {
        alert('Please enter a deck name!');
        return;
    }
    
    const avgElixir = document.getElementById('avg-elixir').textContent;
    
    const deck = {
        id: Date.now(),
        name: deckName,
        cards: currentDeck,
        avgElixir: avgElixir
    };
    
    // Download as JSON
    const dataStr = JSON.stringify(deck, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${deckName.replace(/\s+/g, '-').toLowerCase()}.json`;
    link.click();
    
    alert('Deck exported! Add it to decks.json in your repository.');
}

// Clear deck
function clearDeck() {
    if (confirm('Are you sure you want to clear the deck?')) {
        currentDeck = Array(8).fill(null);
        selectedSlotIndex = null;
        document.getElementById('deck-name').value = '';
        updateDeckDisplay();
        updateAvgElixir();
        displayCards();
        document.querySelectorAll('.slot').forEach(slot => slot.classList.remove('selected'));
    }
}

// Display saved decks
function displaySavedDecks() {
    const container = document.getElementById('saved-decks-container');
    
    if (savedDecks.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No saved decks</h3>
                <p>Create a deck and add it to decks.json</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = savedDecks.map(deck => `
        <div class="deck-card" onclick="loadDeck(${deck.id})">
            <div class="deck-card-header">
                <div class="deck-card-title">${deck.name}</div>
                <div class="deck-card-elixir">Avg: ${deck.avgElixir}</div>
            </div>
            <div class="deck-card-grid">
                ${deck.cards.map(card => `
                    <div class="card-wrapper rarity-${card.rarity}">
                        <img src="${card.image}" alt="${card.name}">
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Load a saved deck into builder
function loadDeck(deckId) {
    const deck = savedDecks.find(d => d.id === deckId);
    if (!deck) return;
    
    currentDeck = [...deck.cards];
    document.getElementById('deck-name').value = deck.name;
    
    // Switch to deck builder page
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-page="deck-builder"]').classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('deck-builder-page').classList.add('active');
    
    updateDeckDisplay();
    updateAvgElixir();
    displayCards();
}

// Display all cards
function displayAllCards(searchTerm = '') {
    const container = document.getElementById('all-cards-grid');
    
    if (cards.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>No cards available</h3>
                <p>Add a cards.json file to your repository</p>
            </div>
        `;
        return;
    }
    
    const filteredCards = cards.filter(card => 
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    container.innerHTML = filteredCards.map(card => `
        <div class="card-item rarity-${card.rarity}">
            <img src="${card.image}" alt="${card.name}">
        </div>
    `).join('');
}

// Display empty state
function displayEmptyState(containerId, title, description) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="empty-state">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
}