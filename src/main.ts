import classNames from 'classnames/bind';

export interface BoundCss {
  cx: typeof classNames.default;
  c(strings: TemplateStringsArray, ...exps: string[]): string;
  cs(strings: TemplateStringsArray, ...exps: string[]): string;
}

export default function bindCss(styles: Record<string, string>): BoundCss {
  const cx = classNames.bind(styles);

  const _c = (strict: boolean, strings: TemplateStringsArray, ...exps: string[]): string => {
    if (strings == null || strings.raw == null) {
      return '';
    }

    const split: Record<string, true> = {};

    for (let i = 0; i < strings.raw.length; i++) {
      if (i > 0) {
        const exp = exps[i - 1]?.trim();
        if (exp == null || exp === '') { continue; }
        if (styles[exp] != null) {
          split[styles[exp]] = true;
        } else if (!strict) {
          split[exp] = true;
        }
      }

      const trimmed = strings.raw[i];
      if (trimmed.length === 0) { continue; }
      trimmed.split(' ').forEach(s => {
        if (s === '') { return; }
        if (s.length > 2 && s[0] === s[s.length - 1]
            && (s[0] === '"' || s[0] === '\'')
        ) {
          split[s.substr(1, s.length - 2)] = true;
        } else if (styles[s] != null) {
          split[styles[s]] = true;
        } else if (!strict) {
          split[s] = true;
        }
      });
    }

    return Object.keys(split).join(' ').trim();
  };

  const c = (strings: TemplateStringsArray, ...exps: string[]) =>
    _c(false, strings, ...exps);

  const cs = (strings: TemplateStringsArray, ...exps: string[]) =>
    _c(true, strings, ...exps);

  return { cx, c, cs };
}
