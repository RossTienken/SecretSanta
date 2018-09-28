// Secret Santa Part 1

// Imagine that every year your extended family does a "Secret Santa" gift exchange. For this gift exchange, each person draws another person at random and then gets a gift for them. Write a program that will choose a Secret Santa for everyone given a list of all the members of your extended family. Obviously, a person cannot be their own Secret Santa. //




const assignSantas = (array) => {
  let matches = [];

  if(!array || !array.length) {
    return null;
  }

  let santas = array.slice();

  for(var i=0; i<santas.length; i++) {
    var santa = santas[i],
        recipient;

    // Assign santa to the person next to them to avoid assigning to self and avoid duplicate recipients
    if(i !== santas.length-1) {
      recipient = santas[i+1];
    } else {
      recipient = santas[0];
    }

    matches.push({ "santa": santa, "recipient": recipient });
  }

  return matches
}

assignSantas(['Paul', 'Emma', 'Tim', 'Bob', 'Lauren'])
