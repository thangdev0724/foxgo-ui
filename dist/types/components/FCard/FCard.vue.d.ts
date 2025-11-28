export interface FCardProps {
    title?: string;
    subtitle?: string;
    elevated?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<FCardProps> & Readonly<{}>, {
    title: string;
    subtitle: string;
    elevated: boolean;
    bordered: boolean;
    hoverable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
