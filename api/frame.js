// /api/frame для Base Portal
export async function GET(request) {
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Eldritch Hunter</title>
    <meta name="fc:frame" content='{"version":"1","imageUrl":"https://og-playground.vercel.app/api/gradient?title=ELDRITCH%20HUNTER&description=Survival%20shooter%20on%20Farcaster&color1=0a0a0a&color2=1a1a2e&textColor=00ff88&width=1200&height=630","button":{"title":"🎮 Hunt Monsters","action":{"type":"launch_frame","url":"https://my-farcaster-game-gilt.vercel.app/game.html"}}}' />
    <meta name="fc:miniapp" content='{"version":"1","imageUrl":"https://og-playground.vercel.app/api/gradient?title=ELDRITCH%20HUNTER&description=Survival%20shooter%20on%20Farcaster&color1=0a0a0a&color2=1a1a2e&textColor=00ff88&width=1200&height=630","button":{"title":"🎮 Hunt Monsters","action":{"type":"launch_frame","url":"https://my-farcaster-game-gilt.vercel.app/game.html"}}}' />
    <meta property="og:title" content="Eldritch Hunter" />
    <meta property="og:description" content="Survival shooter on Farcaster" />
    <meta property="og:image" content="https://og-playground.vercel.app/api/gradient?title=ELDRITCH%20HUNTER&description=Survival%20shooter%20on%20Farcaster&color1=0a0a0a&color2=1a1a2e&textColor=00ff88&width=1200&height=630" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="https://my-farcaster-game-gilt.vercel.app" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Eldritch Hunter" />
    <meta name="twitter:description" content="Survival shooter on Farcaster" />
    <meta name="twitter:image" content="https://og-playground.vercel.app/api/gradient?title=ELDRITCH%20HUNTER&description=Survival%20shooter%20on%20Farcaster&color1=0a0a0a&color2=1a1a2e&textColor=00ff88&width=1200&height=630" />
    <script src="https://cdn.farcaster.xyz/actions.js"></script>
    <meta http-equiv="refresh" content="0;url=https://my-farcaster-game-gilt.vercel.app/game.html">
</head>
<body>
    <h1>Eldritch Hunter - Frame Endpoint</h1>
    <p>Base Portal should detect frame tags from this page.</p>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
