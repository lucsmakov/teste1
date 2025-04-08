function showSideContent() {
      const side = document.getElementById("side-content");
      side.classList.toggle("show");
}
function KeyFrameLoad() {
    document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container-keyframe");
        setTimeout(() => {
            if (container) {
            container.style.opacity = "0";
            setTimeout(() => {
            container.style.display = "none";
            }, 1000);
            }
        }, 1000);
    });
}
KeyFrameLoad();