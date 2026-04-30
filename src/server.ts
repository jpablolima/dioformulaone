import fastify from  "fastify";

const server = fastify({ logger: true});

const teams = [
    { id: 1, name: "Ferrari", base: "Maranello, Itália" },
    { id: 2, name: "Mercedes", base: "Brackley, Reino Unido" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido" },
    { id: 4, name: "McLaren", base: "Woking, Reino Unido" },
    { id: 5, name: "Aston Martin", base: "Silverstone, Reino Unido" },
    { id: 6, name: "Alpine", base: "Enstone, Reino Unido" },
    { id: 7, name: "Haas F1 Team", base: "Kannapolis, EUA" },
    { id: 8, name: "Williams", base: "Grove, Reino Unido" },
    { id: 9, name: "Racing Bulls", base: "Faenza, Itália" },
    { id: 10, name: "Audi", base: "Hinwil, Suíça" },
    { id: 11, name: "Cadillac F1 Team", base: "Indianápolis, EUA" }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Sergio Perez", team: "Red Bull Racing" },
    { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 4, name: "Charles Leclerc", team: "Ferrari" },
    { id: 5, name: "George Russell", team: "Mercedes" },
    { id: 6, name: "Andrea Kimi Antonelli", team: "Mercedes" },
    { id: 7, name: "Lando Norris", team: "McLaren" },
    { id: 8, name: "Oscar Piastri", team: "McLaren" },
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
    { id: 11, name: "Pierre Gasly", team: "Alpine" },
    { id: 12, name: "Esteban Ocon", team: "Alpine" },
    { id: 13, name: "Kevin Magnussen", team: "Haas F1 Team" },
    { id: 14, name: "Nico Hulkenberg", team: "Haas F1 Team" },
    { id: 15, name: "Alexander Albon", team: "Williams" },
    { id: 16, name: "Logan Sargeant", team: "Williams" },
    { id: 17, name: "Yuki Tsunoda", team: "Racing Bulls" },
    { id: 18, name: "Daniel Ricciardo", team: "Racing Bulls" },
    { id: 19, name: "Valtteri Bottas", team: "Audi" },
    { id: 20, name: "Zhou Guanyu", team: "Audi" },
    { id: 21, name: "Colton Herta", team: "Cadillac F1 Team" },
    { id: 22, name: "Felipe Drugovich", team: "Cadillac F1 Team" }
];

server.get("/teams", async (req, res) => {
    res.type("application/json").code(200)
    return { teams };
});


server.get("/drivers", async (req, res) => {
    res.type("application/json").code(200)
    return { drivers }
});

interface DriverParams{
    id: string
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const driver = drivers.find((d) => d.id === id);

    if  (!driver) {
        res.type("application/json").code(404);
        return { message:  "Driver Not Found" };
    } else {
        res.type("application/json").code(200);
        return { driver };
    }
})


server.listen({ port: 3331, host:  "0.0.0.0" }, () => {
    console.log("Servidor iniciado ma PORTA: 3331");
});