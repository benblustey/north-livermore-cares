import "video.js"
import "videojs-playlist";

// Initialize Video.js player
const player = videojs('video');

// Initialize the playlist plugin
const playlistPlugin = player.playlistPlugin();

// Retrieve the PlaylistPlugin class
// This is used to access static methods of the PlaylistPlugin
const PlaylistPluginClass = videojs.getPlugin('playlistPlugin');

const videoList = [{
  sources: [{
    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
}, {
  sources: [{
    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
}, {
  sources: [{
    src: 'http://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4'
  }],
  poster: 'http://www.videojs.com/img/poster.jpg'
}];

// Create a new Playlist instance from the video list
// This utilizes a static method of the PlaylistPlugin class to create a Playlist instance
const playlist = PlaylistPluginClass.createPlaylistFrom(videoList);

// Playlist methods - Manage Playlist Content and Indexing
// Methods under Playlist are focused on direct manipulation of the playlist content (add, remove, shuffle, reverse etc)
// and controlling playlist indexing (getNextIndex, getPreviousIndex, enableRepeat, disableRepeat, etc), but not how the player uses the playlist
playlist.add({
  // video item details
});
playlist.remove(0);
playlist.shuffle();
playlist.reverse();
playlist.enableRepeat();
playlist.disableRepeat();

// Plugin methods - Integrate Playlist with the Player
// Methods under PlaylistPlugin are focused on how the playlist is used by the player
// This includes loading the playlist into the player, handling playback, and setting auto-advance behavior
playlistPlugin.loadPlaylist(playlist);
playlistPlugin.loadFirstItem();
playlistPlugin.setAutoadvanceDelay(0);

// Play the currently loaded playlist item
player.play();