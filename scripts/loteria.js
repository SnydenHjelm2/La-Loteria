const loteria = {
    cards: [
        { name: "El Gallo", id: "64f1a2b3c4d5e" },
        { name: "El Diablito", id: "64f1a2b3c4d5f" },
        { name: "La Dama", id: "64f1a2b3c4d60" },
        { name: "El Catrín", id: "64f1a2b3c4d61" },
        { name: "El Paraguas", id: "64f1a2b3c4d62" },
        { name: "La Sirena", id: "64f1a2b3c4d63" },
        { name: "La Escalera", id: "64f1a2b3c4d64" },
        { name: "La Botella", id: "64f1a2b3c4d65" },
        { name: "El Barril", id: "64f1a2b3c4d66" },
        { name: "El Árbol", id: "64f1a2b3c4d67" },
        { name: "El Melón", id: "64f1a2b3c4d68" },
        { name: "El Valiente", id: "64f1a2b3c4d69" },
        { name: "El Gorrito", id: "64f1a2b3c4d6a" },
        { name: "La Muerte", id: "64f1a2b3c4d6b" },
        { name: "La Pera", id: "64f1a2b3c4d6c" },
        { name: "La Bandera", id: "64f1a2b3c4d6d" },
        { name: "El Bandolón", id: "64f1a2b3c4d6e" },
        { name: "El Violoncello", id: "64f1a2b3c4d6f" },
        { name: "La Garza", id: "64f1a2b3c4d70" },
        { name: "El Pájaro", id: "64f1a2b3c4d71" },
        { name: "La Mano", id: "64f1a2b3c4d72" },
        { name: "La Bota", id: "64f1a2b3c4d73" },
        { name: "La Luna", id: "64f1a2b3c4d74" },
        { name: "El Cotorro", id: "64f1a2b3c4d75" },
        { name: "El Borracho", id: "64f1a2b3c4d76" },
        { name: "El Negrito", id: "64f1a2b3c4d77" },
        { name: "El Corazón", id: "64f1a2b3c4d78" },
        { name: "La Sandía", id: "64f1a2b3c4d79" },
        { name: "El Tambor", id: "64f1a2b3c4d7a" },
        { name: "El Camarón", id: "64f1a2b3c4d7b" },
        { name: "Las Jaras", id: "64f1a2b3c4d7c" },
        { name: "El Músico", id: "64f1a2b3c4d7d" },
        { name: "La Araña", id: "64f1a2b3c4d7e" },
        { name: "El Soldado", id: "64f1a2b3c4d7f" },
        { name: "La Estrella", id: "64f1a2b3c4d80" },
        { name: "El Cazo", id: "64f1a2b3c4d81" },
        { name: "El Mundo", id: "64f1a2b3c4d82" },
        { name: "El Apache", id: "64f1a2b3c4d83" },
        { name: "El Nopal", id: "64f1a2b3c4d84" },
        { name: "El Alacrán", id: "64f1a2b3c4d85" },
        { name: "La Rosa", id: "64f1a2b3c4d86" },
        { name: "La Calavera", id: "64f1a2b3c4d87" },
        { name: "La Campana", id: "64f1a2b3c4d88" },
        { name: "El Cantarito", id: "64f1a2b3c4d89" },
        { name: "El Venado", id: "64f1a2b3c4d8a" },
        { name: "El Sol", id: "64f1a2b3c4d8b" },
        { name: "La Corona", id: "64f1a2b3c4d8c" },
        { name: "La Chalupa", id: "64f1a2b3c4d8d" },
        { name: "El Pino", id: "64f1a2b3c4d8e" },
        { name: "El Pescado", id: "64f1a2b3c4d8f" },
        { name: "La Palma", id: "64f1a2b3c4d90" },
        { name: "La Maceta", id: "64f1a2b3c4d91" },
        { name: "El Arpa", id: "64f1a2b3c4d92" },
        { name: "La Rana", id: "64f1a2b3c4d93" }
    ],

    byId: (id) => {
        return loteria.cards.find(x => x.id === id);
    },

    byName: (name) => {
        return loteria.cards.find(x => loteria.normalize(x.name) === loteria.normalize(name)); 
    },

    normalize: (name) => {
        return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    },

    random: () => {
        return loteria.cards[Math.floor(Math.random() * loteria.cards.length)];
    }
}