import upload001 from "./upload-001.png.asset.json";
import upload002 from "./upload-002.png.asset.json";
import upload003 from "./upload-003.png.asset.json";
import upload004 from "./upload-004.png.asset.json";
import upload005 from "./upload-005.png.asset.json";
import upload006 from "./upload-006.png.asset.json";
import upload007 from "./upload-007.png.asset.json";
import upload008 from "./upload-008.png.asset.json";
import upload009 from "./upload-009.png.asset.json";
import upload010 from "./upload-010.png.asset.json";

export const uploadedPhotos = [
  { id: "upload-001", filename: "1.png", asset: upload001, url: upload001.url },
  { id: "upload-002", filename: "2.png", asset: upload002, url: upload002.url },
  { id: "upload-003", filename: "3.png", asset: upload003, url: upload003.url },
  { id: "upload-004", filename: "4.png", asset: upload004, url: upload004.url },
  { id: "upload-005", filename: "5.png", asset: upload005, url: upload005.url },
  { id: "upload-006", filename: "6.png", asset: upload006, url: upload006.url },
  { id: "upload-007", filename: "7.png", asset: upload007, url: upload007.url },
  { id: "upload-008", filename: "8.png", asset: upload008, url: upload008.url },
  { id: "upload-009", filename: "9.png", asset: upload009, url: upload009.url },
  { id: "upload-010", filename: "10.png", asset: upload010, url: upload010.url },
] as const;

export type UploadedPhoto = (typeof uploadedPhotos)[number];
