// app/api/voice/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say language="fr-FR" voice="alice">
    Bonjour, vous êtes bien chez AICIST. Dites en quelques mots votre demande.
  </Say>
</Response>`;
  return new NextResponse(twiml, { headers: { "Content-Type": "text/xml" } });
}

export function GET() {
  return NextResponse.json({ ok: true, route: "/api/voice" });
}
