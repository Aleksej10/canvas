const mapStateToProps = (state) => {
  return {
    index: state.index,
    cards: state.cards,
    bet: state.bet,
    total: state.total,
    outcome: state.outcome,
    inGameMoney: state.inGameMoney,
    guesses: state.guesses,
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
    setGlow: (outcome, guess) => {
      dispatch({
        type: 'setGlow',
        outcome: outcome,
        guess: guess,
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

export {mapStateToProps, mapDispatchToProps};
