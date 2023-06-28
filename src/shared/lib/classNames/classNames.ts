type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  const modifierClassNames = mods
    ? Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
    : [];

  return [cls, ...additional.filter(Boolean), ...modifierClassNames].join(' ');
}

classNames('button', { hovered: true, active: true, disabled: false }, ['button--red', 'button--big']);
