classnames-bind-tag
=====================================================

A tiny wrapper of [`classnames`](https://github.com/JedWatson/classnames) which exports a ["template tag"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) plus a bound function just like the original [`classnames/bind`](https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules).

Important
---------

If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

Usage
-----

For example, we have a module CSS file "MyComp.css" exports `.my-comp` as `QWERTYASDFGZXCVB`.

```tsx
import bindCss from '@whitetrefoil/classnames-bind-tag'
import * as css from './MyComp.css'

// "c" is a template tag
// "cx" is same as the original `classnames/bind`
const { c, cx } = bindCss(css)

console.log(c`my-comp another non-existing`)
// => "QWERTYASDFGZXCVB another non-existing"
```

Changelog & Roadmap
-------------------

### v0.1.0

* Initial release.
