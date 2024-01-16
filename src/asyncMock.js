const products = [
    {
        id: "1",
        name: "PS5",
        price: 500,
        category: "Consoles",
        img: "https://www.ventasrosario.com.ar/wp-content/uploads/2023/12/17012498369036.jpg",
        stock: 20,
        description: "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games."
    },
    {
        id: "2",
        name: "XBox",
        price: 400,
        category: "Consoles",
        img: "https://img.redbull.com/images/c_fill,w_1200,h_600,g_auto,f_auto,q_auto/redbullcom/2016/08/09/1331811126453_2/la-nueva-xbox-one-s-consola-de-videojuegos",
        stock: 10,
        description: "In dreams, all bets are on. Unlock new worlds. Leap, Transform. Explore. Conquer. In dreams you can become the possibilities. Power your dreams with Xbox."
    },
    {
        id: "3",
        name: "Nintendo Switch",
        price: 300,
        category: "Consoles",
        img: "https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp",
        stock: 15,
        description: "Play at home or on the go with a vibrant OLED screen Play on your TV at home or pick up and play in handheld mode on a vivid 7-inch OLED screen with the Nintendo Switch™ – OLED Model system. The system also features 64 GB of internal storage, enhanced audio, a wide adjustable stand, and a dock with a wired LAN port."
    },
    {
        id: "4",
        name: "PS5 DualSense Controller",
        price: 60,
        category: "Accessories",
        img: "https://media.direct.playstation.com/is/image/sierialto/dualsense-edge-ps5-controller-front",
        stock: 30,
        description: "Bring gaming worlds to life - Feel your in-game actions and environment simulated through haptic feedback*. Experience varying force and tension at your fingertips with adaptive triggers. Find your voice, share your passion - Chat online with the built-in microphone. Connect a headset directly via the 3.5mm jack. Record and broadcast your epic gaming moments with the create button. A gaming icon in your hands - Enjoy a comfortable, evolved design with an iconic layout and enhanced sticks. Hear higher-fidelity** sound effects through the built-in speaker in supported games."
    },
    {
        id: "5",
        name: "Xbox Series X/S Controller",
        price: 60,
        category: "Accessories",
        img: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/164/16433/16433594.jpg",
        stock: 30,
        description: "Experience the Xbox Elite Wireless Controller Series 2 featuring adjustable-tension thumbsticks, wrap-around rubberized grip, and shorter hair trigger locks. Enjoy limitless customization with interchangeable components and exclusive button mapping options in the Xbox Accessories app. Save up to 3 custom profiles on the controller and switch between them on the fly. Swap thumbstick toppers, D-pads, and paddles to tailor your controller to your preferred gaming style. Stay in the game with up to 40 hours of rechargeable battery life and refined components that are built to last. "
    },
    {
        id: "6",
        name: "Nintendo Switch JoyCon Controller",
        price: 50,
        category: "Accessories",
        img: "https://webobjects2.cdw.com/is/image/CDW/6522046?$product-main$",
        stock: 20,
        description: "Two JoyCon can be used independently in each hand, or together as 1 game controller when attached to the JoyCon grip. They can also attach to the main console for use in handheld mode, or be shared with friends to enjoy 2-player action in supported games. Each JoyCon has a full set of buttons and can act as a standalone controller, and each includes an accelerometer and gyro sensor, making independent left and right motion control possible."
    },
    {
        id: "7",
        name: "Playstation VR2 Core Headset",
        price: 550,
        category: "Accessories",
        img: "https://images.start.com.ar/1000032460.jpg",
        stock: 10,
        description: "Discover a new world of unexpected gaming experiences with PlayStation VR. Redefine your expectations of immersion in gaming with moments so intense your intuition takes over. Step into incredible virtual worlds and overcome new challenges in extraordinary ways. Greatness Awaits with PlayStation VR."
    },
    {
        id: "8",
        name: "Death Stranding Director's Cut",
        price: 40,
        category: "Games",
        img: "https://m.media-amazon.com/images/I/715LxSVhSiS.jpg",
        stock: 30,
        description: "From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT. In the future, a mysterious event known as the Death Stranding has opened a doorway between the living and the dead, leading to grotesque creatures from the afterlife roaming the fallen world marred by a desolate society. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?"
    },
    {
        id: "9",
        name: "The Witcher 3 Game of the Year Edition",
        price: 40,
        category: "Games",
        img: "https://cdn11.bigcommerce.com/s-8hb8kp5lsx/images/stencil/1280x1280/products/34853/36520/5eaaccf1-d12d-4df0-acbe-cf98b56a3688__81428.1676583029.jpg?c=1",
        stock: 30,
        description: "Built for endless adventure, the massive open world of The Witcher sets new standards in terms of size, depth, and complexity. The Complete Edition contains the base game, offering a huge, over 100-hour long, open-world adventure, as well as both of its massive story expansions: Hearts of Stone & Blood and Wine worth an extra 50 hours of gameplay!"
    },
    {
        id: "10",
        name: "Final Fantasy VII Remake Intergrade",
        price: 70,
        category: "Games",
        img: "https://m.media-amazon.com/images/I/71NSAlfWDwL.jpg",
        stock: 20,
        description: "Final Fantasy VII Remake is the first in a planned trilogy of games remaking the 1997 PlayStation game Final Fantasy VII. Set in the dystopian cyberpunk metropolis of Midgar, players control the mercenary Cloud Strife. He joins AVALANCHE, an eco-terrorist group trying to stop the powerful megacorporation Shinra from using the planet's life essence as an energy source. The gameplay combines real-time action with role-playing elements."
    },
    {
        id: "11",
        name: "The Elder Scrolls V Skyrim",
        price: 30,
        category: "Games",
        img: "https://dixgamer.com/wp-content/uploads/2021/10/the-elder-scrolls-v-skyrim-special-edition-ps5-retro.jpg",
        stock: 20,
        description: "The Empire of Tamriel is on the edge. The High King of Skyrim has been murdered. Alliances form as claims to the throne are made. In the midst of this conflict, a far more dangerous, ancient evil is awakened. Dragons, long lost to the passages of the Elder Scrolls, have returned to Tamriel"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}