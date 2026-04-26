(async () => {
    let allProducts = [], page = 1, hasMore = true;
    console.log("Tüm ürünler çekiliyor, lütfen bekleyin...");
    
    while(hasMore) {
        try {
            const res = await fetch(`https://public.trendyol.com/discovery-web-searchgw-service/v2/api/infinite-scroll/sr?mid=423640&os=1&pi=${page}`);
            const data = await res.json();
            if (data?.result?.products?.length > 0) {
                allProducts = allProducts.concat(data.result.products);
                console.log(`Sayfa ${page} çekildi. Toplam ürün: ${allProducts.length}`);
                page++;
            } else hasMore = false;
        } catch(e) { hasMore = false; }
    }
    
    const categories = {};
    allProducts.forEach(p => {
        let cat = p.categoryHierarchy?.length > 0 ? p.categoryHierarchy[p.categoryHierarchy.length - 1] : (p.categoryName || "Diğer");
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push({
            title: p.brand.name + " " + p.name,
            price: p.price.sellingPrice + " TL",
            img: "https://cdn.dsmcdn.com/mnresize/400/-/" + p.images[0],
            url: "https://www.trendyol.com" + p.url
        });
    });
    
    // Markdown formatında metin oluşturma (AI ve raporlama için)
    let md = "# EDİS Mağazası Tüm Ürünler (119 Ürün)\n\n";
    for (const [cat, items] of Object.entries(categories)) {
        md += `## ${cat} (${items.length} Ürün)\n`;
        items.forEach(p => {
            md += `- [${p.title}](${p.url}) : **${p.price}**\n`;
        });
        md += "\n";
    }

    // JSON formatında çıktı (update_products.js için)
    const jsonOutput = [];
    allProducts.forEach(p => {
        jsonOutput.push({
            title: p.brand.name + " " + p.name,
            price: p.price.sellingPrice + " TL",
            img: "https://cdn.dsmcdn.com/mnresize/400/-/" + p.images[0]
        });
    });
    
    console.log("İŞLEM TAMAMLANDI!");
    console.log("Markdown kopyalanıyor...");
    copy(md); 
    
    console.log("--- UPDATE_PRODUCTS.JS İÇİN JSON VERİSİ ---");
    console.log(JSON.stringify(jsonOutput, null, 2));
    console.log("-------------------------------------------");
    
    alert("119 ürün başarıyla çekildi ve Markdown formatında panoya kopyalandı! \n\nKonsoldaki JSON verisini 'update_products.js' içindeki newProducts dizisine yapıştırarak siteyi güncelleyebilirsiniz.");
})();
