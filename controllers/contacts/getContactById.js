import repositoryContacts from '../../repository/contacts';
import { HttpCode } from '../../lib/constants';

const getContactById = async (req, res, next) => {
    const { id } = req.params;
    const { id: userId } = req.user;
    const contact = await repositoryContacts.getContactById(userId, id);
    if (contact) {
      return res.status(HttpCode.OK)
      .json({
        status: 'success',
        code: HttpCode.OK,
        data: { contact },
    });
    }
    res.status(HttpCode.NOT_FOUND)
    .json({
      status: 'error',
      code: HttpCode.NOT_FOUND,
      message: "Not found",
  })
};

export default getContactById;