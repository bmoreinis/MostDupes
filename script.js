/* Convert 2D array (pairs) to 1D array (factors list) */
// from this (array of factor pairs in mistakes)
var mistakes = [[3,4],[3,6],[7,4],[4,6],[6,6],[6,7]];
// to this (an array of all factors) 
var factorList =[3,4,3,6,7,4,4,6,6,4,6,7];

/* Find the number with the most duplicate values */
//amjustsam.medium.com/how-to-find-most-frequent-item-of-an-array-12015df68c65
var counts = []; // array of counts of items in order
var dupes = 0; // number of dupes so far
var mostFrequent; // most frequent item
// send factorList to called studyList function
alert(studyList(factorList)); 

/* function studyList generates most duplicates from passed array */
function studyList(array){
  // Iterate over all items in array
  for(var i = 0; i < array.length; i++){
    // look at the next item
    var factor = array[i];
    // have we counted this factor before? 
    if(counts[factor] == undefined) {
      // count it, so counts[3] will be number of 3s
      counts[factor] = 1;
    }
    else {
      // add one to that count
      counts[factor] += 1;
    }
    // does this factor have the most dupes?
    if(counts[factor] > dupes){
      dupes = counts[factor];
      mostFrequent = array[i];
    }
  }
  // now that we're cone, we have the highest, most frequent value
  alert(counts);
  return mostFrequent;
}

/* BUT this only shows the first, not the largest! */

// https://www.w3schools.com/js/js_array_sort.asp
// https://www.w3schools.com/jsref/jsref_reverse.asp
