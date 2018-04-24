class Deck
{
	constructor()
	{	
		this.card_deck = this.setup1();
		this.card = {};
		this.cardgiven = 0;
				
	}

	deal()
	{
			
		this.cardgiven++;
		this.card_deck[this.cardgiven-1].dealt = true;

		return this.card_deck[this.cardgiven-1];
	};

	setup1()
	{
		let value1 =0;
		let suit = "";
		let newdeck = [];
		for (let x = 1; x <= 4; x++)
		{
			for (let i = 1; i <= 13; i++)
			{
				if (i == 1)
				{
					value1 = "A";
				}	
				else if (i == 11)
				{
					value1 = "J"
				}	
				else if (i == 12)
				{
					value1 = "Q"
				}		
				else if (i == 13)
				{
					value1 = "K"
				}			
				else
				{
					value1 = i;			
				}

				if (x == 1)
				{
					suit = "clover";
				}
				else if(x == 2)
				{
					suit = "spade";
				}
				else if(x == 3)
				{
					suit = "heart";
				}
				else if(x == 4)
				{
					suit = "diamond";
				}

				let card1 = {
					"card" : value1,
					"suit" : suit,
					"dealt" : false
				}
				newdeck.push(card1);
			}
			
		}
	
		return newdeck;
	};

	reset()
	{
		for(let i = 0; i <52; i++)
		{
			this.card_deck[i].dealt = false;
		}
	};

  shuffle()
	{
		let pos1 = 0;
		let pos2 = 0;
		for(let i = 0; i < 50; i++)
		{
			pos1 = Math.floor(Math.random() * (51 - 1) ) + 1;
			pos2 = Math.floor(Math.random() * (51 - 1) ) + 1;
			let temp1 = this.card_deck[pos1];
			this.card_deck[pos1] = this.card_deck[pos2];
			this.card_deck[pos2] = temp1;
		}
	};

	display1()
	{
		console.log(this.card_deck);
	};

}  //end of deal

class Player
{
	constructor(name)
	{	
		this.name = name;
		this.hand = [];
		
	};

	hand1(deck1)
	{
		for (let i = 0; i <5; i++)
		{
			this.hand.push(deck1.deal());
		}
		return deck1;
	};

	takecard(deck1)
	{

		return deck1.deal();	
	};

	discardcard(pos, deck1)
	{
		this.hand[pos] = this.takecard(deck1)
		return deck1;
	};

	display2()
	{
		console.log("-------");
		console.log(this.name);
		for (let i = 0; i < this.hand.length; i++)
		{
			console.log(this.hand[i]);
		}
	};
} //end of player


new_deck = new Deck();


new_deck.display1();
new_deck.shuffle();
new_deck.display1();
Jacob = new Player("Jacob");
John = new Player("John");
new_deck = Jacob.hand1(new_deck);
new_deck = John.hand1(new_deck);
Jacob.display2();
John.display2();
console.log(new_deck.cardgiven, "card gave out");
console.log(new_deck.card_deck, "final");
new_deck = Jacob.discardcard(1,new_deck);
new_deck = Jacob.discardcard(3,new_deck);
console.log(new_deck.cardgiven, "card gave out");
console.log(new_deck.card_deck, "final");
Jacob.display2();