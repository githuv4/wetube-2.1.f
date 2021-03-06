const formContainer = document.querySelector(".form-container");
const videoFileBtn = document.getElementById("jsFileBtn");
const videoLinkBtn = document.getElementById("jsLinkBtn");
const youtubeLinkBtn = document.getElementById("jsYoutubeBtn");
const fileUrlInput = document.getElementById("jsFileUrlInput");
// export const inputType = document.getElementById("jsInputType");

const handleVideoLinkBtn = () => {
  fileUrlInput.innerHTML = `<input type="text", name="link", placeholder="http://">`;
};
const handleVideoFileBtn = () => {
  fileUrlInput.innerHTML = `<input type="file", name="videoFile", accept="video/*">`;
};
const handleYoutubeLinkBtn = () => {
  fileUrlInput.innerHTML = `<input type="text", name="youtubeId", placeholder="Youtube Video ID">`;
};

const init = () => {
  videoFileBtn.addEventListener("click", handleVideoFileBtn);
  videoLinkBtn.addEventListener("click", handleVideoLinkBtn);
  youtubeLinkBtn.addEventListener("click", handleYoutubeLinkBtn);
};

if (videoFileBtn) {
  init();
}
