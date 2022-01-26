const Article = (_, res) => {
    res.statusCode = 200
    res.json({
        id: 1,
        author: 'ei9h7',
        company: 'studioThirteen',
        image_url: 'http://placekitten.com/200/200',
        content: 'The cat is a domestic species of small carnivorous mammal.'
    })
}

export default Article
