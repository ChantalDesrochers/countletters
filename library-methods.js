var library = {
    tracks: {
      t01: {
        id: "t01",
        name: "Code Monkey",
        artist: "Jonathan Coulton",
        album: "Thing a Week Three"
      },
      t02: {
        id: "t02",
        name: "Model View Controller",
        artist: "James Dempsey",
        album: "WWDC 2003"
      },
      t03: {
        id: "t03",
        name: "Four Thirty-Three",
        artist: "John Cage",
        album: "Woodstock 1952"
      }
    },
    playlists: {
      p01: {
        id: "p01",
        name: "Coding Music",
        tracks: ["t01", "t02"]
      },
      p02: {
        id: "p02",
        name: "Other Playlist",
        tracks: ["t03"]
      }
    },
    printPlaylists: function() {
      for (var p in this.playlists) {
        var ourPlaylistString = this.playlists[p].id + ": " + this.playlists[p].name + " - " + this.playlists[p].tracks.length + " tracks";
        console.log(ourPlaylistString);
      }
    },
    printTracks: function() {
      for (var t in this.tracks) {
        // console.log(this.tracks[t].id);
        var ourTrackListString = this.tracks[t].id + ": " + this.tracks[t].name + " by " + this.tracks[t].artist + " (" + this.tracks[t].album + ")";
        console.log(ourTrackListString);
      }
    },
    printPlaylist: function(playlistId) {
      console.log(this['playlists'][playlistId]['tracks']);
    },
    addTrackToPlaylist: function(trackId, playlistId) {
      this['playlists'][playlistId]['tracks'].push(trackId);
      console.log(this.playlists);
    },
    addTrack: function(name, artist, album) {

      var id = uid();
      this['tracks'][id] = {
        id: id,
        name: name,
        artist: artist,
        album: album
      }
      // console.log("library tracks: " + this.tracks);
    },
    addPlaylist: function(name) {
      var id = uid();
      this['playlists'][id] = {
        id: id,
        name: name,
      }
      console.log(this.playlists);
    }

  }
  // printPlaylist: function(playlistId) {
  //   console.log(this['playlists'][playlistId]['tracks']);

// console.log("hello");
// library.addTrack("name","hello","goodbye")
// library.printTracks();

function uid() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  // addTrackToPlaylist: function(trackId, playlistId) {
  //   library['playlists'][playlistId]['tracks'].push(trackId);
  //   console.log(library.playlists);

// }
// }
// }
// }

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks

// var printPlaylists = function() {
//   for (var p in library.playlists) {
//     var ourPlaylistString = library.playlists[p].id + ": " + library.playlists[p].name + " - " + library.playlists[p].tracks.length + " tracks";
//     console.log(ourPlaylistString);
//   }
// }

// // console.log(printPlaylists());
// // prints a list of all tracks, in the form:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function() {
//     for (var t in library.tracks) {
//       console.log(library.tracks[t].id);
//       //return library.tracks[t].id;
//       var ourTrackListString = library.tracks[t].id + ": " + library.tracks[t].name + " by " + library.tracks[t].artist + " (" + library.tracks[t].album + ")";
//       console.log(ourTrackListString);
//     }
//   }
//   // console.log(printTracks());

// // prints a list of tracks for a given playlist, in the form:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function(playlistId) {
//     console.log(library['playlists'][playlistId]['tracks']);

//   }
//   // printPlaylist('p01');

// // adds an existing track to an existing playlist

// var addTrackToPlaylist = function(trackId, playlistId) {
//     library['playlists'][playlistId]['tracks'].push(trackId);
//     console.log(library.playlists);

//   }
//   // addTrackToPlaylist('t02', 'p02')

// // generates a unique id
// // (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// // adds a track to the library

// var addTrack = function(name, artist, album) {

//     var id = uid();
//     library['tracks'][id] = {
//       id: id,
//       name: name,
//       artist: artist,
//       album: album
//     }
//     console.log("library tracks: " + library.tracks);
//   }
//   //addTrack("awswafwe", "aweafwe", "sdfsfs");
//   // addTrack('pop', 'yo', 'yooo');
// console.log(library.tracks);
// // adds a playlist to the library

// var addPlaylist = function(name) {

//   var id = uid();

//   library['playlists'][id] = {
//     id: id,
//     name: name,
//   }
//   console.log(library.playlists);
// }

// // addPlaylist('work');
// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }