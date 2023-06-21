type Mods = Record<string, boolean | string>

export function classNames(cls: string, additionl: string[], mods?: Mods): string {
  const modifierClassNames = mods
    ? Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
    : [];

  return [cls, ...additionl, ...modifierClassNames].join(" ");
}

classNames("button", ["button--red", "button--big"], {hovered: true, active: true, disabled: false});