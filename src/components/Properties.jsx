import clsx from 'clsx'

export default function Properties({
    components,
    selectedBlock,
    updateSelectedBlock
}) {
    const { name, description, icon, properties } = selectedBlock
        ? components[selectedBlock.type]
        : { name: '', description: '', icon: '' }

    const getInput = (name, model, value) => {
        const inputProps = {
            name,
            id: name,
            value: value,
            onChange: e => updateSelectedBlock(name, e.target.value)
        }

        const input = (() => {
            if (typeof model === 'string') {
                if (model.length > 30)
                    return (
                        <textarea {...inputProps} rows="4">
                            {value}
                        </textarea>
                    )
                return <input {...inputProps} />
            }
            if (typeof model === 'number') {
                return (
                    <input
                        {...inputProps}
                        onChange={e =>
                            updateSelectedBlock(name, parseInt(e.target.value))
                        }
                        type="number"
                    />
                )
            }
            if (typeof model === 'boolean') {
                return (
                    <>
                        <label
                            class={clsx(
                                'h-8 w-max p-1 rounded-full cursor-pointer select-none',
                                value ? 'bg-blue-200' : 'bg-gray-50'
                            )}
                            for={name}
                        >
                            <span
                                class={clsx(
                                    'block bg-white rounded-full transition-all w-6 h-6',
                                    value ? 'ml-6' : 'mr-6'
                                )}
                            />
                        </label>
                        <input
                            {...inputProps}
                            onChange={e =>
                                updateSelectedBlock(
                                    name,
                                    Boolean(e.target.checked)
                                )
                            }
                            checked={value}
                            class="hidden"
                            type="checkbox"
                        />
                    </>
                )
            }
            if (Array.isArray(model)) {
                if (typeof model[0] === 'string') {
                    return (
                        <div class="bg-gray-50 p-2 h-10 flex gap-2">
                            {model.map(option => (
                                <button
                                    class={clsx(
                                        'font-medium text-xs',
                                        value === option
                                            ? 'bg-blue-200'
                                            : 'bg-white'
                                    )}
                                    onClick={e => {
                                        e.preventDefault()
                                        updateSelectedBlock(name, option)
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )
                }
            }
        })()

        const splitName = name.split('.')

        return (
            <div class="pt-4 px-4 grid gap-2">
                <label class="text-xs capitalize select-none" for={name}>
                    {splitName.pop().split('_').join(' ')}
                </label>
                {input}
            </div>
        )
    }

    return (
        <div class="h-full overflow-y-auto">
            <h1 class="p-4 pb-0 font-medium text-gray-700 text-xs  border-solid border-gray-200">
                Section
            </h1>
            {selectedBlock && (
                <>
                    <div class="p-4 text-xs border-b border-solid border-gray-200 grid gap-2 cols-l">
                        <div>{icon}</div>
                        <div class="grid gap-2">
                            <span class="font-medium ">{name}</span>
                            <span class="text-gray-700">{description}</span>
                        </div>
                    </div>

                    <h2 class="p-4 pb-0 text-xs font-medium text-gray-800">
                        Properties
                    </h2>
                    {Object.entries(selectedBlock.properties).map(
                        ([name, value]) =>
                            getInput(name, properties[name], value)
                    )}
                </>
            )}
        </div>
    )
}
