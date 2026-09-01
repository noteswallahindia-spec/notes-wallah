export interface Env {
  // Future Cloudflare bindings will be added here.
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        success: true,
        app: "Notes Wallah",
        version: "1.0.0",
        status: "online"
      });
    }

    return new Response(null, {
      status: 404
    });
  }
};
