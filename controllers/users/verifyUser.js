import repositoryUsers from '../../repository/users';
import { HttpCode } from '../../lib/constants';

const verifyUser = async (req, res, next) => {
    const verifyToken = req.params.token;
    const userFromToken = await repositoryUsers.findByVerifyToken(verifyToken);
     
    if (userFromToken) {
      await repositoryUsers.updateVerify(userFromToken.id, true);
      return res.status(HttpCode.OK).json({
        status: 'success',
        code: HttpCode.OK,
        data: { message: 'Success' },
      });
    };
    res.status(HttpCode.BAD_REQUEST).json({
      status: 'success',
      code: HttpCode.BAD_REQUEST,
      data: { message: 'Invalid token' },
    });
};

export default verifyUser;