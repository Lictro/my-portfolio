// app/api/spotify/route.ts
import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', REFRESH_TOKEN);

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });

  const data = await res.json();
  return data.access_token;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const recentRes = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const recentData = await recentRes.json();
    const track = recentData.items[0].track;

    return NextResponse.json({
      playing: true,
      songName: track.name,
      artistName: track.artists.map((a: any) => a.name).join(', '),
      albumCover: track.album.images[0].url,
      artistPhoto:
        track.artists[0].images?.[0]?.url || track.album.images[0].url,
      songUrl: track.external_urls.spotify,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Spotify fetch failed' },
      { status: 500 }
    );
  }
}
