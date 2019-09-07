Vue.config.devtools = true;
var app = new Vue({
  el: "#app",
  methods: {
    resetFilter: function () {
      this.songs = sortedUtapri;
      this.checkedNames = [];
      var allLabels = document.getElementsByTagName("label");
      Array.prototype.forEach.call(allLabels, function (item) {
        item.classList.remove("active");
      });
      this.checked = false;
    },
    filterSongs: function () {
      var allSongs = sortedUtapri;
      var filteredSongs = [];
      var checkedNames = this.checkedNames;
      if (this.checked === true) {
        var selectedSingers = checkedNames.sort(function (a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        allSongs.forEach(function (val) {
          var sortedSingers = val.singers.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          });
          console.log(sortedSingers.toString);
          if (selectedSingers.toString() == sortedSingers.toString()) {
            filteredSongs.push(val);
          }
        });
        this.songs = filteredSongs;
      } else {
        allSongs.forEach(function (val) {
          var baseLength = val.singers.length;
          var diffLength = diffArray(val.singers, checkedNames).length;
          if (diffLength == baseLength - checkedNames.length) {
            filteredSongs.push(val);
          }
        });
        this.songs = filteredSongs;
      }
    },
    changeColor: function () {
      var eventElement = event.srcElement;
      var eventLabel = eventElement.parentNode;
      eventLabel.classList.toggle("active");
    }
  },
  data: {
    songs: {},
    checkedNames: [],
    checked: false
  }
});

var utapri = require('./node_modules/utapri').songs
var sortedUtapri = utapri
  .sort(function (a, b) {
    return new Date(a["date"]) - new Date(b["date"]);
  })
  .reverse();

app.songs = sortedUtapri;

function diffArray(arr1, arr2) {
  var newArr = [];
  for (var a = 0; a < arr1.length; a++) {
    if (arr2.indexOf(arr1[a]) === -1) {
      newArr.push(arr1[a]);
    }
  }
  for (var b = 0; b < arr2.length; b++) {
    if (arr1.indexOf(arr2[b]) === -1) {
      newArr.push(arr2[b]);
    }
  }
  return newArr;
}
