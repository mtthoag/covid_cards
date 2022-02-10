class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.points = 0;
        this.turn = false;
        this.call = 0;
        this.round_wins = 0;
    }
    get_call(){
        return this.call;
    }
    get_points(){
        return this.points;
    }
    get_round_wins(){
        return this.round_wins;
    }
    get_turn(){
        return this.turn;
    }
    get_hand(){
        return this.hand;
    }
    set_call(call){
        this.call = call;
    }
    set_points(points){
        this.points = points;
    }
    set_round_wins(round_wins){
        this.round_wins = round_wins;
    }
    set_turn(turn){
        this.turn = turn;
    }
    add_card(card){
        this.hand.push(card);
    }
    remove_card(card){
        this.hand.splice(card, 1);
    }
}
class Kachuful{
    constructor(p1, p2, p3, p4){
        this.p1 = new Player(p1);
        this.p2 = new Player(p2);
        this.p3 = new Player(p3);
        this.p4 = new Player(p4);
        this.cards = [
            { Value: '2', Suit: 'spades' },
            { Value: '3', Suit: 'spades' },
            { Value: '4', Suit: 'spades' },
            { Value: '5', Suit: 'spades' },
            { Value: '6', Suit: 'spades' },
            { Value: '7', Suit: 'spades' },
            { Value: '8', Suit: 'spades' },
            { Value: '9', Suit: 'spades' },
            { Value: '10', Suit: 'spades' },
            { Value: '11', Suit: 'spades' },
            { Value: '12', Suit: 'spades' },
            { Value: '13', Suit: 'spades' },
            { Value: '14', Suit: 'spades' },
            { Value: '2', Suit: 'diamonds' },
            { Value: '3', Suit: 'diamonds' },
            { Value: '4', Suit: 'diamonds' },
            { Value: '5', Suit: 'diamonds' },
            { Value: '6', Suit: 'diamonds' },
            { Value: '7', Suit: 'diamonds' },
            { Value: '8', Suit: 'diamonds' },
            { Value: '9', Suit: 'diamonds' },
            { Value: '10', Suit: 'diamonds' },
            { Value: '11', Suit: 'diamonds' },
            { Value: '12', Suit: 'diamonds' },
            { Value: '13', Suit: 'diamonds' },
            { Value: '14', Suit: 'diamonds' },
            { Value: '2', Suit: 'clubs' },
            { Value: '3', Suit: 'clubs' },
            { Value: '4', Suit: 'clubs' },
            { Value: '5', Suit: 'clubs' },
            { Value: '6', Suit: 'clubs' },
            { Value: '7', Suit: 'clubs' },
            { Value: '8', Suit: 'clubs' },
            { Value: '9', Suit: 'clubs' },
            { Value: '10', Suit: 'clubs' },
            { Value: '11', Suit: 'clubs' },
            { Value: '12', Suit: 'clubs' },
            { Value: '13', Suit: 'clubs' },
            { Value: '14', Suit: 'clubs' },
            { Value: '2', Suit: 'hearts' },
            { Value: '3', Suit: 'hearts' },
            { Value: '4', Suit: 'hearts' },
            { Value: '5', Suit: 'hearts' },
            { Value: '6', Suit: 'hearts' },
            { Value: '7', Suit: 'hearts' },
            { Value: '8', Suit: 'hearts' },
            { Value: '9', Suit: 'hearts' },
            { Value: '10', Suit: 'hearts' },
            { Value: '11', Suit: 'hearts' },
            { Value: '12', Suit: 'hearts' },
            { Value: '13', Suit: 'hearts' },
            { Value: '14', Suit: 'hearts' }
          ];
        this.round = 1;
        this.field = [];
        this.turn = p1;
        this.p1.set_turn(true);
        this.trump = 'spades';
    }

    deal_cards(){
        var current_cards = [...this.cards]
        for(var i = 0;i<this.round;i++){
            var card1 = current_cards.splice(Math.floor(Math.random()*current_cards.length),1)[0]
            var card2 = current_cards.splice(Math.floor(Math.random()*current_cards.length),1)[0]
            var card3 = current_cards.splice(Math.floor(Math.random()*current_cards.length),1)[0]
            var card4 = current_cards.splice(Math.floor(Math.random()*current_cards.length),1)[0]
            card1.player=this.p1;
            card2.player=this.p2;
            card3.player=this.p3;
            card4.player=this.p4;
            this.p1.add_card(card1);
            this.p2.add_card(card2);
            this.p3.add_card(card3);
            this.p4.add_card(card4);
           
        }
    }
    update_field(card){
        this.field.push(card)
    }
    round_end(){
        var current_suit = this.field[0].Suit;
        var trumps = [];
        var matching_suits = [];
        var winner = {};
        for(var i=0;i<4;i++){
            if(this.field[i].Suit === this.trump){
                trumps.push(this.field[i]);
            } else if(this.field[i].Suit === current_suit){
                matching_suits.push(this.field[i]);
            }
        }
        if(trumps[0]){
            trumps.sort(function (a,b) { return b.Value - a.Value; });
            winner = trumps[0];
        } else {
            matching_suits.sort(function (a,b) { return b.Value - a.Value; });
            winner = matching_suits[0];
        }
        winner.player.set_round_wins = winner.player.get_round_wins + 1;
    }
}
