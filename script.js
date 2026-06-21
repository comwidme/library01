/** @typedef {'available' | 'loaned'} BookStatus */
/** @typedef {'loan' | 'reserve'} RequestType */

export const STORAGE_KEYS = {
  user: 'bookstep_user',
  login: 'bookstep_login',
  bookmarks: 'bookstep_bookmarks',
  requests: 'bookstep_requests',
};

export const GENRES = [
  '청소년문학',
  '판타지',
  '미스터리',
  '고전',
  '에세이',
  '만화',
  'SF',
];

/** @type {ReadonlyArray<{ id: number; title: string; author: string; genre: string; summary: string; intro: string; cover: string; isPopular: boolean; publishedYear: number; status: BookStatus; keywords?: string[] }>} */
export const BOOKS = [
  {
    id: 1,
    title: '네온 호라이즌',
    author: 'S.K. 리버스',
    genre: 'SF',
    summary:
      '네온 불빛 도시에서 펼쳐지는 청소년 SF 모험. 주인공은 잃어버린 기억과 도시의 비밀을 추적한다.',
    intro: '네온 불빛 도시에서 펼쳐지는 청소년 SF 모험.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYOVVDgx8owglezBcSDQ9DgaeeFlpjage2H3EZIFsY-lbUhW-BmlpjsS9mNnAxhjA9JoOOaIsWJGt_HJknzxQzMvCiRQBnmDcnaRK5fQYKMx_wE5lfe5_l-NIDxHzu0tOpw3QG-NWLkr4NW34nWprelgRSeQ9rO46OP9Llu9yBG5CeGBWN0ZvR7vhlBXLHhaemHJuF2wwu3jDHnzriGcLQiGaXrX4IcTQR4kpz1X-fju3Qos0EwJ1xp8P8oEDKaux0u6Z2hNL-sRw',
    isPopular: true,
    publishedYear: 2024,
    status: 'available',
    keywords: ['사이버', '미래'],
  },
  {
    id: 2,
    title: '개울가의 여름',
    author: '엘레나 모스',
    genre: '청소년문학',
    summary:
      '여름방학, 개울가에서 만난 친구들의 성장 이야기. 우정과 이별을 담은 따뜻한 청소년 소설.',
    intro: '여름방학, 개울가에서 만난 친구들의 성장 이야기.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvYEtaa6zsc9iws7-RD8SBa_CCkKWAhW1qGSIDfpBbCFUEgf0r67-eSv0aY7O2-xqMjwmUhrG2vVHwsoXD4YAIplD5uFZN5G2F37vVAmHkmQuOE2ZG_ZIEQIOhD5V0jn4WrH0V5sscUWsKeIhW6IUNP0lDS3HttoeoGpQIIy9kc-LfTlorvg4-JCtKKlcYSsJsN9Y3MXScK-QF3ylMJQHkVkl7r3Shhc6Yi7HhprVcpCBMu6qbRtnGWMgGsopKMc9D-NB6N-AAQ1o',
    isPopular: false,
    publishedYear: 2023,
    status: 'available',
  },
  {
    id: 3,
    title: '아이언 크라운',
    author: '마커스 쏜',
    genre: '판타지',
    summary:
      '왕관을 둘러싼 판타지 세계의 음모와 모험. 용기 있는 소년의 여정을 그린 대서사.',
    intro: '왕관을 둘러싼 판타지 세계의 음모와 모험.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKBn8zOqymyPpOBejoBfRhJMRjgJ1lQkNUJ18on-cTKdjEG08MsfAqVjqNODRs0UoCenl9cF_coKlvTtLdlfbIkj254uBSIE_qyXc45atPE7mQNI9LTEKVm2a4uIgSvs9GLCfqSrHyDMLzX2nVcmbucGsvaXlrk-HoPBR1am8vXzANBWDvgv5DGbbFN1_5MpfKevIw2cbyuoMVM5gqQed9CTwID_irlqD2AnxQLXUve1h39ZVhwrX9YmEFoTlx1kSGox2KGtdP8b4',
    isPopular: false,
    publishedYear: 2022,
    status: 'loaned',
  },
  {
    id: 4,
    title: '브레이킹 포인트',
    author: '조던 헤이즈',
    genre: '청소년문학',
    summary:
      '농구 코트에서 꿈과 우정을 키우는 스포츠 소설. 실패와 재도전의 메시지를 담았다.',
    intro: '농구 코트에서 꿈과 우정을 키우는 스포츠 소설.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCy5n8iaaIWvgo7GBXlIEBT6IaHcrP2fBhWZrM9uPI9qi8yaM_95ITE8pNjbOMmTCWl3tpnO9cmFLhw4NwNL1gLaNgR9R-zcDUZlwmOKD5tIYX5dWKQdmEhRSDKHdulHzLju1zLf7aNytSxNJfXjW-v3EYBLUxRXuYJfCTFjNUpAdQv0394GaIH1wHKnsPM0c9QZ0Xadlys5QEkG8L76Fh_qQm-IQqSfdQrXHE2mrs-fKI4W2godzikqHsU9YV4eOvNL7Wa7IP3v2A',
    isPopular: true,
    publishedYear: 2024,
    status: 'available',
  },
  {
    id: 5,
    title: '침묵의 메아리',
    author: '사라 페너',
    genre: '미스터리',
    summary: '작은 마을에서 시작되는 청소년 미스터리. 침묵 속에 숨겨진 진실을 파헤친다.',
    intro: '작은 마을의 비밀을 파헤치는 청소년 미스터리.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCI2MsT59yYxL-q10YO2hh5V8IdfikQ1NgHYRX18Ivbp9n2OucEAbMuF9hT5HEXMbwLw8_qrbqo9z8UCTLdVtMkIetY_hvZd79d83sVCsgITePsP3aiULz9dNMPkSaOba0gTq6UT7oyD7tCO5e7DoRzvuUpKA_htLTGEbF8tXl34bLEVoK3mpfPr_mcvRTFPHWkAu_ZIpfFvFaQXjdufn9EKfHKPcYBjZQjRz6-jzsLaPsUn5VrkZlEu_W-HcU68OAw7sSznkecyfA',
    isPopular: true,
    publishedYear: 2023,
    status: 'available',
  },
  {
    id: 6,
    title: '픽셀 하트',
    author: '데이비드 킴',
    genre: '청소년문학',
    summary: '게임과 현실 사이에서 성장하는 청소년의 이야기. 따뜻한 유머가 돋보인다.',
    intro: '게임과 현실 사이에서 성장하는 청소년 이야기.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLk78AiK0mARoa1j5aVCmai3tDa1pyYVTXn1sS2NAlaJ7BVOxYoUhHBJL4WuaIShQFEGMqmQlgLwt8a7kB1jz45FE1AW949GdiEHswUf4MSqtoi27xnt2dWsTR8vtdTAOOut6PzFouKM2Oladtedax18QtxUniXj4wbyjWj3xJWyuNqxv6PqakbsCIAkbyy8sJNR6I8n6h-aUsuO5yul-8KZxes-fHshdHUKji2fYrhDbBjjup-e3kxjR0BQWOkW84mkibRJzB97M',
    isPopular: true,
    publishedYear: 2024,
    status: 'available',
  },
  {
    id: 7,
    title: '유리 실험실',
    author: '닥터 아리스 베인',
    genre: 'SF',
    summary: '실험실에서 시작된 SF 스릴러. 과학과 상상력이 만나는 청소년 소설.',
    intro: '실험실에서 시작된 SF 스릴러.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5yslSl3ui2k3IzXjDovsweS5xiFmxtby8AR65twR6n3oEA4AsaoDOgeLP7bgEHCtUezHcAnlDyZVKeaq0FVcymGNnoo3EMo2GqWf-T04KVTxfUMNgZ3MlewcNpcuqGTm-GxWR3Hx-f_qc1ZRVzI5D74EX7q897Hpy3PB17vbVEbRFERWgZweb8PN9fNx3-SD4J5_cbbLtwLeiZ7Z2uz-xvaL0Wak_y-Bim9llzLyo8S99Hg8_5Qp6P8BzY27ngj6MjNWEyMBgB4c',
    isPopular: true,
    publishedYear: 2021,
    status: 'loaned',
  },
  {
    id: 8,
    title: '한여름 밤의 이야기',
    author: 'L.J. 스미스',
    genre: '청소년문학',
    summary: '별이 빛나는 밤, 오두막에서 나누는 친구들의 이야기. 잔잔한 감동을 전한다.',
    intro: '별이 빛나는 밤, 친구들의 잔잔한 이야기.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCBTIR6aV_dbf9tywbI8XAAz9E2np_RmdXUEy9TfqcUOyOIcxS6Tz3PlsXJVhXfvRMnvZlujNgU_kcAhVDmIIsKKidBlcgQwddPqO5VLs0BOO7yTszRKAU3-aAdrIWOwqZat5NI4RohtozfjwiAag6UB37dlrkL2MBQ1Rybh7MBtUQBYUtdm-1kvLbuZVWYN0jPCPi4xyCCxBEKftIuoSGsEJ2pbZDt-A_GIB1LrY6peTcVrIfqzqurPZ-aYzqhbmyEIZiVJRgdL8',
    isPopular: true,
    publishedYear: 2020,
    status: 'available',
  },
  {
    id: 9,
    title: '천상의 문',
    author: '엘레나 밴스',
    genre: '청소년문학',
    summary:
      '문학이 다른 차원으로 통하는 관문이 되는 세상. 17세 소녀 라이라의 상상력 여정.',
    intro: '허구와 현실의 경계를 넘나드는 판타지 청소년문학.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTnPH8YtHxY29T4c2K08C-xaTILKAv5LXWTXdwVjCZmDJq4hBLE7H8LZ_t3wiWSfGTuvnv9SyMDFimnelOI-s8F2cN_bQ-igpeD0cGz3j8aMUIF_mQWl90lYGnVhQ1hnr-KgBi4lEdURd1EIEYnKhmO00UlxV1_qgJbolaPDD3XuQODN4gvDRi9AiO3-2MDGAgKUoroinXf4mFvAWGk9NECZLTOykYPA09IrB8Rismkolbm6yjkwo5BGdBa-pcp71P9hHHUDzQGcg',
    isPopular: false,
    publishedYear: 2023,
    status: 'available',
    keywords: ['판타지', '모험'],
  },
  {
    id: 10,
    title: '은빛 속삭임',
    author: '엘레나 손',
    genre: '판타지',
    summary: '은빛 숲에서 들려오는 속삭임을 따라가는 판타지 모험.',
    intro: '은빛 숲의 비밀을 찾아가는 판타지 모험.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDojiLgEbxGntlEElTHhW8nyqx5tc38YYnGey_188ubh51SzDxGRucRnwz6LpOdSpH53S2LD9X_GwzP1XBTOp6pOAZsSoIpfuhMOaFOW3q3tDyBv0pqJtLxFXPxlBqoqVnuM4aGCqOzwSqbJkTUvoM74kRLARKwwhwJzUWoUtJD0VzRchS1GYbHQqC7dWLuwRBjlIVZLrqw359ALE-dEPuICDDSLsxMkLxk9_oDnROSEh71CYYyVJPOWUOLlL4gEdKlRdsA9OneBmk',
    isPopular: false,
    publishedYear: 2024,
    status: 'available',
  },
  {
    id: 11,
    title: '황금 나침반',
    author: '필립 풀먼',
    genre: '판타지',
    summary: '다른 세계로 향하는 나침반을 쫓는 소녀의 대모험.',
    intro: '다른 세계로 향하는 나침반을 쫓는 모험.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmqbNl1YW8fYS1PE58ztwl939HtAuO0PNAzulfHoybINjYX20QQeRzUDdC8Z4PbCRroEpltWEI-Y980voTmXnH4TnQwt_kykL-nLEOJ3SxxylMJ6M-KmEehMNsx2B8tpw4rtbrFUzFIAYjqWJU2X7Kkys5fp6oTZWBw0Ig2QEYQJrvIp02owug5ZraU8K1TDNB5ZEeFzw8E9Um3YmQUBWqHDa5iHORis6PlUYRWgMrFgF0HUKA9bwOTKFJ0Lo2B8omRwKWCvWY_H4',
    isPopular: false,
    publishedYear: 2019,
    status: 'available',
  },
  {
    id: 12,
    title: '하늘을 향해',
    author: '아마라 반스',
    genre: 'SF',
    summary: '미래 도시를 배경으로 한 희망적인 SF 청소년 소설.',
    intro: '미래 도시를 배경으로 한 SF 청소년 소설.',
    cover:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbkVVjNYzNHe8ahw-5YZrv1Ufh8Skcr0SOlB5vlW9JosEJ7mWUjVusdPaLE6oSKESEBs2j-8PwMCnVqtSvNN2v3namj7YgD4OPgWN6WtJPDv4y1oMQe3kCKM5LxOZL4ZOev_fB3kEgOxAQx9EqIGv-lqVF2x3DtcPi-kxAwWbzsn5p4lCarpFcdZU1sS6Oo_srKxFGGtqCoZf_YwpY5zKMOXerdlm4pu6rC8zPfK-c6OnqVrCGVPpmSeRYxMqYhfO5xbKmiUZ10dg',
    isPopular: false,
    publishedYear: 2022,
    status: 'loaned',
  },
];

export const COMPLETION_MESSAGES = {
  signup: '회원가입이 완료되었습니다.',
  login: '로그인되었습니다.',
  loan: '대출 신청이 완료되었습니다.',
  reserve: '예약 신청이 완료되었습니다.',
  bookmark: '북마크에 저장되었습니다.',
};

export const getBookById = (id) => BOOKS.find((book) => book.id === id) ?? null;

export const statusLabel = (status) =>
  status === 'available' ? '대출 가능' : '대출 중';

export const isReservable = (status) => status === 'loaned';

export const getRecommendations = (favoriteGenres, books = BOOKS) =>
  books.filter((book) => favoriteGenres.includes(book.genre));

export const getPopularBooks = (books = BOOKS) =>
  books.filter((book) => book.isPopular);

export const searchBooks = (query, books = BOOKS) => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return books;

  return books.filter((book) => {
    const haystack = [
      book.title,
      book.author,
      book.genre,
      book.summary,
      book.intro,
      ...(book.keywords ?? []),
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalized);
  });
};

/** @param {{ genre?: string; availableOnly?: boolean; reservableOnly?: boolean }} filters */
export const filterBooks = (books, filters) =>
  books.filter((book) => {
    if (filters.genre && book.genre !== filters.genre) return false;
    if (filters.availableOnly && book.status !== 'available') return false;
    if (filters.reservableOnly && !isReservable(book.status)) return false;
    return true;
  });

/** @param {'popular' | 'latest' | 'title'} sortBy */
export const sortBooks = (books, sortBy) => {
  const copy = [...books];
  if (sortBy === 'popular') {
    return copy.sort(
      (a, b) => Number(b.isPopular) - Number(a.isPopular) || b.publishedYear - a.publishedYear,
    );
  }
  if (sortBy === 'latest') {
    return copy.sort((a, b) => b.publishedYear - a.publishedYear);
  }
  return copy.sort((a, b) => a.title.localeCompare(b.title, 'ko'));
};

export const validateSignup = ({ email, password, nickname, favoriteGenres }) => {
  if (!email?.trim() || !password?.trim() || !nickname?.trim()) {
    return '이메일, 비밀번호, 닉네임을 모두 입력해 주세요.';
  }
  if (!favoriteGenres?.length) {
    return '관심 장르를 1개 이상 선택해 주세요.';
  }
  return null;
};

export const validateLogin = ({ email, password, storedUser }) => {
  if (!email?.trim() || !password?.trim()) {
    return '이메일과 비밀번호를 입력해 주세요.';
  }
  if (!storedUser) {
    return '가입된 계정이 없습니다. 회원가입을 먼저 진행해 주세요.';
  }
  if (storedUser.email !== email.trim() || storedUser.password !== password) {
    return '이메일 또는 비밀번호가 일치하지 않습니다.';
  }
  return null;
};

export const createStorage = (storage = globalThis.localStorage) => ({
  read(key, fallback) {
    try {
      const raw = storage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },
  write(key, value) {
    storage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    storage.removeItem(key);
  },
});

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const renderStatusBadge = (status) =>
  `<span class="status-badge status-badge--${status === 'available' ? 'available' : 'loaned'}">${statusLabel(status)}</span>`;

const renderHorizontalBookCard = (book) => `
  <article class="book-card-h" data-action="open-detail" data-book-id="${book.id}">
    <div class="book-card-h__cover">
      <img src="${escapeHtml(book.cover)}" alt="${escapeHtml(book.title)} 표지" loading="lazy" />
      ${renderStatusBadge(book.status)}
    </div>
    <h4 class="book-card-h__title">${escapeHtml(book.title)}</h4>
    <p class="book-card-h__author">${escapeHtml(book.author)}</p>
    <span class="genre-tag">${escapeHtml(book.genre)}</span>
    <p class="book-card-h__summary">${escapeHtml(book.intro)}</p>
  </article>`;

const renderPopularItem = (book) => `
  <article class="popular-item" data-action="open-detail" data-book-id="${book.id}">
    <div class="popular-item__cover">
      <img src="${escapeHtml(book.cover)}" alt="${escapeHtml(book.title)} 표지" loading="lazy" />
    </div>
    <div class="popular-item__body">
      <div>
        <h4 class="headline-md">${escapeHtml(book.title)}</h4>
        <p class="text-muted">${escapeHtml(book.author)} · ${escapeHtml(book.genre)}</p>
      </div>
      ${renderStatusBadge(book.status)}
    </div>
  </article>`;

const renderResultCard = (book, bookmarkIds) => `
  <article class="result-card" data-action="open-detail" data-book-id="${book.id}">
    <div class="result-card__cover">
      <img src="${escapeHtml(book.cover)}" alt="${escapeHtml(book.title)} 표지" loading="lazy" />
      ${renderStatusBadge(book.status)}
    </div>
    <div class="result-card__body">
      <h4 class="headline-md">${escapeHtml(book.title)}</h4>
      <p class="text-muted">저자: ${escapeHtml(book.author)}</p>
      <span class="genre-tag">${escapeHtml(book.genre)}</span>
      <div class="result-card__actions">
        <button type="button" class="btn btn-ghost" data-action="toggle-bookmark" data-book-id="${book.id}" aria-label="북마크">
          <span class="material-symbols-outlined ${bookmarkIds.includes(book.id) ? 'filled' : ''}">bookmark</span>
        </button>
        ${
          book.status === 'available'
            ? `<button type="button" class="btn btn-primary btn-pill" data-action="request-loan" data-book-id="${book.id}">대출</button>`
            : `<button type="button" class="btn btn-secondary btn-pill" data-action="request-reserve" data-book-id="${book.id}">예약</button>`
        }
      </div>
    </div>
  </article>`;

const renderBookmarkCard = (book) => `
  <article class="bookmark-card">
    <div class="bookmark-card__cover">
      <img src="${escapeHtml(book.cover)}" alt="${escapeHtml(book.title)} 표지" loading="lazy" />
    </div>
    <div class="bookmark-card__body">
      <div>
        <div style="display:flex;justify-content:space-between;gap:0.5rem;align-items:start;">
          <h3 class="headline-md">${escapeHtml(book.title)}</h3>
          <button type="button" class="btn btn-ghost btn-icon" data-action="remove-bookmark" data-book-id="${book.id}" aria-label="북마크 해제">
            <span class="material-symbols-outlined filled">bookmark_remove</span>
          </button>
        </div>
        <p class="text-muted">${escapeHtml(book.author)}</p>
        ${renderStatusBadge(book.status)}
      </div>
      <button type="button" class="btn btn-ghost" data-action="open-detail" data-book-id="${book.id}">상세보기 →</button>
    </div>
  </article>`;

const createApp = (storageApi = createStorage()) => {
  /** @type {{ view: string; detailBookId: number | null; searchQuery: string; searchGenre: string; availableOnly: boolean; reservableOnly: boolean; searchSort: 'popular' | 'latest' | 'title'; modal: { type: keyof typeof COMPLETION_MESSAGES } | null; signupGenres: string[]; error: string | null }} */
  const state = {
    view: 'login',
    detailBookId: null,
    searchQuery: '',
    searchGenre: '',
    availableOnly: false,
    reservableOnly: false,
    searchSort: 'popular',
    modal: null,
    signupGenres: [],
    error: null,
  };

  const readUser = () => storageApi.read(STORAGE_KEYS.user, null);
  const readLogin = () => storageApi.read(STORAGE_KEYS.login, false);
  const readBookmarks = () => storageApi.read(STORAGE_KEYS.bookmarks, { bookmarks: [] }).bookmarks;
  const writeBookmarks = (bookmarks) =>
    storageApi.write(STORAGE_KEYS.bookmarks, { bookmarks });

  const readRequests = () => storageApi.read(STORAGE_KEYS.requests, { requests: [] }).requests;
  const writeRequests = (requests) => storageApi.write(STORAGE_KEYS.requests, { requests });

  const isLoggedIn = () => Boolean(readLogin() && readUser());

  const showModal = (type) => {
    state.modal = { type };
    render();
  };

  const hideModal = () => {
    state.modal = null;
    render();
  };

  const navigate = (view, options = {}) => {
    state.view = view;
    state.error = null;
    if (!options.keepModal) state.modal = null;
    if (options.bookId) state.detailBookId = options.bookId;
    render();
  };

  const guardAuth = (view) => {
    if (view === 'signup' || view === 'login') return true;
    if (!isLoggedIn()) {
      state.view = 'login';
      state.error = '로그인이 필요합니다.';
      return false;
    }
    return true;
  };

  const getSearchResults = () => {
    const searched = searchBooks(state.searchQuery, BOOKS);
    const filtered = filterBooks(searched, {
      genre: state.searchGenre || undefined,
      availableOnly: state.availableOnly,
      reservableOnly: state.reservableOnly,
    });
    return sortBooks(filtered, state.searchSort);
  };

  const renderSignup = () => `
    <section class="auth-layout">
      <div class="auth-card auth-card--wide">
        <div class="brand" style="margin-bottom:1rem;"><span class="material-symbols-outlined">menu_book</span> BookStep</div>
        <h1 class="headline-lg">계정 만들기</h1>
        <p class="text-muted" style="margin-bottom:1.5rem;">닉네임을 정하고 취향에 맞는 책을 찾아보세요.</p>
        ${state.error ? `<div class="alert" style="margin-bottom:1rem;">${escapeHtml(state.error)}</div>` : ''}
        <form id="signup-form" class="field" style="gap:1rem;">
          <div class="field"><label for="signup-nickname">닉네임</label><input class="input input--plain" id="signup-nickname" name="nickname" placeholder="예: 북스텝러" required /></div>
          <div class="field"><label for="signup-email">이메일</label><input class="input input--plain" id="signup-email" name="email" type="email" placeholder="you@example.com" required /></div>
          <div class="field"><label for="signup-password">비밀번호</label><input class="input input--plain" id="signup-password" name="password" type="password" placeholder="••••••••" required /></div>
          <div class="field">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <label>관심 장르</label><span class="text-muted">1개 이상 선택</span>
            </div>
            <div class="chip-row" id="signup-genres">
              ${GENRES.map(
                (genre) =>
                  `<button type="button" class="chip ${state.signupGenres.includes(genre) ? 'active' : ''}" data-action="toggle-signup-genre" data-genre="${genre}">${genre}</button>`,
              ).join('')}
            </div>
          </div>
          <button class="btn btn-primary btn-block" type="submit">가입하기</button>
        </form>
        <p class="text-muted" style="text-align:center;margin-top:1rem;">이미 계정이 있으신가요? <button type="button" class="btn btn-ghost" data-action="go-login">로그인</button></p>
      </div>
    </section>`;

  const renderLogin = () => `
    <section class="auth-layout">
      <div class="auth-card">
        <div class="brand" style="margin-bottom:1rem;"><span class="material-symbols-outlined">menu_book</span> BookStep</div>
        <h1 class="headline-lg">로그인</h1>
        <p class="text-muted" style="margin-bottom:1.5rem;">가입한 이메일과 비밀번호로 로그인하세요.</p>
        ${state.error ? `<div class="alert" style="margin-bottom:1rem;">${escapeHtml(state.error)}</div>` : ''}
        <form id="login-form" style="display:flex;flex-direction:column;gap:1rem;">
          <div class="field"><label for="login-email">이메일</label><input class="input input--plain" id="login-email" name="email" type="email" required /></div>
          <div class="field"><label for="login-password">비밀번호</label><input class="input input--plain" id="login-password" name="password" type="password" required /></div>
          <button class="btn btn-primary btn-block" type="submit">로그인</button>
        </form>
        <p class="text-muted" style="text-align:center;margin-top:1rem;">계정이 없으신가요? <button type="button" class="btn btn-ghost" data-action="go-signup">회원가입</button></p>
      </div>
    </section>`;

  const renderHome = () => {
    const user = readUser();
    const recommendations = getRecommendations(user?.favoriteGenres ?? [], BOOKS);
    const popular = getPopularBooks(BOOKS);

    return `
      <section class="view container">
        <div class="section">
          <h1 class="headline-lg">안녕하세요, ${escapeHtml(user?.nickname ?? '독서러')}님! 👋</h1>
          <p class="text-muted">오늘의 새로운 이야기를 찾아보세요!</p>
          <div class="input-wrap" style="margin-top:1rem;">
            <span class="material-symbols-outlined">search</span>
            <input class="input input--search" id="home-search" placeholder="책 제목, 저자, 장르를 검색해 보세요..." />
          </div>
        </div>
        <div class="section">
          <div class="section-header"><h2 class="headline-md">회원님을 위한 맞춤 추천</h2></div>
          <div class="book-scroll">
            ${
              recommendations.length
                ? recommendations.map(renderHorizontalBookCard).join('')
                : '<p class="text-muted">관심 장르에 맞는 도서가 없습니다.</p>'
            }
          </div>
        </div>
        <div class="section">
          <h2 class="headline-md">지금 뜨고 있는 도서</h2>
          <div class="popular-list">${popular.map(renderPopularItem).join('')}</div>
        </div>
      </section>`;
  };

  const renderSearch = () => {
    const results = getSearchResults();
    const bookmarkIds = readBookmarks();

    return `
      <section class="view container">
        <div class="section">
          <div class="input-wrap">
            <span class="material-symbols-outlined">search</span>
            <input class="input input--search" id="search-input" value="${escapeHtml(state.searchQuery)}" placeholder="제목, 저자 또는 장르 검색..." />
          </div>
        </div>
        <div class="search-layout">
          <aside class="filters">
            <div class="filter-group">
              <h3>장르</h3>
              <button type="button" class="filter-chip ${state.searchGenre === '' ? 'active' : ''}" data-action="set-genre" data-genre="">전체</button>
              ${GENRES.map(
                (genre) =>
                  `<button type="button" class="filter-chip ${state.searchGenre === genre ? 'active' : ''}" data-action="set-genre" data-genre="${genre}">${genre}</button>`,
              ).join('')}
            </div>
            <div class="filter-group">
              <h3>대출 가능 여부</h3>
              <label class="filter-option"><input type="checkbox" id="filter-available" ${state.availableOnly ? 'checked' : ''} /> 대출 가능</label>
              <label class="filter-option"><input type="checkbox" id="filter-reservable" ${state.reservableOnly ? 'checked' : ''} /> 예약 가능</label>
            </div>
            <div class="filter-group">
              <h3>정렬 기준</h3>
              <select class="select input--plain" id="search-sort" style="padding-left:1rem;">
                <option value="popular" ${state.searchSort === 'popular' ? 'selected' : ''}>인기순</option>
                <option value="latest" ${state.searchSort === 'latest' ? 'selected' : ''}>최신순</option>
                <option value="title" ${state.searchSort === 'title' ? 'selected' : ''}>제목순</option>
              </select>
            </div>
          </aside>
          <div style="flex:1;">
            <p class="text-muted" style="margin-bottom:1rem;">검색 결과 ${results.length}권</p>
            ${
              results.length
                ? `<div class="results-grid">${results.map((book) => renderResultCard(book, bookmarkIds)).join('')}</div>`
                : `<div class="empty-state"><span class="material-symbols-outlined">search_off</span><h2 class="headline-md">검색 결과가 없습니다</h2><p class="text-muted">검색어와 필터를 조정해 보세요.</p></div>`
            }
          </div>
        </div>
      </section>`;
  };

  const renderDetail = () => {
    const book = getBookById(state.detailBookId);
    if (!book) return `<section class="view container"><p class="text-muted">도서를 찾을 수 없습니다.</p></section>`;
    const bookmarked = readBookmarks().includes(book.id);

    return `
      <section class="view container app-shell--detail">
        <button type="button" class="btn btn-ghost" data-action="go-back" style="margin-bottom:1rem;">
          <span class="material-symbols-outlined">arrow_back</span> 목록으로
        </button>
        <div class="detail-layout">
          <div class="detail-cover">
            <img src="${escapeHtml(book.cover)}" alt="${escapeHtml(book.title)} 표지" />
            ${renderStatusBadge(book.status)}
          </div>
          <div>
            <h1 class="headline-lg">${escapeHtml(book.title)}</h1>
            <p class="text-muted">${escapeHtml(book.author)} · ${book.publishedYear}년</p>
            <div class="detail-genres" style="margin:1rem 0;"><span class="genre-tag">${escapeHtml(book.genre)}</span></div>
            <div class="detail-summary">
              <h2 class="headline-md">줄거리</h2>
              <p>${escapeHtml(book.summary)}</p>
            </div>
          </div>
        </div>
      </section>
      <footer class="detail-bar">
        <div class="container-inner">
          <button type="button" class="btn btn-outline btn-icon ${bookmarked ? 'is-active' : ''}" data-action="toggle-bookmark" data-book-id="${book.id}" aria-label="북마크">
            <span class="material-symbols-outlined ${bookmarked ? 'filled' : ''}">bookmark</span>
          </button>
          ${
            book.status === 'available'
              ? `<button type="button" class="btn btn-primary btn-block" data-action="request-loan" data-book-id="${book.id}">대출 신청</button>`
              : `<button type="button" class="btn btn-secondary btn-block" data-action="request-reserve" data-book-id="${book.id}">예약 신청</button>`
          }
        </div>
      </footer>`;
  };

  const renderBookmarks = () => {
    const books = readBookmarks()
      .map(getBookById)
      .filter(Boolean);

    return `
      <section class="view container">
        <h1 class="headline-lg">나의 북마크</h1>
        <p class="text-muted" style="margin-bottom:1.5rem;">나만의 도서 보관함입니다.</p>
        ${
          books.length
            ? `<div class="bookmark-grid">${books.map(renderBookmarkCard).join('')}</div>`
            : `<div class="empty-state"><span class="material-symbols-outlined">auto_stories</span><h2 class="headline-md">북마크가 없습니다.</h2><p class="text-muted">관심 도서를 저장해 보세요.</p><button type="button" class="btn btn-primary btn-pill" data-action="go-search">도서 검색하기</button></div>`
        }
      </section>`;
  };

  const renderBottomNav = () => {
    if (!isLoggedIn() || state.view === 'signup' || state.view === 'login' || state.view === 'detail') {
      return '';
    }

    const items = [
      { id: 'home', label: '홈', icon: 'home' },
      { id: 'search', label: '검색', icon: 'search' },
      { id: 'bookmarks', label: '북마크', icon: 'bookmark' },
    ];

    return `
      <nav class="bottom-nav" aria-label="주요 메뉴">
        ${items
          .map(
            (item) => `
          <button type="button" class="${state.view === item.id ? 'active' : ''}" data-action="navigate" data-view="${item.id}">
            <span class="material-symbols-outlined ${state.view === item.id ? 'filled' : ''}">${item.icon}</span>
            ${item.label}
          </button>`,
          )
          .join('')}
      </nav>`;
  };

  const renderModal = () => {
    if (!state.modal) return '';
    return `
      <div class="modal-overlay" id="completion-modal" role="dialog" aria-modal="true">
        <div class="modal-panel">
          <div class="modal-icon"><span class="material-symbols-outlined">check_circle</span></div>
          <h2 class="modal-title">완료</h2>
          <p class="modal-message">${escapeHtml(COMPLETION_MESSAGES[state.modal.type])}</p>
          <button type="button" class="btn btn-primary btn-block" data-action="close-modal">확인</button>
        </div>
      </div>`;
  };

  const renderTopbar = () => {
    if (state.view === 'signup' || state.view === 'login') return '';
    return `
      <header class="topbar">
        <div class="brand"><span class="material-symbols-outlined">menu_book</span> BookStep</div>
        <div class="topbar-actions">
          ${
            isLoggedIn()
              ? `<button type="button" class="btn btn-ghost" data-action="logout">로그아웃</button>`
              : `<button type="button" class="btn btn-primary btn-pill" data-action="go-login">로그인</button>`
          }
        </div>
      </header>`;
  };

  const renderView = () => {
    switch (state.view) {
      case 'signup':
        return renderSignup();
      case 'login':
        return renderLogin();
      case 'home':
        return renderHome();
      case 'search':
        return renderSearch();
      case 'detail':
        return renderDetail();
      case 'bookmarks':
        return renderBookmarks();
      default:
        return renderLogin();
    }
  };

  const render = () => {
    const root = document.getElementById('app');
    if (!root) return;

    const shellClass = [
      'app-shell',
      state.view === 'signup' || state.view === 'login' ? 'app-shell--no-nav' : '',
      state.view === 'detail' ? 'app-shell--detail' : '',
    ]
      .filter(Boolean)
      .join(' ');

    root.innerHTML = `
      <div class="${shellClass}">
        ${renderTopbar()}
        <main id="app-main">${renderView()}</main>
        ${renderBottomNav()}
        ${renderModal()}
      </div>`;

    bindEvents();
  };

  const toggleBookmark = (bookId, showMessage = true) => {
    const bookmarks = readBookmarks();
    const exists = bookmarks.includes(bookId);
    const next = exists ? bookmarks.filter((id) => id !== bookId) : [...bookmarks, bookId];
    writeBookmarks(next);
    if (!exists && showMessage) showModal('bookmark');
    else render();
  };

  const addRequest = (bookId, type) => {
    const requests = readRequests();
    requests.push({ bookId, type, requestedAt: new Date().toISOString().slice(0, 10) });
    writeRequests(requests);
    showModal(type === 'loan' ? 'loan' : 'reserve');
  };

  const bindEvents = () => {
    document.getElementById('signup-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = /** @type {HTMLFormElement} */ (event.currentTarget);
      const formData = new FormData(form);
      const payload = {
        email: String(formData.get('email') ?? ''),
        password: String(formData.get('password') ?? ''),
        nickname: String(formData.get('nickname') ?? ''),
        favoriteGenres: state.signupGenres,
      };
      const error = validateSignup(payload);
      if (error) {
        state.error = error;
        render();
        return;
      }
      storageApi.write(STORAGE_KEYS.user, payload);
      storageApi.write(STORAGE_KEYS.login, true);
      showModal('signup');
      setTimeout(() => navigate('home'), 700);
    });

    document.getElementById('login-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = /** @type {HTMLFormElement} */ (event.currentTarget);
      const formData = new FormData(form);
      const payload = {
        email: String(formData.get('email') ?? ''),
        password: String(formData.get('password') ?? ''),
      };
      const error = validateLogin({ ...payload, storedUser: readUser() });
      if (error) {
        state.error = error;
        render();
        return;
      }
      storageApi.write(STORAGE_KEYS.login, true);
      showModal('login');
      setTimeout(() => navigate('home'), 700);
    });

    document.getElementById('home-search')?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        state.searchQuery = /** @type {HTMLInputElement} */ (event.target).value;
        navigate('search');
      }
    });

    document.getElementById('search-input')?.addEventListener('input', (event) => {
      state.searchQuery = /** @type {HTMLInputElement} */ (event.target).value;
      render();
    });

    document.getElementById('filter-available')?.addEventListener('change', (event) => {
      state.availableOnly = /** @type {HTMLInputElement} */ (event.target).checked;
      render();
    });

    document.getElementById('filter-reservable')?.addEventListener('change', (event) => {
      state.reservableOnly = /** @type {HTMLInputElement} */ (event.target).checked;
      render();
    });

    document.getElementById('search-sort')?.addEventListener('change', (event) => {
      state.searchSort = /** @type {HTMLSelectElement} */ (event.target).value;
      render();
    });

    document.getElementById('app')?.addEventListener('click', (event) => {
      const target = /** @type {HTMLElement} */ (event.target);
      const actionEl = target.closest('[data-action]');
      if (!actionEl) return;

      const action = actionEl.getAttribute('data-action');
      const bookId = Number(actionEl.getAttribute('data-book-id'));
      const genre = actionEl.getAttribute('data-genre');
      const view = actionEl.getAttribute('data-view');

      if (action === 'toggle-signup-genre' && genre) {
        state.signupGenres = state.signupGenres.includes(genre)
          ? state.signupGenres.filter((item) => item !== genre)
          : [...state.signupGenres, genre];
        render();
        return;
      }

      if (action === 'go-login') return navigate('login');
      if (action === 'go-signup') return navigate('signup');
      if (action === 'go-search') return guardAuth('search') && navigate('search');
      if (action === 'go-back') return navigate('search');
      if (action === 'close-modal') return hideModal();
      if (action === 'logout') {
        storageApi.write(STORAGE_KEYS.login, false);
        return navigate('login');
      }
      if (action === 'navigate' && view && guardAuth(view)) return navigate(view);
      if (action === 'open-detail' && bookId && guardAuth('detail')) {
        return navigate('detail', { bookId });
      }
      if (action === 'toggle-bookmark' && bookId) return toggleBookmark(bookId);
      if (action === 'remove-bookmark' && bookId) return toggleBookmark(bookId, false);
      if (action === 'request-loan' && bookId) return addRequest(bookId, 'loan');
      if (action === 'request-reserve' && bookId) return addRequest(bookId, 'reserve');
      if (action === 'set-genre') {
        state.searchGenre = genre ?? '';
        render();
      }
    });

    document.getElementById('completion-modal')?.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) hideModal();
    });
  };

  const init = () => {
    state.view = isLoggedIn() ? 'home' : readUser() ? 'login' : 'signup';
    render();
  };

  return { init, navigate, state, storageApi, render };
};

if (typeof document !== 'undefined') {
  createApp().init();
}

export { createApp, escapeHtml, renderStatusBadge };
