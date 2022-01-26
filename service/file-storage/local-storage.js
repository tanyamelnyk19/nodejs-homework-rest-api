import path from "path";
import fs from "fs/promises";
import Users from "../../repository/users";

class LocalStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filename = file.filename;
    this.filePath = file.path;
    this.folderAvatars = process.env.FOLDER_FOR_AVATARS;
  }

  async save() {
  // куда складываем аватарки
    const destination = path.join(this.folderAvatars, this.userId);
  // создаем папку для аватарок (если ее нет)
    await fs.mkdir(destination, { recursive: true });
  // переносим аватар из папки uploads в папку avatars
    await fs.rename(this.filePath, path.join(destination, this.filename)); // avatars/userId/filename
  // создаем путь для API
    const avatarUrl = path.normalize(path.join(this.userId, this.filename)); // userId/filename
  // сохраняем новый путь к файлу у юзера
    await Users.updateAvatar(this.userId, avatarUrl);
    return avatarUrl;
  }
}

export default LocalStorage;