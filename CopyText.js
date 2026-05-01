const btn = document.getElementById('copyBtn');
const input = document.getElementById('btcaddress');

copyTextBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(btcaddress.textContent);
});
