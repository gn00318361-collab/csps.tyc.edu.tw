(() => {
  const imagePools = {
    media: [
      {
        src: "assets/img-media-random-1.jpg",
        alt: "Students working with mixed media materials",
        position: "center 52%",
      },
      {
        src: "assets/img-media-random-2.jpg",
        alt: "Students testing media and shaping materials",
        position: "center 46%",
      },
      {
        src: "assets/img-media-random-3.jpg",
        alt: "Student creating a project in class",
        position: "center 42%",
      },
    ],
    animation: [
      {
        src: "assets/img-animation-random-1.jpg",
        alt: "Student adjusting an animation shooting setup",
        position: "center 38%",
      },
      {
        src: "assets/img-animation-random-2.jpg",
        alt: "Students showing animation class projects",
        position: "center 28%",
      },
      {
        src: "assets/img-animation-random-3.jpg",
        alt: "Student using an animation frame setup",
        position: "center 44%",
      },
    ],
  };

  document.querySelectorAll("img[data-random-group]").forEach((img) => {
    const groupName = img.dataset.randomGroup;
    const pool = imagePools[groupName];

    if (!pool || pool.length === 0) return;

    const storageKey = `random-image-${groupName}`;
    const lastIndex = Number.parseInt(sessionStorage.getItem(storageKey) ?? "-1", 10);
    let nextIndex = Math.floor(Math.random() * pool.length);

    if (pool.length > 1 && Number.isInteger(lastIndex) && nextIndex === lastIndex) {
      nextIndex = (nextIndex + 1) % pool.length;
    }

    sessionStorage.setItem(storageKey, String(nextIndex));
    const selected = pool[nextIndex];
    img.src = selected.src;
    img.alt = selected.alt;

    if (selected.position) {
      img.style.objectPosition = selected.position;
    }
  });
})();
