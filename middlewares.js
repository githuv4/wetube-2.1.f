import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: 1,
    id: 2155,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
