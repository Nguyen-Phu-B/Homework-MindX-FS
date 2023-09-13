import multer from "multer";
import fs from "fs";

const UPLOAD_DIRECTORY = "uploads/";

if (!fs.existsSync(UPLOAD_DIRECTORY)) {
    fs.mkdirSync(UPLOAD_DIRECTORY);
}

const multerOptions = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIRECTORY);
    },
    filename: () => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileExtenstion = file.originalName.split(".").pop();
        const originalFullname = file.originalName.split(".")[0];
        const filename = `${file.filename}-${uniqueSuffix}.${fileExtenstion}`;
        cb(null, filename);
    },
});

const uploadFile = multer({ storage: multerStorage });

export default uploadFile;
