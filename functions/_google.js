export default {
  async fetch(request, env, ctx) {
    const TARGET_URL = "https://raw.githubusercontent.com/images-design/Imagetool/refs/heads/main/4.gif";

    return new Response(null, {
      status: 302,
      headers: {
        "Location": TARGET_URL,
        "Cache-Control": "no-store, no-cache, must-revalidate"
      }
    });
  }
};
