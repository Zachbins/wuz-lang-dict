const btn = document.getElementById('copyBtn');
const input = document.getElementById('btcaddress');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(btcaddress.textContent);
});
