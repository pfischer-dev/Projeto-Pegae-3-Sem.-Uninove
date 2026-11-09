const imageProducts = import.meta.glob(
    "../assets/products/**/*.webp", {
        eager: true,
        import: "default" 
    }
);

const pastaCantinas = {
    cantina_central: "cantinaCentral",
    lanchonete_praca: "lanchonetePraca",
    express_cafe: "expressCafeBolos",
    cantina_grill: "cantinaGrill",
    acai_fit: "naturalJuice"
}

export function getProductImage(idCantina, nomeProduto) {
    const nomePasta = pastaCantinas[idCantina];
    const caminhoImagem = `../assets/products/${nomePasta}/${nomeProduto}.webp`;

    return imageProducts[caminhoImagem]; 
}
getProductImage("cantina_central", "Coxinha de Frango com Catupiry");
