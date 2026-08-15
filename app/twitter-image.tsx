import { ImageResponse } from "next/og";
import { SocialImageContent, socialImageSize } from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SocialImageContent />, { ...size });
}
