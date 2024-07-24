document.addEventListener('DOMContentLoaded', function () {
    const videoLinks = document.querySelectorAll('.selectorAll a');
    const mainVideo = document.getElementById('mainVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const nextButton = document.getElementById('nextButton');

    videoLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const videoSrc = this.getAttribute('data-video-src');
            const videoTitleText = this.getAttribute('data-video-title');
            const videoDescriptionText = this.getAttribute('data-video-description');

            mainVideo.src = videoSrc;
            videoTitle.textContent = videoTitleText;
            videoDescription.textContent = videoDescriptionText;
            mainVideo.play();
        });
    });

    let currentVideoIndex = 0;
    const videos = Array.from(videoLinks);

    nextButton.addEventListener('click', function () {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        const nextVideo = videos[currentVideoIndex];

        const videoSrc = nextVideo.getAttribute('data-video-src');
        const videoTitleText = nextVideo.getAttribute('data-video-title');
        const videoDescriptionText = nextVideo.getAttribute('data-video-description');

        mainVideo.src = videoSrc;
        videoTitle.textContent = videoTitleText;
        videoDescription.textContent = videoDescriptionText;
        mainVideo.play();
    });

    const mql = window.matchMedia("(max-width: 768px)");

    function handleTabletChange(e) {
        if (e.matches) {
            // Initialize Swiper if in mobile view
            const swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 10,
            });
        } else {
            // Destroy Swiper if not in mobile view
            if (document.querySelector('.swiper-container').swiper) {
                document.querySelector('.swiper-container').swiper.destroy(true, true);
            }
        }
    }

    mql.addListener(handleTabletChange);
    handleTabletChange(mql); // Initial check
});