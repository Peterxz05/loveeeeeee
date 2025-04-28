function goToLovePage() {
    document.getElementById('introPage').classList.remove('active');
    document.getElementById('lovePage').classList.add('active');
  }
  
  function yes() {
    document.getElementById('lovePage').classList.remove('active');
    document.getElementById('celebratePage').classList.add('active');
  
    document.body.style.background = 'linear-gradient(135deg, #ffc0cb, #ffe4e1)'; // เปลี่ยนพื้นหลังหวานๆ
  
    startBackgroundHearts(); // หัวใจลอย
    startFireworks();        // พลุหัวใจ
  }
  
  function no() {
    alert("แงงงง ทำไมอ่าา 😢");
  }
  
  function moveButton() {
    const button = document.querySelector('.no');
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
    button.style.position = 'absolute';
  }
  
  function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = "-1"; // ใส่ไว้ใต้ตัวหนังสือ
  
    let hearts = [];
  
    function createHeart(x, y) {
      for (let i = 0; i < 20; i++) {
        hearts.push({
          x: x,
          y: y,
          size: Math.random() * 10 + 5,
          speedX: (Math.random() - 0.5) * 4,
          speedY: (Math.random() - 0.5) * 4,
          alpha: 1
        });
      }
    }
  
    function drawHeart(x, y, size, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 50, size / 50);
      ctx.beginPath();
      ctx.moveTo(25, 15);
      ctx.bezierCurveTo(25, 5, 40, 0, 50, 10);
      ctx.bezierCurveTo(60, 0, 75, 5, 75, 15);
      ctx.bezierCurveTo(75, 30, 50, 45, 25, 60);
      ctx.bezierCurveTo(0, 45, -25, 30, -25, 15);
      ctx.bezierCurveTo(-25, 5, -10, 0, 0, 10);
      ctx.bezierCurveTo(10, 0, 25, 5, 25, 15);
      ctx.closePath();
      ctx.fillStyle = `rgba(255,105,180,${alpha})`; // สีชมพูสด
      ctx.fill();
      ctx.restore();
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      hearts.forEach((h, index) => {
        h.x += h.speedX;
        h.y += h.speedY;
        h.alpha -= 0.01;
        if (h.alpha <= 0) {
          hearts.splice(index, 1);
        }
      });
  
      hearts.forEach(h => {
        drawHeart(h.x, h.y, h.size, h.alpha);
      });
  
      requestAnimationFrame(animate);
    }
  
    canvas.addEventListener('click', (e) => {
      createHeart(e.clientX, e.clientY);
    });
  
    setInterval(() => {
      createHeart(Math.random() * canvas.width, Math.random() * canvas.height);
    }, 600);
  
    animate();
  }
  
  function startBackgroundHearts() {
    const canvas = document.getElementById('backgroundHearts');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.zIndex = "-2"; // ไว้ล่างสุด
  
    let hearts = [];
  
    for (let i = 0; i < 50; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedY: Math.random() * 1 + 0.5,
        alpha: Math.random() * 0.5 + 0.5
      });
    }
  
    function drawHeart(x, y, size, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 50, size / 50);
      ctx.beginPath();
      ctx.moveTo(25, 15);
      ctx.bezierCurveTo(25, 5, 40, 0, 50, 10);
      ctx.bezierCurveTo(60, 0, 75, 5, 75, 15);
      ctx.bezierCurveTo(75, 30, 50, 45, 25, 60);
      ctx.bezierCurveTo(0, 45, -25, 30, -25, 15);
      ctx.bezierCurveTo(-25, 5, -10, 0, 0, 10);
      ctx.bezierCurveTo(10, 0, 25, 5, 25, 15);
      ctx.closePath();
      ctx.fillStyle = `rgba(255,182,193,${alpha})`; // สีชมพูอ่อน
      ctx.fill();
      ctx.restore();
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      hearts.forEach(h => {
        h.y += h.speedY;
        if (h.y > canvas.height) {
          h.y = -50;
          h.x = Math.random() * canvas.width;
        }
        drawHeart(h.x, h.y, h.size, h.alpha);
      });
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  