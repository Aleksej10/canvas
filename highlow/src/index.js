import React from 'react';
import ReactDOM from 'react-dom';
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

function TurnedCard(props){
  const p = numToCard(props.value);
  return (
    <div className='tcards'>
      <p className='card-p' style={{ color: p.color }}> { p.text } </p>
      <p className='card-p' style={{ color: p.color }}> { p.suit } </p>
    </div>
  );
}

function LastTurned(props){
  const p = numToCard(props.value);
  return (
    <div className='lcard'>
      <p className='card-p' style={{ color: p.color }}> { p.text } </p>
      <p className='card-p' style={{ color: p.color }}> { p.suit } </p>
    </div>
  );
}

function Deck(props){
  return(
    <div className='deck'
      onClick={()=>props.onClick()}
    >
    </div>
  );
}

class Cards extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: -1,
      cards: this.getShuffled(),
    }
  }

  getShuffled(){
    var a = [...Array(52).keys()];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  deckClick(){
    if(this.state.index >= 51) return;
    this.setState({
      index: this.state.index + 1,
    });
    if(this.state.index === 51){
      console.log('deck is empy')
    }
  }

  render(){
    const cards = this.state.cards;
    const index = this.state.index;
    var turnedCards = [];
    for(let i = 0; i<index; i++){
      turnedCards.push(<TurnedCard key = {i} value= { cards[i] } />);
    }
    const lastCard = index === -1 ? null : <LastTurned value= { cards[index] } />;
    return (
      <div className='cards'>
        <Deck 
          onClick={()=>this.deckClick()}
        />
        { turnedCards }
        { lastCard }
      </div>
    );
  }
}

class Bets extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bet: 10,
      total: 90,
    };
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

  render(){
    return (
      <div className='bets'>
        <p className='bet-p'> { this.state.bet } </p>
        <div className='btn' onClick={()=>this.incBet()}> <p className='bet-p'> + </p></div>
        <div className='btn' onClick={()=>this.decBet()}> <p className='bet-p'> - </p></div>
        <p className='bet-p'> total: { this.state.total } $ </p>
      </div>
    );
  }
}

class Game extends React.Component {
  render(){
    return (
      <div className='game'>
        <Cards />
        <Bets />
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
