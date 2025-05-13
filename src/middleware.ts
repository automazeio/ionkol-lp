import { paraglideMiddleware } from "./paraglide/server.js";
import { defineMiddleware } from "astro/middleware";

const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "ms", "ja", "ko", "chs", "cht"];

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const pathSegments = url.pathname.split("/").filter(Boolean);

  if (
    pathSegments.length > 0 &&
    SUPPORTED_LANGUAGES.includes(pathSegments[0])
  ) {
    return paraglideMiddleware(context.request, () => next());
  }

  const newUrl = new URL(context.request.url);
  newUrl.pathname = `/${DEFAULT_LANGUAGE}${url.pathname}`;
  return Response.redirect(newUrl.toString(), 302);
});
