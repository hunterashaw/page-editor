import clsx from 'clsx'
import renderStatic from 'preact-render-to-string'
import components from './components'

export default function Preview({ blocks, selectedBlock, setSelectedBlock }) {
    return (
        <div
            class="bg-gray-100 p-16 pl-20"
            onClick={() => {
                setSelectedBlock(null)
            }}
        >
            <div class="bg-white h-max">
                {blocks.map(block => {
                    const { type, properties } = block
                    const Component = components[type].component
                    const isSelected = block === selectedBlock
                    return (
                        <div
                            class={clsx(
                                isSelected && 'outline outline-blue-300'
                            )}
                            onClick={e => {
                                setSelectedBlock(block)
                                e.stopPropagation()
                            }}
                            dangerouslySetInnerHTML={{
                                __html: renderStatic(
                                    <Component {...properties} />
                                )
                            }}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}
