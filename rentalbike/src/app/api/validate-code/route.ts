import { NextRequest, NextResponse } from 'next/server'


export async function POST(request: NextRequest) {
  const { code } = await request.json();
  const prefix = process.env.BOOKING_PREFIX
    if (code && prefix && code.startsWith(prefix)) {
        return NextResponse.json({ valid: true });
    } else {
        return NextResponse.json({ valid: false });
    }
}
