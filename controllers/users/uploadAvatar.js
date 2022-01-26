import { HttpCode } from '../../lib/constants';
import fileStorage from '../../service/file-storage';

const uploadAvatar =  async (req, res, next) => {
    const uploadService = new fileStorage.UploadFileService(
        fileStorage.LocalFileStorage, 
        req.file, 
        req.user
    );
    const avatarUrl = await uploadService.updateAvatar();
    res.status(HttpCode.OK)
    .json({
        status: 'success',
        code: HttpCode.OK,
        data: {avatarUrl},
    });
};

export default uploadAvatar;