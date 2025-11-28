import { defineComponent as y, computed as p, createElementBlock as a, openBlock as d, normalizeClass as v, createCommentVNode as n, createElementVNode as i, renderSlot as f, createTextVNode as _, toDisplayString as c } from "vue";
const $ = ["disabled"], k = {
  key: 0,
  class: "f-button__loader"
}, B = { class: "f-button__content" }, g = /* @__PURE__ */ y({
  __name: "FButton",
  props: {
    label: { default: "" },
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const t = e, l = s, u = p(() => [
      "f-button",
      `f-button--${t.variant}`,
      `f-button--${t.size}`,
      {
        "f-button--outlined": t.outlined,
        "f-button--rounded": t.rounded,
        "f-button--loading": t.loading,
        "f-button--disabled": t.disabled
      }
    ]), b = (r) => {
      !t.disabled && !t.loading && l("click", r);
    };
    return (r, o) => (d(), a("button", {
      class: v(u.value),
      disabled: e.disabled || e.loading,
      onClick: b
    }, [
      e.loading ? (d(), a("span", k, [...o[0] || (o[0] = [
        i("svg", {
          class: "f-button__spinner",
          viewBox: "0 0 24 24"
        }, [
          i("circle", {
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "3",
            fill: "none"
          })
        ], -1)
      ])])) : n("", !0),
      i("span", B, [
        f(r.$slots, "default", {}, () => [
          _(c(e.label), 1)
        ], !0)
      ])
    ], 10, $));
  }
}), h = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [l, u] of s)
    t[l] = u;
  return t;
}, C = /* @__PURE__ */ h(g, [["__scopeId", "data-v-450abff4"]]), F = { class: "f-input-wrapper" }, I = {
  key: 0,
  class: "f-input__label"
}, V = ["type", "value", "placeholder", "disabled", "readonly"], z = {
  key: 1,
  class: "f-input__error"
}, x = /* @__PURE__ */ y({
  __name: "FInput",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    placeholder: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    error: { default: "" },
    size: { default: "md" }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: s }) {
    const t = e, l = s, u = p(() => [
      "f-input",
      `f-input--${t.size}`,
      {
        "f-input--disabled": t.disabled,
        "f-input--error": !!t.error
      }
    ]), b = (r) => {
      const o = r.target;
      l("update:modelValue", t.type === "number" ? Number(o.value) : o.value);
    };
    return (r, o) => (d(), a("div", F, [
      e.label ? (d(), a("label", I, c(e.label), 1)) : n("", !0),
      i("input", {
        class: v(u.value),
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        readonly: e.readonly,
        onInput: b,
        onFocus: o[0] || (o[0] = (m) => l("focus", m)),
        onBlur: o[1] || (o[1] = (m) => l("blur", m))
      }, null, 42, V),
      e.error ? (d(), a("span", z, c(e.error), 1)) : n("", !0)
    ]));
  }
}), N = /* @__PURE__ */ h(x, [["__scopeId", "data-v-b72ac9b2"]]), w = {
  key: 0,
  class: "f-card__header"
}, E = {
  key: 0,
  class: "f-card__title"
}, S = {
  key: 1,
  class: "f-card__subtitle"
}, D = { class: "f-card__body" }, O = {
  key: 1,
  class: "f-card__footer"
}, T = /* @__PURE__ */ y({
  __name: "FCard",
  props: {
    title: { default: "" },
    subtitle: { default: "" },
    elevated: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !1 },
    hoverable: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, t = p(() => [
      "f-card",
      {
        "f-card--elevated": s.elevated,
        "f-card--bordered": s.bordered,
        "f-card--hoverable": s.hoverable
      }
    ]);
    return (l, u) => (d(), a("div", {
      class: v(t.value)
    }, [
      l.$slots.header || e.title || e.subtitle ? (d(), a("div", w, [
        f(l.$slots, "header", {}, () => [
          e.title ? (d(), a("h3", E, c(e.title), 1)) : n("", !0),
          e.subtitle ? (d(), a("p", S, c(e.subtitle), 1)) : n("", !0)
        ], !0)
      ])) : n("", !0),
      i("div", D, [
        f(l.$slots, "default", {}, void 0, !0)
      ]),
      l.$slots.footer ? (d(), a("div", O, [
        f(l.$slots, "footer", {}, void 0, !0)
      ])) : n("", !0)
    ], 2));
  }
}), U = /* @__PURE__ */ h(T, [["__scopeId", "data-v-e1434c03"]]), q = {
  install(e) {
    e.component("FButton", C), e.component("FCard", U), e.component("FInput", N);
  }
};
export {
  C as FButton,
  U as FCard,
  N as FInput,
  q as FoxgoUI,
  q as default
};
