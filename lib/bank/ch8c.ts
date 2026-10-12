import type { Question } from "../types";
import { mc, num, tf, n } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch8c: Record<number, L> = {
  // Bài 46. Tìm số trung bình cộng
  46: {
    intro: "Muốn tìm số trung bình cộng của nhiều số, ta tính tổng của các số đó rồi chia tổng đó cho số các số hạng.",
    questions: [
      num("Tìm số trung bình cộng của 20 và 30.", (20 + 30) / 2),
      num("Tìm số trung bình cộng của 10, 20 và 30.", (10 + 20 + 30) / 3),
      num("Tìm số trung bình cộng của 5, 12 và 19.", (5 + 12 + 19) / 3),
      num("Tìm số trung bình cộng của 13, 14 và 18.", (13 + 14 + 18) / 3),
      num("Số cây trồng được của ba đội lần lượt là 15, 20 và 22. Trung bình mỗi đội trồng được bao nhiêu cây?", (15 + 20 + 22) / 3, undefined, "cây"),
      num("Số học sinh của 4 lớp lần lượt là 35, 37, 43 và 45. Trung bình mỗi lớp có bao nhiêu học sinh?", (35 + 37 + 43 + 45) / 4, undefined, "học sinh"),
      num("Các chặng đua xe đạp dài 60 km, 188 km, 42 km và 154 km. Trung bình mỗi chặng dài bao nhiêu ki-lô-mét?", (60 + 188 + 42 + 154) / 4, undefined, "km"),
      num("Số ghi ở nhuỵ hoa bằng trung bình cộng các số ghi ở cánh hoa 24, 28 và 26. Số ở nhuỵ hoa là bao nhiêu?", (24 + 28 + 26) / 3),
      num("Số ghi ở nhuỵ hoa bằng trung bình cộng các số ghi ở cánh hoa 17, 19, 21, 13 và 15. Số ở nhuỵ hoa là bao nhiêu?", (17 + 19 + 21 + 13 + 15) / 5),
      num("Nhà bác Vân có 8 bao thóc tẻ cân nặng 400 kg và 4 bao thóc nếp cân nặng 224 kg. Trung bình mỗi bao thóc nặng bao nhiêu ki-lô-gam?", (400 + 224) / 12, undefined, "kg"),
      num("Ngày thứ nhất, Rô-bốt làm được 20 cái bánh giấy. Ngày thứ hai làm được nhiều hơn ngày thứ nhất 4 cái. Trung bình mỗi ngày làm được bao nhiêu cái bánh?", (20 + 24) / 2, undefined, "cái"),
      num("Trung bình cộng của hai số là 15. Biết một trong hai số là 18. Số còn lại là số nào?", 15 * 2 - 18, "Tổng hai số: 15 × 2 = 30; số còn lại: 30 – 18 = 12."),
      tf("Số trung bình cộng của hai số 8 và 12 bằng 10.", true),
    ],
  },

  // Bài 47. Bài toán liên quan đến rút về đơn vị
  47: {
    intro:
      "Bài toán rút về đơn vị gồm hai bước: bước 1 tìm giá trị của một đơn vị (bằng phép chia); bước 2 tìm giá trị của nhiều đơn vị theo yêu cầu (bằng phép nhân hoặc phép chia).",
    questions: [
      num("Có 36 cái bánh xếp đều vào 6 hộp. Hỏi 4 hộp như vậy có bao nhiêu cái bánh?", (36 / 6) * 4, undefined, "cái"),
      num("Có 20 kg đường chia đều vào 10 túi. Hỏi 3 túi như vậy có bao nhiêu ki-lô-gam đường?", (20 / 10) * 3, undefined, "kg"),
      num("Xếp đều 60 quả trứng vào 6 khay. Hỏi 4 khay trứng như vậy có bao nhiêu quả?", (60 / 6) * 4, undefined, "quả"),
      num("2 kg muối giá 11 000 đồng. Hỏi 4 kg muối cùng loại giá bao nhiêu đồng?", (11000 / 2) * 4, "1 kg muối: 11 000 : 2 = 5 500 đồng; 4 kg: 5 500 × 4 = 22 000 đồng.", "đồng"),
      num("Có 18 l mật ong đựng đều vào 6 can. Hỏi 12 l mật ong đựng đều vào được mấy can như vậy?", 12 / (18 / 6), undefined, "can"),
      num("Việt mua 5 chiếc thước đo góc cùng loại phải trả 40 000 đồng. Hỏi Mai có 24 000 đồng thì mua được mấy chiếc thước đo góc loại đó?", 24000 / (40000 / 5), "Một chiếc: 40 000 : 5 = 8 000 đồng; 24 000 : 8 000 = 3 chiếc.", "chiếc"),
      num("24 hộp sữa chua đóng đều được vào 6 vỉ. Hỏi 16 hộp sữa chua cùng loại đóng được mấy vỉ như vậy?", 16 / (24 / 6), undefined, "vỉ"),
      num("Việt đã đổi 9 kg giấy để được 3 cây. Hỏi Mai đổi 12 kg giấy cùng loại thì được mấy cây?", 12 / (9 / 3), undefined, "cây"),
      num("Bạn Việt xếp 4 que tính được một hình vuông có chu vi 60 cm. Một hình tam giác đều xếp bằng 3 que tính cùng loại có chu vi bao nhiêu xăng-ti-mét?", (60 / 4) * 3, "Mỗi que tính dài 60 : 4 = 15 cm; chu vi tam giác 15 × 3 = 45 cm.", "cm"),
      num("Một thùng chứa 72 cái bút chì xếp đều vào 6 hộp. Mỗi hộp có bao nhiêu cái bút chì?", 72 / 6, undefined, "cái"),
      mc("Muốn giải bài toán “Có 24 quả cam xếp đều vào 4 đĩa. Hỏi 6 đĩa như vậy có bao nhiêu quả cam?”, bước đầu tiên ta cần tìm:", "số quả cam ở mỗi đĩa", ["số quả cam ở 6 đĩa", "số đĩa cần có", "tổng số quả cam và số đĩa"]),
    ],
  },

  // Bài 48. Luyện tập chung
  48: {
    intro: "Ôn lại: nhân, chia với 10, 100, 1 000; nhân, chia với số có một, hai chữ số; tính chất của phép nhân; trung bình cộng và rút về đơn vị.",
    questions: [
      num("Tính nhẩm: 48 256 × 10 = ?", 482560),
      num("Tính nhẩm: 5 437 × 100 = ?", 543700),
      num("Tính nhẩm: 7 192 × 1 000 = ?", 7192000),
      num("Tính nhẩm: 625 400 : 100 = ?", 6254),
      num("Tính nhẩm: 960 000 : 1 000 = ?", 960),
      num("Đặt tính rồi tính: 91 207 × 8 = ?", 91207 * 8),
      num("Đặt tính rồi tính: 37 872 : 9 = ?", 37872 / 9),
      num("Đặt tính rồi tính: 2 615 × 63 = ?", 2615 * 63),
      num("Đặt tính rồi tính: 175 937 : 35 = ? (chỉ ghi thương)", Math.floor(175937 / 35)),
      tf("Mảnh vườn hoa hồng hình chữ nhật dài 14 m, rộng 10 m và mảnh vườn hoa cúc hình vuông cạnh 12 m có chu vi bằng nhau.", true, "Cả hai đều có chu vi 48 m."),
      tf("Mảnh vườn hoa hồng (14 m × 10 m) có diện tích bằng mảnh vườn hoa cúc (hình vuông cạnh 12 m).", false, "140 m² và 144 m²."),
      num("Khối 4 của một trường gồm 1 lớp có 27 học sinh và 6 lớp, mỗi lớp 34 học sinh. Trung bình mỗi lớp khối 4 có bao nhiêu học sinh?", (27 + 6 * 34) / 7, undefined, "học sinh"),
      num("Tính nhẩm: 70 × 60 = ?", 4200),
      num("Tính nhẩm: 900 × 30 = ?", 27000),
      num("Tính nhẩm: 28 000 : 400 = ?", 70),
      num("Một cửa hàng nhập về 15 thùng xoài nặng như nhau, cân nặng tất cả 675 kg. Cửa hàng đã bán hết 8 thùng. Còn lại bao nhiêu ki-lô-gam xoài?", (675 / 15) * (15 - 8), "Mỗi thùng: 675 : 15 = 45 kg; còn 7 thùng: 45 × 7 = 315 kg.", "kg"),
      mc("Cửa ghi phép tính có kết quả lớn nhất giấu món quà. Cửa nào có kết quả lớn nhất? (A: 272 000 : 8; B: 3 900 × 9; C: 963 000 : 30; D: 500 × 70)", "Cửa B", ["Cửa A", "Cửa C", "Cửa D"], "A = 34 000; B = 35 100; C = 32 100; D = 35 000."),
      num("Tính bằng cách thuận tiện: 512 × 20 × 5 = ?", 512 * 20 * 5),
      num("Tính bằng cách thuận tiện: 125 × 32 × 8 = ?", 125 * 32 * 8),
      num("Tính bằng cách thuận tiện: 930 × 65 + 65 × 70 = ?", 65 * (930 + 70)),
      num("Số ?  ? × 7 = 14 742", 14742 / 7),
      num("Số ?  ? : 24 = 815", 815 * 24),
      num("Có 72 cái bút chì xếp đều vào 6 hộp. Có 760 cái bút chì cùng loại thì xếp được nhiều nhất bao nhiêu hộp như thế?", Math.floor(760 / 12), "Mỗi hộp 72 : 6 = 12 cái; 760 : 12 = 63 (dư 4).", "hộp"),
      tf("851 496 : 42 = 20 273 (dư 30)", true),
    ],
  },
};
