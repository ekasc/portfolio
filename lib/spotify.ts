export async function getRecentlyPlayed() {
	const { access_token } = await getAccessToken();
	const resp = await fetch(
		"https://api.spotify.com/v1/me/player/recently-played?limit=1",
		{
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
			cache: "no-store",
		},
	);

	return resp.json();
}

async function getAccessToken() {
	const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

	/* if (!clientId || !clientSecret || !refreshToken) {
		console.error(
			"Env variables not set correctly. Cannot get access token",
		);
		throw new DOMException("Something went wrong. Please try again");
	} */

	const resp = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(
				`${clientId}:${clientSecret}`,
			).toString("base64")}`,
		},
		body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
	});
	return resp.json();
}
