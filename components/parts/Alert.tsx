'use client'
import { AlertArgs, AlertTypes } from "@/lib/types";
import { FaRegThumbsUp, FaExclamationTriangle, FaExclamation, FaInfoCircle } from "react-icons/fa";

const Alert = ({ type, children }: AlertArgs)
  : JSX.Element => {
  const messageType = (input: string) => {
    switch (input) {
      case AlertTypes.SUCCESS:
        return "bg-success text-on-success";
      case AlertTypes.DANGER:
        return "bg-danger text-on-danger";
      case AlertTypes.WARNING:
        return "bg-warning text-on-warning";
      case AlertTypes.INFO:
        return "bg-neutral text-on-neutral";
      default:
        return "bg-neutral text-on-neutral";
    }
  }
  const IconType = ({ input }: { input: string }) => {
    switch (input) {
      case AlertTypes.SUCCESS:
        return <FaRegThumbsUp className="bg-success text-on-success" />;
      case AlertTypes.DANGER:
        return <FaExclamationTriangle className="bg-danger text-on-danger" />;
      case AlertTypes.WARNING:
        return <FaExclamation className="bg-warning text-on-warning" />;
      case AlertTypes.INFO:
        return <FaInfoCircle className="bg-neutral text-on-neutral" />;
      default:
        return <FaInfoCircle className="bg-neutral text-on-neutral" />;
    }
  }

  return (
    <div aria-label="Alert message box"
      className={`w-96 h-10 ${messageType(type)} flex flex-row justify-between items-center`}>
      <IconType input={type} />
      {children}
    </div>
  )
}

export default Alert;
