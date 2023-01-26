exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      console.log('x'+element)
      sum+=element
    }
    return sum
  },

  remove: function(arr, item) {
    var quitar = [];

    for (var i = 0, remover = arr.length; i < remover; i++) {
      if (arr[i] !== item) {
        quitar.push(arr[i]);
      }
    }
    return quitar;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var pepe;

    for (i = 0, pepe = arr.length; i < pepe; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
        pepe--;
      }
    }

    return arr;
   },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
 