/** @param {'loan'|'reserve'|'bookmark'|'signup'|'login'} type */
const showCompletionModal = (type, customMessage) => {
  const messages = {
    loan: '대출 신청이 완료되었습니다.',
    reserve: '예약 신청이 완료되었습니다.',
    bookmark: '북마크에 저장되었습니다.',
    signup: '회원가입이 완료되었습니다.',
    login: '로그인되었습니다.',
  };
  const icons = {
    loan: 'menu_book',
    reserve: 'event_available',
    bookmark: 'bookmark',
    signup: 'celebration',
    login: 'login',
  };

  const overlay = document.getElementById('completion-modal');
  const icon = document.getElementById('completion-modal-icon');
  const message = document.getElementById('completion-modal-message');

  if (!overlay || !icon || !message) return;

  icon.textContent = icons[type] ?? 'check_circle';
  message.textContent = customMessage ?? messages[type] ?? '완료되었습니다.';
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
};

const hideCompletionModal = () => {
  const overlay = document.getElementById('completion-modal');
  if (!overlay) return;
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('completion-modal-close')?.addEventListener('click', hideCompletionModal);
  document.getElementById('completion-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) hideCompletionModal();
  });
});
