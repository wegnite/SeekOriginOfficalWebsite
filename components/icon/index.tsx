"use client";

import * as LucideIcons from "lucide-react";

// Map Remix icon names to Lucide equivalents
const iconMapping: { [key: string]: string } = {
  // Common icons
  "RiHomeLine": "Home",
  "RiHome2Line": "Home",
  "RiSearchLine": "Search",
  "RiUserLine": "User",
  "RiUserFill": "User",
  "RiSettingsLine": "Settings",
  "RiMailLine": "Mail",
  "RiMailFill": "Mail",
  "RiPhoneLine": "Phone",
  "RiPhoneFill": "Phone",
  "RiGithubFill": "Github",
  "RiGithubLine": "Github",
  "RiTwitterXFill": "Twitter",
  "RiTwitterXLine": "Twitter",
  "RiLinkedinBoxFill": "Linkedin",
  "RiLinkedinLine": "Linkedin",
  "RiDiscordFill": "MessageCircle",
  "RiDiscordLine": "MessageCircle",
  
  // Navigation
  "RiArrowLeftLine": "ArrowLeft",
  "RiArrowRightLine": "ArrowRight",
  "RiArrowUpLine": "ArrowUp",
  "RiArrowDownLine": "ArrowDown",
  "RiArrowLeftSLine": "ChevronLeft",
  "RiArrowRightSLine": "ChevronRight",
  "RiArrowUpSLine": "ChevronUp",
  "RiArrowDownSLine": "ChevronDown",
  "RiCloseLine": "X",
  "RiMenuLine": "Menu",
  "RiMenu2Line": "Menu",
  
  // Actions
  "RiAddLine": "Plus",
  "RiAddFill": "Plus",
  "RiSubtractLine": "Minus",
  "RiDeleteBinLine": "Trash",
  "RiDeleteBinFill": "Trash2",
  "RiEditLine": "Edit",
  "RiEditFill": "Edit",
  "RiSaveLine": "Save",
  "RiSaveFill": "Save",
  "RiDownloadLine": "Download",
  "RiUploadLine": "Upload",
  "RiShareLine": "Share",
  "RiShareFill": "Share2",
  "RiCopyLine": "Copy",
  "RiCopyFill": "Copy",
  
  // UI Elements
  "RiCheckLine": "Check",
  "RiCheckboxCircleLine": "CheckCircle",
  "RiCheckboxCircleFill": "CheckCircle2",
  "RiCloseCircleLine": "XCircle",
  "RiInformationLine": "Info",
  "RiInformationFill": "Info",
  "RiQuestionLine": "HelpCircle",
  "RiQuestionFill": "HelpCircle",
  "RiAlertLine": "AlertTriangle",
  "RiAlertFill": "AlertTriangle",
  "RiStarLine": "Star",
  "RiStarFill": "Star",
  "RiHeartLine": "Heart",
  "RiHeartFill": "Heart",
  
  // Media
  "RiImageLine": "Image",
  "RiImageFill": "Image",
  "RiVideoLine": "Video",
  "RiVideoFill": "Video",
  "RiMusicLine": "Music",
  "RiMusicFill": "Music",
  "RiMicLine": "Mic",
  "RiMicFill": "Mic",
  "RiCameraLine": "Camera",
  "RiCameraFill": "Camera",
  
  // Business/Work
  "RiBriefcaseLine": "Briefcase",
  "RiBriefcaseFill": "Briefcase",
  "RiCalendarLine": "Calendar",
  "RiCalendarFill": "Calendar",
  "RiTimeLine": "Clock",
  "RiTimeFill": "Clock",
  "RiTeamLine": "Users",
  "RiTeamFill": "Users",
  "RiGroupLine": "Users",
  "RiGroupFill": "Users",
  
  // Development
  "RiCodeLine": "Code",
  "RiCodeSLine": "Code2",
  "RiTerminalLine": "Terminal",
  "RiTerminalBoxLine": "Terminal",
  "RiBugLine": "Bug",
  "RiBugFill": "Bug",
  "RiRocketLine": "Rocket",
  "RiRocketFill": "Rocket",
  
  // Files & Folders
  "RiFileLine": "File",
  "RiFileFill": "File",
  "RiFileTextLine": "FileText",
  "RiFileTextFill": "FileText",
  "RiFolderLine": "Folder",
  "RiFolderFill": "Folder",
  "RiFolderOpenLine": "FolderOpen",
  "RiFolderOpenFill": "FolderOpen",
  
  // Special icons
  "RiSparkling2Line": "Sparkles",
  "RiSparklingLine": "Sparkles",
  "RiMagicLine": "Wand2",
  "RiRobot2Line": "Bot",
  "RiRobotLine": "Bot",
  "RiTargetLine": "Target",
  "RiEyeLine": "Eye",
  "RiEyeFill": "Eye",
  "RiEyeOffLine": "EyeOff",
  "RiEyeOffFill": "EyeOff",
  "RiCompassDiscoverLine": "Compass",
  "RiBookOpenLine": "BookOpen",
  "RiBookLine": "Book",
  "RiSpeedLine": "Gauge",
  "RiPaletteLine": "Palette",
  "RiEmotionSadFill": "Frown",
  "RiEmotionSadLine": "Frown",
  "RiNewspaperLine": "Newspaper",
  "RiHandshakeLine": "Handshake",
  "RiShieldCheckLine": "ShieldCheck",
  "RiCustomerService2Line": "Headphones",
  "RiFlashlightFill": "Zap",
  "RiFlashlightLine": "Zap",
  
  // Default fallback
  "default": "Circle"
};

export default function Icon({
  name,
  className,
  onClick,
}: {
  name: string;
  className?: string;
  onClick?: () => void;
}) {
  function getIcon(name: string): React.ElementType | null {
    // Try to find a mapping for the Remix icon name
    const lucideIconName = iconMapping[name] || iconMapping["default"];
    
    // Get the Lucide icon component
    const IconComponent = (LucideIcons as any)[lucideIconName];
    
    if (IconComponent) {
      return IconComponent;
    }
    
    // If no mapping found, try to use the name directly (in case it's already a Lucide icon name)
    const DirectIcon = (LucideIcons as any)[name];
    if (DirectIcon) {
      return DirectIcon;
    }
    
    // Fallback to a default icon
    return LucideIcons.Circle;
  }

  const IconComponent = getIcon(name) as React.ElementType;

  // Return null if no icon is found
  if (!IconComponent) return null;

  // Render the icon component
  return (
    <IconComponent
      className={`${className} cursor-pointer`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    />
  );
}