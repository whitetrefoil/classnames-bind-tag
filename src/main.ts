import classNames, { ClassNamesExport } from 'classnames/bind'

export interface BoundCss {
  cx: ClassNamesExport
  c(strings: TemplateStringsArray, ...exps: string[]): string
}

export default function bindCss(styles: Record<string, string>): BoundCss {
  const cx = classNames.bind(styles)

  function c(strings: TemplateStringsArray, ...exps: string[]): string {
    if (strings == null || strings.raw == null) {
      return ''
    }

    const split: string[] = []
    for (const str of strings.raw) {
      const trimmed = str.trim()
      if (trimmed.length === 0) {
        continue
      }
      trimmed.split(' ').forEach((s) => {
        split.push(s)
        if (styles[s] != null) {
          split.push(styles[s])
        }
      })
    }

    const strPart    = split.join(' ').trim()
    const regexpPart = exps.join(' ').trim()
    const splitter   = strPart.length > 0 && regexpPart.length > 0 ? ' ' : ''

    return strPart + splitter + regexpPart
  }

  return { cx, c }
}
