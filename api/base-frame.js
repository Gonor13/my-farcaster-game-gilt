// /api/base-frame для Base Portal
export async function GET() {
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Eldritch Hunter</title>
    <meta property="fc:frame" content='{"version":"1","imageUrl":"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop","button":{"title":"🎮 Hunt Monsters","action":{"type":"launch_frame","url":"https://my-farcaster-game-gilt.vercel.app/game.html"}}}'>
    <meta property="fc:miniapp" content='{"version":"1","imageUrl":"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop","button":{"title":"🎮 Hunt Monsters","action":{"type":"launch_frame","url":"https://my-farcaster-game-gilt.vercel.app/game.html"}}}'>
    <meta property="og:title" content="Eldritch Hunter">
    <meta property="og:description" content="Survival shooter on Farcaster">
    <meta property="og:image" content="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="800">
    <meta property="og:url" content="https://my-farcaster-game-gilt.vercel.app">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Eldritch Hunter">
    <meta name="twitter:description" content="Survival shooter on Farcaster">
    <meta name="twitter:image" content="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop">
    <script src="https://cdn.farcaster.xyz/actions.js"></script>
    <meta http-equiv="refresh" content="0;url=https://my-farcaster-game-gilt.vercel.app/game.html">
</head>
<body>
    <div style="text-align:center; padding:50px;">
        <h1>Eldritch Hunter Frame</h1>
        <p>Base Portal should detect this frame correctly.</p>
        <p>Image: 1200x800 (3:2 ratio) from Unsplash</p>
    </div>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
