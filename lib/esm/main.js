import classNames from 'classnames/bind';
export default function bindCss(styles) {
    const cx = classNames.bind(styles);
    function c(strings) {
        if (strings != null && strings.raw != null && strings.raw.length > 0) {
            return cx(strings.raw[0].split(' '));
        }
        return '';
    }
    return { cx, c };
}
//# sourceMappingURL=main.js.map