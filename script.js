document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const jasmineContainer = document.getElementById('jasmine-container');

    // ฟังก์ชันสำหรับแสดงข้อความ
    revealButton.addEventListener('click', function() {
        hiddenMessage.classList.remove('hidden');
        revealButton.style.display = 'none'; // ซ่อนปุ่มหลังจากกด
    });

    // ฟังก์ชันสร้างดอกมะลิ
    function createJasmine() {
        const jasmine = document.createElement('div');
        jasmine.classList.add('jasmine');

        // สุ่มตำแหน่งเริ่มต้นตามแนวนอน
        jasmine.style.left = Math.random() * 100 + 'vw';
        
        // สุ่มระยะเวลาที่ร่วงหล่น
        jasmine.style.animationDuration = Math.random() * 5 + 8 + 's'; // 8-13 วินาที

        // สุ่มความล่าช้าก่อนเริ่มร่วง
        jasmine.style.animationDelay = Math.random() * 5 + 's';

        // สุ่มขนาดเล็กน้อย
        const randomSize = Math.random() * 10 + 15; // 15px - 25px
        jasmine.style.width = randomSize + 'px';
        jasmine.style.height = randomSize + 'px';

        jasmineContainer.appendChild(jasmine);

        // ลบดอกมะลิออกจาก DOM หลังจาก Animation จบลงเพื่อไม่ให้เว็บช้า
        setTimeout(() => {
            jasmine.remove();
        }, 13000); // ต้องมากกว่า animation-duration สูงสุด
    }

    // สร้างดอกมะลิทุกๆ 300ms
    setInterval(createJasmine, 300);
});
