export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Frame interaction logic
    return res.status(200).json({
      type: 'frame',
      frame: {
        version: 'vNext',
        image: 'https://i.imgur.com/6KpYQ0j.png',
        buttons: [
          {
            label: '🎮 Play Again',
            action: {
              type: 'launch_frame',
              url: 'https://my-farcaster-game-gilt.vercel.app/game.html'
            }
          }
        ]
      }
    });
  }
  
  res.status(200).json({ status: 'ok' });
}
