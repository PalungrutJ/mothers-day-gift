document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const particleContainer = document.getElementById('particle-container');

    revealButton.addEventListener('click', function() {
        hiddenMessage.classList.remove('hidden');
        revealButton.style.display = 'none';
    });
    
    // รายการอิโมจิที่จะใช้
    const particlesArray = ['🤍', '🌸', '❤️'];

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // สุ่มเลือกอิโมจิจากใน Array
        particle.innerText = particlesArray[Math.floor(Math.random() * particlesArray.length)];

        // สุ่มตำแหน่งเริ่มต้นและ Animation
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 5 + 8 + 's'; // 8-13 วินาที
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particleContainer.appendChild(particle);

        // ลบ Particle ออกจาก DOM หลังจาก Animation จบลง
        setTimeout(() => {
            particle.remove();
        }, 13000); // 13 วินาที
    }

    // สร้าง Particle ทุกๆ 250ms (ถี่ขึ้นเล็กน้อย)
    setInterval(createParticle, 250);
});
