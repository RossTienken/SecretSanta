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

  console.log(matches)
}





// Secret Santa Part 2

// After the third year of having the Secret Santa gift exchange, you’ve heard complaints of having the same Secret Santa year after year. Modify your program so that a family member can only have the same Secret Santa once every 3 years.


const assignSantas2 = (array) => {
  let matches = {
    year: 1
  };

  if(!array || !array.length) {
    return null;
  }

  let santas = array.slice();

  let years = 1
  while (years < 6) {
    for(var i=0; i<santas.length; i++) {
      var santa = santas[i],
          recipient;

      // Assign santa to the person next to them, and increment +1 for each year, to avoid assigning to self and avoid duplicate recipients
      if(i+years < santas.length) {
        recipient = santas[i+years];
      } else {
        recipient = santas[(i+years - santas.length)];
      }

      matches[santa] = recipient;
    }
    console.log(matches)
    years ++
    matches.year = years
  }
}

assignSantas2(['Sean', 'Winnie', 'Brian', 'Amy', 'Samir', 'Joe', 'Bethany', 'Bruno', 'Anna', 'Matthew', 'Lucas', 'Gabriel', 'Martha'])
