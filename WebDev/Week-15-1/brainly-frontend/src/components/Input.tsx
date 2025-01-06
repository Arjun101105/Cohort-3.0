interface InputProps{
    placeholder: string;
    reference?: any
}


export function Input({placeholder, reference}: InputProps) {
    return <div>
        <input ref={reference} type="text" placeholder={placeholder} className="w-full p-2 border-2 border-slate-100 rounded-md"/>
    </div>
}