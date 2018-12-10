classnames-bind-tag
=====================================================

A tiny wrapper of [`classnames`](https://github.com/JedWatson/classnames) which exports a ["template tag"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) plus a bound function just like the original [`classnames/bind`](https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules).

Important
---------

If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

Usage
-----

For example, we have a module CSS file "MyComp.css" exports `.my-comp` as `QWERTYASDFGZXCVB` and `.another` as `ZCXZCZXC`.

```tsx
import bindCss from '@whitetrefoil/classnames-bind-tag'
import * as css from './MyComp.css'

// "c" is a template tag
// "cx" is same as the original `classnames/bind`
const { c, cx } = bindCss(css)
const classNameFromProps = 'another'

console.log(c`my-comp ${classNameFromProps} non-existing`)
// => "my-comp QWERTYASDFGZXCVB non-existing another"
// .my-comp will be appended with the mapped value in css module.
// .non-existing will be preserved because it doesn't exist in css modules.
// Results of inline expressions (e.g. `.another` here) will be preserved regardless of css modules.
```

Changelog & Roadmap
-------------------

### v0.3.0

* Even a mapped value is found in css module, the original string will be preserved.

### v0.2.0

* Add support for templates with inline expressions.

### v0.1.0

* Initial release.
