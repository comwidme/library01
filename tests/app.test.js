import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  BOOKS,
  COMPLETION_MESSAGES,
  STORAGE_KEYS,
  createStorage,
  filterBooks,
  getBookById,
  getPopularBooks,
  getRecommendations,
  searchBooks,
  sortBooks,
  validateLogin,
  validateSignup,
} from '../script.js';

const root = join(import.meta.dirname, '..');
const read = (relativePath) => readFileSync(join(root, relativePath), 'utf8');

test('MVP deliverables exist at project root', () => {
  assert.match(read('index.html'), /script\.js/);
  assert.match(read('index.html'), /style\.css/);
  assert.match(read('script.js'), /bookstep_user/);
  assert.match(read('style.css'), /--primary: #005da7/);
});

test('recommendations filter by favorite genres', () => {
  const result = getRecommendations(['청소년문학', '판타지']);
  assert.ok(result.every((book) => ['청소년문학', '판타지'].includes(book.genre)));
  assert.ok(result.length > 0);
});

test('popular books only include flagged titles', () => {
  const popular = getPopularBooks();
  assert.ok(popular.every((book) => book.isPopular));
  assert.equal(popular.length, 6);
});

test('search matches title author genre and keywords', () => {
  assert.equal(searchBooks('네온').length, 1);
  assert.equal(searchBooks('엘레나').length >= 1, true);
  assert.equal(searchBooks('SF').length >= 1, true);
  assert.equal(searchBooks('없는책').length, 0);
});

test('filters support genre availability and reservation', () => {
  const fantasy = filterBooks(BOOKS, { genre: '판타지' });
  assert.ok(fantasy.every((book) => book.genre === '판타지'));

  const available = filterBooks(BOOKS, { availableOnly: true });
  assert.ok(available.every((book) => book.status === 'available'));

  const reservable = filterBooks(BOOKS, { reservableOnly: true });
  assert.ok(reservable.every((book) => book.status === 'loaned'));
});

test('sortBooks supports popular latest and title order', () => {
  const popular = sortBooks(BOOKS, 'popular');
  assert.equal(popular[0].isPopular, true);

  const latest = sortBooks(BOOKS, 'latest');
  assert.ok(latest[0].publishedYear >= latest.at(-1).publishedYear);

  const titled = sortBooks(BOOKS, 'title');
  assert.ok(titled[0].title.localeCompare(titled[1].title, 'ko') <= 0);
});

test('signup and login validation follow PRD rules', () => {
  assert.match(
    validateSignup({ email: '', password: '', nickname: '', favoriteGenres: [] }),
    /입력/,
  );
  assert.match(
    validateSignup({
      email: 'a@b.com',
      password: '1234',
      nickname: '북스텝러',
      favoriteGenres: [],
    }),
    /장르/,
  );
  assert.equal(
    validateSignup({
      email: 'a@b.com',
      password: '1234',
      nickname: '북스텝러',
      favoriteGenres: ['청소년문학'],
    }),
    null,
  );

  const user = { email: 'a@b.com', password: '1234', nickname: '북스텝러', favoriteGenres: ['판타지'] };
  assert.match(validateLogin({ email: '', password: '', storedUser: user }), /입력/);
  assert.match(validateLogin({ email: 'a@b.com', password: 'wrong', storedUser: user }), /일치/);
  assert.equal(validateLogin({ email: 'a@b.com', password: '1234', storedUser: user }), null);
});

test('storage uses PRD localStorage keys', () => {
  const memory = new Map();
  const storage = createStorage({
    getItem: (key) => memory.get(key) ?? null,
    setItem: (key, value) => memory.set(key, value),
    removeItem: (key) => memory.delete(key),
  });

  storage.write(STORAGE_KEYS.user, { email: 'a@b.com', password: '1234', nickname: '북스텝러', favoriteGenres: ['SF'] });
  storage.write(STORAGE_KEYS.bookmarks, { bookmarks: [1, 2] });
  storage.write(STORAGE_KEYS.requests, { requests: [{ bookId: 1, type: 'loan', requestedAt: '2026-06-21' }] });

  assert.deepEqual(storage.read(STORAGE_KEYS.user, null).favoriteGenres, ['SF']);
  assert.deepEqual(storage.read(STORAGE_KEYS.bookmarks, { bookmarks: [] }).bookmarks, [1, 2]);
  assert.equal(storage.read(STORAGE_KEYS.requests, { requests: [] }).requests[0].type, 'loan');
});

test('completion messages cover PRD completion flows', () => {
  assert.ok(COMPLETION_MESSAGES.loan);
  assert.ok(COMPLETION_MESSAGES.reserve);
  assert.ok(COMPLETION_MESSAGES.bookmark);
  assert.ok(COMPLETION_MESSAGES.signup);
  assert.ok(COMPLETION_MESSAGES.login);
});

test('book detail statuses map to loan and reserve actions', () => {
  const available = getBookById(1);
  const loaned = getBookById(3);
  assert.equal(available?.status, 'available');
  assert.equal(loaned?.status, 'loaned');
});
