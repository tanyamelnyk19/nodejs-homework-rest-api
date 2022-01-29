import EmailService from './service';
import sender from './sender';

const { SenderSendgrid, SenderNodemailer } = sender;

export default { 
    EmailService, 
    SenderSendgrid, 
    SenderNodemailer 
};
