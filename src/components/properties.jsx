import components from './components'

export default function Properties({ selectedBlock, updateSelectedBlock }) {
    if (!selectedBlock) return <div></div>
    const { name, icon } = components[selectedBlock.type]

    return (
        <div>
            <h1 class="bg-gray-750 text-white px-4 py-2 font-bold text-xl ">
                Properties
            </h1>
            <div class="p-4">
                <div class="bg-blue-100 rounded-md px-4 py-2 flex gap-2 mb-4">
                    {icon}
                    <span>{name}</span>
                </div>
                {Object.entries(selectedBlock.properties).map(
                    ([name, value]) => (
                        <div class="grid gap-2">
                            <label class="font-medium" for={name}>
                                {name}
                            </label>
                            <textarea
                                name={name}
                                onChange={e => {
                                    updateSelectedBlock(name, e.target.value)
                                }}
                            >
                                {value}
                            </textarea>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
