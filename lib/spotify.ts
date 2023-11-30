import { RecentlyPlayedTracksPage } from "@spotify/web-api-ts-sdk";

interface TrackType {
	title: string;
	album: string;
	artist: string;
	cover: string;
	href: string;
}

export async function getRecentlyPlayed(): Promise<TrackType> {
	const { access_token, ...p } = await getAccessToken();
	console.log({access_token, p})
	const resp = await fetch(
		"https://api.spotify.com/v1/me/player/recently-played?limit=1",
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			method: "GET",
			cache: "no-store",
		},
	);

	const data = (await resp.json()) as RecentlyPlayedTracksPage;
	if (data.items) {
		return {
			title: data.items[0].track.name,
			album: data.items[0].track.album.name,
			artist: data.items[0].track.artists[0].name,
			cover: data.items[0].track.album.images[0].url,
			href: data.items[0].track.external_urls.spotify,
		} satisfies TrackType;
	}
	return {
		title: "No tracks found",
		album: "",
		artist: "",
		cover: "",
		href: "#",
	} satisfies TrackType;
}

async function getAccessToken() {
	const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !refreshToken) {
		console.error(
			"Env variables not set correctly. Cannot get access token",
		);
		throw new DOMException("Something went wrong. Please try again");
	}

	const resp = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(
				`${clientId}:${clientSecret}`,
			).toString("base64")}`,
		},
		cache:"no-store",
		body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
	});
	return resp.json();
}
