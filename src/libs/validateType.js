import * as yup from 'yup';

const stringRule = [
  /<script>|<\/script>|"|;|--|<\?php/i,
  /(--|\/\*|\*\/|";|';|INSERT INTO|SELECT|DELETE|UPDATE|DROP TABLE|DROP DATABASE|CREATE TABLE|CREATE DATABASE|ALTER TABLE|EXEC|EXECUTE)/i,
  /--/,
  /";/,
];

export const emailValidator = yup.string().email();
export const stringValidator = yup.string().test('is-safe-string', 'Cette chaîne contient des caractères ou des motifs non autorisée.', value => {
  return stringRule.every(pattern => !pattern.test(value || ''));
});