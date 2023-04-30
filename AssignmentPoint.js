function calculatePoints(isSubmitted, isOnTime, daysBeforeDeadline) {
  const basePoints = 100;

  if (!isSubmitted) {
    return 0;
  }

  if (isOnTime) {
    const extraPoints = daysBeforeDeadline * 10;
    return basePoints + extraPoints;
  } else {
    const penaltyPoints = -daysBeforeDeadline * 10;
    return basePoints - penaltyPoints;
  }
}
