import * as log from "std/log/mod.ts";
import { listenAndServe } from "std/http/server.ts";

function handleRequest(req: Request) {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response("request isn't trying to upgrade to websocket.");
  }

  const { socket, response } = Deno.upgradeWebSocket(req);

  socket.onopen = () => console.log("socket opened");
  socket.onmessage = (e) => {
    console.log("socket message:", e.data);
    socket.send(new Date().toString());
  };
  socket.onerror = (e) => console.log("socket errored:", e);
  socket.onclose = () => console.log("socket closed");

  return response
}

if (import.meta.main) {
  log.warning("WIP")
  log.warning(Deno.args)
  const port = Deno.args[0] || "8000"
  console.log(port);
  listenAndServe(`0.0.0.0:${port}`, handleRequest)
}
