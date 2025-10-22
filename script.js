// دالة التنقل
function goTo(section) {
  if (section === 'contact') {
    window.location.href = 'contact.html';
  } else if (section === 'works') {
    window.location.href = 'works.html';
  }
}

// 🎨 مصفوفة الألوان (16 لون)
const colors = [
  "#ff595e", "#ffca3a", "#8ac926", "#1982c4",
  "#6a4c93", "#f72585", "#b5179e", "#7209b7",
  "#560bad", "#480ca8", "#3a0ca3", "#4361ee",
  "#4cc9f0", "#06d6a0", "#ffd166", "#ef476f"
];

// عند الضغط في أي مكان بالصفحة
document.body.addEventListener("click", () => {
  // نختار لون عشوائي
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // نغير لون الخلفية
  document.body.style.backgroundColor = randomColor;
});
