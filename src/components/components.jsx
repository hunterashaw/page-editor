import { ButtonIcon, ParagraphIcon } from '../common/icon'

const components = {
    button: {
        name: 'Button Section',
        component: ({ text }) => (
            <section class="bg-red-200">
                <button>{text}</button>
            </section>
        ),
        properties: {
            text: 'Button Text'
        },
        icon: <ButtonIcon />
    },
    paragraph: {
        name: 'Paragraph Section',
        component: ({ content }) => (
            <section class="bg-orange-200">
                <p>{content}</p>
            </section>
        ),
        properties: {
            content: 'Hello world paragraph text'
        },
        icon: <ParagraphIcon />
    }
}

export default components
