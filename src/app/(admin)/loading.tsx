import { Icons } from "@/components/global/Icons/Icons";

const Loading = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Icons.spinner className="animate-spin" />
    </div>
  );
};

export default Loading;
