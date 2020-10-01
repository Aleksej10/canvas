import React from 'react';
import {connect} from 'react-redux';
import './index.css';

function numToCard(n){
  const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const suits = ['❤', '♠', '♦','♣'];
  const color = ['red', 'black', 'red', 'black'];
  const card = {
    value: n,
    text: values[n%13],
    suit: suits[Math.floor(n/13)],
    color: color[Math.floor(n/13)],
  };
  return card;
}

function getShuffled(){
  var a = [...Array(52).keys()];
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function TurnedCard(props){
  const p = numToCard(props.value);
  return (
    <div className='tcard'>
      <p className='card-p' style={{ color: p.color }}> { p.text } </p>
      <p className='card-p' style={{ color: p.color }}> { p.suit } </p>
    </div>
  );
}

function LastTurned(props){
  const p = numToCard(props.value);
  const cName = 'lcard ' + props.outcome;
  return (
    <div className={cName}>
      <div className='pipValue'>
        <p className='card-p' style={{ color: p.color }}> { p.text } </p>
        <p className='card-p' style={{ color: p.color }}> { p.suit } </p>
      </div>
      <div className='pipValue upSideDown'>
        <p className='card-p' style={{ color: p.color }}> { p.suit } </p>
        <p className='card-p' style={{ color: p.color }}> { p.text } </p>
      </div>
    </div>
  );
}

function Deck(props){
  return(
    <div className='deck'>
      <div className='bet' onClick={()=>props.onClick(true)}> <p className='bet-p'>👆</p> </div>
      <div className='bet' onClick={()=>props.onClick(false)}> <p className='bet-p'>👇</p> </div>
    </div>
  );
}

function Cards(props){
  const cards = props.cards;
  const index = props.index;
  var turnedCards = [];
  for(let i = 0; i<index; i++){
    turnedCards.push(<TurnedCard key = {i} value= { cards[i] } />);
  }

  return (
    <div className='cards'>
      <Deck 
        onClick={(high)=>props.onClick(high)}
      />
      { turnedCards }
      <LastTurned 
        value = { cards[index] } 
        outcome = { props.outcome }
      />
    </div>
  );
}

function Bets(props){
  return (
    <div className='bets'>
      <div className='hbox'>
        <p className='bet-p'> bet: { props.bet } </p>
        <div className='btn' onClick={()=>props.incBet()}> <p className='bet-p'> + </p></div>
        <div className='btn' onClick={()=>props.decBet()}> <p className='bet-p'> - </p></div>
      </div>
      <div className='hbox'>
        <p className='bet-p'> total: { props.total } 💰</p>
      </div>
    </div>
  );
}

export class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      cards: getShuffled(),
      bet: 10,
      total: 90,
      outcome: '',
    }
  }

  incBet(){
    var inc = this.state.total < 5 ? this.state.total : 5;
    this.setState({
      bet: this.state.bet+inc,
      total: this.state.total-inc,
    });
  }

  decBet(){
    if(this.state.bet <= 10){
      return;
    }
    this.setState({
      bet: this.state.bet-5,
      total: this.state.total+5,
    });
  }

  updateBank(outcome){
    if(outcome){
      this.setState({ 
        total: this.state.total+this.state.bet,
      });
    }
    else{
      this.setState({
        index: 0,
        cards: getShuffled(),
        outcome: '',
      })
      var bet = this.state.bet;
      var total = this.state.total;
      if(total >= 2*bet){
        this.setState({
          total: total-bet,
          bet: bet,
        })
      }
      else if(total < 10){
        this.setState({
          total: total,
          bet: 0,
        })
        console.log('minimum bet is 10');
      }
      else{
        this.setState({
          total: total-10,
          bet: 10,
        })
      }
    }
  }

  deckClick(high){
    if(this.state.index >= 51){
      console.log('deck is empy');
      return;
    }
    const decider = (previous, current) => current !== previous && (current > previous) === high;
    const pCard = this.state.cards[this.state.index] % 13;
    const cCard = this.state.cards[this.state.index+1] % 13;

    const outcome = decider(pCard, cCard);
    console.log(outcome ? 'keep going' : 'unlucky');
    this.setState({ 
      index: this.state.index + 1 ,
      outcome: outcome ? 'green-glow' : 'red-glow',
    });
    setTimeout(()=>{this.updateBank(outcome)}, outcome ? 0 : 2000);
  }

  render(){
    return (
      <div className='game'>
        <Cards 
          index = { this.state.index }
          cards = { this.state.cards }
          outcome = { this.state.outcome }
          onClick={ (high) => this.deckClick(high) }
        />
        <Bets 
          bet = { this.state.bet }
          total = { this.state.total }
          incBet = { () => this.incBet() }
          decBet = { () => this.decBet() }
        />
      </div>
    );
  }
}
