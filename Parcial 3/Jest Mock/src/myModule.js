function noDeterministicFunction() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  
  module.exports = {
    noDeterministicFunction
  };
  