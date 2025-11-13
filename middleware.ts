import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "toaks-titanium-stove-set",
  "trangia-mini-alcohol-burner",
  "lixada-ultralight-pot-system",
  "gear-aid-titanium-wind-shield",
  "somnifix-sleep-strips",
  "hostage-tape-hypoallergenic",
  "silentsnore-breath-optimizer",
  "thermolite-trail-cup",
  "sea-to-summit-alpha-pan",
  "snow-peak-titanium-spork",
  "keith-titanium-flask",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://deepslumberhq.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("HQ", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/lab"],
};
