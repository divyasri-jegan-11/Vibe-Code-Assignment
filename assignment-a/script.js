function randomRef(len = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function showStatus(msg, ok = true) {
  const status = document.getElementById('status');
  status.style.display = 'block';
  status.style.background = ok ? '#e8fff2' : '#ffe8e8';
  status.style.color = ok ? '#075' : '#a00';
  status.innerText = msg;
}

document.getElementById('payBtn').addEventListener('click', () => {
  const pa = encodeURIComponent(document.getElementById('vpa').value);
  const pn = encodeURIComponent(document.getElementById('pname').value);
  const am = encodeURIComponent(document.getElementById('amount').innerText);
  const tn = encodeURIComponent(document.getElementById('tn').value);
  const tr = randomRef(12);
  const cu = 'INR';

  const upi = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}&tr=${tr}`;
  const intent = `intent://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}&tr=${tr}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;

  showStatus('Opening your UPI app...');

  window.location.href = upi;

  setTimeout(() => {
    try {
      window.location.href = intent;
    } catch (e) {}
  }, 1000);

  setTimeout(() => {
    showStatus('If the UPI app didn’t open, try manually scanning or enter payment reference.', false);

    if (!document.getElementById('paidBtn')) {
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.id = 'paidBtn';
      btn.innerText = 'I Paid (Manual Confirmation)';
      btn.onclick = () => showStatus('Marked as PAID manually. For automation, use SMS confirmation system.', true);
      document.querySelector('.card').appendChild(btn);
    }
  }, 2000);
});
