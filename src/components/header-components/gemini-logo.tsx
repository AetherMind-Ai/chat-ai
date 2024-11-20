import { FaCaretDown, FaRegCheckCircle } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";
import DevButton from "../dev-components/dev-button";
import DevPopover from "../dev-components/dev-popover";

const GeminiLogo = () => {
  return (
    <DevPopover
      popButton={
        <DevButton size="sm" rounded="sm" className="text-lg gap-2">
          MindBot
          <FaCaretDown />
        </DevButton>
      }
    >
      <div className="py-2">
        <DevButton
          variant="v3"
          className="w-full !justify-between gap-3 group"
          rounded="none"
        >
          <span className="flex items-center gap-2">
            <SiGooglegemini className="text-lg text-[#4E82EE]" />
            MindBot 1.2
          </span>
          <FaRegCheckCircle className="text-xl" />
        </DevButton>
      </div>
    </DevPopover>
  );
};

export default GeminiLogo;
