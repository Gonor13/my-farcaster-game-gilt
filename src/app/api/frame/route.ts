import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const frameHtml = 
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://my-farcaster-game-gilt.vercel.app/icon.png" />
        <meta property="fc:frame:button:1" content="Play Game" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://my-farcaster-game-gilt.vercel.app" />
        <meta property="fc:frame:post_url" content="https://my-farcaster-game-gilt.vercel.app/api/frame" />
        <meta property="og:title" content="Eldritch Hunter" />
        <meta property="og:image" content="https://my-farcaster-game-gilt.vercel.app/icon.png" />
      </head>
    </html>
  ;

  return new Response(frameHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
