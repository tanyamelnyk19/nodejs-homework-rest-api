import User from '../../model/user';

const create = async (body) => {
    const user = new User(body);
    return await user.save();
};

export default create;