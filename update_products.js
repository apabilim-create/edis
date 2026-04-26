const fs = require('fs');

const newProducts = [
  {
    "title": "Tantitoni TANTİTONİ GRİ PAS.ÇELİK DİKDÖRTGEN ÇATAL VE KAŞIKLI YEMEK TAŞ.KABI 850 ML",
    "price": "599 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1770/prod/QC_ENRICHMENT/20251011/12/72207022-1358-326f-98fd-7130cb9488ce/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 001-01-BEYAZ COFFEE YAZILI PASLANMAZ ÇELİK TERMOS BARDAK 500ML",
    "price": "435 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1350/product/media/images/prod/QC/20240606/14/ca5a9f91-9af1-32ff-beb0-3d31617e6a31/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Bej Paslanmaz Çelik Dikdörtgen İki Gözlü Çatal ve Kaşıklı Yemek Taşıma Kabı 850ml",
    "price": "710 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1741/prod/QC_ENRICHMENT/20250901/22/c7386768-d48e-3787-8a8c-94cfba3a32d1/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Tedemeı Paslanmaz Çelik Dikdörtgen 2 Bölmeli Yemek Taşıma Kabı 850ml",
    "price": "925 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty609/product/media/images/20221123/18/220194115/629838850/1/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 020-01-move Rose Gold Paslanmaz Çelik Pipetli Termos Bardak 1.2l",
    "price": "893 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1555/product/media/images/ty1556/prod/QC/20240918/11/9b5cc9d4-d166-3a78-af84-ad1f4b57c420/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 020-01-MOVE BEJ PASLANMAZ ÇELİK PİPETLİ TERMOS BARDAK 1.2L",
    "price": "999 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1522/product/media/images/prod/QC/20240904/09/b77aa4a2-affe-37b7-92cc-cefa5834681b/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Tedemeı Paslanmaz Çelik Dikdörtgen Yemek Taşıma Kabı 600ml",
    "price": "440 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty611/product/media/images/20221123/18/220199022/629845459/1/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Love Menu Emaye Kızartma Tenceresi 28cm",
    "price": "890 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1651/prod/QC/20250321/10/aca7981a-e42f-3b1f-85d4-1c518c3d2225/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-KOYU YEŞİL PASLANMAZ ÇELİK TERMOS 1.5L",
    "price": "812 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1449/product/media/images/prod/QC/20240731/07/71c69db0-0a17-33ff-8f45-7e7a3e790322/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 020-01-MOVE PEMBE PASLANMAZ ÇELİK PİPETLİ TERMOS BARDAK 1.2L",
    "price": "970 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1788/prod/QC_ENRICHMENT/20251113/14/00cc63bb-085f-3955-87b1-25f8a768bee6/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Pembe Paslanmaz Çelik Dikdörtgen Çatal Ve Kaşıklı Yemek Taşıma Kabı 850ml",
    "price": "940 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1764/prod/QC_ENRICHMENT/20250930/11/1014ac99-7cf6-39c1-9801-cdeec0866d02/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Tedemeı Paslanmaz Çelik Dikdörtgen Yemek Taşıma Kabı 900ml",
    "price": "425 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1324/product/media/images/prod/QC/20240523/09/f6e00826-d980-3ba0-bd5f-a2ed70a41d69/1_org_zoom.jpg"
  },
  {
    "title": "English Home Lovely Stoneware 4'lü Çerezlik 6,5 cm Kırmızı",
    "price": "425 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/799346c9-7899-3d7b-98b8-90bd1cefd1e4/1_org_zoom.jpg"
  },
  {
    "title": "English Home Softy Ultrasonic 2'li Yastık 50x70 cm Beyaz",
    "price": "950 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/ccfca2e9-2112-3db7-92ab-91d1ed11a8a0/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-TEDEMEI MAVİ PASLANMAZ ÇELİK YUVARLAK 2 KATLI ÇATAL VE KAŞIKLI YEMEK TAŞIMA KABI 850ML",
    "price": "749 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1152/product/media/images/prod/SPM/PIM/20240131/17/10fa5d2e-97be-303f-983a-3b1b6caabc99/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe Basic Mini Saklama Kabı 6' Lı Takım 97343",
    "price": "575 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1609/prod/QC/20241202/17/3c4974a4-9975-340d-b400-fb07177636a5/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 001-01-PEMBE COFFEE YAZILI PASLANMAZ ÇELİK TERMOS BARDAK 500ML",
    "price": "545 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1351/product/media/images/prod/QC/20240606/14/df03cb91-e90f-3336-b0ee-8debe5a73518/1_org_zoom.jpg"
  },
  {
    "title": "English Home Splash Seramik Kahvaltı Takımı 10 parça 4 kişilik Kırmızı-Pembe",
    "price": "1.229 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/0a3610ac-33e1-3375-9262-b2ffe1b0ad47/1_org_zoom.jpg"
  },
  {
    "title": "English Home Diamond Clam Çift Kişilik Çok Amaçlı Örtü 200x220 cm Bordo",
    "price": "1.350 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/011a605e-62b9-30a5-b317-79a054af191a/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 4'lü, 28X20 cm, Bambu, Standlı Kesme Tahtası, 4'lü Kesme Tahtası, WOOD CB50254B",
    "price": "677 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1763/prod/QC_ENRICHMENT/20250925/23/69b307cf-e4ef-3385-ad18-09bbaea3e289/1_org_zoom.jpg"
  },
  {
    "title": "English Home Siesta Mikrofiber Tek Kişilik Yorgan 155x215 cm Beyaz",
    "price": "899 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/5d75ec23-560d-348e-8213-0b0bb95ec3b1/1_org_zoom.jpg"
  },
  {
    "title": "English Home Fluffy Sıcak Su Torbası Pudra",
    "price": "395 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1771/prod/QC_ENRICHMENT/20251014/09/b3128b81-95bc-3502-88bb-2e4ea9a2a9cc/1_org_zoom.jpg"
  },
  {
    "title": "English Home Chole Polyester Organizer Siyah",
    "price": "699 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1820/prod/QC_ENRICHMENT/20260204/17/bac15f35-8ded-3f61-ae1f-3a74cab91c58/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe YENİ SERİ KARE (8 ADET) 530240 Timeless Kase 235cc",
    "price": "770 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1200/product/media/images/prod/SPM/PIM/20240310/23/bb491cda-d5ed-3558-b326-7284ea30d4bc/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni OKADI PRATİK SİYAH PASLANMAZ ÇELİK TERMOS BARDAK 380ML",
    "price": "1.000 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1599/prod/QC/20241107/16/ea04f4cc-f5d8-37ea-ba8a-7aac2466c3cd/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe 43756 Vakumlu Cam Kavanoz - Cam Erzak Saklama Kabı 1230 Cc 6 Lı Gri 43756 Orjin. Kutulu",
    "price": "1.890 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1610/prod/QC/20241201/10/29de14a5-cabb-35cb-8faf-8b2338b235b6/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni MOVE AÇIK KAHVE PASLANMAZ ÇELİK PİPETLİ TERMOS BARDAK 1.2L",
    "price": "825 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251013/09/602c1849-0c09-3d1d-8969-4818ca67bf0b/1_org_zoom.jpg"
  },
  {
    "title": "English Home Whisper Seramik Kahvaltı Takımı 8 Parça 2 Kişilik Mavi",
    "price": "1.240 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/b8ae3b77-a6af-373b-b78f-75b5bf787d87/1_org_zoom.jpg"
  },
  {
    "title": "English Home Serenade Kolay Ütülenir Çift Kişilik Nevresim Seti 200x220 cm Yeşil",
    "price": "1.350 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/f2929975-7504-36a5-8f81-c5ab403e6954/1_org_zoom.jpg"
  },
  {
    "title": "English Home Dorothy Çerçeve Gold",
    "price": "599 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1324/product/media/images/prod/QC/20240523/09/3622a66a-0ae0-36ef-b324-f48b73036f7f/1_org_zoom.jpg"
  },
  {
    "title": "English Home Holiday Cheer New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Kırmızı - Yeşil",
    "price": "755 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1789/prod/QC_PREP/20251112/16/bb9614e5-ac8b-35ce-9f19-2343d2519cb0/1_org_zoom.jpg"
  },
  {
    "title": "English Home Pure Oda Spreyi 400 ml",
    "price": "575 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1771/prod/QC_ENRICHMENT/20251014/09/a3322d09-4824-36e1-9ade-59942667933e/1_org_zoom.jpg"
  },
  {
    "title": "English Home RMB 3001 4 Bıçaklı Multi Blender Seti 1500W Beyaz-Krom",
    "price": "2.999 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/bbe6ddb8-73a0-3c1f-857a-19bdfdb005fc/1_org_zoom.jpg"
  },
  {
    "title": "English Home William Pamuklu Çift Kişilik Battaniye 200x220 cm Bej",
    "price": "1.250 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1820/prod/QC_ENRICHMENT/20260204/17/1d0ab94a-b844-3f51-abea-0e4fe893c0d3/1_org_zoom.jpg"
  },
  {
    "title": "English Home Vanilla Wind Çubuklu Oda Kokusu 200 ml",
    "price": "799 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1819/prod/QC_ENRICHMENT/20260204/17/652f1c24-be89-3cd8-a109-e6e4214a9aa7/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe KARE 530240 Timeless Kase 4 Lü",
    "price": "394 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1837/prod/QC_ENRICHMENT/20260311/20/4e572dbc-f357-3677-b03c-1fb8a98f909b/1_org_zoom.jpg"
  },
  {
    "title": "English Home TKM 6011 Plastik Cezv,Siyah-Bakır,320 ml (14.01.2026)",
    "price": "1.949 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1643/prod/QC/20250224/12/20e87c0e-5f35-3f1e-b20f-56243b5fa8ef/1_org_zoom.jpg"
  },
  {
    "title": "English Home Azalia New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Renkli",
    "price": "959 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1838/prod/QC_ENRICHMENT/20260312/10/89169e5b-4cf5-3ea0-8e77-68255071bc43/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 012-01-PASLANMAZ ÇELİK ÇAY TERMOSU 800ML",
    "price": "1.100 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty996/product/media/images/prod/SPM/PIM/20230908/16/661a25b1-661c-397e-a694-b82d2d75a324/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe 530240 Tımeless Kase 235 Cc 4lu",
    "price": "380 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1620/prod/QC/20250110/10/bc2cfb93-6831-32b2-bf59-07e97918438e/1_org_zoom.jpg"
  },
  {
    "title": "English Home Hardwood Bambu Saklama Kutusu 28X20X18 cm Kahve",
    "price": "658 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/64faca38-5fe4-3984-9006-150cd99b66de/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe Basic Mini Saklama Kabı 4' Lü Takım 97343",
    "price": "499 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1525/product/media/images/prod/QC/20240905/17/f0dbe2cd-8ffb-3383-bccb-f537c46053fa/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Lacivert Aır Yazılı Kahve Bardağı 440ml",
    "price": "370 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty595/product/media/images/20221111/14/212298941/589863377/1/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe Villa Patisserie 2 Katlı Kurabiyelik 96816",
    "price": "525 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1836/prod/QC_ENRICHMENT/20260311/20/a62bdeaa-9961-3a62-888a-775130e7a269/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Gri Paslanmaz Çelik Kaşıklı Yemek Termosu 700ml",
    "price": "1.220 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty596/product/media/images/20221111/14/212285505/589839507/1/1_org_zoom.jpg"
  },
  {
    "title": "English Home Curl Sıcak Su Torbası 26x21 cm Pembe (31.12.2025)",
    "price": "589 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251014/09/0d617d89-5e36-3b17-9bb8-7a3d8273bf62/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-KOYU YEŞİL PASLANMAZ ÇELİK TERMOS 500ML",
    "price": "775 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1721/prod/QC_ENRICHMENT/20250806/18/17e6e984-d9b1-35eb-93ae-ae052183b255/1_org_zoom.jpg"
  },
  {
    "title": "English Home Enola New Bone China Demlik Seti 400 ml Beyaz",
    "price": "990 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1819/prod/QC_ENRICHMENT/20260204/17/6e7d770d-25be-31ea-ae54-22fb741201a7/1_org_zoom.jpg"
  },
  {
    "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Sarı",
    "price": "569 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1604/prod/QC/20241114/20/df2328c2-6ef5-31d6-9bb2-1bb1d8f7b399/1_org_zoom.jpg"
  },
  {
    "title": "English Home Strada Grid Çift Kişilik Çok Amaçlı Örtü 200x220 cm Yeşil",
    "price": "1.350 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/7fd59761-7034-32d0-bd8f-265619b2f785/1_org_zoom.jpg"
  },
  {
    "title": "English Home Danny Sıcak Su Torbası Gri",
    "price": "455 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251014/09/152a37ce-48fd-3ec2-ad85-814e16e628ca/1_org_zoom.jpg"
  },
  {
    "title": "English Home Vanilla New Bone China Kahve Fincan Takımı 4 Parça 2 Kişilik Açık Gri",
    "price": "610 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1819/prod/QC_ENRICHMENT/20260204/17/c6950104-0676-3614-a54f-2dcaf3b462a3/1_org_zoom.jpg"
  },
  {
    "title": "English Home Blue Flowers New Bone China Demlik Seti 400 ml Mavi",
    "price": "1.350 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/037e6229-ba35-3fd2-b500-304e6444fded/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 020-01-YEŞİL PİPETLİ PASLANMAZ ÇELİK TERMOS BARDAK 1.2L",
    "price": "1.175 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1584/prod/QC/20241014/10/b2707851-aabc-3be0-b1da-8e3dad790eeb/1_org_zoom.jpg"
  },
  {
    "title": "English Home Linea Seramik Kahvaltı Takımı 14 parça 6 kişilik Renkli",
    "price": "1.845 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/67eadadc-33df-3328-a42d-ae8e416e4033/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Silikon Açık Pembe 4 Lü Büyük Hazırlık Seti",
    "price": "404 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty267/product/media/images/20211211/12/8775004/9406409/1/1_org_zoom.jpg"
  },
  {
    "title": "English Home Bleublanc Patch Çift Kişilik Çok Amaçlı Örtü 200x220 cm Mavi",
    "price": "1.925 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/77e71826-bb47-339b-a047-48cfb94bdd57/1_org_zoom.jpg"
  },
  {
    "title": "Brabantıa Brabantia 124x45cm (C) Buhar Kazanı Standlı Denım Black Desenli Ütü Masası - Ssuh",
    "price": "7.443 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1472/product/media/images/prod/QC/20240808/13/0b693bfc-a133-352f-8494-252de2412952/1_org_zoom.jpg"
  },
  {
    "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Bordo",
    "price": "699 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/076109c5-5f75-3e7d-9245-9a48c4347cfb/1_org_zoom.jpg"
  },
  {
    "title": "English Home Pure Pamuklu 2'li Yastık Kılıfı 50x70 cm Çakıl Taşı",
    "price": "349 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/b54d7010-2a93-3d31-a81e-42a9baafa936/1_org_zoom.jpg"
  },
  {
    "title": "English Home Dahlia New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Renkli",
    "price": "790 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/9341dd11-7be1-386c-b617-074bca59026a/1_org_zoom.jpg"
  },
  {
    "title": "English Home Vanilla Porselen 2'li Kahve Fincan Takımı 90 Ml Kırmızı",
    "price": "644 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty371/product/media/images/20220323/12/74969451/424052271/1/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe Timeless 4 Adet Kare Çerezlik, Sosluk, Kase Seti",
    "price": "415 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1573/prod/QC/20240928/17/5c658f83-87ba-3fb8-a809-e9a88c6c1bb1/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 012-01-SİYAH 2 KAPAKLI ÇİFT KATMANLI TERMOS 1.9L",
    "price": "1.850 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1505/product/media/images/prod/QC/20240827/02/b8114937-2b50-3a76-926e-dfa2ae4a1274/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-YEŞİL 2 KAPAKLI ÇİFT KATMANLI PİPETLİ TERMOS BARDAK 530ML",
    "price": "1.499 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1449/product/media/images/prod/QC/20240730/09/410d6073-9d6e-3988-b660-84d6f4d333e2/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-TEDEMEI MAVİ PASLANMAZ ÇELİK 2 KATLI YUVARLAK YEMEK TAŞIMA KABI 930ML",
    "price": "833 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1153/product/media/images/prod/SPM/PIM/20240130/16/4abfd2d6-4c71-3142-80c8-4d4aa2bc7bd4/1_org_zoom.jpg"
  },
  {
    "title": "English Home Talisman Magic New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 100 ml Beyaz",
    "price": "1.050 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1814/prod/QC_ENRICHMENT/20260121/16/6d19612c-9067-3057-a022-c41ca040ce14/1_org_zoom.jpg"
  },
  {
    "title": "English Home Gina Bambu Sepet 20x15x10 Cm Açık Kahve",
    "price": "275 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/ddb227cd-b1ab-33e7-970d-5c9e7cf27a22/1_org_zoom.jpg"
  },
  {
    "title": "English Home Cosmos Seramik Kahvaltı Takımı 14 parça 6 kişilik Lacivert",
    "price": "1.999 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/af3228d7-b4f7-3f5b-aefe-41aed872d7a9/1_org_zoom.jpg"
  },
  {
    "title": "English Home Gina Bambu Saklama Kutusu Kahve",
    "price": "515 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/8d0c0de7-c730-3a57-af00-47817020c9c6/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 036-01-TEDEMEI MAVİ PASLANMAZ ÇELİK YUVARLAK KAŞIKLI YEMEK TAŞIMA KABI 780ML",
    "price": "480 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1405/product/media/images/prod/QC/20240706/20/b80bd629-139c-3e41-a253-26f49e9fb62a/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-YEŞİL 2 FONKSİYONLU ÇİFT KATMANLI PİPETLİ TERMOS BARDAK 700ML",
    "price": "1.240 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1503/product/media/images/prod/QC/20240827/08/3d435d88-5605-3175-a1f9-826e49f91f99/1_org_zoom.jpg"
  },
  {
    "title": "English Home Fancy Katlanabilir Çamaşır Sepeti Bej",
    "price": "799 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1830/prod/QC_ENRICHMENT/20260225/13/a73ee6c9-9755-3d93-a30a-f4266f6d744d/1_org_zoom.jpg"
  },
  {
    "title": "Genel Markalar 124x45cm (c) Buhar Kazanı Standlı Tıtan Oval Desenli Ütü Masası - Ssuh",
    "price": "6.680 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1611/prod/QC/20241211/08/9ceebd22-df7e-3f2f-b298-3f6d927a8c23/1_org_zoom.jpg"
  },
  {
    "title": "English Home Wavelet Kaydırmaz Taban Banyo Paspası Seti 60x100 cm + 50x60 cm Açık Bej",
    "price": "499 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/548d56cf-aafd-3ad5-9b77-e845c4fece3b/1_org_zoom.jpg"
  },
  {
    "title": "Lines Copper Paslanmaz Çelik 2 Litre Termos INOX",
    "price": "685 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1476/product/media/images/prod/QC/20240812/08/4ed90799-fe21-3c6f-85d0-c179fa8cb0a0/1_org_zoom.jpg"
  },
  {
    "title": "English Home Bellis Porselen 4 Parça 2 Kişilik Kahve Fincan Takımı Lacivert",
    "price": "499 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/099a99c4-9556-3312-8286-06cb3fd4c401/1_org_zoom.jpg"
  },
  {
    "title": "English Home Oud Touch Çubuklu Oda Kokusu",
    "price": "575 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1439/product/media/images/prod/QC/20240725/05/6258eb77-71bf-30cc-a746-2e85c4f4c9f9/1_org_zoom.jpg"
  },
  {
    "title": "English Home Bona Stoneware 3'lü Çerezlik 6,5 cm Siyah-Beyaz-Bej",
    "price": "400 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/0d91867d-37fb-3c25-93c6-6b61e54f37ba/1_org_zoom.jpg"
  },
  {
    "title": "English Home Fancy Katlanabilir Sepet Bej",
    "price": "290 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/aac4afd2-9414-3d9a-bddc-f9bc824affc8/1_org_zoom.jpg"
  },
  {
    "title": "English Home Flora Drape Çift Kişilik Çok Amaçlı Örtü 200x220 cm Yeşil",
    "price": "1.350 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/627adbaa-244a-3f63-82a7-1d9bdfbf3170/1_org_zoom.jpg"
  },
  {
    "title": "English Home Hardwood Bambu Saklama Kutusu Kahve",
    "price": "1.020 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/f8a84e66-0577-3b45-b069-b66ff59b795a/1_org_zoom.jpg"
  },
  {
    "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Krem",
    "price": "799 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1818/prod/QC_ENRICHMENT/20260204/17/b9d9d80d-0f15-3e6f-8d2a-92ca8c1ffa3a/1_org_zoom.jpg"
  },
  {
    "title": "English Home Urbann Katlanabilir Çamaşır Sepeti Kahve",
    "price": "769 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/63bd4ae5-2b75-3e7d-b547-7929447580af/1_org_zoom.jpg"
  },
  {
    "title": "English Home romantic memories Akrilik Tv Battaniye 130x170 cm Vişne",
    "price": "999 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/304faa25-69d8-3310-b08f-4da780f4b133/1_org_zoom.jpg"
  },
  {
    "title": "English Home Shine Saklama Kutusu Gri",
    "price": "899 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1838/prod/QC_ENRICHMENT/20260312/10/4cb37337-1f5c-3c90-a14b-bfeba464181e/1_org_zoom.jpg"
  },
  {
    "title": "English Home Talisman Magic New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 100 ml Pembe",
    "price": "1.030 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/93aa7a9b-903b-3db0-a4fc-9c4d2dc0cd76/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Paslanmaz Çelik Rose Gold Kettle-2l",
    "price": "1.580 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty983/product/media/images/20230810/16/401867872/320323099/1/1_org_zoom.jpg"
  },
  {
    "title": "English Home Elena Seramik Yemek Takımı 16 Parça 4 Kişilik Yeşil-Turuncu",
    "price": "1.799 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1770/prod/QC_ENRICHMENT/20251014/09/c8dd11b7-bcd2-3cd0-8018-355b8bee393f/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Füme Renkli Silikon 3lü Hazırlık Seti Soft Set3f",
    "price": "599 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty678/product/media/images/20230109/17/255067513/504263264/1/1_org_zoom.jpg"
  },
  {
    "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Yeşil",
    "price": "579 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/7e7ae3ab-cc2c-3a3b-9e44-f4f880649482/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Pankek Spatulası",
    "price": "240 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty379/product/media/images/20220402/17/81077851/58892520/1/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-YEŞİL ÇİFT KATMANLI KAPAKLI TERMOS BARDAK 470ML",
    "price": "909 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1451/product/media/images/prod/QC/20240730/11/8adcc2b4-2a56-36ee-a29e-fc11479fee8c/1_org_zoom.jpg"
  },
  {
    "title": "English Home Siesta Mikrofiber Çift Kişilik Yorgan 195x215 cm Beyaz",
    "price": "1.350 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/af6554d8-0dfc-3db6-85dd-bdc216332b73/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Neon Yeşil Paslanmaz Çelik Termos 650 ml",
    "price": "799 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty534/product/media/images/20220916/12/175962428/190665635/1/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Gri Renkli Silikon 3lü Hazırlık Seti",
    "price": "399 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1823/prod/QC_ENRICHMENT/20260206/18/934c7d12-fe8a-3999-8e2f-868543b9d454/1_org_zoom.jpg"
  },
  {
    "title": "English Home Cloves Seramik Kahvaltı Takımı 32 parça 6 kişilik Pembe",
    "price": "2.318 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1849/prod/QC_ENRICHMENT/20260403/22/3a8f7ad1-6b4d-36bf-869b-eee4cdc0f7a1/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe 530683 Polar Kapaklı 4 Adet Bölmeli Kahvaltılık Saklama Kabı Seti",
    "price": "784 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1412/product/media/images/prod/QC/20240709/20/3c63ee1a-8127-31c9-b514-ca1932dc4df8/1_org_zoom.jpg"
  },
  {
    "title": "Genel Markalar Led Güzellik Foton Yüz Maskesi Şeffaf 7 Renkli Anti Ageing Kablosuz",
    "price": "1.950 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1520/product/media/images/prod/QC/20240902/18/1f1fdfca-2de3-3197-8d46-1e584d5165e7/1_org_zoom.jpg"
  },
  {
    "title": "English Home Vanilla New Bone China 4 Parça 2 Kişilik Kahve Fıncan Takımı 90 Ml Açık Sarı",
    "price": "615 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/0a849f36-be95-30ef-bc0d-92d4ca5c9fe5/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni TANTİTONİ 3 KATLI METALİK RENK YEMEK TAŞIMA KABI 2.7 LİTRE",
    "price": "1.545 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1520/product/media/images/prod/QC/20240902/14/494623a1-a8d3-3bc9-a3f8-6d20b23f7ab4/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni TANTİTONİ SİLİKON MOR 4LÜ BÜYÜK HAZIRLIK SETİ",
    "price": "596 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty84/product/media/images/20210325/2/75085238/14875315/1/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni OKADI PRATİK MAVİ PASLANMAZ ÇELİK TERMOS BARDAK 380ML",
    "price": "925 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1609/prod/QC/20241201/23/2924edef-aec6-3261-87b8-cfb29d7e60ab/1_org_zoom.jpg"
  },
  {
    "title": "English Home Softy Sıcak Su Torbası Gri",
    "price": "620 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1761/prod/QC_ENRICHMENT/20250925/12/67ae5474-0adc-315c-8a1a-f05fc9e5e3d4/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 036-01-TEDEMEI YEŞİL PASLANMAZ ÇELİK YUVARLAK KAŞIKLI YEMEK TAŞIMA KABI 780ML",
    "price": "535 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1325/product/media/images/prod/QC/20240522/19/382d5f85-7144-3b70-8516-060b5c11b893/1_org_zoom.jpg"
  },
  {
    "title": "English Home SBL 3001 Sürahi Blend,Siyah-Krom,1750 ml (14.01.2026)",
    "price": "2.690 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1766/prod/QC_ENRICHMENT/20251002/12/4ef9d691-b583-3372-9e40-312b44cb0b69/1_org_zoom.jpg"
  },
  {
    "title": "English Home Comely Seramik Kahvaltı Takımı 32 parça 6 kişilik Renkli",
    "price": "3.725 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/24602a90-8418-37e5-883c-0c8778c5b4c7/1_org_zoom.jpg"
  },
  {
    "title": "English Home Mossy Wood Çubuklu Oda Kokusu",
    "price": "575 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1753/prod/QC_ENRICHMENT/20250916/10/2543e116-51ed-36b3-a30b-2b876e37e255/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Paslanmaz Çelik Çift Ağızlı Silindir Cezve 350 ml",
    "price": "480 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty793/product/media/images/20230323/15/310260597/77091009/1/1_org_zoom.jpg"
  },
  {
    "title": "English Home Gina Bambu Sepet Açık Kahve",
    "price": "435 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/ab64fa1b-b608-329a-a551-34e736001419/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe 98402 Kapaklı Tereyağlık",
    "price": "340 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1451/product/media/images/prod/QC/20240730/16/8e5fff1e-9dcc-3029-9c3e-0c65c11c8727/1_org_zoom.jpg"
  },
  {
    "title": "Paşabahçe 530683 Polar 2 Bölmeli Kapaklı Saklama Kabı Yeşil Kapaklı 4'lü 785 Cc",
    "price": "750 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1340/product/media/images/prod/QC/20240530/00/d4589319-02b8-37ee-b610-a6c72963615d/1_org_zoom.jpg"
  },
  {
    "title": "English Home Angled New Bone China 2 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Turkuaz",
    "price": "375 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/a07c7862-921b-3ec2-8525-27a456898eea/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 024-01-LACİVERT ÇİFT KATMANLI TERMOS BARDAK 470ML",
    "price": "1.010 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1450/product/media/images/prod/QC/20240730/11/8830d58d-c6f7-3c07-9c59-0822d3efb76f/1_org_zoom.jpg"
  },
  {
    "title": "English Home Chloe Organizer Gri",
    "price": "755 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251014/09/67a39ee2-f83f-3608-8a54-fa764a520ba8/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni 036-01-TEDEMEI PEMBE PASLANMAZ ÇELİK YUVARLAK KAŞIKLI YEMEK TAŞIMA KABI 780ML",
    "price": "497 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1325/product/media/images/prod/QC/20240523/09/adbab7db-fd59-332c-bd04-b5cd1779a8bf/1_org_zoom.jpg"
  },
  {
    "title": "English Home Holiday Shine New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Kırmızı - Yeşil",
    "price": "759 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1790/prod/QC_PREP/20251112/16/62ffc7cf-7993-302b-ab47-6a18bf8a9f64/1_org_zoom.jpg"
  },
  {
    "title": "Tantitoni Siyah Türk Kahvesi Makinesi",
    "price": "1.220 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1612/prod/QC/20241215/23/54f894ee-e4c5-37eb-a0f5-7acd012a00ad/1_org_zoom.jpg"
  },
  {
    "title": "English Home Ember Porselen 4 Parça 2 Kişilik Kahve Fincan Takımı 80 ml Turkuaz",
    "price": "499 TL",
    "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/c1dd18d4-444d-3c87-a4d4-fdf716d7c681/1_org_zoom.jpg"
  }
];

// Categorize logic
const categorizedProducts = newProducts.map((p, index) => {
    let title = p.title.toLowerCase();
    let category = 'diger'; // Default
    
    // Better Categorization Logic
    if (title.includes('termos') || title.includes('matara') || title.includes('bardak') || title.includes('fincan') || title.includes('mug')) {
        category = 'termosbardak';
    } 
    else if (title.includes('tencere') || title.includes('çatal') || title.includes('kaşık') || title.includes('bıçak') || title.includes('yemek takımı') || title.includes('kahvaltı takımı') || title.includes('çerezlik') || title.includes('fincan takımı') || title.includes('cezve') || title.includes('kurabiyelik') || title.includes('porselen') || title.includes('seramik') || title.includes('kase') || title.includes('spatula') || title.includes('çelik tencere') || title.includes('kızartma tenceresi')) {
        category = 'soframutfak';
    }
    else if (title.includes('saklama kabı') || title.includes('kavanoz') || title.includes('saklama kutusu') || title.includes('sepet') || title.includes('organizer') || title.includes('kesme tahtası') || title.includes('tereyağlık')) {
        category = 'saklamahazirlik';
    }
    else if (title.includes('battaniye') || title.includes('yorgan') || title.includes('nevresim') || title.includes('örtü') || title.includes('yastık') || title.includes('paspas') || title.includes('havlu')) {
        category = 'evtekstili';
    } 
    else if (title.includes('makinesi') || title.includes('blender') || title.includes('kettle') || title.includes('ütü masası') || title.includes('evaletleri')) {
        category = 'elektriklievaletleri';
    }
    else if (title.includes('oda kokusu') || title.includes('oda spreyi') || title.includes('çerçeve') || title.includes('sıcak su torbası') || title.includes('maske')) {
        category = 'dekorasyonyasam';
    }
    
    return {
        id: index + 1,
        title: p.title,
        price: p.price,
        img: p.img,
        category: category
    };
});

let content = fs.readFileSync('C:\\Users\\Mustafa\\.gemini\\antigravity\\scratch\\edis\\generate_html.js', 'utf-8');
content = content.replace(/const products = \[[\s\S]*?\];/, 'const products = ' + JSON.stringify(categorizedProducts, null, 4) + ';');

fs.writeFileSync('C:\\Users\\Mustafa\\.gemini\\antigravity\\scratch\\edis\\generate_html.js', content, 'utf-8');
console.log('generate_html.js has been updated with categorized products!');
