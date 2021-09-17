function handleRequest(req: Request): Response {
  if (req.headers.get("upgrade") === "websocket") {
    return handleWs(req);
  }

  return new Response("Hello, World!");
}

function handleWs(req: Request): Response {
  const { socket, response } = Deno.upgradeWebSocket(req);
  socket.onopen = () => console.log("socket opened");
  socket.onmessage = (e) => {
    console.log("socket message:", e.data);
    socket.send(new Date().toString());
  };
  socket.onerror = (e) => console.log("socket errored:", e);
  socket.onclose = () => console.log("socket closed");
  console.log(response);
  return response;
}

if (import.meta.main) {
  const port = Number(Deno.args[0] || "9000");
  if (port === Number.NaN) {
    console.log("invalid port!");
  }

  const server = Deno.listen({ port });

  for await (const conn of server) {
    (async () => {
      const httpConn = Deno.serveHttp(conn);
      for await (const requestEvent of httpConn) {
        await requestEvent.respondWith(handleRequest(requestEvent.request));
      }
    })();
  }
}
