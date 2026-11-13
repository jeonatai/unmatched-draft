// ===================================================================
// CAIXAS (para escolher quais usar no sorteio)
// Cada caixa tem a capa e os personagens dela, ligados pelo NOME EXATO do
// herói no site (veja PERSONAGENS em app.js). Para adicionar uma caixa nova,
// copie um bloco e ajuste. Heróis do site que não estiverem em nenhuma
// caixa aparecem sozinhos em "Outros personagens".
// ===================================================================
const BOXES = [
    {
        id: "battle-of-legends-volume-1",
        nome: "Battle of Legends volume 1",
        img: "https://storage.googleapis.com/ludopedia-capas/21686_m.jpg",
        herois: [
            "Medusa | Harpias",
            "Rei Arthur | Merlin",
            "Alice | O Jaguadarte",
            "Simbad | O Carregador"
        ]
    },
    {
        id: "little-red-and-riding-hood-vs-beowulf",
        nome: "Little Red and Riding Hood vs Beowulf",
        img: "https://storage.googleapis.com/ludopedia-capas/27320_m.jpg",
        herois: [
            "Chapeuzinho Vermelho & O Caçador",
            "Beowulf & Wiglaf"
        ]
    },
    {
        id: "robin-hood-vs-bigfoot",
        nome: "Robin Hood vs Bigfoot",
        img: "https://storage.googleapis.com/ludopedia-capas/22473_m.jpg",
        herois: [
            "Robin Hood | Os Fora-da-lei",
            "Pé Grande | O Lebrílope"
        ]
    },
    {
        id: "cobble-fog",
        nome: "Cobble & Fog",
        img: "https://storage.googleapis.com/ludopedia-capas/25051_m.jpg",
        herois: [
            "Homem Invisível",
            "Dr. Jekyll | Sr. Hyde",
            "Drácula | As Três Irmãs",
            "Sherlock Holmes | Dr. Watson"
        ]
    },
    {
        id: "battle-of-legends-volume-2",
        nome: "Battle of Legends volume 2",
        img: "https://storage.googleapis.com/ludopedia-capas/35527_m.jpg",
        herois: [
            "Sun Wukong",
            "Yennenga | Arqueiras",
            "Aquiles | Pátroclo",
            "Maria Sangrenta"
        ]
    },
    {
        id: "slings-and-arrows",
        nome: "Slings and Arrows",
        img: "https://storage.googleapis.com/ludopedia-capas/66730_m.jpg",
        herois: [
            "Shakespeare | Atores",
            "Titânia | Oberon",
            "Hamlet",
            "As Irmãs Estranhas"
        ]
    },
    {
        id: "houdini-vs-the-genie",
        nome: "Houdini vs The Genie",
        img: "https://storage.googleapis.com/ludopedia-capas/40533_m.jpg",
        herois: [
            "Houdini | Bess",
            "O Gênio"
        ]
    },
    {
        id: "suns-origin",
        nome: "Suns Origin",
        img: "https://storage.googleapis.com/ludopedia-capas/62977_m.jpg",
        herois: [
            "Oda Nobunaga | Guarda de Honra",
            "Tomoe Gozen"
        ]
    },
    {
        id: "contos-fantasticos",
        nome: "Contos fantasticos",
        img: "https://storage.googleapis.com/ludopedia-capas/48200_m.jpg",
        herois: [
            "Jill Trent | Daizy",
            "Nicolas Tesla",
            "Fantomas",
            "Annie Christmas | Charlie"
        ]
    },
    {
        id: "brains-and-brawn",
        nome: "Brains and Brawn",
        img: "https://storage.googleapis.com/ludopedia-capas/51128_m.jpg",
        herois: [
            "She hulk",
            "Dr. Estranho | Wong",
            "Homem Aranha"
        ]
    },
    {
        id: "jurassic-park",
        nome: "Jurassic park",
        img: "https://storage.googleapis.com/ludopedia-capas/35919_m.jpg",
        herois: [
            "Dra. Ellie Sattler | Dr. Ian Malcolm",
            "T-Rex"
        ]
    },
    {
        id: "teen-spirit",
        nome: "Teen Spirit",
        img: "https://storage.googleapis.com/ludopedia-capas/50787_m.jpg",
        herois: [
            "Garota esquilos | Esquilos",
            "Manto e Adaga",
            "Ms. Marvel"
        ]
    },
    {
        id: "the-witcher-realms-fall",
        nome: "The Witcher Realms Fall",
        img: "https://storage.googleapis.com/ludopedia-capas/71120_m.jpg",
        herois: [
            "Yennefer | Triss",
            "Eredin | Cavaleiros Vermelhos",
            "Philippa | Dijkstra"
        ]
    },
    {
        id: "the-witcher-steel-silver",
        nome: "The Witcher Steel & Silver",
        img: "https://storage.googleapis.com/ludopedia-capas/71121_m.jpg",
        herois: [
            "Geralt of Rivia | Dandelion",
            "Ciri | Ihuarraquax",
            "Liche Ancião | Lobos"
        ]
    },
    {
        id: "for-king-and-country",
        nome: "For King and Country",
        img: "https://storage.googleapis.com/ludopedia-capas/50746_m.jpg",
        herois: [
            "Viuva Negra | Maria Hill",
            "Pantera Negra | Shuri",
            "Soldado Invernal"
        ]
    },
    {
        id: "hell-s-kitchen",
        nome: "Hell's Kitchen",
        img: "https://storage.googleapis.com/ludopedia-capas/27890_m.jpg",
        herois: [
            "Demolidor",
            "Eletrika | O Tentáculo",
            "Mercenário"
        ]
    },
    {
        id: "redemption-row",
        nome: "Redemption Row",
        img: "https://storage.googleapis.com/ludopedia-capas/27902_m.jpg",
        herois: [
            "Luke Cage | Misty Knight",
            "Motoqueiro Fantasma",
            "Cavaleiro da Lua"
        ]
    },
    {
        id: "buffy-the-vampire-slayer",
        nome: "Buffy the vampire slayer",
        img: "https://storage.googleapis.com/ludopedia-capas/27901_m.jpg",
        herois: [
            "Buffy | Giles",
            "Spike | Drusilla",
            "Willow | Tara",
            "Angel | Faith"
        ]
    },
    {
        id: "jurassic-park-volume-2",
        nome: "Jurassic Park volume 2",
        img: "https://storage.googleapis.com/ludopedia-capas/22653_m.jpg",
        herois: [
            "Robert Muldoon | Trabalhadores Ingen",
            "Raptores"
        ]
    }
];
