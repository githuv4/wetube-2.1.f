import routes from "./routes"

export const localsMiddleware = (req,res,next) =>{
    res.locals.routes=routes;
    res.locals.siteName="Wetube";
    next();
}