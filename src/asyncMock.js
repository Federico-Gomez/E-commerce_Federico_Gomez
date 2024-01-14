const products = [
    {
        id: "1",
        name: "PS5",
        price: 500,
        category: "Consoles",
        img: "https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart",
        stock: 20,
        description: "Descripción de PS5"
    },
    {
        id: "2",
        name: "XBox",
        price: 400,
        category: "Consoles",
        img: "https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart",
        stock: 10,
        description: "Descripción de XBox"
    },
    {
        id: "3",
        name: "Nintendo Switch",
        price: 300,
        category: "Games",
        img: "https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart",
        stock: 25,
        description: "Descripción de Nintendo Switch"
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