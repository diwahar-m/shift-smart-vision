import appAxios from "./appAxios";

const makePostRequest = async (
  endpoint: string,
  body: unknown,
  headers = {}
) => {
//   const { userToken } = appStore();
  const { data } = await appAxios.post(endpoint, body, {
    headers: {
    //   Authorization: userToken ? `Token ${userToken}` : undefined,
      ...headers,
    },
  });
  return data;
};


export default makePostRequest;
