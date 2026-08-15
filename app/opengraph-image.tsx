import { ImageResponse } from "next/og";
import { SocialImageContent, socialImageSize } from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(<SocialImageContent />, { ...size });
}
