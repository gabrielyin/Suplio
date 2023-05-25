import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect('http://localhost:3000')
  }

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await fetch('http://localhost:3333/validate-token', options)

  if (response.status !== 200) {
    return NextResponse.redirect('http://localhost:3000')
  }

  const responseJSON: Promise<{ role: string }> = await response.json()

  const role = (await responseJSON).role

  if (request.nextUrl.pathname.includes('admin') && role === 'team') {
    const newHref = request.nextUrl.href.replace('admin', role)

    return NextResponse.redirect(newHref)
  }

  if (request.nextUrl.pathname.includes('team') && role === 'admin') {
    const newHref = request.nextUrl.href.replace('team', role)

    return NextResponse.redirect(newHref)
  }
}

export const config = {
  matcher: '/auth/:path*',
}
