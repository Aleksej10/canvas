import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import deckImage from './deck.png';


function numToCard(n){
  const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  const suits = ['❤', '♦', '♠', '♣'];
  const color = ['red', 'red', 'black', 'black'];
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
  const lastTurned = index < 0 ? 
    null : 
    (<LastTurned 
      value = { cards[index] } 
      outcome = { props.outcome } 
    />);

  return (
    <div className='cards'>
      <Deck 
        onClick={(high)=>props.onClick(high)}
      />
      { turnedCards }
      { lastTurned }
      <div className='vbox'>
        <p className='bet-p'> { props.inGameMoney } </p>
        <div className='btn' onClick={()=>props.collect()}>
          <p className='bet-p'> collect </p>
        </div>
      </div>
    </div>
  );
}

function Controls(props){
  return(
    <div className='vbox'>
      <div className='hbox'>
        <div className='btn' onClick={()=>props.newGame()}> 
          <p className='bet-p'> new game </p>
        </div>
        <p className='bet-p'> bet: { props.bet } </p>
        <div className='btn' onClick={()=>props.incBet()}> 
          <p className='bet-p'> + </p>
        </div>
        <div className='btn' onClick={()=>props.decBet()}> 
          <p className='bet-p'> - </p>
        </div>
        <p className='bet-p'> total: { props.total } 💰</p>
      </div>
      <div className='btn' onClick={()=>props.reset()}>
        <p className='bet-p'> reset </p>
      </div>
    </div>
  )
}

class GameCanvas extends React.Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount(){
    this.draw_cards();
  }

  componentDidUpdate(){
    this.clearCanvas();
    this.draw_cards();
  }

  draw_cards(){
    const cards = this.props.cards;
    const index = this.props.index;
    for(let i=0; i<= index; i++){
      this.draw_card(cards[i], i*12, 0);
    }
  }

  clearCanvas(){
    let ctx = this.refs.ref.getContext('2d');
    ctx.clearRect(0, 0, this.refs.ref.width, this.refs.ref.height);
  }

  draw_card(CardNumber, DestinationX, DestinationY) {
    let ctx = this.refs.ref.getContext('2d');

    const sWidth = 64;
    const sHeight = 96;
    const wScale = 1;
    const hScale = 1.5;
    let sx = (CardNumber % 13) * sWidth;
    let sy = Math.floor(CardNumber / 13) * sHeight;

    ctx.drawImage(
      this.refs.deckImg,
      sx,
      sy,
      sWidth,
      sHeight,
      DestinationX,
      DestinationY,
      sWidth*wScale,
      sHeight*hScale,
    );
  }
  
  render(){
    return (
      <div className='vbox'>
        <canvas 
          ref='ref'
          className='GameCanvas'
        />
        <img
          ref="deckImg"
          className="HiddenImage"
          src={deckImage}
          alt="deck"
        />
      </div>
    );
  }
}

class Game extends React.Component {


  deckClick(high){
    if(this.props.inGameMoney === 0){
      console.log('you need to bet something');
      return;
    }
    if(this.props.index >= 51){
      console.log('deck is empy');
      return;
    }
    const decider = (previous, current) => current !== previous && (current > previous) === high;
    const pCard = this.props.cards[this.props.index] % 13;
    const cCard = this.props.cards[this.props.index+1] % 13;

    const outcome = decider(pCard, cCard);
    this.props.setGlow(outcome);
    this.props.updateBank(outcome);
  }


  render(){
    return (
      <div className='game'>
        <div className='vbox'>
          <Cards 
            index = { this.props.index }
            cards = { this.props.cards }
            outcome = { this.props.outcome }
            onClick = { (high) => this.deckClick(high) }
            collect = { () => this.props.collect() }
            inGameMoney = { this.props.inGameMoney }
          />
        </div>
        <GameCanvas
          index = { this.props.index }
          cards = { this.props.cards }
        />
        <Controls
          bet = { this.props.bet }
          total = { this.props.total }
          incBet = { () => this.props.incBet() }
          decBet = { () => this.props.decBet() }
          reset = { () => this.props.reset() }
          newGame = { () => this.props.newGame() }
        />
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
    inGameMoney: state.inGameMoney,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => {
      dispatch({
        type: 'reset',
      });
    },
    collect: () => {
      dispatch({
        type: 'collect',
      });
    },
    doubleBet: () => {
      dispatch({
        type: 'doubleBet',
      });
    },
    lost: () => {
      dispatch({
        type: 'lost',
      });
    },
    newGame: () => {
      dispatch({
        type: 'newGame',
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
