import classNames, { ClassNamesExport } from 'classnames/bind'

export interface BoundCss {
  cx: ClassNamesExport
  c(strings: TemplateStringsArray): string
}

export default function bindCss(styles: Record<string, string>): BoundCss {
  const cx = classNames.bind(styles)

  function c(strings: TemplateStringsArray) {
    if (strings != null && strings.raw != null && strings.raw.length > 0) {
      return cx(strings.raw[0].split(' '))
    }

    return ''
  }

  return { cx, c }
}
