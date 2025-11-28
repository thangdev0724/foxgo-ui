export interface FInputProps {
    modelValue?: string | number;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    readonly?: boolean;
    error?: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const _default: import('vue').DefineComponent<FInputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import('vue').PublicProps, Readonly<FInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    label: string;
    size: "sm" | "md" | "lg";
    disabled: boolean;
    type: "text" | "password" | "email" | "number" | "tel" | "url";
    modelValue: string | number;
    placeholder: string;
    readonly: boolean;
    error: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
