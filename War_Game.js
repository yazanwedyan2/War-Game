// Define the Card class representing a single playing card
class Card {
    constructor(rank, suit) {
        this.rank = rank; // Initialize the rank of the card
        this.suit = suit; // Initialize the suit of the card
    }

    // Method to get the numerical value of the card
    getValue() {
        const ranks = {
            'Ace': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'Jack': 11,
            'Queen': 12,
            'King': 13
        };
        return ranks[this.rank]; // Return the numerical value of the card based on its rank
    }
}

// Define the Deck class representing a deck of playing cards
class Deck {
    constructor() {
        this.cards = []; // Initialize an empty array to hold the cards in the deck
        const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']; // Define possible ranks
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; // Define possible suits

        // Populate the deck with 52 cards (13 ranks * 4 suits)
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(rank, suit)); // Create a new card instance and add it to the deck
            }
        }
    }

    // Method to shuffle the deck
    shuffle() {
        // Fisher-Yates shuffle algorithm
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index within the deck
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards at index i and j
        }
    }

    // Method to deal a card from the deck
    dealCard() {
        return this.cards.pop(); // Remove and return the top card from the deck
    }
}

// Define the Player class representing a player in the game
class Player {
    constructor() {
        this.hand = []; // Initialize an empty array to hold the player's hand
        this.score = 0; // Initialize the player's score to 0
    }

    // Method to play a card from the player's hand
    playCard() {
        return this.hand.pop(); // Remove and return the top card from the player's hand
    }

    // Method to increment the player's score
    incrementScore() {
        this.score++; // Increment the player's score
    }
}

// Main game logic
let player1 = new Player(); // Create Player 1
let player2 = new Player(); // Create Player 2
let deck = new Deck(); // Create a deck of cards
deck.shuffle(); // Shuffle the deck

// Deal cards to players (26 each)
for (let i = 0; i < 26; i++) {
    player1.hand.push(deck.dealCard()); // Deal a card to Player 1
    player2.hand.push(deck.dealCard()); // Deal a card to Player 2
}

// Play the game
for (let i = 0; i < 26; i++) {
    let card1 = player1.playCard(); // Player 1 plays a card
    let card2 = player2.playCard(); // Player 2 plays a card

    // Compare the values of the cards played
    let value1 = card1.getValue(); // Get the value of Player 1's card
    let value2 = card2.getValue(); // Get the value of Player 2's card

    // Determine the winner of the round and update scores accordingly
    if (value1 > value2) {
        player1.incrementScore(); // Player 1 wins the round
    } else if (value1 < value2) {
        player2.incrementScore(); // Player 2 wins the round
    }
}

// Display scores and declare the winner
console.log("Player 1 Score:", player1.score); // Display Player 1's score
console.log("Player 2 Score:", player2.score); // Display Player 2's score
if (player1.score > player2.score) {
    console.log("Player 1 wins!"); // Player 1 wins if their score is higher
} else if (player1.score < player2.score) {
    console.log("Player 2 wins!"); // Player 2 wins if their score is higher
} else {
    console.log("It's a tie!"); // It's a tie if both players have the same score
}
