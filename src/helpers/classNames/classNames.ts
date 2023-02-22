
type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, val]) => Boolean(val))
      .map(([cls]) => cls)
  ].join(' ');
}

// classNames(
//   "remove-btn",
//   {hovered: true, selectable: true, red: false},
//   ["pdg"]
// ); // => 'remove-btn hovered selectable pdg'
