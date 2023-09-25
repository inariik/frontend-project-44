import gameEngine from '../index.js';

const progressionGame = () => {
  const gameType = 'progression';
  const question = 'What number is missing in the progression?';

  gameEngine(gameType, question);
};

export default progressionGame;