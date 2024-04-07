type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]) {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([, value]) => value)
      .map(([className]) => className)
  ].join(' ')
}