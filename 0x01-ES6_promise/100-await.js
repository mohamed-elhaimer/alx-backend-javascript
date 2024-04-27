import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const photoobject = await uploadPhoto();
    const userobject = await createUser();
    return {
      photo: photoobject,
      user: userobject,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;
