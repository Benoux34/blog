import { SquareX, UploadCloud } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import { WidgetType } from "../entities";
import { onClickDeleteWidget } from "./utils";

type Props = {
  index: number;
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const DropzoneEditor = ({ index, setAddedWidgets }: Props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  console.log(files);

  const handleDeleteWidget = onClickDeleteWidget(index, setAddedWidgets);

  return (
    <div className="relative h-[200px] border border-dashed cursor-pointer mb-2">
      <div className="absolute -top-5 right-0 flex gap-x-1">
        <SquareX
          className="text-gray-400 h-4 w-4"
          strokeWidth={1}
          onClick={handleDeleteWidget}
        />
      </div>
      <section className="h-full w-full">
        <div {...getRootProps({ className: "h-full" })}>
          <input {...getInputProps()} />
          <div className="h-full flex flex-col justify-center items-center">
            <UploadCloud className="h-8 w-8 text-slate-500 mb-3" />
            <p className="text-sm text-slate-500">
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { DropzoneEditor };
