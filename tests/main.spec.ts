import bindCss from '../src/main'

jest.resetModules()

test('c', () => {
  const importedCss = {
    classA: 'AAAAA',
    classB: 'BBBBB',
    classC: 'CCCCC',
  }

  const { c }  = bindCss(importedCss)
  const result = c`classA ${importedCss.classB} ${'classC'} classD`
  expect(result).toBe('AAAAA classD BBBBB classC')
})

test('abnormal usage', () => {
  const importedCss = {
    classA: 'AAAAA',
    classB: 'BBBBB',
    classC: 'CCCCC',
  }

  const { c }  = bindCss(importedCss)

  expect(c``).toBe('')
  expect(c`   `).toBe('')
  expect(c` ${''}  `).toBe('')
  expect(c` ${'  '}  `).toBe('')
  expect((c as any)()).toBe('')
  expect((c as any)(null)).toBe('')
  expect((c as any)('whatever')).toBe('')
  expect((c as any)(true)).toBe('')
  expect((c as any)(false)).toBe('')
})

test('cx', () => {
  const importedCss = {
    classA: 'AAAAA',
    classB: 'BBBBB',
    classC: 'CCCCC',
  }

  const { cx } = bindCss(importedCss)
  const result = cx('classA', [importedCss.classB, 'classC'], 'classD', { classE: true, classF: false })
  expect(result).toBe('AAAAA BBBBB CCCCC classD classE')
})
