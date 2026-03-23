function setLang(lang) {
  document.body.classList.remove('en', 'zh');
  document.body.classList.add(lang);
  localStorage.setItem('vr-lang', lang);
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('.copyable').forEach((el) => {
    el.setAttribute('data-copy-label', lang === 'zh' ? '复制' : 'copy');
    el.setAttribute('data-copied-label', lang === 'zh' ? '已复制 ✓' : 'copied ✓');
  });
}
function initLang() { setLang(localStorage.getItem('vr-lang') || 'en'); }
function bindLangButtons() { document.querySelectorAll('.lang-btn').forEach((btn) => btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')))); }
function bindCopyBlocks() { document.querySelectorAll('.copyable').forEach((el) => el.addEventListener('click', async () => { await navigator.clipboard.writeText((el.getAttribute('data-copy-text') || el.innerText).trim()); el.classList.add('copied'); setTimeout(() => el.classList.remove('copied'), 1800); })); }
document.addEventListener('DOMContentLoaded', () => { initLang(); bindLangButtons(); bindCopyBlocks(); });
