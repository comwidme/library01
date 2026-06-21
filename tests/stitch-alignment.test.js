import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const root = join(import.meta.dirname, '..');
const read = (relativePath) => readFileSync(join(root, relativePath), 'utf8');

test('login screen exists with PRD fields', () => {
  const html = read('.stitch/screens/login.html');
  assert.match(html, /로그인/);
  assert.match(html, /type="email"/);
  assert.match(html, /type="password"/);
  assert.match(html, /signup\.html/);
  assert.match(html, /completion-modal/);
});

test('signup uses PRD genre naming', () => {
  const html = read('.stitch/screens/signup.html');
  assert.match(html, /청소년문학/);
  assert.doesNotMatch(html, /청소년 문학/);
  assert.match(html, /login\.html/);
});

test('book detail supports loan and reserve actions', () => {
  const html = read('.stitch/screens/book-detail.html');
  assert.match(html, /대출 신청/);
  assert.match(html, /예약 신청/);
  assert.match(html, /id="reserveBtn"/);
  assert.match(html, /applyBookStatus/);
});

test('book search includes reservation filter and loan actions', () => {
  const html = read('.stitch/screens/book-search.html');
  assert.match(html, /예약 가능/);
  assert.match(html, /대출 가능/);
  assert.doesNotMatch(html, /add_shopping_cart/);
  assert.match(html, /showCompletionModal\('loan'\)/);
  assert.match(html, /showCompletionModal\('reserve'\)/);
});

test('main home recommendation cards include genre and summary', () => {
  const html = read('.stitch/screens/main-home.html');
  assert.match(html, /청소년문학/);
  assert.match(html, /line-clamp-2 mt-1/);
  assert.match(html, /북스텝러님/);
});

test('bookmark screen is localized in Korean', () => {
  const html = read('.stitch/screens/bookmark.html');
  assert.match(html, /황금 나침반/);
  assert.match(html, /하늘을 향해/);
  assert.doesNotMatch(html, /The Golden Compass/);
  assert.doesNotMatch(html, /Skyward Bound/);
});

test('shared completion modal script defines required message types', () => {
  const js = read('.stitch/shared/completion-modal.js');
  assert.match(js, /loan/);
  assert.match(js, /reserve/);
  assert.match(js, /bookmark/);
});
