
/**
 * Verkefni 7 – Caesar dulmál
 */

const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;
const LETTERS1 = `aábdðeéfghiíjklmnoóprstuúvxyýþæö`;

/**
 * Byrja forrit.
 */

function start() {
  var input = prompt("Hvort viltu kóða eða afkóða streng? Skrifaðu „kóða“ eða „afkóða");
  if (input === "kóða") {
    encodeprep(input)
  }
  else if (input === "afkóða"){
    encodeprep(input)
  }
  else{
    confirm(`Veit ekki hvaða aðgerð ${input} er. Reyndu aftur.`)
    start()
  }
}

// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits
start();

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */

function encodeprep(input){
  var shift = prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu [1, 31]");
  var inp = check_input(shift)
  if (inp === true){
    ask4string(input,shift)
  }
  else {
    confirm(`${inp} er ekki heiltala á bilinu [1, 31]. Reyndu aftur.`)
    encodeprep(input)
  }
 }


function check_input(shift){
  if (shift % 1 == 0){
    if (shift < 32 && shift > 0){
      return true
    }
    return shift
  }
  return shift
 }


function check_string(encodestring,action,n){
  if (typeof encodestring === 'string'){
    return
  }
  alert("Þú gafst ekki upp streng. Reyndu aftur.")
  ask4string(action,n)
  }


function alphabet_check(encodestring,action,n){
  var counter = 0
  var len = encodestring.length;
  for (var k=0; k < LETTERS.length; k++){
    var a = LETTERS.charAt(k)
    var b = LETTERS1.charAt(k)
    for (var i=0; i < encodestring.length; i++){
      var c = encodestring.charAt(i);
      if (c === a|c === b){
        counter =counter+1  
      }
    }
  }
  if(counter < len){
    alert(`Þú gafst upp stafi sem ekki er hægt að ${action}: Reyndu aftur.`)
    ask4string(action,n)
    }
  else if(counter === len && action === "kóða"){
    encode(encodestring,n)
  }
  else{
    decode(encodestring,n)
  }
}


function ask4string(action,n){
  var encodestring = prompt(`Gefðu upp strenginn sem á að ${action} með hliðrun ${n}:`);
  check_string(encodestring,action,n)
  alphabet_check(encodestring,action,n)
}


function encode(str,numshift) {
  var numshift = parseInt(n,10);
  var result = ""
  for (var k=0; k < LETTERS.length; k++){
    var a = LETTERS1.charAt(k)
    var b = LETTERS.charAt(k)
    for(var i =0; i < str.length; i++){
      var check = str.charAt(i)
      if(check === a){
        result = result.concat(LETTERS1.charAt(k+numshift))
      }
      else if(check === b){
        result = result.concat(LETTERS.charAt(k+numshift))
    }  
  }
  alert(result)
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */




function decode(str, n) {
  var numshift = parseInt(n,10);
  var result = ""
  for (var k=0; k < LETTERS.length; k++){
    var a = LETTERS1.charAt(k)
    var b = LETTERS.charAt(k)
    for(var i =0; i < str.length; i++){
      var check = str.charAt(i)
      if(check === a){
        result = result.concat(LETTERS1.charAt(k-numshift))
      }
      else if(check === b){
        result = result.concat(LETTERS.charAt(k-numshift))
    }  
  }
  alert(result)
}


/*console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
/** */
