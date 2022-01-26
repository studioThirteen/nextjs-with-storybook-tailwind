import Article from '../pages/index';

const articleMock = {
    id: 3,
    author: 'ei9h7',
    company: 'studioThirteen',
    image_url: 'https://placekitten.com/200/200',
    content: 'ei9h7, born Jan 32, 2022 is an enigma'
}

const Story = (props) => <Article {...props} />

// Here we export a variant of the default template passing props
export const ArticleStory = Story.bind({})
ArticleStory.args = {
    article: articleMock,
};

// Here we export a variant of the default template passing props
export const EmptyArticleStory = Story.bind({})
EmptyArticleStory.args = {
    article: null,
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
    title: 'Article',
    component: Article,
    argTypes: {
        showImage: { control: 'boolean' },
    },
};