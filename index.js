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
  let years = {};

  if(!array || !array.length) {
    return null;
  }

  let santas = array.slice();

  let year = 1
  while (year < 6) {
    let matches = {};
    for(var i=0; i<santas.length; i++) {
      var santa = santas[i],
          recipient;

      // Assign santa to the person next to them, and increment +1 for each year, to avoid assigning to self and avoid duplicate recipients
      if(i+year < santas.length) {
        recipient = santas[i+year];
      } else {
        recipient = santas[(i+year - santas.length)];
      }

      matches[santa] = recipient;
    }
    years[year] = matches
    year ++
  }
  return years
}

assignSantas2(['Sean', 'Winnie', 'Brian', 'Amy', 'Samir', 'Joe', 'Bethany', 'Bruno', 'Anna', 'Matthew', 'Lucas', 'Gabriel', 'Martha'])





// Secret Santa Part 3


// As your extended family has grown, members have gotten married and/or had children. Families usually get gifts for members of their immediate family, so it doesn’t make a lot of sense for anyone to be a Secret Santa for a member of their immediate family (spouse, parents, or children). Modify your program to take this constraint into consideration when choosing Secret Santas.
