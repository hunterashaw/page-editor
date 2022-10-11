import { RedoIcon, UndoIcon } from '../common/icon'

export default function Header() {
    return (
        <header class="bg-gray-850 text-white h-12 px-4 grid cols-r items-center">
            <div class="flex gap-2">
                <button class="mr-8">Pages</button>
                <button>
                    <UndoIcon />
                </button>
                <button>
                    <RedoIcon />
                </button>
            </div>
            <div>
                <button>Save Changes</button>
            </div>
        </header>
    )
}
