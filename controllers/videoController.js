import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home(b2)", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home(b2)", videos: [] });
  }
  // res.send("home");
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  const videos = await Video.find({});
  res.render("Search", { pageTitle: "Search", searchingBy, videos });
};
export const video = (req, res) => res.send("video");

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const editVideo = async (req, res) => {
  res.render("editVideo", { pageTitle: "Video Detail" });
};
export const deleteVideo = (req, res) => res.send("deleteVideo");
