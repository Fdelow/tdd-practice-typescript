export const diceGame = (points: number[]) => {
  let baseScore: number = 0;
  let bonusScoreFor345: number = 0;
  let bonusScoreFor2: number = 0;
  const pointCounter = new Map<number, number>();

  points.map(point => {
    const currentCount = pointCounter.get(point);
    pointCounter.set(point, currentCount ? currentCount + 1 : 1);
    baseScore += point;
  });

  for (let [key, value] of pointCounter) {
    if (value === 5) {
      bonusScoreFor345 = 50;
    }
    if (value === 4) {
      bonusScoreFor345 = 4 * key;
    }
    if (value === 3) {
      bonusScoreFor345 = 3 * key;
    }
    if (value === 2) {
      bonusScoreFor2 = bonusScoreFor2 + 2 * key;
    }
  }

  const bonusScore: number =
    bonusScoreFor345 > bonusScoreFor2 ? bonusScoreFor345 : bonusScoreFor2;

  const score = baseScore + bonusScore;

  return score;
};
