import { HttpCode } from '../../lib/constants';
import AuthService from '../../service/auth';
import emailService from '../../service/email';

const { 
    EmailService, 
    SenderSendgrid, 
    // SenderNodemailer,
} = emailService;

const authService =  new AuthService();

const registration =  async (req, res, next) => {
    try {
        const { email } = req.body;
        const isUserExist = await authService.isUserExist(email);
        if (isUserExist) {
            return res.status(HttpCode.CONFLICT)
            .json({
                status: 'error',
                code: HttpCode.CONFLICT,
                message: 'Email in use',
            });
        };

        const userData = await authService.create(req.body);
        const emailService = new EmailService(
            process.env.NODE_ENV,
            new SenderSendgrid(),
        );
    
        const isSend = await emailService.sendVerifyEmail(
            email,
            userData.name,
            userData.verifyTokenEmail,
        );
        delete userData.verifyTokenEmail;
    
        res.status(HttpCode.CREATED).json({
            status: 'success',
            code: HttpCode.CREATED,
            data: { ...userData, isSendEmailVerify: isSend },
        });
    } catch (err) {
      next(err);
    }
};

export default registration;