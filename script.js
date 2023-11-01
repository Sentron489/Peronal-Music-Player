document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const songTitleElement = document.getElementById('songTitle');
    const artistElement = document.getElementById('artist');
    const albumImageElement = document.getElementById('albumImage');

    const playlist = [
        { title: 'Moonlight', artist: 'Kali Uchis', src: 'Kali Uchis Moonlight.mp3', image: 'moonlight-image.jpg' },
        { title: 'Telepatía', artist: 'Kali Uchis', src: 'Kali Uchis telepatía.mp3', image: 'telepatia-image.jpg' },
        { title: '1977', artist: 'Ana Tijoux', src: '1977.mp3', image: '1977-image.jpg' },
        { title: 'Little Dark Age', artist: 'MGMT', src: 'Little Dark Age.mp3', image: 'dark-age-image.jpg' },
        { title: 'Everybody Wants to Rule the World', artist: 'Tears for Fears', src: 'Tears for Fears.mp3', image: 'tears-for-fears-image.jpg' },
        { title: 'Five Nights at Freddys Soundtrack', artist: 'Unknown', src: 'FNAF_Soundtrack.mp3', image: 'Untitled.jpg' },
        // Add more songs to the playlist
    ];

    // Function to shuffle the playlist using the Fisher-Yates algorithm
    function shufflePlaylist() {
        for (let i = playlist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
        }
    }

    // Initial shuffle of the playlist
    shufflePlaylist();

    let currentSongIndex = 0;

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;

        // Update the audio source, title, artist, and image
        const currentSong = playlist[currentSongIndex];
        audioPlayer.src = currentSong.src;
        songTitleElement.textContent = ` ${currentSong.title}`;
        artistElement.textContent = ` ${currentSong.artist}`;
        albumImageElement.src = currentSong.image;

        audioPlayer.load();
        audioPlayer.play();
    }

    audioPlayer.addEventListener('ended', playNextSong);
});
