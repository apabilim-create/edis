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

const htmlFile = 'C:\\Users\\Mustafa\\.gemini\\antigravity\\scratch\\edis\\index.html';
let html = fs.readFileSync(htmlFile, 'utf-8');

// Also update the tailwind colors to dark grey/orange
html = html.replace('"background": "#0b1f14"', '"background": "#121212"');
html = html.replace('"surface": "#0b1f14"', '"surface": "#121212"');
html = html.replace('"surface-container": "#123321"', '"surface-container": "#1e1e1e"');
html = html.replace('"surface-container-high": "#163b27"', '"surface-container-high": "#2a2a2a"');
html = html.replace('"primary": "#ffb59a"', '"primary": "#f27a1a"'); // Trendyol orange
html = html.replace('"on-primary": "#561a00"', '"on-primary": "#ffffff"');

let productsHtml = '';
products.forEach(p => {
    productsHtml += `
                <div class="bg-surface-container-high rounded-2xl overflow-hidden shadow-xl border border-white/5 flex flex-col group">
                    <div class="aspect-square relative overflow-hidden bg-white">
                        <img alt="Ürün" class="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500" src="${p.img}"/>
                        <span class="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-primary px-2 py-1 rounded-lg text-xs font-bold">${p.price}</span>
                    </div>
                    <div class="p-3 flex flex-col justify-between flex-grow">
                        <h4 class="font-headline text-sm font-semibold mb-3 text-on-surface line-clamp-2" title="${p.title}">${p.title}</h4>
                        <button class="w-full py-2 border border-primary/30 bg-primary/10 text-primary rounded-lg font-bold text-xs hover:bg-primary/20 transition-all active:scale-95">
                            Sepete Ekle
                        </button>
                    </div>
                </div>`;
});

const startTag = '<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">';
const endTag = '</section>';
const startIndex = html.indexOf(startTag) + startTag.length;
const endIndex = html.indexOf(endTag, startIndex);

const newHtml = html.substring(0, startIndex) + productsHtml + '\n            </div>\n        ' + html.substring(endIndex);

fs.writeFileSync(htmlFile, newHtml, 'utf-8');
console.log('Successfully updated index.html with correct variable interpolation and colors.');
