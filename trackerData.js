function trackerData() {
    //latest index 30

    const amazonList = [
        {
            id: 1,
            name: "Guards Guards!",
            productPage: "https://www.amazon.co.uk/Guards-Discworld-City-Watch-Collection/dp/1473200180/",
            identifier: ".a-color-price",
            tags: ["Book", "Gifts"],
            imageUrl: "https://m.media-amazon.com/images/I/81-rwvAqVtL._SL1500_.jpg"
        },
        {
            id: 11,
            name: "Feet of Clay",
            productPage: "https://www.amazon.co.uk/Feet-Clay-Discworld-Collection-Hardback/dp/1473200245/",
            identifier: ".a-color-price",
            tags: ["Book", "Gifts"],
            imageUrl: "https://m.media-amazon.com/images/I/81PGKbXhwBL._SL1500_.jpg"
        },
        {
            id: 18,
            name: "Regency Cthulhu",
            productPage: "https://www.amazon.co.uk/Regency-Cthulhu-Designs-Austens-England/dp/1568824416/",
            identifier: '.a-color-price',
            tags: ["RPG", "Gifts"],
            imageUrl: 'https://m.media-amazon.com/images/I/815l2UHfJjL._SL1500_.jpg'
        },
        {
            id: 19,
            name: "The Last Wish",
            productPage: "https://www.amazon.co.uk/Last-Wish-bestselling-inspired-Netflixs/dp/1399611399/",
            identifier: '.a-color-price',
            tags: ["Book", "Gifts"],
            imageUrl: 'https://m.media-amazon.com/images/I/71wWCxSYxAL._SL1500_.jpg'
        },
        {
            id: 22,
            name: "Ghost of Tsushima",
            productPage: "https://www.amazon.co.uk/Ghost-Tsushima-Directors-Cut-PS4/dp/B099B7JN4V/",
            identifier: '.a-color-price',
            tags: ["Physical Game", "Gifts"],
            imageUrl: 'https://m.media-amazon.com/images/I/81IK2zIo0AS._AC_SX679_.jpg'
        },
        {
            id: 23,
            name: "The Narrow Road Between Desires",
            productPage: "https://www.amazon.co.uk/Narrow-Road-Between-Desires-Kingkiller/dp/1399616226/",
            identifier: '.a-color-price',
            tags: ["Book", "Gifts"],
            imageUrl: 'https://m.media-amazon.com/images/I/81Unhu8FMXL._SL1500_.jpg'
        },
        {
            id: 24,
            name: "Metroid Dread",
            productPage: "https://www.amazon.co.uk/Nintendo-10007300-Metroid-Dread-Switch/dp/B097BP5DLQ/",
            identifier: '.a-color-price',
            tags: ["Physical Game", "Gifts"],
            imageUrl: 'https://m.media-amazon.com/images/I/8176HX52haL._AC_SY879_.jpg'
        },
        {
            id: 25,
            name: "The Call of Cthulhu",
            productPage: "https://www.amazon.co.uk/dp/1624650449/",
            identifier: '.a-color-price',
            tags: ["Book", "Gifts"],
            imageUrl: 'https://m.media-amazon.com/images/I/81rHR4HYYSL._SL1500_.jpg'
        },
        {
            id: 26,
            name: "The Bone Key",
            productPage: "https://www.amazon.co.uk/dp/1607012901/",
            identifier: '.a-color-price',
            tags: ["Book", "Gifts"],
            imageUrl: 'https://m.media-amazon.com/images/I/71rN5AKwRnL._SY522_.jpg'
        }
    ]

    const freeLeagueList = [
        {
            id: 15,
            name: "Building Better Worlds",
            productPage: "https://freeleaguepublishing.com/shop/alien-rpg-2/building-better-worlds/",
            identifier: '"variant-price gbp hidden">£ ',
            tags: ["RPG", "Gifts"],
            imageUrl: 'https://freeleaguepublishing.com/wp-content/uploads/2023/08/AL_Building-better-Worlds_cover-800x800.jpg'
        },
        {
            id: 17,
            name: "The Dunwich Horror",
            productPage: "https://freeleaguepublishing.com/shop/the-call-of-cthulhu/the-dunwich-horror-illustrated-by-baranger/",
            identifier: 'variant-price gbp hidden">£ ',
            tags: ["Book", "Gifts"],
            imageUrl: 'https://freeleaguepublishing.com/wp-content/uploads/2023/09/The-Dunwich-Horror-Packshot.jpg'
        },
        {
            id: 20,
            name: "The Lost Mountain Saga",
            productPage: "https://freeleaguepublishing.com/shop/vaesen-2/the-lost-mountain-saga/",
            identifier: 'variant-price gbp hidden">£ ',
            tags: ["RPG", "Gifts"],
            imageUrl: 'https://freeleaguepublishing.com/wp-content/uploads/2023/08/Vaesen-The-Lost-Mountain-Saga-Packshot-3D-800x800.jpg'
        }
    ]

    const dtrpgList = [
        {
            id: 4,
            name: "Tales of Aquatic Terror",
            productPage: "https://www.drivethrurpg.com/product/338827/Tales-of-Aquatic-Terror",
            identifier: "Softcover, Premium Color Book",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/4261/338827.jpg"
        },
        {
            id: 5,
            name: "In Strange Seas",
            productPage: "https://preview.drivethrurpg.com/en/product/455060/in-strange-seas-the-regency-cthulhu-naval-compendium",
            identifier: "Hardcover, Standard Color Book",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/2/455060.png"
        },
        {
            id: 6,
            name: "No Security: Horror Scenarios in the Great Depression",
            productPage: "https://www.drivethrurpg.com/product/122756/No-Security-Horror-Scenarios-in-the-Great-Depression",
            identifier: "Softcover, Standard Color Book",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/5698/122756.jpg"
        },
        {
            id: 7,
            name: "Subversive Sci-Fi",
            productPage: "https://www.drivethrurpg.com/product/428384/Subversive-SciFi",
            identifier: "Hardcover, B&amp;W Book",
            tags: ["Book", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/3915/428384.png"
        },
        {
            id: 8,
            name: "The Haunting of Abbeyham Priory!",
            productPage: "https://www.drivethrurpg.com/product/374132/The-Haunting-of-Abbeyham-Priory-A-Jumpstart-for-They-Came-From-Beyond-the-Grave",
            identifier: "Softcover, Premium Color Book",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/4261/374132.jpg"
        },
        {
            id: 9,
            name: "Transgressive Horror: Reflections on Scare Films that Broke the Rules",
            productPage: "https://www.drivethrurpg.com/product/378202/Transgressive-Horror-Reflections-on-Scare-Films-that-Broke-the-Rules",
            identifier: "Hardcover, B&amp;W Book",
            tags: ["Book", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/3915/378202.jpg"
        },
        {
            id: 10,
            name: "Zgrozy: From Beyond scenario anthology",
            productPage: "https://www.drivethrurpg.com/product/451445/Zgrozy-From-Beyond--scenario-anthology-for-Call-of-Cthulhu",
            identifier: "Hardcover, Standard Color Book",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/2/451445.jpg"
        },
        {
            id: 27,
            name: "Bayt al Azif #2",
            productPage: "https://www.drivethrurpg.com/product/246849/Bayt-al-Azif-2-A-magazine-for-Cthulhu-Mythos-roleplaying-games",
            identifier: "Softcover, Standard Color Book",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/12365/246849.jpg"
        }
    ]

    const nintendoList = [
        {
            id: 12,
            name: "Mask of the Rose",
            productPage: "https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Mask-of-the-Rose-2381473.html?",
            identifier: 'currency: "GBP"',
            tags: ["Digital Game", "Tracking"],
            imageUrl: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_MaskOfTheRose_image1600w.jpg'
        }
    ]


    const otherList = [
        {
            id: 2,
            name: "Cyberpunk Red RPG Jumpstart Kit",
            productPage: "https://magicmadhouse.co.uk/r-talsorian-games-cyberpunk-red-jumpstart-kit",
            identifier: ".price--withTax",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://cdn11.bigcommerce.com/s-b4ioc4fed9/images/stencil/1280x1280/products/158568/1494168/1565193955-94251600__69059.1693318580.jpg?c=1"
        },
        {
            id: 3,
            name: "KULT: The Forbidden",
            productPage: "https://webshop.helmgast.se/kult/the-forbidden-scenario-collection.html",
            identifier: ".tws-api--price-current",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://cdn.abicart.com/shop/ws51/49251/art51/h1451/195731451-origpic-3c1f06.png"
        },
        {
            id: 13,
            name: "Anchorhead",
            productPage: "https://store.steampowered.com/app/726870/Anchorhead/",
            identifier: ".game_purchase_price",
            tags: ["Digital Game", "Tracking"],
            imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/726870/header.jpg"
        },
        {
            id: 14,
            name: "Orbital Blues GM Screen",
            productPage: "https://soulmuppet-store.co.uk/products/orbital-blues-gm-screen",
            identifier: ".price-item",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://soulmuppet-store.co.uk/cdn/shop/products/StoreImage_631a5040-0fbd-4942-8c91-c31813eaf6fd.png?v=1669389856"
        },
        {
            id: 16,
            name: "The Alienist",
            productPage: "https://www.wob.com/en-gb/books/caleb-carr/alienist/9780679417798",
            identifier: ".price",
            tags: ["Book", "Gifts"],
            imageUrl: "https://productimages.worldofbooks.com/0679417796.jpge"
        },
        {
            id: 28,
            name: "Thousand Year Old Vampire",
            productPage: "https://thousandyearoldvampire.com/collections/basic-book-selection/products/thousand-year-old-vampire",
            identifier: ".price-item",
            tags: ["RPG", "Gifts"],
            imageUrl: "https://thousandyearoldvampire.com/cdn/shop/products/TYOVCover_1024x1024@2x.jpg?v=1609637742"
        },
        // {
        //     id: 29,
        //     name: "Communist Cats - Revolution Expansion",
        //     productPage: "https://www.etsy.com/listing/895071892/communist-cats-revolution-expansion",
        //     identifier: ".price-only",
        //     tags: ["Board Game", "Gifts"],
        //     imageUrl: "https://i.etsystatic.com/19513687/r/il/5c86cb/2678233892/il_1588xN.2678233892_fakb.jpg"
        // },
        // {
        //     id: 30,
        //     name: "Kvothe and the Cthaeh Travel Poster",
        //     productPage: "https://www.etsy.com/uk/listing/1237324543/kvothe-and-the-cthaeh-travel-poster?variation0=3501669972&variation1=3516774119",
        //     identifier: ".price-only",
        //     tags: ["Decoration", "Gifts"],
        //     imageUrl: "https://i.etsystatic.com/35823251/r/il/616ca8/4048716637/il_1588xN.4048716637_q12l.jpg"
        // }
    ]

    const certificateList = [
        {
            id: 21,
            name: "DriveThruRPG Gift Certificate",
            productPage: "https://www.drivethrurpg.com/browse.php?filters=0_2810_0_0_0",
            identifier: "CERTIFICATE",
            tags: ["Gift Certificate", "Gifts"],
            imageUrl: "https://d1vzi28wh99zvq.cloudfront.net/images/432/1631.png"
        }
    ]

    const emptyList = []

    return emptyList.concat(
        amazonList,
        freeLeagueList,
        dtrpgList,
        nintendoList,
        otherList,
        certificateList
    );
}

module.exports = trackerData();