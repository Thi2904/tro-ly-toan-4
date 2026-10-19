import type { Question } from "../types";
import { mc, num, fr } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch12: Record<number, L> = {
  // Bài 63. Phép nhân phân số
  63: {
    intro:
      "Muốn nhân hai phân số, ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số: {a/b} × {c/d} = {a × c / b × d}. Muốn nhân phân số với số tự nhiên: {a/b} × n = {a × n / b}. Nên rút gọn trước hoặc sau khi nhân.",
    questions: [
      mc("Tính: {2/5} × {3/7} = ?", fr(6, 35), [fr(5, 12), fr(6, 12), fr(5, 35)]),
      mc("Tính: {5/6} × {3/10} = ? (rút gọn kết quả)", fr(1, 4), [fr(15, 60), fr(8, 16), fr(8, 60)], "{15/60} = {1/4}."),
      mc("Tính: {7/9} × {3/14} = ? (rút gọn kết quả)", fr(1, 6), [fr(21, 126), fr(10, 23), fr(1, 3)]),
      mc("Tính: {4/9} × 6 = ? (rút gọn kết quả)", fr(8, 3), [fr(24, 54), fr(4, 54), fr(10, 9)], "{24/9} = {8/3}."),
      mc("Tính: 5 × {3/8} = ?", fr(15, 8), [fr(15, 40), fr(8, 8), fr(3, 40)]),
      mc("Tính: {8/15} × {5/12} = ? (rút gọn kết quả)", fr(2, 9), [fr(40, 180), fr(13, 27), fr(1, 3)]),
      mc("Tấm bìa hình chữ nhật có chiều dài {5/6} m, chiều rộng {3/4} m. Diện tích tấm bìa là:", fr(5, 8) + " m²", [fr(8, 10) + " m²", fr(15, 10) + " m²", fr(5, 3) + " m²"], "{15/24} = {5/8}."),
      mc("Hình vuông có cạnh {2/7} dm. Chu vi hình vuông là:", fr(8, 7) + " dm", [fr(4, 49) + " dm", fr(2, 28) + " dm", fr(6, 7) + " dm"]),
      mc("Mỗi chai đựng {3/4} l nước. 6 chai như vậy đựng tất cả bao nhiêu lít nước?", fr(9, 2) + " l", [fr(18, 24) + " l", fr(3, 24) + " l", fr(9, 4) + " l"], "{18/4} = {9/2}."),
      num("Tính: {12/5} × 5 = ?", 12),
      num("Tính: {4/7} × 7 = ?", 4),
      mc("Tính: {3/5} × {10/9} = ? (rút gọn kết quả)", fr(2, 3), [fr(30, 45), fr(13, 14), fr(3, 2)]),
      mc("Chọn dấu thích hợp: {2/3} × {3/4} ? {1/2}", "=", ["<", ">"], "{6/12} = {1/2}."),
      mc("Mỗi giờ một vòi nước chảy được {1/12} bể. Sau 5 giờ vòi đó chảy được bao nhiêu phần bể?", fr(5, 12) + " bể", [fr(1, 60) + " bể", fr(6, 12) + " bể", fr(12, 5) + " bể"]),
    ],
    adv: [
      mc("Tính nhanh: {2/3} × {3/4} × {4/5} × {5/6} = ?", fr(1, 3), [fr(5, 6), fr(1, 6), fr(2, 5)], "Rút gọn các thừa số giống nhau ở tử số và mẫu số: còn {2/6} = {1/3}."),
      mc("Tính nhanh: {1/2} × {2/3} × {3/4} × ... × {9/10} = ?", fr(1, 10), [fr(1, 9), fr(9, 10), fr(1, 2)]),
      mc("Hình chữ nhật có diện tích {8/15} m² và chiều dài {4/5} m. Chiều rộng hình chữ nhật là:", fr(2, 3) + " m", [fr(32, 75) + " m", fr(3, 2) + " m", fr(4, 15) + " m"], "{8/15} : {4/5} = {8/15} × {5/4} = {2/3}."),
      num("Tính nhanh: {5/7} × 14 – {5/7} × 7 = ?", 5, "{5/7} × (14 – 7) = {5/7} × 7 = 5."),
      num("Số ?  {3/4} × {?/9} = {1/2}", 6, "{1/2} : {3/4} = {2/3} = {6/9}."),
    ],
  },

  // Bài 64. Phép chia phân số
  64: {
    intro:
      "Muốn chia một phân số cho một phân số, ta nhân phân số thứ nhất với phân số thứ hai đảo ngược: {a/b} : {c/d} = {a/b} × {d/c}. Muốn chia phân số cho số tự nhiên: {a/b} : n = {a / b × n}.",
    questions: [
      mc("Tính: {3/5} : {2/7} = ?", fr(21, 10), [fr(6, 35), fr(5, 12), fr(10, 21)]),
      mc("Tính: {4/9} : {2/3} = ? (rút gọn kết quả)", fr(2, 3), [fr(8, 27), fr(6, 12), fr(3, 2)], "{4/9} × {3/2} = {12/18} = {2/3}."),
      num("Tính: {5/6} : {5/12} = ?", 2, "{5/6} × {12/5} = {60/30} = 2."),
      mc("Tính: {7/8} : 7 = ?", fr(1, 8), [fr(49, 8), fr(1, 56), fr(8, 1)]),
      num("Tính: 6 : {3/4} = ?", 8, "6 × {4/3} = 8."),
      mc("Tính: {9/10} : 3 = ?", fr(3, 10), [fr(27, 10), fr(9, 13), fr(10, 27)]),
      mc("Sợi dây dài {3/4} m được cắt thành 3 đoạn bằng nhau. Mỗi đoạn dài:", fr(1, 4) + " m", [fr(9, 4) + " m", fr(4, 3) + " m", fr(3, 7) + " m"], "{3/4} : 3 = {1/4}."),
      mc("Chia đều {6/7} kg gạo vào 3 túi. Mỗi túi đựng:", fr(2, 7) + " kg", [fr(18, 7) + " kg", fr(7, 18) + " kg", fr(3, 7) + " kg"], "{6/7} : 3 = {2/7}."),
      num("Tính: {8/3} : {4/3} = ?", 2),
      num("Một đoạn đường dài {5/6} km. Người ta chia đoạn đường thành các đoạn nhỏ, mỗi đoạn dài {1/6} km. Có bao nhiêu đoạn nhỏ?", 5, "{5/6} : {1/6} = 5.", "đoạn"),
      num("Cô Lan có {5/8} m vải, mỗi chiếc túi cần {1/8} m vải. Cô may được nhiều nhất bao nhiêu chiếc túi?", 5, undefined, "chiếc"),
      mc("Muốn tính {a/b} : {c/d} ta tính:", "{a/b} × {d/c}", ["{a/b} × {c/d}", "{b/a} × {c/d}", "{a/b} – {c/d}"]),
      num("Tính: {1/2} : {1/4} = ?", 2),
      mc("Đổ đều {9/4} l nước vào 3 cốc. Mỗi cốc có:", fr(3, 4) + " l", [fr(27, 4) + " l", fr(4, 3) + " l", fr(3, 12) + " l"]),
    ],
    adv: [
      num("Tính: {2/3} : {4/9} : {3/2} = ?", 1, "{2/3} : {4/9} = {3/2}; {3/2} : {3/2} = 1."),
      mc("Hình chữ nhật có diện tích {7/8} m² và chiều rộng {7/12} m. Chiều dài là:", fr(3, 2) + " m", [fr(49, 96) + " m", fr(2, 3) + " m", fr(7, 12) + " m"], "{7/8} × {12/7} = {12/8} = {3/2}."),
      num("Tìm x biết: x : {3/5} = {5/3}. Số x là:", 1, "x = {5/3} × {3/5} = 1."),
      num("Một vòi nước mỗi giờ chảy được {1/6} bể. Vòi đó chảy đầy 2 bể trong bao nhiêu giờ?", 12, "2 : {1/6} = 2 × 6 = 12.", "giờ"),
      num("Chia {3/4} cho một số tự nhiên thì được {1/4}. Số đó là:", 3, "{3/4} : n = {1/4} nên n = {3/4} : {1/4} = 3."),
    ],
  },

  // Bài 65. Tìm phân số của một số
  65: {
    intro:
      "Muốn tìm {a/b} của số n, ta lấy n chia cho b rồi nhân với a (hay lấy n nhân với {a/b}).",
    questions: [
      num("Tìm {2/5} của 30.", 30 / 5 * 2),
      num("Tìm {3/8} của 64.", 64 / 8 * 3),
      num("Tìm {5/6} của 36 kg. Kết quả là bao nhiêu ki-lô-gam?", 36 / 6 * 5, undefined, "kg"),
      num("Tìm {7/10} của 150.", 150 / 10 * 7),
      num("Lớp 4A có 40 học sinh, trong đó {3/5} số học sinh là nữ. Số học sinh nữ là bao nhiêu?", 40 / 5 * 3, undefined, "học sinh"),
      num("Lớp 4A có 40 học sinh, trong đó {3/5} số học sinh là nữ. Số học sinh nam là bao nhiêu?", 40 - 40 / 5 * 3, undefined, "học sinh"),
      num("Mảnh vườn rộng 450 m², trong đó {2/9} diện tích để trồng rau. Diện tích trồng rau là bao nhiêu mét vuông?", 450 / 9 * 2, undefined, "m²"),
      num("Mẹ có 240 000 đồng, dùng {3/8} số tiền để mua gạo. Mẹ mua gạo hết bao nhiêu đồng?", 240000 / 8 * 3, undefined, "đồng"),
      num("Quãng đường dài 180 km, ô tô đã đi được {4/9} quãng đường. Ô tô đã đi được bao nhiêu ki-lô-mét?", 180 / 9 * 4, undefined, "km"),
      num("Bể chứa 600 l nước, người ta đã dùng {1/4} lượng nước. Trong bể còn lại bao nhiêu lít nước?", 600 - 600 / 4, undefined, "lít"),
      num("Cửa hàng có 72 kg đường, đã bán {5/12} số đường. Cửa hàng còn lại bao nhiêu ki-lô-gam đường?", 72 - 72 / 12 * 5, undefined, "kg"),
      num("Hộp có 48 viên bi, {1/3} số bi màu đỏ, {1/4} số bi màu xanh, còn lại là bi màu vàng. Có bao nhiêu viên bi màu vàng?", 48 - 48 / 3 - 48 / 4, undefined, "viên"),
      num("{3/4} giờ bằng bao nhiêu phút?", 60 / 4 * 3, undefined, "phút"),
      num("{2/3} ngày bằng bao nhiêu giờ?", 24 / 3 * 2, undefined, "giờ"),
    ],
    adv: [
      num("{3/5} số kẹo trong hộp là 36 viên. Hộp có tất cả bao nhiêu viên kẹo?", 36 / 3 * 5, undefined, "viên"),
      num("Một mảnh vườn có {2/5} diện tích trồng cam, {1/3} diện tích trồng bưởi, phần còn lại 40 m² để làm lối đi. Diện tích mảnh vườn là bao nhiêu mét vuông?", 150, "Phần trồng cây chiếm {6/15} + {5/15} = {11/15}; lối đi chiếm {4/15} = 40 m², nên 1 phần mười lăm là 10 m² và cả vườn là 150 m².", "m²"),
      num("Bạn An đọc sách: ngày đầu đọc {1/4} số trang, ngày thứ hai đọc {1/3} số trang, còn lại 70 trang chưa đọc. Quyển sách có bao nhiêu trang?", 168, "Hai ngày đọc {7/12} số trang; còn lại {5/12} = 70 trang nên 1 phần mười hai là 14 trang.", "trang"),
      num("Đoạn đường dài 240 m. Bình đi {1/3} đoạn đường, rồi đi tiếp {1/2} phần đường còn lại. Bình còn cách đích bao nhiêu mét?", 240 - 80 - (240 - 80) / 2, undefined, "m"),
      num("Tìm {2/3} của {3/4} của 48.", 48 / 4 * 3 / 3 * 2),
    ],
  },

  // Bài 66. Luyện tập chung
  66: {
    intro: "Ôn lại: nhân, chia phân số; tìm phân số của một số; thứ tự thực hiện các phép tính; giải toán lời văn.",
    questions: [
      mc("Tính: {7/12} × {6/21} = ? (rút gọn kết quả)", fr(1, 6), [fr(42, 252), fr(13, 33), fr(7, 6)]),
      mc("Tính: {5/9} : {10/3} = ? (rút gọn kết quả)", fr(1, 6), [fr(50, 27), fr(15, 90), fr(5, 3)], "{5/9} × {3/10} = {15/90} = {1/6}."),
      mc("Tính: 3 × {5/12} = ? (rút gọn kết quả)", fr(5, 4), [fr(15, 36), fr(8, 12), fr(5, 36)]),
      mc("Tính: {15/4} : 5 = ?", fr(3, 4), [fr(75, 4), fr(15, 9), fr(4, 3)]),
      num("Tìm {3/7} của 49.", 49 / 7 * 3),
      mc("Hình chữ nhật có chiều dài {9/10} m, chiều rộng {5/6} m. Diện tích hình chữ nhật là:", fr(3, 4) + " m²", [fr(14, 16) + " m²", fr(45, 16) + " m²", fr(27, 25) + " m²"], "{45/60} = {3/4}."),
      num("Mỗi bạn được chia {2/5} cái bánh. 10 bạn được chia tất cả bao nhiêu cái bánh?", 10 / 5 * 2, undefined, "cái"),
      mc("Rót đều {3/4} l nước vào 6 cái ly. Mỗi ly có:", fr(1, 8) + " l", [fr(18, 4) + " l", fr(1, 24) + " l", fr(1, 4) + " l"], "{3/4} : 6 = {3/24} = {1/8}."),
      num("Lớp 4C có 36 học sinh, trong đó {2/3} số học sinh đạt loại giỏi. Số học sinh đạt loại giỏi là:", 36 / 3 * 2, undefined, "học sinh"),
      num("Mẹ có 1 m ruy băng, mỗi chiếc nơ cần {1/8} m. Mẹ làm được nhiều nhất bao nhiêu chiếc nơ?", 8, undefined, "chiếc"),
      num("Tính: {4/5} × {5/4} = ?", 1),
      mc("Tính: {2/3} + {1/3} × {3/4} = ?", fr(11, 12), [fr(3, 4), fr(5, 12), fr(1, 2)], "Nhân trước: {1/3} × {3/4} = {1/4}; {2/3} + {1/4} = {11/12}."),
      mc("Tính: {5/6} – {1/2} : {3/4} = ?", fr(1, 6), [fr(1, 9), fr(1, 3), fr(5, 9)], "Chia trước: {1/2} : {3/4} = {2/3}; {5/6} – {2/3} = {1/6}."),
      mc("Đội công nhân sửa đường: ngày đầu sửa {2/7} con đường, ngày hai sửa {1/3} con đường. Còn lại bao nhiêu phần con đường chưa sửa?", fr(8, 21), [fr(13, 21), fr(3, 10), fr(1, 21)], "1 – {6/21} – {7/21} = {8/21}."),
    ],
    adv: [
      mc("Tính nhanh: {1/2} × {2/3} × {3/4} × {4/5} × {5/6} × {6/7} = ?", fr(1, 7), [fr(6, 7), fr(1, 6), fr(1, 2)]),
      num("Vòi A mỗi giờ chảy được {1/3} bể, vòi B mỗi giờ chảy được {1/6} bể. Mở cả hai vòi thì sau bao nhiêu giờ đầy bể?", 2, "Mỗi giờ cả hai vòi chảy được {1/3} + {1/6} = {1/2} bể.", "giờ"),
      num("Một số nhân với {3/4} rồi cộng với {1/2} thì được 2. Số đó là:", 2, "Số đó nhân {3/4} bằng 2 – {1/2} = {3/2}; số đó là {3/2} : {3/4} = 2."),
      num("Bạn Mai đi từ nhà đến trường mất 12 phút, bằng {2/5} thời gian cả hành trình. Cả hành trình Mai đi mất bao nhiêu phút?", 12 / 2 * 5, undefined, "phút"),
      num("Số ?  {?/6} × {4/9} = {2/9}", 3, "{2/9} : {4/9} = {1/2} = {3/6}."),
    ],
  },
};
