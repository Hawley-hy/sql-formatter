import { expect } from '@jest/globals';
import dedent from 'dedent-js';

export default function supportsStrings(language, format, stringTypes = []) {
  if (stringTypes.includes('""')) {
    it('supports double-quoted strings', () => {
      expect(format('"foo JOIN bar"')).toBe('"foo JOIN bar"');
      expect(format('"foo \\" JOIN bar"')).toBe('"foo \\" JOIN bar"');
      expect(format('SELECT "where" FROM "update"')).toBe(dedent`
        SELECT
          "where"
        FROM
          "update"
      `);
    });
  }

  if (stringTypes.includes("''")) {
    it('supports single-quoted strings', () => {
      expect(format("'foo JOIN bar'")).toBe("'foo JOIN bar'");
      expect(format("'foo \\' JOIN bar'")).toBe("'foo \\' JOIN bar'");
      expect(format("SELECT 'where' FROM 'update'")).toBe(dedent`
        SELECT
          'where'
        FROM
          'update'
      `);
    });
  }

  if (stringTypes.includes('``')) {
    it('supports backtick-quoted strings', () => {
      expect(format('`foo JOIN bar`')).toBe('`foo JOIN bar`');
      expect(format('`foo `` JOIN bar`')).toBe('`foo `` JOIN bar`');
      expect(format('SELECT `where` FROM `update`')).toBe(dedent`
        SELECT
          \`where\`
        FROM
          \`update\`
      `);
    });
  }

  if (stringTypes.includes('U&""')) {
    it('supports unicode double-quoted strings', () => {
      expect(format('U&"foo JOIN bar"')).toBe('U&"foo JOIN bar"');
      expect(format('U&"foo \\" JOIN bar"')).toBe('U&"foo \\" JOIN bar"');
      expect(format('SELECT U&"where" FROM U&"update"')).toBe(dedent`
        SELECT
          U&"where"
        FROM
          U&"update"
      `);
    });
  }

  if (stringTypes.includes("U&''")) {
    it('supports single-quoted strings', () => {
      expect(format("U&'foo JOIN bar'")).toBe("U&'foo JOIN bar'");
      expect(format("U&'foo \\' JOIN bar'")).toBe("U&'foo \\' JOIN bar'");
      expect(format("SELECT U&'where' FROM U&'update'")).toBe(dedent`
        SELECT
          U&'where'
        FROM
          U&'update'
      `);
    });
  }

  if (stringTypes.includes('$$')) {
    it('supports dollar-quoted strings', () => {
      expect(format('$xxx$foo $$ LEFT JOIN $yyy$ bar$xxx$')).toBe(
        '$xxx$foo $$ LEFT JOIN $yyy$ bar$xxx$'
      );
      expect(format('$$foo JOIN bar$$')).toBe('$$foo JOIN bar$$');
      expect(format('$$foo $ JOIN bar$$')).toBe('$$foo $ JOIN bar$$');
      expect(format('$$foo \n bar$$')).toBe('$$foo \n bar$$');
      expect(format('SELECT $$where$$ FROM $$update$$')).toBe(dedent`
        SELECT
          $$where$$
        FROM
          $$update$$
      `);
    });
  }

  if (stringTypes.includes('[]')) {
    it('supports [bracket-quoted identifiers]', () => {
      expect(format('[foo JOIN bar]')).toBe('[foo JOIN bar]');
      expect(format('[foo ]] JOIN bar]')).toBe('[foo ]] JOIN bar]');
      expect(format('SELECT [where] FROM [update]')).toBe(dedent`
        SELECT
          [where]
        FROM
          [update]
      `);
    });
  }

  if (stringTypes.includes("N''")) {
    it('supports T-SQL unicode strings', () => {
      expect(format("N'foo JOIN bar'")).toBe("N'foo JOIN bar'");
      expect(format("N'foo \\' JOIN bar'")).toBe("N'foo \\' JOIN bar'");
      expect(format("SELECT N'where' FROM N'update'")).toBe(dedent`
        SELECT
          N'where'
        FROM
          N'update'
      `);
    });
  }
}
