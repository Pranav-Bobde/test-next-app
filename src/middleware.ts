import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
    console.log("hostname", request.nextUrl.host);

    const host = request.nextUrl.host;

    if (host === "pranavbobde.com") {
        return NextResponse.redirect("https://aniwave.to/");
    }

    return NextResponse.next();
}