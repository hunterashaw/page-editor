import { render } from 'preact'
import { useState } from 'preact/hooks'
import renderStatic from 'preact-render-to-string'

const components = {
    button: ({ text }) => <button>{text}</button>,
    paragraph: ({ content }) => <p>{content}</p>
}

function PageBuilder() {
    const [blocks, setBlocks] = useState([
        { type: 'button', properties: { text: 'hi' } }
    ])

    return (
        <div class="grid cols-r gap-4">
            <div
                dangerouslySetInnerHTML={{
                    __html: blocks
                        .map(block => {
                            const Component = components[block.type]
                            return renderStatic(
                                <Component {...block.properties} />
                            )
                        })
                        .join('')
                }}
            ></div>
            <div class="p-4">sidebar</div>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    render(<PageBuilder />, document.getElementById('page-builder'))
})
