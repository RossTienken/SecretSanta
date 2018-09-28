var assignSantas1  = require('../code').assignSantas1;
var assignSantas2  = require('../code').assignSantas2;
var assignSantas3  = require('../code').assignSantas3;
var assert  = require('chai').assert;
var expect = require('chai').expect;

describe('secret santa', function() {
  describe('assignSantas1', function() {
    it('should return null for empty array', function () {
      var actual = assignSantas1([]);

      assert.strictEqual(null, actual);
    });

    it('returns a list of pairs containing a santa and a recipient', function(){
      var actual = assignSantas1(['Sean', 'Winnie', 'Brian', 'Amy', 'Samir', 'Joe', 'Bethany', 'Bruno', 'Anna', 'Matthew', 'Lucas', 'Gabriel', 'Martha']);

      for (var i in actual) {
        expect(actual[i]).to.have.all.keys('santa', 'recipient');
      }
    });

    it('returns a list of pairs where a santa and her recipient are not the same person', function() {
      var actual = assignSantas1(['Sean', 'Winnie', 'Brian', 'Amy', 'Samir', 'Joe', 'Bethany', 'Bruno', 'Anna', 'Matthew', 'Lucas', 'Gabriel', 'Martha']);

      for (var i in actual) {
        var santa = actual[i].santa;
        var recipient = actual[i].recipient;

        expect(santa).not.equal(recipient);
      }
    });

    it('returns a list with no duplicate santas', function() {
      var actual = assignSantas1(['Sean', 'Winnie', 'Brian', 'Amy', 'Samir', 'Joe', 'Bethany', 'Bruno', 'Anna', 'Matthew', 'Lucas', 'Gabriel', 'Martha']);
      var santas = actual.map(function(item) { return item.santa} );

      var hasDuplicates = santas.some(function(item, index) {
        return santas.indexOf(item) != index;
      });

      assert.isNotTrue(hasDuplicates, 'hasDuplicates when santas = ' + santas);
    })

    it('returns a list with no duplicate recipients', function() {
      var actual = assignSantas1(['Sean', 'Winnie', 'Brian', 'Amy', 'Samir', 'Joe', 'Bethany', 'Bruno', 'Anna', 'Matthew', 'Lucas', 'Gabriel', 'Martha']);
      var recipients = actual.map(function(item) { return item.recipient} );

      var hasDuplicates = recipients.some(function(item, index) {
        return recipients.indexOf(item) != index;
      });

      assert.isNotTrue(hasDuplicates, 'hasDuplicates when recipients = ' + recipients);
    });
  });

  describe('assignSantas2', function() {
    it('should return null for empty array', function () {
      var actual = assignSantas2([]);

      assert.strictEqual(null, actual);
    });

    const santaResult2 = { '1':
     { Sean: 'Winnie',
       Winnie: 'Brian',
       Brian: 'Amy',
       Amy: 'Samir',
       Samir: 'Joe',
       Joe: 'Bethany',
       Bethany: 'Bruno',
       Bruno: 'Anna',
       Anna: 'Matthew',
       Matthew: 'Lucas',
       Lucas: 'Gabriel',
       Gabriel: 'Martha',
       Martha: 'Sean' },
    '2':
     { Sean: 'Brian',
       Winnie: 'Amy',
       Brian: 'Samir',
       Amy: 'Joe',
       Samir: 'Bethany',
       Joe: 'Bruno',
       Bethany: 'Anna',
       Bruno: 'Matthew',
       Anna: 'Lucas',
       Matthew: 'Gabriel',
       Lucas: 'Martha',
       Gabriel: 'Sean',
       Martha: 'Winnie' },
    '3':
     { Sean: 'Amy',
       Winnie: 'Samir',
       Brian: 'Joe',
       Amy: 'Bethany',
       Samir: 'Bruno',
       Joe: 'Anna',
       Bethany: 'Matthew',
       Bruno: 'Lucas',
       Anna: 'Gabriel',
       Matthew: 'Martha',
       Lucas: 'Sean',
       Gabriel: 'Winnie',
       Martha: 'Brian' }
     }

    it('returns an object with no duplicate recipients over 3 years', function() {
      var actual = assignSantas2(['Sean', 'Winnie', 'Brian', 'Amy', 'Samir', 'Joe', 'Bethany', 'Bruno', 'Anna', 'Matthew', 'Lucas', 'Gabriel', 'Martha']);

      assert.deepEqual(actual, santaResult2);
    });
  })

  describe('assignSantas3', function() {
    it('should return null for empty array', function () {
      var actual = assignSantas3([]);

      assert.strictEqual(null, actual);
    });

    it('returns an array with everyones assignments, and with no immediate family being assigned to each other', function() {
      var actual = assignSantas3([
        {name: 'Sean', family: ['Winnie', 'Brian'], current: '', past: 'Amy'},
        {name: 'Winnie', family: ['Sean', 'Brian'], current: '', past: 'Joe'},
        {name: 'Brian', family: ['Winnie', 'Sean'], current: '', past: 'Bruno'},
        {name: 'Amy', family: ['Joe'], current: '', past: 'Winnie'},
        {name: 'Joe', family: ['Amy'], current: '', past: 'Sean'},
        {name: 'Bruno',family: [],current: '',past: 'Brian'}
      ]);

      for (var i in actual) {
        let santa = actual[i].name;
        let recipient = actual[i].current;
        actual[i].family.map(person => expect(person).not.equal(recipient))
      }
    });
  })
});
