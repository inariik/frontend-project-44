import gameEngine from '../index.js';

const evenGame = () => {
  const gameType = 'even-odd';
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameEngine(gameType, question);
};

export default evenGame;