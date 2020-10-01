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

export function getShuffled(){
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
      <div className='btn' onClick={()=>props.reset()}>
        <p className='bet-p'> reset </p>
      </div>
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

class Game extends React.Component {
  deckClick(high){
    if(this.props.index >= 51){
      console.log('deck is empy');
      return;
    }
    const decider = (previous, current) => current !== previous && (current > previous) === high;
    const pCard = this.props.cards[this.props.index] % 13;
    const cCard = this.props.cards[this.props.index+1] % 13;

    const outcome = decider(pCard, cCard);
    this.props.setGlow(outcome);
    setTimeout(()=>{this.props.updateBank(outcome)}, outcome ? 0 : 2000);
  }

  render(){
    return (
      <div className='game'>
        <div className='vbox'>
          <Cards 
            index = { this.props.index }
            cards = { this.props.cards }
            outcome = { this.props.outcome }
            onClick={ (high) => this.deckClick(high) }
          />
          <Bets 
            bet = { this.props.bet }
            total = { this.props.total }
            incBet = { () => this.props.incBet() }
            decBet = { () => this.props.decBet() }
            reset = { () => this.props.reset() }
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    index: state.index,
    cards: state.cards,
    bet: state.bet,
    total: state.total,
    outcome: state.outcome,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => {
      dispatch({
        type: 'reset',
      });
    },
    decBet: () => {
      dispatch({
        type: 'decBet',
      });
    },
    incBet: () => {
      dispatch({
        type: 'incBet',
      });
    },
    setGlow: (outcome) => {
      dispatch({
        type: 'setGlow',
        outcome: outcome,
      });
    },
    updateBank: (outcome) => {
      dispatch({
        type: 'updateBank',
        outcome: outcome,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
