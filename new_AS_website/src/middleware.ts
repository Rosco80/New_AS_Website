import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, redirect } = context;
  const { pathname } = url;

  // Only run on the root home page
  if (pathname === "/" || pathname === "") {
    const country = request.headers.get("x-vercel-ip-country") || "";
    
    if (country === "MY") {
      return redirect("/my", 302);
    }
    
    if (country === "GB") {
      return redirect("/uk", 302);
    }
  }

  return next();
});
