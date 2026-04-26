const fs = require('fs');

const products = [
  {title: 'English Home Comely Seramik Kahvaltı Takımı 32 parça 6 kişilik Renkli', price: '3.725 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/24602a90-8418-37e5-883c-0c8778c5b4c7/1_org_zoom.jpg'},
  {title: 'English Home Cosmos Seramik Kahvaltı Takımı 14 parça 6 kişilik Lacivert', price: '1.999 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/af3228d7-b4f7-3f5b-aefe-41aed872d7a9/1_org_zoom.jpg'},
  {title: 'English Home Splash Seramik Kahvaltı Takımı 10 parça 4 kişilik Kırmızı-Pembe', price: '1.229 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/0a3610ac-33e1-3375-9262-b2ffe1b0ad47/1_org_zoom.jpg'},
  {title: 'English Home Linea Seramik Kahvaltı Takımı 14 parça 6 kişilik Renkli', price: '1.845 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/67eadadc-33df-3328-a42d-ae8e416e4033/1_org_zoom.jpg'},
  {title: 'English Home Cloves Seramik Kahvaltı Takımı 32 parça 6 kişilik Pembe', price: '2.318 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1849/prod/QC_ENRICHMENT/20260403/22/3a8f7ad1-6b4d-36bf-869b-eee4cdc0f7a1/1_org_zoom.jpg'},
  {title: 'English Home Elena Seramik Yemek Takımı 16 Parça 4 Kişilik Yeşil-Turuncu', price: '1.799 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1770/prod/QC_ENRICHMENT/20251014/09/c8dd11b7-bcd2-3cd0-8018-355b8bee393f/1_org_zoom.jpg'},
  {title: 'English Home Whisper Seramik Kahvaltı Takımı 8 Parça 2 Kişilik Mavi', price: '1.240 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/b8ae3b77-a6af-373b-b78f-75b5bf787d87/1_org_zoom.jpg'},
  {title: 'English Home SBL 3001 Sürahi Blend,Siyah-Krom,1750 ml', price: '2.690 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1766/prod/QC_ENRICHMENT/20251002/12/4ef9d691-b583-3372-9e40-312b44cb0b69/1_org_zoom.jpg'},
  {title: 'English Home RMB 3001 4 Bıçaklı Multi Blender Seti 1500W Beyaz-Krom', price: '2.999 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/bbe6ddb8-73a0-3c1f-857a-19bdfdb005fc/1_org_zoom.jpg'},
  {title: 'English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Bordo', price: '699 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/076109c5-5f75-3e7d-9245-9a48c4347cfb/1_org_zoom.jpg'},
  {title: 'English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Krem', price: '799 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1818/prod/QC_ENRICHMENT/20260204/17/b9d9d80d-0f15-3e6f-8d2a-92ca8c1ffa3a/1_org_zoom.jpg'},
  {title: 'English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Sarı', price: '569 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1604/prod/QC/20241114/20/df2328c2-6ef5-31d6-9bb2-1bb1d8f7b399/1_org_zoom.jpg'},
  {title: 'English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Yeşil', price: '579 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/7e7ae3ab-cc2c-3a3b-9e44-f4f880649482/1_org_zoom.jpg'},
  {title: 'English Home romantic memories Akrilik Tv Battaniye 130x170 cm Vişne', price: '999 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/304faa25-69d8-3310-b08f-4da780f4b133/1_org_zoom.jpg'},
  {title: 'English Home Flora Drape Çift Kişilik Çok Amaçlı Örtü 200x220 cm Yeşil', price: '1.350 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/627adbaa-244a-3f63-82a7-1d9bdfbf3170/1_org_zoom.jpg'},
  {title: 'English Home Strada Grid Çift Kişilik Çok Amaçlı Örtü 200x220 cm Yeşil', price: '1.350 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/7fd59761-7034-32d0-bd8f-265619b2f785/1_org_zoom.jpg'},
  {title: 'English Home William Pamuklu Çift Kişilik Battaniye 200x220 cm Bej', price: '1.250 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1820/prod/QC_ENRICHMENT/20260204/17/1d0ab94a-b844-3f51-abea-0e4fe893c0d3/1_org_zoom.jpg'},
  {title: 'English Home Diamond Clam Çift Kişilik Çok Amaçlı Örtü 200x220 cm Bordo', price: '1.350 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/011a605e-62b9-30a5-b317-79a054af191a/1_org_zoom.jpg'},
  {title: 'English Home Bleublanc Patch Çift Kişilik Çok Amaçlı Örtü 200x220 cm Mavi', price: '1.925 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/77e71826-bb47-339b-a047-48cfb94bdd57/1_org_zoom.jpg'},
  {title: 'English Home Serenade Kolay Ütülenir Çift Kişilik Nevresim Seti 200x220 cm Yeşil', price: '1.350 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/f2929975-7504-36a5-8f81-c5ab403e6954/1_org_zoom.jpg'},
  {title: 'English Home Azalia New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Renkli', price: '959 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1838/prod/QC_ENRICHMENT/20260312/10/89169e5b-4cf5-3ea0-8e77-68255071bc43/1_org_zoom.jpg'},
  {title: 'English Home Talisman Magic New Bone China 4 Parça Kahve Fincan Takımı 100 ml Pembe', price: '999 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/93aa7a9b-903b-3db0-a4fc-9c4d2dc0cd76/1_org_zoom.jpg'},
  {title: 'English Home Vanilla Porselen 2\'li Kahve Fincan Takımı 90 Ml Kırmızı', price: '644 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty371/product/media/images/20220323/12/74969451/424052271/1/1_org_zoom.jpg'},
  {title: 'English Home Vanilla New Bone China Kahve Fincan Takımı 4 Parça 2 Kişilik Açık Gri', price: '610 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1819/prod/QC_ENRICHMENT/20260204/17/c6950104-0676-3614-a54f-2dcaf3b462a3/1_org_zoom.jpg'},
  {title: 'English Home Ember Porselen 4 Parça 2 Kişilik Kahve Fincan Takımı 80 ml Turkuaz', price: '499 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/c1dd18d4-444d-3c87-a4d4-fdf716d7c681/1_org_zoom.jpg'},
  {title: 'English Home Talisman Magic New Bone China 4 Parça Kahve Fincan Takımı 100 ml Beyaz', price: '1.050 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1814/prod/QC_ENRICHMENT/20260121/16/6d19612c-9067-3057-a022-c41ca040ce14/1_org_zoom.jpg'},
  {title: 'English Home Vanilla New Bone China 4 Parça 2 Kişilik Kahve Fıncan Takımı 90 Ml Açık Sarı', price: '615 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/0a849f36-be95-30ef-bc0d-92d4ca5c9fe5/1_org_zoom.jpg'},
  {title: 'English Home Bellis Porselen 4 Parça 2 Kişilik Kahve Fincan Takımı Lacivert', price: '499 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/099a99c4-9556-3312-8286-06cb3fd4c401/1_org_zoom.jpg'},
  {title: 'English Home Angled New Bone China 2 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Turkuaz', price: '375 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/a07c7862-921b-3ec2-8525-27a456898eea/1_org_zoom.jpg'},
  {title: 'English Home Holiday Shine New Bone China 4 Parça Kahve Fincan Takımı 90 ml Kırmızı', price: '759 TL', img: 'https://cdn.dsmcdn.com/mnresize/400/-/ty1790/prod/QC_PREP/20251112/16/62ffc7cf-7993-302b-ab47-6a18bf8a9f64/1_org_zoom.jpg'}
];

const categories = {
    'Sofra & Mutfak': [],
    'Ev Tekstili': [],
    'Elektrikli Ev Aletleri': []
};

products.forEach((p, idx) => {
    p.id = 'prod_' + idx;
    
    let material = "Belirtilmemiş";
    if(p.title.toLowerCase().includes("seramik")) material = "Seramik";
    if(p.title.toLowerCase().includes("porselen")) material = "Porselen";
    if(p.title.toLowerCase().includes("pamuklu")) material = "%100 Pamuk";
    if(p.title.toLowerCase().includes("akrilik")) material = "Akrilik";
    if(p.title.toLowerCase().includes("bone china")) material = "New Bone China";
    
    let parca = "1";
    const parcaMatch = p.title.match(/(\d+)\s*[pP]arça/);
    if(parcaMatch) parca = parcaMatch[1];
    
    p.details = `
        <li><strong>Marka:</strong> English Home</li>
        <li><strong>Materyal:</strong> ${material}</li>
        <li><strong>Parça Sayısı:</strong> ${parca}</li>
        <li><strong>Orijin:</strong> Türkiye</li>
        <li><strong>Durum:</strong> Orijinal, Sıfır Ürün</li>
    `;

    if (p.title.toLowerCase().includes('blender') || p.title.toLowerCase().includes('sürahi')) {
        categories['Elektrikli Ev Aletleri'].push(p);
    } else if (p.title.toLowerCase().includes('battaniye') || p.title.toLowerCase().includes('örtü') || p.title.toLowerCase().includes('nevresim')) {
        categories['Ev Tekstili'].push(p);
    } else {
        categories['Sofra & Mutfak'].push(p);
    }
});

let categoryHtml = '';
let modalHtml = '';

for (const [categoryName, items] of Object.entries(categories)) {
    if(items.length === 0) continue;
    
    const catId = categoryName.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    categoryHtml += `
        <div id="${catId}" class="mb-10 pt-8 category-section">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2 flex items-center gap-2">
                <span class="material-symbols-outlined text-orange-500">category</span>
                ${categoryName}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    `;
    
    items.forEach(p => {
        categoryHtml += `
                <div class="product-card bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] md:shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col group hover:shadow-[0_15px_50px_rgba(242,122,26,0.25)] transition-all duration-300 md:hover:-translate-y-2 relative z-10" data-title="${p.title.replace(/"/g, '&quot;')}">
                    <div class="aspect-square relative overflow-hidden bg-white border-b border-orange-100 cursor-pointer" onclick="openModal('${p.id}')">
                        <img alt="${p.title}" class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" src="${p.img}"/>
                        <div class="absolute inset-0 border border-orange-300/50 rounded-t-2xl pointer-events-none"></div>
                        <span class="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-md text-orange-600 px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl text-xs md:text-sm font-extrabold shadow-sm">${p.price}</span>
                    </div>
                    <div class="p-3 md:p-4 flex flex-col justify-between flex-grow rounded-b-2xl">
                        <h4 class="font-headline text-xs md:text-sm font-semibold mb-3 md:mb-4 text-gray-800 line-clamp-2 cursor-pointer hover:text-orange-500 transition-colors" title="${p.title}" onclick="openModal('${p.id}')">${p.title}</h4>
                        <button onclick="openModal('${p.id}')" class="w-full py-2 md:py-2.5 bg-orange-50 text-orange-600 border border-orange-200 rounded-lg md:rounded-xl font-bold text-xs md:text-sm hover:bg-orange-500 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-1">
                            <span class="material-symbols-outlined text-[16px] md:text-[18px]">info</span>
                            Detay
                        </button>
                    </div>
                </div>`;
                
        modalHtml += `
        <div id="modal-${p.id}" class="fixed inset-0 z-[100] hidden items-center justify-center p-0 md:p-6">
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeModal('${p.id}')"></div>
            
            <div class="relative bg-white md:rounded-3xl shadow-2xl w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-all">
                <button onclick="closeModal('${p.id}')" class="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
                
                <div class="w-full h-1/2 md:h-auto md:w-1/2 bg-gray-50 p-4 md:p-6 flex items-center justify-center">
                    <img src="${p.img}" alt="${p.title}" class="max-w-full max-h-full md:max-h-[400px] object-cover drop-shadow-xl rounded-xl border border-orange-200" />
                </div>
                
                <div class="w-full h-1/2 md:h-auto md:w-1/2 p-5 md:p-10 flex flex-col overflow-y-auto bg-white">
                    <div class="uppercase tracking-widest text-[10px] md:text-xs font-bold text-orange-500 mb-2">Trendyol Özel</div>
                    <h2 class="text-lg md:text-2xl font-bold text-gray-900 mb-3 leading-tight">${p.title}</h2>
                    <div class="text-2xl md:text-3xl font-extrabold text-orange-600 mb-5" id="price-${p.id}">${p.price}</div>
                    
                    <div class="mb-6">
                        <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <span class="material-symbols-outlined text-gray-400">description</span>
                            Ürün Özellikleri
                        </h3>
                        <ul class="space-y-2 text-gray-600 text-xs md:text-sm bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                            ${p.details}
                            <li><strong>Garanti:</strong> 2 Yıl</li>
                            <li><strong>Kargo:</strong> Ücretsiz Kargo</li>
                        </ul>
                    </div>
                    
                    <div class="mt-auto pt-4 border-t border-gray-100 flex gap-3 pb-8 md:pb-0">
                        <button class="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-sm md:text-base transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined">shopping_cart</span>
                            Sepete Ekle
                        </button>
                        <button class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-xl transition-colors">
                            <span class="material-symbols-outlined">favorite</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    categoryHtml += `
            </div>
        </div>
    `;
}

const fullHtml = `<!DOCTYPE html>
<html lang="tr" class="scroll-smooth">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
    <title>Edis E-ticaret | Trendyol Özel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #f2f3f5; -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #f27a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #e06912; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
    <script>
        function openModal(id) {
            const modal = document.getElementById('modal-' + id);
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
        function closeModal(id) {
            const modal = document.getElementById('modal-' + id);
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }

        // Akıllı Kaydırma Fonksiyonu (Sticky Header Yüksekliğini Düşerek Kaydırır)
        function scrollWithOffset(elementId) {
            const element = document.getElementById(elementId);
            if (!element) return;
            
            // Mobilde ve Masaüstünde header yüksekliklerini al
            const isMobile = window.innerWidth < 768;
            const headerHeight = isMobile ? document.getElementById('mobile-header').offsetHeight : document.getElementById('desktop-header').offsetHeight;
            
            // Ek 20px padding payı bırakarak kaydır
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        function filterCategory(catId) {
            const categories = ['soframutfak', 'evtekstili', 'elektriklievaletleri'];
            
            document.getElementById('searchInputMobile').value = '';
            document.getElementById('searchInputDesktop').value = '';
            
            if (catId === 'all') {
                categories.forEach(id => {
                    const el = document.getElementById(id);
                    if(el) {
                        el.style.display = 'block';
                        const products = el.querySelectorAll('.product-card');
                        products.forEach(p => p.style.display = 'flex');
                    }
                });
            } else {
                categories.forEach(id => {
                    const el = document.getElementById(id);
                    if(el) {
                        if (id === catId) {
                            el.style.display = 'block';
                            const products = el.querySelectorAll('.product-card');
                            products.forEach(p => p.style.display = 'flex');
                        } else {
                            el.style.display = 'none';
                        }
                    }
                });
            }
            
            // Dropdown'ı kapat
            const dd = document.getElementById('cat-dropdown');
            if(dd) {
                dd.classList.remove('opacity-100', 'visible', 'translate-y-0');
                dd.classList.add('opacity-0', 'invisible', 'translate-y-2');
            }
            
            // Mobil bottom sheet kapat
            closeMobileCategoryDropdown();
            
            // Sabit menünün altında kalmayacak şekilde akıllı kaydır
            scrollWithOffset('urunler');
        }
        
        function searchProducts(query) {
            query = query.toLowerCase().trim();
            const categories = document.querySelectorAll('.category-section');
            let foundAny = false;
            
            categories.forEach(cat => {
                let hasVisible = false;
                const products = cat.querySelectorAll('.product-card');
                
                products.forEach(card => {
                    const title = card.getAttribute('data-title').toLowerCase();
                    if (title.includes(query)) {
                        card.style.display = 'flex';
                        hasVisible = true;
                        foundAny = true;
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                if (hasVisible) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
            
            if(query.length === 1 && foundAny) {
                scrollWithOffset('urunler');
            }
        }
        
        function toggleDropdown(e) {
            if(e) { e.preventDefault(); e.stopPropagation(); }
            const dd = document.getElementById('cat-dropdown');
            if(dd.classList.contains('opacity-0')) {
                dd.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                dd.classList.add('opacity-100', 'visible', 'translate-y-0');
            } else {
                dd.classList.add('opacity-0', 'invisible', 'translate-y-2');
                dd.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        }

        // Mobil Bottom Sheet Dropdown Açma Kapama
        function toggleMobileCategoryDropdown(e) {
            if(e) { e.preventDefault(); e.stopPropagation(); }
            const sheet = document.getElementById('mobile-bottom-sheet');
            const overlay = document.getElementById('mobile-sheet-overlay');
            
            if(sheet.classList.contains('translate-y-full')) {
                sheet.classList.remove('translate-y-full');
                sheet.classList.add('translate-y-0');
                overlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                closeMobileCategoryDropdown();
            }
        }
        
        function closeMobileCategoryDropdown() {
            const sheet = document.getElementById('mobile-bottom-sheet');
            const overlay = document.getElementById('mobile-sheet-overlay');
            if(sheet) {
                sheet.classList.add('translate-y-full');
                sheet.classList.remove('translate-y-0');
                if(overlay) overlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        document.addEventListener('click', function(event) {
            const dd = document.getElementById('cat-dropdown');
            const btn = document.getElementById('cat-btn');
            if (dd && btn && !btn.contains(event.target) && !dd.contains(event.target)) {
                dd.classList.add('opacity-0', 'invisible', 'translate-y-2');
                dd.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        });
    </script>
</head>
<body class="text-gray-800 antialiased min-h-screen flex flex-col pb-16 md:pb-0">
    <div class="bg-orange-500 text-white text-center py-1.5 md:py-2 text-[10px] md:text-sm font-semibold tracking-wide shadow-sm relative z-50">
        Süper Fırsat Günleri Başladı! Tüm Ürünlerde Ücretsiz Kargo
    </div>

    <!-- Mobile Header -->
    <header id="mobile-header" class="md:hidden bg-white sticky top-0 z-40 shadow-sm border-b border-gray-100">
        <div class="px-4 py-3 flex justify-between items-center">
            <!-- Logo -->
            <div class="flex items-center gap-2" onclick="filterCategory('all');">
                <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">E</div>
                <span class="font-extrabold text-xl text-gray-900 tracking-tight">edis<span class="text-orange-500">.</span></span>
            </div>
            <!-- Icons -->
            <div class="flex items-center gap-4 text-gray-600">
                <span class="material-symbols-outlined">notifications</span>
                <div class="relative">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <span class="absolute -top-1 -right-2 bg-orange-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
                </div>
            </div>
        </div>
        <!-- Mobile Search Bar -->
        <div class="px-4 pb-3">
            <div class="relative w-full">
                <input id="searchInputMobile" type="text" onkeyup="searchProducts(this.value)" class="w-full bg-gray-100 border-transparent rounded-lg py-2 pl-4 pr-10 text-sm focus:bg-white focus:border-orange-500 border outline-none" placeholder="Ürün veya kategori ara...">
                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500">
                    <span class="material-symbols-outlined text-[20px]">search</span>
                </button>
            </div>
        </div>
        <!-- Mobile Quick Links (Chips) -->
        <div class="px-4 pb-3 overflow-x-auto hide-scrollbar flex gap-2 items-center">
            <button onclick="filterCategory('all')" class="whitespace-nowrap px-4 py-1.5 bg-orange-50 text-orange-600 text-xs font-bold rounded-full border border-orange-200">Tüm Ürünler</button>
            <button onclick="toggleMobileCategoryDropdown(event)" class="whitespace-nowrap px-4 py-1.5 bg-gray-100 text-gray-800 hover:bg-orange-100 hover:text-orange-600 text-xs font-bold rounded-full flex items-center gap-1 shadow-sm border border-gray-200">Kategoriler <span class="material-symbols-outlined text-[14px]">expand_more</span></button>
            
            <div class="w-px h-5 bg-gray-200 mx-1 flex-shrink-0"></div> <!-- Divider -->
            
            <a href="#" class="whitespace-nowrap px-3 py-1.5 bg-gray-50 text-gray-800 hover:text-orange-500 text-xs font-bold rounded-full flex items-center gap-1 border border-gray-100"><span class="material-symbols-outlined text-[14px] text-orange-500">trending_up</span> Çok Satanlar</a>
            <a href="#" class="whitespace-nowrap px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold rounded-full flex items-center gap-1 border border-red-100"><span class="material-symbols-outlined text-[14px]">sell</span> İndirimler</a>
            <a href="#" class="whitespace-nowrap px-3 py-1.5 bg-orange-500 text-white hover:bg-orange-600 text-xs font-bold rounded-full border border-orange-600 shadow-sm">Toptan Satış</a>
        </div>
    </header>

    <!-- Desktop Header -->
    <header id="desktop-header" class="hidden md:block bg-white sticky top-0 z-40 shadow-sm border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="filterCategory('all');">
                    <div class="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">E</div>
                    <span class="font-extrabold text-2xl text-gray-900 tracking-tight">edis<span class="text-orange-500">.</span></span>
                </div>
                
                <div class="flex-1 max-w-xl mx-8">
                    <div class="relative w-full">
                        <input id="searchInputDesktop" type="text" onkeyup="searchProducts(this.value)" class="w-full bg-gray-50 border-gray-200 border rounded-full py-2.5 pl-5 pr-12 text-sm focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" placeholder="Ürün, kategori veya marka ara...">
                        <button class="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500">
                            <span class="material-symbols-outlined">search</span>
                        </button>
                    </div>
                </div>

                <div class="flex items-center gap-6">
                    <a href="#" class="flex flex-col items-center text-gray-500 hover:text-orange-500 transition-colors">
                        <span class="material-symbols-outlined">person</span>
                        <span class="text-[10px] font-semibold mt-1">Giriş Yap</span>
                    </a>
                    <a href="#" class="flex flex-col items-center text-gray-500 hover:text-orange-500 transition-colors">
                        <span class="material-symbols-outlined">favorite</span>
                        <span class="text-[10px] font-semibold mt-1">Favorilerim</span>
                    </a>
                    <a href="#" class="flex flex-col items-center text-gray-500 hover:text-orange-500 transition-colors relative">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        <span class="absolute -top-1 -right-2 bg-orange-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold border-2 border-white">2</span>
                        <span class="text-[10px] font-semibold mt-1">Sepetim</span>
                    </a>
                </div>
            </div>
        </div>
        
        <nav class="bg-white relative z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul class="flex text-sm font-semibold text-gray-600 h-14 items-center gap-8">
                    <li><button onclick="filterCategory('all')" class="hover:text-orange-500 transition-colors text-orange-500 py-4 block font-bold">Tüm Ürünler</button></li>
                    
                    <li class="relative py-4">
                        <button id="cat-btn" onclick="toggleDropdown(event)" class="hover:text-orange-500 transition-colors flex items-center gap-1 font-bold">
                            Kategoriler <span class="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                        <div id="cat-dropdown" class="absolute top-[56px] left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl py-3 opacity-0 invisible transition-all duration-200 transform origin-top-left translate-y-2 z-50">
                            <button onclick="filterCategory('soframutfak')" class="w-full text-left px-5 py-3 text-sm text-gray-700 font-semibold hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 flex items-center gap-2"><span class="text-lg">🍽️</span> Sofra & Mutfak</button>
                            <button onclick="filterCategory('evtekstili')" class="w-full text-left px-5 py-3 text-sm text-gray-700 font-semibold hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 flex items-center gap-2"><span class="text-lg">🛋️</span> Ev Tekstili</button>
                            <button onclick="filterCategory('elektriklievaletleri')" class="w-full text-left px-5 py-3 text-sm text-gray-700 font-semibold hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2"><span class="text-lg">🔌</span> Elektrikli Ev Aletleri</button>
                        </div>
                    </li>
                    
                    <li><a href="#" class="hover:text-orange-500 transition-colors text-gray-800 font-bold flex items-center gap-1"><span class="material-symbols-outlined text-orange-500 text-[18px]">trending_up</span> Çok Satanlar</a></li>
                    <li><a href="#" class="hover:text-orange-500 transition-colors text-red-600 font-bold flex items-center gap-1"><span class="material-symbols-outlined text-red-500 text-[18px]">sell</span> İndirimler</a></li>
                    <li><a href="#" class="hover:text-orange-500 transition-colors text-orange-600 font-bold bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">Toptan Satış</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 w-full">
        <div class="mb-8 md:mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative bg-orange-50 border border-orange-100">
            <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-10"></div>
            <div class="px-6 py-10 md:px-8 md:py-16 relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div class="text-center md:text-left mb-6 md:mb-0">
                    <h2 class="text-2xl md:text-5xl font-extrabold text-gray-900 mb-2 md:mb-4">Ev & Yaşam<br/><span class="text-orange-500 drop-shadow-sm">Bahar Fırsatları</span></h2>
                    <p class="text-gray-600 font-medium text-sm md:text-lg max-w-md">Edis mağazasında muhteşem indirimleri kaçırmayın.</p>
                </div>
                <div>
                    <button onclick="filterCategory('all')" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-[0_10px_30px_rgba(242,122,26,0.4)] transition-transform active:scale-95 md:hover:-translate-y-1 text-sm md:text-base">
                        Alışverişe Başla
                    </button>
                </div>
            </div>
        </div>

        <section id="urunler" class="min-h-[50vh]">
            ${categoryHtml}
        </section>
    </main>
    
    <footer class="bg-white border-t border-gray-200 mt-8 md:mt-12 pt-8 md:pt-12 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-xs md:text-sm">
            <p>&copy; 2026 Edis E-ticaret. Tüm hakları saklıdır.</p>
        </div>
    </footer>

    <div id="modals">
        ${modalHtml}
    </div>

    <!-- Mobile Dropdown Menu (Bottom Sheet) -->
    <div id="mobile-sheet-overlay" onclick="closeMobileCategoryDropdown()" class="hidden md:hidden fixed inset-0 bg-black/50 z-50 transition-opacity"></div>
    <div id="mobile-bottom-sheet" class="md:hidden fixed bottom-[55px] left-0 w-full bg-white rounded-t-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.2)] z-50 transform translate-y-full transition-transform duration-300 flex flex-col">
        <div class="w-full flex justify-center pt-3 pb-1" onclick="closeMobileCategoryDropdown()">
            <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
        <div class="px-6 pb-6 pt-2">
            <h3 class="text-lg font-bold mb-3 text-gray-800 flex justify-between items-center">Kategoriler <span class="material-symbols-outlined text-gray-400" onclick="closeMobileCategoryDropdown()">close</span></h3>
            <button onclick="filterCategory('all')" class="w-full text-left py-4 border-b border-gray-100 font-bold text-orange-500 flex items-center justify-between">Tüm Ürünler <span class="material-symbols-outlined text-sm">chevron_right</span></button>
            <button onclick="filterCategory('soframutfak')" class="w-full text-left py-4 border-b border-gray-100 font-semibold text-gray-700 hover:text-orange-500 flex items-center gap-3">🍽️ Sofra & Mutfak</button>
            <button onclick="filterCategory('evtekstili')" class="w-full text-left py-4 border-b border-gray-100 font-semibold text-gray-700 hover:text-orange-500 flex items-center gap-3">🛋️ Ev Tekstili</button>
            <button onclick="filterCategory('elektriklievaletleri')" class="w-full text-left py-4 font-semibold text-gray-700 hover:text-orange-500 flex items-center gap-3">🔌 Elektrikli Ev Aletleri</button>
        </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 pb-safe px-2 flex justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <button onclick="filterCategory('all')" class="flex flex-col items-center flex-1 py-3 text-orange-500">
            <span class="material-symbols-outlined text-[24px] mb-1">home</span>
            <span class="text-[10px] font-bold">Anasayfa</span>
        </button>
        <button onclick="toggleMobileCategoryDropdown(event)" class="flex flex-col items-center flex-1 py-3 text-gray-500 hover:text-orange-500 transition-colors">
            <span class="material-symbols-outlined text-[24px] mb-1">category</span>
            <span class="text-[10px] font-bold">Kategoriler</span>
        </button>
        <a href="#" class="flex flex-col items-center flex-1 py-3 text-gray-500 hover:text-orange-500 transition-colors relative">
            <span class="material-symbols-outlined text-[24px] mb-1">shopping_cart</span>
            <span class="absolute top-2 right-4 bg-orange-500 text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">2</span>
            <span class="text-[10px] font-bold">Sepetim</span>
        </a>
        <a href="#" class="flex flex-col items-center flex-1 py-3 text-gray-500 hover:text-orange-500 transition-colors">
            <span class="material-symbols-outlined text-[24px] mb-1">person</span>
            <span class="text-[10px] font-bold">Hesabım</span>
        </a>
    </nav>
</body>
</html>`;

fs.writeFileSync('C:\\Users\\Mustafa\\.gemini\\antigravity\\scratch\\edis\\index.html', fullHtml, 'utf-8');
console.log('Successfully updated index.html to fix smart scrolling offsets and add a mobile bottom sheet category dropdown.');
