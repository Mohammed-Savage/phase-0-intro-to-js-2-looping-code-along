function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(thankYouMessage);
    }
    return messages;
  }
  
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

  function countDown(x) {
    let down = x
    while (down >= 0) {
      console.log(down--);
    }
  }
  
  console.log(countDown(11));