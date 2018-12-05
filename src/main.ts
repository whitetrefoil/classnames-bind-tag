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

    let split: string[] = []
    for (const str of strings.raw) {
      const processed = str.trim().split(' ')
      if (processed.length > 0) {
        split = split.concat(processed)
      }
    }

    const strPart = cx(split)
    const regexpPart = exps.join(' ').trim()
    const splitter   = strPart.length > 0 && regexpPart.length > 0 ? ' ' : ''

    return strPart + splitter + regexpPart
  }

  return { cx, c }
}
