## Week 6 LAB - Due Monday 03/04/19 at 11:59pm
Download and expand upon the in class example

- For FULL credit use proper ES6 syntax including using let/const properly.
- For FULL credit do not hard code values (unless otherwise stated).
- For FULL credit upload ONLY the app.js file.

---

#### Download the card-app from github.

- run `npm install` inside the card-app folder to install the deps
- run the sample command `node cli.js draw --shuffle true --count 3`

<hr >

#### Expand upon the app to handle the user's selection of 'Y/n'

IF **YES** THEN
- Draw another card from the **SAME** deck
- Display the original cards + the newly drawn card
- Display the total of all cards (Assume King, Queen, Jack with value of 10 and Ace with value of 11)
- Display the remaining cards in the deck using the value from the API (no calculations permitted)

For example if running `node cli.js draw --shuffle true --count 3`
```
 -- CARDS --
 KING of HEARTS
 2 of CLUBS
 ACE of HEARTS
 9 of HEARTS

 TOTAL CARD VALUE: 32

 REMAINING CARDS: 48
```

IF **NO** THEN
- Display the original cards
- Display the total of all cards (Assume King, Queen, Jack with value of 10 and Ace with value of 11)
- Display the remaining cards in the deck using the value from the API (no calculations permitted)

For example if running `node cli.js draw --shuffle true --count 3`
```
 -- CARDS --
 KING of HEARTS
 2 of CLUBS
 ACE of HEARTS

 TOTAL CARD VALUE: 23

 REMAINING CARDS: 49
```
