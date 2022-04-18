const signalNumber = (num) => {
  if (typeof num === 'number') {
    if(num > 0) {
      return 'positive';
    }
    
    if (num < 0) {
      return 'negative';
    }
  
    return 'neutral';
  }

  return 'It must be a number';
}

module.exports = signalNumber;
