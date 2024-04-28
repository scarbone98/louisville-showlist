'use client';
import { LabeledInput } from "../../components/ui/labeled-input";

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
};

function SearchBar({ className, onChange, value }: Props) {
    return (
        <div className={`w-full ${className ? className : ''}`}>
            <LabeledInput value={value} id="search" placeholder="Search" onChange={onChange} />
        </div>
    )
}

export { SearchBar };