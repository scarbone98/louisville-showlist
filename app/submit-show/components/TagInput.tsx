import { useState, useRef } from 'react';

type Props = {
    onEnter?: (tag: string[]) => void;
};

function TagInput({ onEnter }: Props) {
    const [currentTags, setCurrentTags] = useState<string[]>([]);
    const [currentInputValue, setCurrentInputValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            const newTags = [...currentTags, (e.target as HTMLInputElement).value];
            setCurrentTags(newTags);
            setCurrentInputValue('');
            onEnter && onEnter(newTags);
            // Scroll to the bottom
            setTimeout(() => {
                containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
            }, 0);
        }
    }

    return (
        <div onClick={() => inputRef.current?.focus()}>
            <div ref={containerRef} className='flex flex-wrap border-black border-2 rounded h-[15vh] items-start overflow-scroll'>
                <span className='flex flex-wrap'>
                    {currentTags.map((tag, index) => (
                        <span key={index} className='m-1 bg-slate-400 p-1 rounded-md'>{tag} <span className='text-sm' onClick={() => setCurrentTags([...(currentTags.filter((_, filterIndex) => index !== filterIndex))])}>X</span></span>
                    ))}
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentInputValue}
                        className='appearance-none outline-none ml-1'
                        onChange={(e: any) => setCurrentInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </span>
            </div>
            <div className='flex justify-end p-1'><button type="button" onClick={() => setCurrentTags([])}>Clear all</button></div>
        </div>
    )
}

export { TagInput };