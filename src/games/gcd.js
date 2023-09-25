import gameEngine from '../index.js';

const gcdGame = () => {
  const gameType = 'GCD';
  const question = 'Find the greatest common divisor of given numbers.';

  gameEngine(gameType, question);
};

export default gcdGame;