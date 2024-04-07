import { createServer, Model } from "miragejs";

import { generateRandomString } from "./shared/helpers";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      movie: Model,
    },

    seeds(server) {
      server.create("movie", { name: "Inception", year: 2010 });
      server.create("movie", { name: "Interstellar", year: 2014 });
      server.create("movie", { name: "Dunkirk", year: 2017 });
    },

    routes() {
      this.namespace = "auth";
      this.get("/nonce/:walletAddress", (schema, request) => {
        let { walletAddress } = request.params;
        console.log(request.params);
        const string = generateRandomString(20);
        return { string, walletAddress };
      });

      this.post("/metamask/sign-in", (schema, request) => {
        console.log("---request: ", request.requestBody);
      });
    },
  });

  return server;
}
