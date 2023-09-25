import gameEngine from '../index.js';

const primeGame = () => {
  const gameType = 'isPrime';
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameEngine(gameType, question);
};

export default primeGame;