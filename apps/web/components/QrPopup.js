import { useQRCode } from "next-qrcode";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const QrPopup = ({ link, trigger }) => {
  const { Image } = useQRCode(); 
  return (
    <Popup trigger={trigger} modal nested>
      <Image text={link}/>
    </Popup>
  );
};