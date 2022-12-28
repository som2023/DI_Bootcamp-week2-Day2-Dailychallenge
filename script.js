const sentence="This dinner is not that bad ! You cook well";
const wordNot = sentence.search("not");
const wordbad = sentence.search("bad");
if(wordNot === -1)
{
 console.log(sentence);
}
else if(wordNot < wordbad)
{
console.log('wordbad', wordbad);
console.log('wordNot', wordNot);
const firstpart= sentence.slice(0, wordNot);
const secondpart= sentence.slice(wordbad + 3);
console.log(firstpart +"good"+ secondpart);
}
else
{
/*console.log("secondpart", secondpart);
console.log("firstpart", firstpart);
*/
console.log(sentence);
}