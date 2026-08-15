import QRCode from "qrcode";

export async function generateQrSvg(
  data: string,
  colors: { dark: string; light: string }
): Promise<string> {
  return QRCode.toString(data, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: colors.dark, light: colors.light },
  });
}
