import { createServer, Model } from "miragejs";

export function startServer() {
  createServer({
    models: {
      destinations: Model,
    },

    seeds(server) {
      server.create("destination", {
        id: "1",
        name: "Norwegian Fjords",
        country: "Norway",
        region: "Scandinavia",
        description:
          "Pack your bags, grab a coffee and hit the road! Norway is full of crazy views, quiet spots and roads that make you want to stop every five minutes just to take another picture. Perfect place to slow down and enjoy the ride.",
        imageUrl: "/images/norway.jpg",
        type: "nature",
        duration: "7 days",
        difficulty: "Medium",
        bestSeason: "Summer",
      });

      server.create("destination", {
        id: "2",
        name: "Amalfi Coast",
        country: "Italy",
        region: "Southern Europe",
        description:
          "Sunny days, salty air and tiny Italian towns around every corner. Drive along the coast, grab some pizza, find a spot by the sea and just enjoy doing absolutely nothing. Sounds like a pretty good road trip, right?",
        imageUrl: "/images/amalfi.jpg",
        type: "coast",
        duration: "5 days",
        difficulty: "Easy",
        bestSeason: "Spring",
      });

      server.create("destination", {
        id: "3",
        name: "Swiss Alps",
        country: "Switzerland",
        region: "Central Europe",
        description:
          "Mountains, lakes and views that honestly don't look real. Spend your days exploring little mountain roads, finding hidden lakes and waking up surrounded by nature. Don't forget your camera!",
        imageUrl: "/images/alps.jpg",
        type: "mountains",
        duration: "6 days",
        difficulty: "Hard",
        bestSeason: "Summer",
      });

      server.create("destination", {
        id: "4",
        name: "Wild Scotland",
        country: "Scotland",
        region: "United Kingdom",
        description:
          "A little bit of rain, lots of green hills and some seriously beautiful roads. Scotland is all about getting lost (in a good way), discovering tiny villages and finding those quiet places you'd never find in a guidebook.",
        imageUrl: "/images/scotland.jpg",
        type: "nature",
        duration: "8 days",
        difficulty: "Medium",
        bestSeason: "Summer",
      });
    },

    routes() {
      this.get("/destinations", (schema) => {
        return schema.destinations.all();
      });

      this.get("/destinations/:id", (schema, request) => {
        return schema.destinations.find(request.params.id);
      });
    },
  });
}
