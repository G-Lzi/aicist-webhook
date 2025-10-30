// app/api/contact/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // optional but good for dev

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs requis" },
        { status: 400 }
      );
    }

    console.log("📩 Nouveau message reçu :", { name, email, message });

    // Just return success for now (no email sending)
    return NextResponse.json({ ok: true, message: "Message reçu" });
  } catch (e) {
    console.error("Erreur dans /api/contact :", e);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/contact" });
}
