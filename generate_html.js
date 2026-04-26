const fs = require('fs');

const products = [
    {
        "id": 1,
        "title": "Tantitoni TANTİTONİ GRİ PAS.ÇELİK DİKDÖRTGEN ÇATAL VE KAŞIKLI YEMEK TAŞ.KABI 850 ML",
        "price": "599 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1770/prod/QC_ENRICHMENT/20251011/12/72207022-1358-326f-98fd-7130cb9488ce/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 2,
        "title": "Tantitoni 001-01-BEYAZ COFFEE YAZILI PASLANMAZ ÇELİK TERMOS BARDAK 500ML",
        "price": "435 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1350/product/media/images/prod/QC/20240606/14/ca5a9f91-9af1-32ff-beb0-3d31617e6a31/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 3,
        "title": "Tantitoni Bej Paslanmaz Çelik Dikdörtgen İki Gözlü Çatal ve Kaşıklı Yemek Taşıma Kabı 850ml",
        "price": "710 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1741/prod/QC_ENRICHMENT/20250901/22/c7386768-d48e-3787-8a8c-94cfba3a32d1/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 4,
        "title": "Tantitoni Tedemeı Paslanmaz Çelik Dikdörtgen 2 Bölmeli Yemek Taşıma Kabı 850ml",
        "price": "925 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty609/product/media/images/20221123/18/220194115/629838850/1/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 5,
        "title": "Tantitoni 020-01-move Rose Gold Paslanmaz Çelik Pipetli Termos Bardak 1.2l",
        "price": "893 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1555/product/media/images/ty1556/prod/QC/20240918/11/9b5cc9d4-d166-3a78-af84-ad1f4b57c420/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 6,
        "title": "Tantitoni 020-01-MOVE BEJ PASLANMAZ ÇELİK PİPETLİ TERMOS BARDAK 1.2L",
        "price": "999 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1522/product/media/images/prod/QC/20240904/09/b77aa4a2-affe-37b7-92cc-cefa5834681b/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 7,
        "title": "Tantitoni Tedemeı Paslanmaz Çelik Dikdörtgen Yemek Taşıma Kabı 600ml",
        "price": "440 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty611/product/media/images/20221123/18/220199022/629845459/1/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 8,
        "title": "Tantitoni Love Menu Emaye Kızartma Tenceresi 28cm",
        "price": "890 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1651/prod/QC/20250321/10/aca7981a-e42f-3b1f-85d4-1c518c3d2225/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 9,
        "title": "Tantitoni 024-01-KOYU YEŞİL PASLANMAZ ÇELİK TERMOS 1.5L",
        "price": "812 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1449/product/media/images/prod/QC/20240731/07/71c69db0-0a17-33ff-8f45-7e7a3e790322/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 10,
        "title": "Tantitoni 020-01-MOVE PEMBE PASLANMAZ ÇELİK PİPETLİ TERMOS BARDAK 1.2L",
        "price": "970 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1788/prod/QC_ENRICHMENT/20251113/14/00cc63bb-085f-3955-87b1-25f8a768bee6/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 11,
        "title": "Tantitoni Pembe Paslanmaz Çelik Dikdörtgen Çatal Ve Kaşıklı Yemek Taşıma Kabı 850ml",
        "price": "940 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1764/prod/QC_ENRICHMENT/20250930/11/1014ac99-7cf6-39c1-9801-cdeec0866d02/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 12,
        "title": "Tantitoni Tedemeı Paslanmaz Çelik Dikdörtgen Yemek Taşıma Kabı 900ml",
        "price": "425 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1324/product/media/images/prod/QC/20240523/09/f6e00826-d980-3ba0-bd5f-a2ed70a41d69/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 13,
        "title": "English Home Lovely Stoneware 4'lü Çerezlik 6,5 cm Kırmızı",
        "price": "425 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/799346c9-7899-3d7b-98b8-90bd1cefd1e4/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 14,
        "title": "English Home Softy Ultrasonic 2'li Yastık 50x70 cm Beyaz",
        "price": "950 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/ccfca2e9-2112-3db7-92ab-91d1ed11a8a0/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 15,
        "title": "Tantitoni 024-01-TEDEMEI MAVİ PASLANMAZ ÇELİK YUVARLAK 2 KATLI ÇATAL VE KAŞIKLI YEMEK TAŞIMA KABI 850ML",
        "price": "749 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1152/product/media/images/prod/SPM/PIM/20240131/17/10fa5d2e-97be-303f-983a-3b1b6caabc99/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 16,
        "title": "Paşabahçe Basic Mini Saklama Kabı 6' Lı Takım 97343",
        "price": "575 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1609/prod/QC/20241202/17/3c4974a4-9975-340d-b400-fb07177636a5/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 17,
        "title": "Tantitoni 001-01-PEMBE COFFEE YAZILI PASLANMAZ ÇELİK TERMOS BARDAK 500ML",
        "price": "545 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1351/product/media/images/prod/QC/20240606/14/df03cb91-e90f-3336-b0ee-8debe5a73518/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 18,
        "title": "English Home Splash Seramik Kahvaltı Takımı 10 parça 4 kişilik Kırmızı-Pembe",
        "price": "1.229 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/0a3610ac-33e1-3375-9262-b2ffe1b0ad47/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 19,
        "title": "English Home Diamond Clam Çift Kişilik Çok Amaçlı Örtü 200x220 cm Bordo",
        "price": "1.350 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/011a605e-62b9-30a5-b317-79a054af191a/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 20,
        "title": "Tantitoni 4'lü, 28X20 cm, Bambu, Standlı Kesme Tahtası, 4'lü Kesme Tahtası, WOOD CB50254B",
        "price": "677 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1763/prod/QC_ENRICHMENT/20250925/23/69b307cf-e4ef-3385-ad18-09bbaea3e289/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 21,
        "title": "English Home Siesta Mikrofiber Tek Kişilik Yorgan 155x215 cm Beyaz",
        "price": "899 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/5d75ec23-560d-348e-8213-0b0bb95ec3b1/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 22,
        "title": "English Home Fluffy Sıcak Su Torbası Pudra",
        "price": "395 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1771/prod/QC_ENRICHMENT/20251014/09/b3128b81-95bc-3502-88bb-2e4ea9a2a9cc/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 23,
        "title": "English Home Chole Polyester Organizer Siyah",
        "price": "699 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1820/prod/QC_ENRICHMENT/20260204/17/bac15f35-8ded-3f61-ae1f-3a74cab91c58/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 24,
        "title": "Paşabahçe YENİ SERİ KARE (8 ADET) 530240 Timeless Kase 235cc",
        "price": "770 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1200/product/media/images/prod/SPM/PIM/20240310/23/bb491cda-d5ed-3558-b326-7284ea30d4bc/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 25,
        "title": "Tantitoni OKADI PRATİK SİYAH PASLANMAZ ÇELİK TERMOS BARDAK 380ML",
        "price": "1.000 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1599/prod/QC/20241107/16/ea04f4cc-f5d8-37ea-ba8a-7aac2466c3cd/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 26,
        "title": "Paşabahçe 43756 Vakumlu Cam Kavanoz - Cam Erzak Saklama Kabı 1230 Cc 6 Lı Gri 43756 Orjin. Kutulu",
        "price": "1.890 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1610/prod/QC/20241201/10/29de14a5-cabb-35cb-8faf-8b2338b235b6/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 27,
        "title": "Tantitoni MOVE AÇIK KAHVE PASLANMAZ ÇELİK PİPETLİ TERMOS BARDAK 1.2L",
        "price": "825 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251013/09/602c1849-0c09-3d1d-8969-4818ca67bf0b/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 28,
        "title": "English Home Whisper Seramik Kahvaltı Takımı 8 Parça 2 Kişilik Mavi",
        "price": "1.240 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/b8ae3b77-a6af-373b-b78f-75b5bf787d87/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 29,
        "title": "English Home Serenade Kolay Ütülenir Çift Kişilik Nevresim Seti 200x220 cm Yeşil",
        "price": "1.350 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/f2929975-7504-36a5-8f81-c5ab403e6954/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 30,
        "title": "English Home Dorothy Çerçeve Gold",
        "price": "599 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1324/product/media/images/prod/QC/20240523/09/3622a66a-0ae0-36ef-b324-f48b73036f7f/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 31,
        "title": "English Home Holiday Cheer New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Kırmızı - Yeşil",
        "price": "755 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1789/prod/QC_PREP/20251112/16/bb9614e5-ac8b-35ce-9f19-2343d2519cb0/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 32,
        "title": "English Home Pure Oda Spreyi 400 ml",
        "price": "575 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1771/prod/QC_ENRICHMENT/20251014/09/a3322d09-4824-36e1-9ade-59942667933e/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 33,
        "title": "English Home RMB 3001 4 Bıçaklı Multi Blender Seti 1500W Beyaz-Krom",
        "price": "2.999 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/bbe6ddb8-73a0-3c1f-857a-19bdfdb005fc/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 34,
        "title": "English Home William Pamuklu Çift Kişilik Battaniye 200x220 cm Bej",
        "price": "1.250 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1820/prod/QC_ENRICHMENT/20260204/17/1d0ab94a-b844-3f51-abea-0e4fe893c0d3/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 35,
        "title": "English Home Vanilla Wind Çubuklu Oda Kokusu 200 ml",
        "price": "799 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1819/prod/QC_ENRICHMENT/20260204/17/652f1c24-be89-3cd8-a109-e6e4214a9aa7/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 36,
        "title": "Paşabahçe KARE 530240 Timeless Kase 4 Lü",
        "price": "394 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1837/prod/QC_ENRICHMENT/20260311/20/4e572dbc-f357-3677-b03c-1fb8a98f909b/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 37,
        "title": "English Home TKM 6011 Plastik Cezv,Siyah-Bakır,320 ml (14.01.2026)",
        "price": "1.949 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1643/prod/QC/20250224/12/20e87c0e-5f35-3f1e-b20f-56243b5fa8ef/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 38,
        "title": "English Home Azalia New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Renkli",
        "price": "959 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1838/prod/QC_ENRICHMENT/20260312/10/89169e5b-4cf5-3ea0-8e77-68255071bc43/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 39,
        "title": "Tantitoni 012-01-PASLANMAZ ÇELİK ÇAY TERMOSU 800ML",
        "price": "1.100 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty996/product/media/images/prod/SPM/PIM/20230908/16/661a25b1-661c-397e-a694-b82d2d75a324/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 40,
        "title": "Paşabahçe 530240 Tımeless Kase 235 Cc 4lu",
        "price": "380 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1620/prod/QC/20250110/10/bc2cfb93-6831-32b2-bf59-07e97918438e/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 41,
        "title": "English Home Hardwood Bambu Saklama Kutusu 28X20X18 cm Kahve",
        "price": "658 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/64faca38-5fe4-3984-9006-150cd99b66de/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 42,
        "title": "Paşabahçe Basic Mini Saklama Kabı 4' Lü Takım 97343",
        "price": "499 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1525/product/media/images/prod/QC/20240905/17/f0dbe2cd-8ffb-3383-bccb-f537c46053fa/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 43,
        "title": "Tantitoni Lacivert Aır Yazılı Kahve Bardağı 440ml",
        "price": "370 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty595/product/media/images/20221111/14/212298941/589863377/1/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 44,
        "title": "Paşabahçe Villa Patisserie 2 Katlı Kurabiyelik 96816",
        "price": "525 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1836/prod/QC_ENRICHMENT/20260311/20/a62bdeaa-9961-3a62-888a-775130e7a269/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 45,
        "title": "Tantitoni Gri Paslanmaz Çelik Kaşıklı Yemek Termosu 700ml",
        "price": "1.220 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty596/product/media/images/20221111/14/212285505/589839507/1/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 46,
        "title": "English Home Curl Sıcak Su Torbası 26x21 cm Pembe (31.12.2025)",
        "price": "589 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251014/09/0d617d89-5e36-3b17-9bb8-7a3d8273bf62/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 47,
        "title": "Tantitoni 024-01-KOYU YEŞİL PASLANMAZ ÇELİK TERMOS 500ML",
        "price": "775 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1721/prod/QC_ENRICHMENT/20250806/18/17e6e984-d9b1-35eb-93ae-ae052183b255/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 48,
        "title": "English Home Enola New Bone China Demlik Seti 400 ml Beyaz",
        "price": "990 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1819/prod/QC_ENRICHMENT/20260204/17/6e7d770d-25be-31ea-ae54-22fb741201a7/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 49,
        "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Sarı",
        "price": "569 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1604/prod/QC/20241114/20/df2328c2-6ef5-31d6-9bb2-1bb1d8f7b399/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 50,
        "title": "English Home Strada Grid Çift Kişilik Çok Amaçlı Örtü 200x220 cm Yeşil",
        "price": "1.350 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/7fd59761-7034-32d0-bd8f-265619b2f785/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 51,
        "title": "English Home Danny Sıcak Su Torbası Gri",
        "price": "455 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251014/09/152a37ce-48fd-3ec2-ad85-814e16e628ca/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 52,
        "title": "English Home Vanilla New Bone China Kahve Fincan Takımı 4 Parça 2 Kişilik Açık Gri",
        "price": "610 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1819/prod/QC_ENRICHMENT/20260204/17/c6950104-0676-3614-a54f-2dcaf3b462a3/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 53,
        "title": "English Home Blue Flowers New Bone China Demlik Seti 400 ml Mavi",
        "price": "1.350 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/037e6229-ba35-3fd2-b500-304e6444fded/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 54,
        "title": "Tantitoni 020-01-YEŞİL PİPETLİ PASLANMAZ ÇELİK TERMOS BARDAK 1.2L",
        "price": "1.175 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1584/prod/QC/20241014/10/b2707851-aabc-3be0-b1da-8e3dad790eeb/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 55,
        "title": "English Home Linea Seramik Kahvaltı Takımı 14 parça 6 kişilik Renkli",
        "price": "1.845 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/67eadadc-33df-3328-a42d-ae8e416e4033/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 56,
        "title": "Tantitoni Silikon Açık Pembe 4 Lü Büyük Hazırlık Seti",
        "price": "404 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty267/product/media/images/20211211/12/8775004/9406409/1/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 57,
        "title": "English Home Bleublanc Patch Çift Kişilik Çok Amaçlı Örtü 200x220 cm Mavi",
        "price": "1.925 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/77e71826-bb47-339b-a047-48cfb94bdd57/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 58,
        "title": "Brabantıa Brabantia 124x45cm (C) Buhar Kazanı Standlı Denım Black Desenli Ütü Masası - Ssuh",
        "price": "7.443 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1472/product/media/images/prod/QC/20240808/13/0b693bfc-a133-352f-8494-252de2412952/1_org_zoom.jpg",
        "category": "elektriklievaletleri"
    },
    {
        "id": 59,
        "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Bordo",
        "price": "699 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/076109c5-5f75-3e7d-9245-9a48c4347cfb/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 60,
        "title": "English Home Pure Pamuklu 2'li Yastık Kılıfı 50x70 cm Çakıl Taşı",
        "price": "349 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/b54d7010-2a93-3d31-a81e-42a9baafa936/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 61,
        "title": "English Home Dahlia New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Renkli",
        "price": "790 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/9341dd11-7be1-386c-b617-074bca59026a/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 62,
        "title": "English Home Vanilla Porselen 2'li Kahve Fincan Takımı 90 Ml Kırmızı",
        "price": "644 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty371/product/media/images/20220323/12/74969451/424052271/1/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 63,
        "title": "Paşabahçe Timeless 4 Adet Kare Çerezlik, Sosluk, Kase Seti",
        "price": "415 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1573/prod/QC/20240928/17/5c658f83-87ba-3fb8-a809-e9a88c6c1bb1/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 64,
        "title": "Tantitoni 012-01-SİYAH 2 KAPAKLI ÇİFT KATMANLI TERMOS 1.9L",
        "price": "1.850 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1505/product/media/images/prod/QC/20240827/02/b8114937-2b50-3a76-926e-dfa2ae4a1274/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 65,
        "title": "Tantitoni 024-01-YEŞİL 2 KAPAKLI ÇİFT KATMANLI PİPETLİ TERMOS BARDAK 530ML",
        "price": "1.499 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1449/product/media/images/prod/QC/20240730/09/410d6073-9d6e-3988-b660-84d6f4d333e2/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 66,
        "title": "Tantitoni 024-01-TEDEMEI MAVİ PASLANMAZ ÇELİK 2 KATLI YUVARLAK YEMEK TAŞIMA KABI 930ML",
        "price": "833 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1153/product/media/images/prod/SPM/PIM/20240130/16/4abfd2d6-4c71-3142-80c8-4d4aa2bc7bd4/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 67,
        "title": "English Home Talisman Magic New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 100 ml Beyaz",
        "price": "1.050 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1814/prod/QC_ENRICHMENT/20260121/16/6d19612c-9067-3057-a022-c41ca040ce14/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 68,
        "title": "English Home Gina Bambu Sepet 20x15x10 Cm Açık Kahve",
        "price": "275 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/ddb227cd-b1ab-33e7-970d-5c9e7cf27a22/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 69,
        "title": "English Home Cosmos Seramik Kahvaltı Takımı 14 parça 6 kişilik Lacivert",
        "price": "1.999 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/af3228d7-b4f7-3f5b-aefe-41aed872d7a9/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 70,
        "title": "English Home Gina Bambu Saklama Kutusu Kahve",
        "price": "515 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/8d0c0de7-c730-3a57-af00-47817020c9c6/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 71,
        "title": "Tantitoni 036-01-TEDEMEI MAVİ PASLANMAZ ÇELİK YUVARLAK KAŞIKLI YEMEK TAŞIMA KABI 780ML",
        "price": "480 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1405/product/media/images/prod/QC/20240706/20/b80bd629-139c-3e41-a253-26f49e9fb62a/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 72,
        "title": "Tantitoni 024-01-YEŞİL 2 FONKSİYONLU ÇİFT KATMANLI PİPETLİ TERMOS BARDAK 700ML",
        "price": "1.240 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1503/product/media/images/prod/QC/20240827/08/3d435d88-5605-3175-a1f9-826e49f91f99/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 73,
        "title": "English Home Fancy Katlanabilir Çamaşır Sepeti Bej",
        "price": "799 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1830/prod/QC_ENRICHMENT/20260225/13/a73ee6c9-9755-3d93-a30a-f4266f6d744d/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 74,
        "title": "Genel Markalar 124x45cm (c) Buhar Kazanı Standlı Tıtan Oval Desenli Ütü Masası - Ssuh",
        "price": "6.680 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1611/prod/QC/20241211/08/9ceebd22-df7e-3f2f-b298-3f6d927a8c23/1_org_zoom.jpg",
        "category": "elektriklievaletleri"
    },
    {
        "id": 75,
        "title": "English Home Wavelet Kaydırmaz Taban Banyo Paspası Seti 60x100 cm + 50x60 cm Açık Bej",
        "price": "499 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/548d56cf-aafd-3ad5-9b77-e845c4fece3b/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 76,
        "title": "Lines Copper Paslanmaz Çelik 2 Litre Termos INOX",
        "price": "685 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1476/product/media/images/prod/QC/20240812/08/4ed90799-fe21-3c6f-85d0-c179fa8cb0a0/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 77,
        "title": "English Home Bellis Porselen 4 Parça 2 Kişilik Kahve Fincan Takımı Lacivert",
        "price": "499 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/099a99c4-9556-3312-8286-06cb3fd4c401/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 78,
        "title": "English Home Oud Touch Çubuklu Oda Kokusu",
        "price": "575 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1439/product/media/images/prod/QC/20240725/05/6258eb77-71bf-30cc-a746-2e85c4f4c9f9/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 79,
        "title": "English Home Bona Stoneware 3'lü Çerezlik 6,5 cm Siyah-Beyaz-Bej",
        "price": "400 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/0d91867d-37fb-3c25-93c6-6b61e54f37ba/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 80,
        "title": "English Home Fancy Katlanabilir Sepet Bej",
        "price": "290 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/aac4afd2-9414-3d9a-bddc-f9bc824affc8/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 81,
        "title": "English Home Flora Drape Çift Kişilik Çok Amaçlı Örtü 200x220 cm Yeşil",
        "price": "1.350 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/627adbaa-244a-3f63-82a7-1d9bdfbf3170/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 82,
        "title": "English Home Hardwood Bambu Saklama Kutusu Kahve",
        "price": "1.020 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/f8a84e66-0577-3b45-b069-b66ff59b795a/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 83,
        "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Krem",
        "price": "799 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1818/prod/QC_ENRICHMENT/20260204/17/b9d9d80d-0f15-3e6f-8d2a-92ca8c1ffa3a/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 84,
        "title": "English Home Urbann Katlanabilir Çamaşır Sepeti Kahve",
        "price": "769 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/63bd4ae5-2b75-3e7d-b547-7929447580af/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 85,
        "title": "English Home romantic memories Akrilik Tv Battaniye 130x170 cm Vişne",
        "price": "999 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1829/prod/QC_ENRICHMENT/20260218/18/304faa25-69d8-3310-b08f-4da780f4b133/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 86,
        "title": "English Home Shine Saklama Kutusu Gri",
        "price": "899 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1838/prod/QC_ENRICHMENT/20260312/10/4cb37337-1f5c-3c90-a14b-bfeba464181e/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 87,
        "title": "English Home Talisman Magic New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 100 ml Pembe",
        "price": "1.030 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/93aa7a9b-903b-3db0-a4fc-9c4d2dc0cd76/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 88,
        "title": "Tantitoni Paslanmaz Çelik Rose Gold Kettle-2l",
        "price": "1.580 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty983/product/media/images/20230810/16/401867872/320323099/1/1_org_zoom.jpg",
        "category": "elektriklievaletleri"
    },
    {
        "id": 89,
        "title": "English Home Elena Seramik Yemek Takımı 16 Parça 4 Kişilik Yeşil-Turuncu",
        "price": "1.799 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1770/prod/QC_ENRICHMENT/20251014/09/c8dd11b7-bcd2-3cd0-8018-355b8bee393f/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 90,
        "title": "Tantitoni Füme Renkli Silikon 3lü Hazırlık Seti Soft Set3f",
        "price": "599 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty678/product/media/images/20230109/17/255067513/504263264/1/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 91,
        "title": "English Home Cozy Oasis Supersoft Tv Battaniye 120x160 cm Yeşil",
        "price": "579 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1850/prod/QC_ENRICHMENT/20260403/22/7e7ae3ab-cc2c-3a3b-9e44-f4f880649482/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 92,
        "title": "Tantitoni Pankek Spatulası",
        "price": "240 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty379/product/media/images/20220402/17/81077851/58892520/1/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 93,
        "title": "Tantitoni 024-01-YEŞİL ÇİFT KATMANLI KAPAKLI TERMOS BARDAK 470ML",
        "price": "909 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1451/product/media/images/prod/QC/20240730/11/8adcc2b4-2a56-36ee-a29e-fc11479fee8c/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 94,
        "title": "English Home Siesta Mikrofiber Çift Kişilik Yorgan 195x215 cm Beyaz",
        "price": "1.350 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/af6554d8-0dfc-3db6-85dd-bdc216332b73/1_org_zoom.jpg",
        "category": "evtekstili"
    },
    {
        "id": 95,
        "title": "Tantitoni Neon Yeşil Paslanmaz Çelik Termos 650 ml",
        "price": "799 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty534/product/media/images/20220916/12/175962428/190665635/1/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 96,
        "title": "Tantitoni Gri Renkli Silikon 3lü Hazırlık Seti",
        "price": "399 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1823/prod/QC_ENRICHMENT/20260206/18/934c7d12-fe8a-3999-8e2f-868543b9d454/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 97,
        "title": "English Home Cloves Seramik Kahvaltı Takımı 32 parça 6 kişilik Pembe",
        "price": "2.318 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1849/prod/QC_ENRICHMENT/20260403/22/3a8f7ad1-6b4d-36bf-869b-eee4cdc0f7a1/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 98,
        "title": "Paşabahçe 530683 Polar Kapaklı 4 Adet Bölmeli Kahvaltılık Saklama Kabı Seti",
        "price": "784 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1412/product/media/images/prod/QC/20240709/20/3c63ee1a-8127-31c9-b514-ca1932dc4df8/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 99,
        "title": "Genel Markalar Led Güzellik Foton Yüz Maskesi Şeffaf 7 Renkli Anti Ageing Kablosuz",
        "price": "1.950 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1520/product/media/images/prod/QC/20240902/18/1f1fdfca-2de3-3197-8d46-1e584d5165e7/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 100,
        "title": "English Home Vanilla New Bone China 4 Parça 2 Kişilik Kahve Fıncan Takımı 90 Ml Açık Sarı",
        "price": "615 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/0a849f36-be95-30ef-bc0d-92d4ca5c9fe5/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 101,
        "title": "Tantitoni TANTİTONİ 3 KATLI METALİK RENK YEMEK TAŞIMA KABI 2.7 LİTRE",
        "price": "1.545 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1520/product/media/images/prod/QC/20240902/14/494623a1-a8d3-3bc9-a3f8-6d20b23f7ab4/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 102,
        "title": "Tantitoni TANTİTONİ SİLİKON MOR 4LÜ BÜYÜK HAZIRLIK SETİ",
        "price": "596 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty84/product/media/images/20210325/2/75085238/14875315/1/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 103,
        "title": "Tantitoni OKADI PRATİK MAVİ PASLANMAZ ÇELİK TERMOS BARDAK 380ML",
        "price": "925 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1609/prod/QC/20241201/23/2924edef-aec6-3261-87b8-cfb29d7e60ab/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 104,
        "title": "English Home Softy Sıcak Su Torbası Gri",
        "price": "620 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1761/prod/QC_ENRICHMENT/20250925/12/67ae5474-0adc-315c-8a1a-f05fc9e5e3d4/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 105,
        "title": "Tantitoni 036-01-TEDEMEI YEŞİL PASLANMAZ ÇELİK YUVARLAK KAŞIKLI YEMEK TAŞIMA KABI 780ML",
        "price": "535 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1325/product/media/images/prod/QC/20240522/19/382d5f85-7144-3b70-8516-060b5c11b893/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 106,
        "title": "English Home SBL 3001 Sürahi Blend,Siyah-Krom,1750 ml (14.01.2026)",
        "price": "2.690 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1766/prod/QC_ENRICHMENT/20251002/12/4ef9d691-b583-3372-9e40-312b44cb0b69/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 107,
        "title": "English Home Comely Seramik Kahvaltı Takımı 32 parça 6 kişilik Renkli",
        "price": "3.725 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1827/prod/QC_ENRICHMENT/20260218/18/24602a90-8418-37e5-883c-0c8778c5b4c7/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 108,
        "title": "English Home Mossy Wood Çubuklu Oda Kokusu",
        "price": "575 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1753/prod/QC_ENRICHMENT/20250916/10/2543e116-51ed-36b3-a30b-2b876e37e255/1_org_zoom.jpg",
        "category": "dekorasyonyasam"
    },
    {
        "id": 109,
        "title": "Tantitoni Paslanmaz Çelik Çift Ağızlı Silindir Cezve 350 ml",
        "price": "480 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty793/product/media/images/20230323/15/310260597/77091009/1/1_org_zoom.jpg",
        "category": "soframutfak"
    },
    {
        "id": 110,
        "title": "English Home Gina Bambu Sepet Açık Kahve",
        "price": "435 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/ab64fa1b-b608-329a-a551-34e736001419/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 111,
        "title": "Paşabahçe 98402 Kapaklı Tereyağlık",
        "price": "340 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1451/product/media/images/prod/QC/20240730/16/8e5fff1e-9dcc-3029-9c3e-0c65c11c8727/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 112,
        "title": "Paşabahçe 530683 Polar 2 Bölmeli Kapaklı Saklama Kabı Yeşil Kapaklı 4'lü 785 Cc",
        "price": "750 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1340/product/media/images/prod/QC/20240530/00/d4589319-02b8-37ee-b610-a6c72963615d/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 113,
        "title": "English Home Angled New Bone China 2 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Turkuaz",
        "price": "375 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1828/prod/QC_ENRICHMENT/20260218/18/a07c7862-921b-3ec2-8525-27a456898eea/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 114,
        "title": "Tantitoni 024-01-LACİVERT ÇİFT KATMANLI TERMOS BARDAK 470ML",
        "price": "1.010 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1450/product/media/images/prod/QC/20240730/11/8830d58d-c6f7-3c07-9c59-0822d3efb76f/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 115,
        "title": "English Home Chloe Organizer Gri",
        "price": "755 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1772/prod/QC_ENRICHMENT/20251014/09/67a39ee2-f83f-3608-8a54-fa764a520ba8/1_org_zoom.jpg",
        "category": "saklamahazirlik"
    },
    {
        "id": 116,
        "title": "Tantitoni 036-01-TEDEMEI PEMBE PASLANMAZ ÇELİK YUVARLAK KAŞIKLI YEMEK TAŞIMA KABI 780ML",
        "price": "497 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1325/product/media/images/prod/QC/20240523/09/adbab7db-fd59-332c-bd04-b5cd1779a8bf/1_org_zoom.jpg",
        "category": "diger"
    },
    {
        "id": 117,
        "title": "English Home Holiday Shine New Bone China 4 Parça 2 Kişilik Kahve Fincan Takımı 90 ml Kırmızı - Yeşil",
        "price": "759 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1790/prod/QC_PREP/20251112/16/62ffc7cf-7993-302b-ab47-6a18bf8a9f64/1_org_zoom.jpg",
        "category": "termosbardak"
    },
    {
        "id": 118,
        "title": "Tantitoni Siyah Türk Kahvesi Makinesi",
        "price": "1.220 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1612/prod/QC/20241215/23/54f894ee-e4c5-37eb-a0f5-7acd012a00ad/1_org_zoom.jpg",
        "category": "elektriklievaletleri"
    },
    {
        "id": 119,
        "title": "English Home Ember Porselen 4 Parça 2 Kişilik Kahve Fincan Takımı 80 ml Turkuaz",
        "price": "499 TL",
        "img": "https://cdn.dsmcdn.com/mnresize/400/-/ty1848/prod/QC_ENRICHMENT/20260403/22/c1dd18d4-444d-3c87-a4d4-fdf716d7c681/1_org_zoom.jpg",
        "category": "termosbardak"
    }
];

// Category Mapping
const categoryMap = {
    'soframutfak': { name: 'Sofra & Mutfak', icon: '🍽️' },
    'evtekstili': { name: 'Ev Tekstili', icon: '🛋️' },
    'elektriklievaletleri': { name: 'Elektrikli Ev Aletleri', icon: '🔌' },
    'termosbardak': { name: 'Termos & Bardaklar', icon: '☕' },
    'saklamahazirlik': { name: 'Saklama & Hazırlık', icon: '📦' },
    'dekorasyonyasam': { name: 'Dekorasyon & Yaşam', icon: '✨' },
    'diger': { name: 'Diğer Ürünler', icon: '📦' }
};

const categorizedItems = {};
const brands = {};

products.forEach((p, idx) => {
    p.id = 'prod_' + idx;
    
    // Brand detection
    let brand = "Diğer";
    const titleLower = p.title.toLowerCase();
    if(titleLower.includes("tantitoni")) brand = "Tantitoni";
    else if(titleLower.includes("paşabahçe")) brand = "Paşabahçe";
    else if(titleLower.includes("english home")) brand = "English Home";
    else if(titleLower.includes("brabantia")) brand = "Brabantia";
    else if(titleLower.includes("lines")) brand = "Lines";
    else if(titleLower.includes("genel markalar")) brand = "Genel Markalar";
    
    p.brand = brand;
    if(!brands[brand]) brands[brand] = 0;
    brands[brand]++;

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
        <li><strong>Marka:</strong> ${brand}</li>
        <li><strong>Materyal:</strong> ${material}</li>
        <li><strong>Parça Sayısı:</strong> ${parca}</li>
        <li><strong>Orijin:</strong> Türkiye</li>
        <li><strong>Durum:</strong> Orijinal, Sıfır Ürün</li>
    `;

    const catId = p.category || 'diger';
    if (!categorizedItems[catId]) {
        categorizedItems[catId] = [];
    }
    categorizedItems[catId].push(p);
});

// Dynamic Dropdown Items
let desktopDropdownHtml = '';
let mobileBottomSheetHtml = '';
let categoryListJs = [];

for (const catId in categorizedItems) {
    const catInfo = categoryMap[catId] || { name: catId, icon: '📦' };
    categoryListJs.push(catId);
    
    desktopDropdownHtml += `<button onclick="filterCategory('${catId}')" class="w-full text-left px-5 py-3 text-sm text-gray-700 font-semibold hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 flex items-center gap-2"><span class="text-lg">${catInfo.icon}</span> ${catInfo.name}</button>\n`;
    mobileBottomSheetHtml += `<button onclick="filterCategory('${catId}')" class="w-full text-left py-4 border-b border-gray-100 font-semibold text-gray-700 hover:text-orange-500 flex items-center gap-3">${catInfo.icon} ${catInfo.name}</button>\n`;
}

// Brand Dropdown Items
let desktopBrandDropdownHtml = '';
let mobileBrandBottomSheetHtml = '';
const brandList = Object.keys(brands).sort();

brandList.forEach(brandName => {
    desktopBrandDropdownHtml += `<button onclick="filterBrand('${brandName}')" class="w-full text-left px-5 py-3 text-sm text-gray-700 font-semibold hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 flex items-center gap-2"><span class="material-symbols-outlined text-orange-500 text-lg">sell</span> ${brandName}</button>\n`;
    mobileBrandBottomSheetHtml += `<button onclick="filterBrand('${brandName}')" class="w-full text-left py-4 border-b border-gray-100 font-semibold text-gray-700 hover:text-orange-500 flex items-center gap-3"><span class="material-symbols-outlined text-orange-500">sell</span> ${brandName}</button>\n`;
});

let categoryHtml = '';
let modalHtml = '';

for (const catId in categorizedItems) {
    const items = categorizedItems[catId];
    const catInfo = categoryMap[catId] || { name: catId, icon: '📦' };
    
    categoryHtml += `
        <div id="${catId}" class="mb-10 pt-8 category-section">
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-200 pb-2 flex items-center gap-2">
                <span class="material-symbols-outlined text-orange-500">category</span>
                ${catInfo.name}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    `;
    
    items.forEach(p => {
        categoryHtml += `
                <div class="product-card bg-white rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] md:shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col group hover:shadow-[0_15px_50px_rgba(242,122,26,0.25)] transition-all duration-300 md:hover:-translate-y-2 relative z-10" data-title="${p.title.replace(/"/g, '&quot;')}" data-brand="${p.brand}">
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
            const categories = ${JSON.stringify(categoryListJs)};
            
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
        
        function filterBrand(brandName) {
            const categories = document.querySelectorAll('.category-section');
            let foundAny = false;
            
            document.getElementById('searchInputMobile').value = '';
            document.getElementById('searchInputDesktop').value = '';
            
            categories.forEach(cat => {
                let hasVisible = false;
                const products = cat.querySelectorAll('.product-card');
                
                products.forEach(card => {
                    const brand = card.getAttribute('data-brand');
                    if (brand === brandName) {
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
            
            // Dropdown'ları kapat
            closeAllDropdowns();
            
            // Sabit menünün altında kalmayacak şekilde akıllı kaydır
            if(foundAny) scrollWithOffset('urunler');
        }

        function toggleDropdown(e, id) {
            if(e) { e.preventDefault(); e.stopPropagation(); }
            const dd = document.getElementById(id);
            const isOpen = !dd.classList.contains('opacity-0');
            
            closeAllDropdowns();
            
            if(!isOpen) {
                dd.classList.remove('opacity-0', 'invisible', 'translate-y-2');
                dd.classList.add('opacity-100', 'visible', 'translate-y-0');
            }
        }

        function closeAllDropdowns() {
            const dropdowns = ['cat-dropdown', 'brand-dropdown'];
            dropdowns.forEach(id => {
                const dd = document.getElementById(id);
                if(dd) {
                    dd.classList.add('opacity-0', 'invisible', 'translate-y-2');
                    dd.classList.remove('opacity-100', 'visible', 'translate-y-0');
                }
            });
            closeMobileCategoryDropdown();
            closeMobileBrandDropdown();
        }

        // Mobil Bottom Sheet Dropdown Açma Kapama
        function toggleMobileCategoryDropdown(e) {
            if(e) { e.preventDefault(); e.stopPropagation(); }
            const sheet = document.getElementById('mobile-bottom-sheet');
            const overlay = document.getElementById('mobile-sheet-overlay');
            
            closeAllDropdowns();
            
            sheet.classList.remove('translate-y-full');
            sheet.classList.add('translate-y-0');
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function toggleMobileBrandDropdown(e) {
            if(e) { e.preventDefault(); e.stopPropagation(); }
            const sheet = document.getElementById('mobile-brand-sheet');
            const overlay = document.getElementById('mobile-sheet-overlay');
            
            closeAllDropdowns();
            
            sheet.classList.remove('translate-y-full');
            sheet.classList.add('translate-y-0');
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
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

        function closeMobileBrandDropdown() {
            const sheet = document.getElementById('mobile-brand-sheet');
            const overlay = document.getElementById('mobile-sheet-overlay');
            if(sheet) {
                sheet.classList.add('translate-y-full');
                sheet.classList.remove('translate-y-0');
                if(overlay) overlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        document.addEventListener('click', function(event) {
            const catDd = document.getElementById('cat-dropdown');
            const brandDd = document.getElementById('brand-dropdown');
            const catBtn = document.getElementById('cat-btn');
            const brandBtn = document.getElementById('brand-btn');
            
            if (catDd && catBtn && !catBtn.contains(event.target) && !catDd.contains(event.target) &&
                brandDd && brandBtn && !brandBtn.contains(event.target) && !brandDd.contains(event.target)) {
                closeAllDropdowns();
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
                <!-- Notifications and Cart removed as requested -->
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
            <button onclick="toggleMobileBrandDropdown(event)" class="whitespace-nowrap px-4 py-1.5 bg-gray-100 text-gray-800 hover:bg-orange-100 hover:text-orange-600 text-xs font-bold rounded-full flex items-center gap-1 shadow-sm border border-gray-200">Markalar <span class="material-symbols-outlined text-[14px]">expand_more</span></button>
            
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
                    <!-- Giriş Yap, Favorilerim, Sepetim removed as requested -->
                </div>
            </div>
        </div>
        
        <nav class="bg-white relative z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul class="flex text-sm font-semibold text-gray-600 h-14 items-center gap-8">
                    <li><button onclick="filterCategory('all')" class="hover:text-orange-500 transition-colors text-orange-500 py-4 block font-bold">Tüm Ürünler</button></li>
                    
                    <li class="relative py-4">
                        <button id="cat-btn" onclick="toggleDropdown(event, 'cat-dropdown')" class="hover:text-orange-500 transition-colors flex items-center gap-1 font-bold">
                            Kategoriler <span class="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                        <div id="cat-dropdown" class="absolute top-[56px] left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl py-3 opacity-0 invisible transition-all duration-200 transform origin-top-left translate-y-2 z-50">
                            ${desktopDropdownHtml}
                        </div>
                    </li>

                    <li class="relative py-4">
                        <button id="brand-btn" onclick="toggleDropdown(event, 'brand-dropdown')" class="hover:text-orange-500 transition-colors flex items-center gap-1 font-bold">
                            Markalar <span class="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                        <div id="brand-dropdown" class="absolute top-[56px] left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl py-3 opacity-0 invisible transition-all duration-200 transform origin-top-left translate-y-2 z-50">
                            ${desktopBrandDropdownHtml}
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
            ${mobileBottomSheetHtml}
        </div>
    </div>

    <!-- Mobile Brand Dropdown Menu (Bottom Sheet) -->
    <div id="mobile-brand-sheet" class="md:hidden fixed bottom-[55px] left-0 w-full bg-white rounded-t-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.2)] z-50 transform translate-y-full transition-transform duration-300 flex flex-col">
        <div class="w-full flex justify-center pt-3 pb-1" onclick="closeMobileBrandDropdown()">
            <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>
        <div class="px-6 pb-6 pt-2">
            <h3 class="text-lg font-bold mb-3 text-gray-800 flex justify-between items-center">Markalar <span class="material-symbols-outlined text-gray-400" onclick="closeMobileBrandDropdown()">close</span></h3>
            <button onclick="filterCategory('all')" class="w-full text-left py-4 border-b border-gray-100 font-bold text-orange-500 flex items-center justify-between">Tüm Markalar <span class="material-symbols-outlined text-sm">chevron_right</span></button>
            ${mobileBrandBottomSheetHtml}
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
        <!-- Sepetim and Hesabım removed as requested -->
    </nav>
</body>
</html>`;

fs.writeFileSync('C:\\Users\\Mustafa\\.gemini\\antigravity\\scratch\\edis\\index.html', fullHtml, 'utf-8');
console.log('Successfully updated index.html with new dynamic categories and dropdowns.');
