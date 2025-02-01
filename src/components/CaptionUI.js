import React from "react";
import { useMeetingAppContext } from "../MeetingAppContextDef";

const CaptionUI = () => {
  const { transcript, isTranscribing } = useMeetingAppContext();

  return (
    <div
      className={`${
        isTranscribing ? "fixed" : "hidden"
      } rounded-sm bottom-[10%] left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-gray-100 p-4 text-left align-middle shadow-xl`}
    >
      {transcript}
    </div>
  );
};

export { CaptionUI };
