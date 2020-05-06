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
// "cs" is same as "c" but will drop unresolved classes
// "cx" is same as the original `classnames/bind`
const { c, cs, cx } = bindCss(css);
const classNameFromProps = 'another';

console.log(c`my-comp ${classNameFromProps} non-existing "xxx"`)
// => "QWERTYASDFGZXCVB ZCXZCZXC non-existing xxx"

console.log(cs`my-comp ${classNameFromProps} non-existing 'xxx'`)
// => "QWERTYASDFGZXCVB ZCXZCZXC xxx"

// `my-comp` will be resolved to actual class name.
// `${classNameFromProps}` will first resolve to `another` then actual class name.
// `non-existing` will be preserved in `c()` but not in `cs()`.
// texts in quotes (`"` or `'`) will be output as-is.
```

Changelog & Roadmap
-------------------

### v0.5.0

* Update a lot of stuff to latest.

### v0.4.0

* Add a new `cs()` as a "stricter `c()`", which will drop non-existing classes.
* Don't add variable name in the output.
* Texts in quotes will be preserved.
* Upgrade dependencies.

### v0.3.0

* Even a mapped value is found in css module, the original string will be preserved.

### v0.2.0

* Add support for templates with inline expressions.

### v0.1.0

* Initial release.
