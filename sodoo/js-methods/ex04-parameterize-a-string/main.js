//  үгнүүдийн дундуур зураас оруулаx функц
console.log('--------үгнүүдийн дундуур зураас оруулаx функц---------');


function parameterizeStr(str) {
  let words = str.split(' ');
  return words.join('-').toLowerCase();
}

console.log(parameterizeStr("This Is Where I Begin"))

