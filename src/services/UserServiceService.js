const userServiceService = {
    menu() {
        const srcs = ["https://skdesu.com/wp-content/uploads/2017/10/shokugeki.jpg",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/974c191f7974357d204fc1cd38157e744f17c169_hq.gif?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/transforming_furikake_shining.gif?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/rainbow_terrine_anime.png?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/chou_farci_anime.png?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/eggs_benedict_anime.png?w=778",
        "https://shokugekinosoumafoodwars.files.wordpress.com/2018/09/oja-style_pacific_saury_takikomi_gohan_anime.png?w=778"];
        const names = ["Bacon assado", "Sumire Karaage Roll", "Furikake Gohan", "Terrine Arco-íris", "Chou Farci",
        "Ovos Benedict", "Sahi Pacífico"];
        const amounts = [20.00, 30.00, 40.00, 50.00, 100.00, 150.00, 80.00, 75.00];

        let list = [
            {
                src: srcs,
                name: names,
                amont: amounts, 
            }
        ]
        return list;
    },

    table() {
        const types = ["N", "S", "N", "N", "N", "S", "N", "N", "S", "S"];
        const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let tables = [
            {
                busy: types,
                board: table,
            }
        ]
        return tables;
    },
}

export default userServiceService;