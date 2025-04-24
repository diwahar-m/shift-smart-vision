import { Bars } from "react-loader-spinner";

export default function AppLoader() {
  return (
    <Bars
      height="80"
      width="80"
      color="#0000ff"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
