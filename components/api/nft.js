const nft = (_, res) => {
    res.statusCode = 200
    res.json({
        id: 1,
        lastprice: '0.9 weth',
        nftname: 'theCat',
        image_url: 'http://placekitten.com/200/200',
        description: 'The cat is a domestic species of small carnivorous mammal.'
    })
}

export default nft
