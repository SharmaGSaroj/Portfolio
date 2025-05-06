import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Get dynamic parameters
    const title = searchParams.get('title') || 'Saroj Sharma G';
    const subtitle = searchParams.get('subtitle') || 'Full-Stack Developer';
    const website = searchParams.get('website') || 'www.sarojsharmag.com.np';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f172a', // slate-900
            padding: '40px 80px',
            fontFamily: 'Inter',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: '#f8fafc', // slate-50
                marginBottom: '20px',
              }}
            >
              {title}
            </h1>
            <h2
              style={{
                fontSize: '40px',
                color: '#94a3b8', // slate-400
                marginBottom: '40px',
              }}
            >
              {subtitle}
            </h2>
            <p
              style={{
                fontSize: '30px',
                color: '#64748b', // slate-500
              }}
            >
              {website}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 