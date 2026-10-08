import upload001 from "./upload-001.png";
import upload002 from "./upload-002.png";
import upload003 from "./upload-003.png";
import upload004 from "./upload-004.png";
import upload005 from "./upload-005.png";
import upload006 from "./upload-006.png";
import upload007 from "./upload-007.png";
import upload008 from "./upload-008.png";
import upload009 from "./upload-009.png";
import upload010 from "./upload-010.png";
import upload011 from "./upload-011.png";
import upload012 from "./upload-012.png";
import upload013 from "./upload-013.png";
import upload014 from "./upload-014.png";
import upload015 from "./upload-015.png";
import upload016 from "./upload-016.png";
import upload017 from "./upload-017.png";
import upload018 from "./upload-018.png";
import upload019 from "./upload-019.png";
import upload020 from "./upload-020.png";
import upload051 from "./upload-051.png";
import upload052 from "./upload-052.png";
import upload053 from "./upload-053.png";
import upload054 from "./upload-054.png";
import upload055 from "./upload-055.png";
import upload056 from "./upload-056.png";

export const uploadedPhotos = [
  { id: "upload-001", filename: "1.png", url: upload001 },
  { id: "upload-002", filename: "2.png", url: upload002 },
  { id: "upload-003", filename: "3.png", url: upload003 },
  { id: "upload-004", filename: "4.png", url: upload004 },
  { id: "upload-005", filename: "5.png", url: upload005 },
  { id: "upload-006", filename: "6.png", url: upload006 },
  { id: "upload-007", filename: "7.png", url: upload007 },
  { id: "upload-008", filename: "8.png", url: upload008 },
  { id: "upload-009", filename: "9.png", url: upload009 },
  { id: "upload-010", filename: "10.png", url: upload010 },
  { id: "upload-011", filename: "11.png", url: upload011 },
  { id: "upload-012", filename: "12.png", url: upload012 },
  { id: "upload-013", filename: "13.png", url: upload013 },
  { id: "upload-014", filename: "14.png", url: upload014 },
  { id: "upload-015", filename: "15.png", url: upload015 },
  { id: "upload-016", filename: "16.png", url: upload016 },
  { id: "upload-017", filename: "17.png", url: upload017 },
  { id: "upload-018", filename: "18.png", url: upload018 },
  { id: "upload-019", filename: "19.png", url: upload019 },
  { id: "upload-020", filename: "20.png", url: upload020 },
  { id: "upload-051", filename: "51.png", url: upload051 },
  { id: "upload-052", filename: "52.png", url: upload052 },
  { id: "upload-053", filename: "53.png", url: upload053 },
  { id: "upload-054", filename: "54.png", url: upload054 },
  { id: "upload-055", filename: "55.png", url: upload055 },
  { id: "upload-056", filename: "56.png", url: upload056 },
] as const;

export type UploadedPhoto = (typeof uploadedPhotos)[number];