import { render } from 'preact'
import { useState } from 'preact/hooks'
import renderStatic from 'preact-render-to-string'

const components = {
    button: ({ text }) => <button>{text}</button>,
    paragraph: ({ content }) => <p>{content}</p>
}

function AddButton({ ...rest }) {
    return (
        <button
            class="w-full p-1 grid grid-cols-[auto,min-content,auto] opacity-0 hover:opacity-100 transition-opacity"
            {...rest}
        >
            <hr />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <hr />
        </button>
    )
}

function PageBuilder() {
    const [blocks, setBlocks] = useState([
        { type: 'paragraph', properties: { content: 'Hello world.' } },
        { type: 'button', properties: { text: 'Hello world.' } },
        { type: 'paragraph', properties: { content: 'Hello world.' } }
    ])
    const [selectedBlock, setSelectedBlock] = useState(blocks[0])

    return (
        <div>
            <header class="bg-gray-850 text-white h-12"></header>
            <div class="grid cols-r h-[calc(100%-3rem)]">
                <div class="">
                    {blocks.map(block => {
                        const Component = components[block.type]
                        return (
                            <div
                                onClick={() => setSelectedBlock(block)}
                                dangerouslySetInnerHTML={{
                                    __html: renderStatic(
                                        <Component {...block.properties} />
                                    )
                                }}
                            ></div>
                        )
                    })}
                </div>
                <div class="grid grid-rows-2 min-w-[20vw] border-l border-solid border-gray-200">
                    <div>
                        <h1 class="bg-gray-850 text-white px-4 py-2 font-bold text-xl ">
                            Blocks
                        </h1>
                        <div class="p-4 grid">
                            {blocks.map(block => (
                                <>
                                    <AddButton />
                                    <select value={block.type}>
                                        {Object.keys(components).map(type => (
                                            <option>{type}</option>
                                        ))}
                                    </select>
                                </>
                            ))}
                            <AddButton />
                        </div>
                    </div>
                    <div>
                        <h1 class="bg-gray-850 text-white px-4 py-2 font-bold text-xl ">
                            Properties
                        </h1>
                        {selectedBlock &&
                            Object.entries(selectedBlock.properties).map(
                                ([name, value]) => (
                                    <div class="grid p-4 gap-2">
                                        <label class="font-medium" for={name}>
                                            {name}
                                        </label>
                                        <textarea
                                            name={name}
                                            onChange={e =>
                                                (selectedBlock[name] =
                                                    e.target.value)
                                            }
                                        >
                                            {value}
                                        </textarea>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    render(<PageBuilder />, document.getElementById('page-builder'))
})
