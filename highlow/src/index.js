import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function TurnedCards(props){
  return (
    <div className='tcards'>
      <p className='card-p' style={{ color: props.color }}> { props.text } </p>
      <p className='card-p' style={{ color: props.color }}> { props.suit } </p>
    </div>
  );
}

class LastTurned extends React.Component{
  render(){
    return (
      <div className='lcard'>
      </div>
    );
  }
}

class Deck extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
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

  numToCard(n){
    // 2 3 4 5 6 7 8 9 10 J Q K A
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

  deckClick(){
    if(this.state.index >= 51) return;
    console.log(this.numToCard(this.state.cards[this.state.index]))
    if(this.state.index === 51){
      console.log('deck is empy')
    }
    this.setState({
      index: this.state.index + 1,
    });
  }

  render(){
    return (
      <div className='deck'
        onClick={()=>this.deckClick()}
      >
      </div>
    );
  }
}

class Cards extends React.Component{
  render(){
    return (
      <div className='cards'>
        <Deck />
        <TurnedCards 
          text='10'
          suit='❤'
          color='red'
        />
        <LastTurned />
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
        <p className='bet-p'> total: { this.state.total } </p>
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
