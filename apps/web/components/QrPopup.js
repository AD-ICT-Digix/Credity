import { useQRCode } from "next-qrcode";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const QrPopup = ({link, trigger}) => {
  const { Image } = useQRCode({
    options: {
      level: "H",
      margin: 10,
      scale: 4,
      width: 128,
      color: {
        dark: "#000000ff",
        light: "#ffffffff",
      },
    },
  });

  return (
    <Popup trigger={trigger} position="right center">
      <Image text={link} />
    </Popup>
  );
}

