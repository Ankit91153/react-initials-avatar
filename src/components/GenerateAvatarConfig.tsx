import { getInitials, type InitialOptions } from "../utils/getInitials";

export interface StyleProps {
  size?: number;
  radius?: number | string;
  bgColor?: string;
  textColor?: string;

  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
}

export interface Props {
  name: string;
  styles?: StyleProps;
  options?: InitialOptions;
}

const GenerateAvatarConfig = ({
  name,
  styles = {},
  options = {},
}: Props) => {
  const {
    size = 50,
    radius = "50%",
    bgColor = "#4f46e5",
    textColor = "#ffffff",

    fontFamily = "inherit",
    fontSize,
    fontWeight = 600,
    lineHeight,
    letterSpacing = 0,
  } = styles;

  const initials = getInitials(name, options);

  // Auto calculate font size if not provided
  const computedFontSize = fontSize ?? size * 0.4;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundColor: bgColor,
        color: textColor,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        fontFamily,
        fontSize: computedFontSize,
        fontWeight,
        lineHeight: lineHeight ?? `${size}px`,
        letterSpacing,

        userSelect: "none",
      }}
    >
      {initials}
    </div>
  );
};

export default GenerateAvatarConfig;
