const scopes = ['user-read-private', 'user-read-email', 'user-top-read'].join(
  '%20'
); // Transforma a lista em uma string para a URL

export const environment = {
  production: false,
  apiUrl: 'https://spotify.kwaps.online/api/spotify',
  youtubeApiUrl: 'https://youtube.kwaps.online/api/youtube',
  spotifyAuthUrl: 'https://accounts.spotify.com/authorize',
  spotifyClientId: '9c9ac779f0e54ee7af47d03d14f4ba6c',
  spotifyRedirectUri: 'https://kwaps.online:4200/spotify/callback',
  spotifyScope: scopes,
};
