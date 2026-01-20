import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', color: '#00ff88' }}>
          ELDRITCH HUNTER
        </div>
        <div style={{ fontSize: 36, marginTop: 20, opacity: 0.9 }}>
          Survival Shooter on Farcaster
        </div>
        <div style={{ fontSize: 24, marginTop: 40, color: '#888' }}>
          Hunt monsters • Earn rewards • Top leaderboard
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 800,
    }
  )
}