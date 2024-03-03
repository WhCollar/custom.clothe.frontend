import { axiosInstance } from 'shared/model/client.instance';

interface RequestForm {
  name: string;
  phone: string;
  commentary?: string;
}

export const sendForm = async (data: RequestForm) => {
  await axiosInstance.post('request/form', data);
};
