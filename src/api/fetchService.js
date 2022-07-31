import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004',
  headers: { 'Content-Type': 'application/json' },
});

const getService = async (url) => {
  const response = await instance.get(url);
  if (response.statusText === 'OK') {
    return response.data;
  }

  return response.statusText;
};

const postService = async (url, options) => {
  const response = await instance.post(url, options);

  if (response.statusText === 'Created') {
    return await getService(url);
  }

  return response.statusText;
};

const patchService = async (url, payload) => {
  const response = await instance.patch(url + `/${payload.id}`, payload);
  if (response.statusText === 'OK') {
    return await getService(url);
  }

  return response.statusText;
};

const deleteService = async (url, payload) => {
  const response = await instance.delete(url + `/${payload.id}`);

  if (response.statusText === 'OK') {
    return await getService(url);
  }

  return response.statusText;
};

export const fetchServise = async ({ url, method, payload }) => {
  if (!method || method === 'get') {
    return await getService(url);
  }

  if (method === 'post') {
    return await postService(url, payload);
  }

  if (method === 'patch') {
    return await patchService(url, payload);
  }

  if (method === 'delete') {
    return await deleteService(url, payload);
  }
};
