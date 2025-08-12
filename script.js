document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    // โค้ดจะมองหา ID ชื่อ "particle-container" จากไฟล์ HTML
    const particleContainer = document.getElementById('particle-container');

    revealButton.addEventListener('click', function() {
        hiddenMessage.classList.remove('hidden');
        revealButton.style.display = 'none';
    });
    
    const particlesArray = ['🤍', '🌸', '❤️'];

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.innerText = particlesArray[Math.floor(Math.random() * particlesArray.length)];

        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 5 + 8 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // บรรทัดนี้จะทำงานได้ เพราะ particleContainer ไม่ใช่ null แล้ว
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 13000);
    }

    setInterval(createParticle, 250);
});
