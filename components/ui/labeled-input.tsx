'use client';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    id?: string;
    value?: string;
    label?: string;
};

function LabeledInput({ onChange, placeholder, id, type, value, label }: Props) {
    return (
        <div className="w-full">
            {label && <Label htmlFor={id}>{label}</Label>}
            <Input value={value} type={type} id={id} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}


export { LabeledInput };