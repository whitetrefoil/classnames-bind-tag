import bindCss, { BoundCss } from '~/main';


jest.resetModules();


describe('c', () => {
  let importedCss: Record<string, string>;
  let c: BoundCss['c'];

  beforeEach(() => {
    importedCss = {
      cA: 'a',
      cB: 'b',
      cC: 'c',
    };
    const bound = bindCss(importedCss);
    c = bound.c;
  });

  test('simple', () => {
    expect(c`cA`).toBe('a');
  });

  test('non-existing', () => {
    expect(c`cAA ${'cBB'}`).toBe('cAA cBB');
  });

  test('duplicated', () => {
    expect(c`cA cB cA`).toBe('a b');
  });

  test('nested', () => {
    expect(c`cA ${`c${true ? 'B' : 'A'}`} cC`).toBe('a b c');
  });

  test('as-is', () => {
    expect(c`cA "cB" cC 'cD'`).toBe('a cB c cD');
  });

  test('abnormal usage', () => {
    expect(c``).toBe('');
    expect(c`   `).toBe('');
    expect(c` ${''}  `).toBe('');
    expect(c` ${'  '}  `).toBe('');
    expect((c as any)()).toBe('');
    expect((c as any)(null)).toBe('');
    expect((c as any)('whatever')).toBe('');
    expect((c as any)(true)).toBe('');
    expect((c as any)(false)).toBe('');
  });
});


describe('cs as a stricter one', () => {
  let importedCss: Record<string, string>;
  let cs: BoundCss['cs'];

  beforeEach(() => {
    importedCss = {
      cA: 'a',
      cB: 'b',
      cC: 'c',
    };
    const bound = bindCss(importedCss);
    cs = bound.cs;
  });

  test('simple', () => {
    expect(cs`cA`).toBe('a');
  });

  test('non-existing will be stripped', () => {
    expect(cs`cAA ${'cBB'}`).toBe('');
  });

  test('duplicated', () => {
    expect(cs`cA cB cA`).toBe('a b');
  });

  test('nested', () => {
    expect(cs`cA ${`c${true ? 'B' : 'A'}`} cC`).toBe('a b c');
  });

  test('as-is', () => {
    expect(cs`cA "cB" cC 'cD'`).toBe('a cB c cD');
  });

  test('abnormal usage', () => {
    expect(cs``).toBe('');
    expect(cs`   `).toBe('');
    expect(cs` ${''}  `).toBe('');
    expect(cs` ${'  '}  `).toBe('');
    expect((cs as any)()).toBe('');
    expect((cs as any)(null)).toBe('');
    expect((cs as any)('whatever')).toBe('');
    expect((cs as any)(true)).toBe('');
    expect((cs as any)(false)).toBe('');
  });
});


describe('cx', () => {
  let importedCss: Record<string, string>;
  let c: BoundCss['c'];
  let cx: BoundCss['cx'];

  beforeEach(() => {
    importedCss = {
      cA: 'a',
      cB: 'b',
      cC: 'c',
      cE: 'e',
    };
    const bound = bindCss(importedCss);
    c = bound.c;
    cx = bound.cx;
  });

  it('should work as an function', () => {
    const result = cx('cA', [importedCss.cB, 'cC'], 'cD', { cE: true, cF: false });
    expect(result).toBe('a b c cD e');
  });
});
