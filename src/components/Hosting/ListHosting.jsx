import { CiCircleCheck } from "react-icons/ci";

export const ListHosting = ({content}) => {
  return (
    <div>
        <span className="flex justify-center py-1 flex-wrap items-center text-lg font-semibold my-3">
            <CiCircleCheck className="size-12 px-2 text-primary w-14"/>{content}
        </span>
    </div>
  )
}
