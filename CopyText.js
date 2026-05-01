const btn = document.getElementById('copyBtn');
const input = document.getElementById('btcaddress');

btn.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value)
        .then(() => {
            alert('Copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});
