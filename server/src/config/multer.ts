import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

/**
 * crypto is a native node dependency that allows the creation of a random hash
 */

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
