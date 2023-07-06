import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    expect(classNames('someClass', {}, ['additionalClass1', 'additionalClass2']))
      .toBe('someClass additionalClass1 additionalClass2');
  });

  test('with mods', () => {
    expect(classNames('someClass', { hovered: true, scrollable: true })).toBe('someClass hovered scrollable');
  });

  test('with false mod', () => {
    expect(classNames('someClass', { hovered: true, scrollable: false })).toBe('someClass hovered');
  });

  test('with undefined mod', () => {
    expect(classNames('someClass', { hovered: true, scrollable: undefined })).toBe('someClass hovered');
  });

  test('with additional and mod', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['additionalClass1', 'additionalClass2'],
    )).toBe('someClass additionalClass1 additionalClass2 hovered');
  });
});
