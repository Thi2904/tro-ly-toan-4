import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch7: Record<number, L> = {
  // Bài 33. Ôn tập các số đến lớp triệu
  33: {
    intro: "Ôn lại cách đọc, viết, phân tích, so sánh và làm tròn các số đến lớp triệu.",
    questions: [
      mc("Các chữ số thuộc lớp nghìn của số 306 748 215 là:", "7, 4, 8", ["3, 0, 6", "2, 1, 5", "0, 6, 7"]),
      mc(
        "Số 408 060 350 đọc là:",
        "bốn trăm linh tám triệu không trăm sáu mươi nghìn ba trăm năm mươi",
        ["bốn trăm linh tám nghìn không trăm sáu mươi triệu ba trăm năm mươi", "bốn mươi tám triệu sáu mươi nghìn ba trăm năm mươi", "bốn trăm linh tám triệu sáu trăm nghìn ba trăm năm mươi"],
      ),
      num("Số ?  40 000 + 8 000 + 500 + ? + 6 = 48 576", 70),
      num("Số ?  600 000 + ? + 300 + 9 = 604 309", 4000),
      num("Giá trị của chữ số 9 trong số 59 840 là bao nhiêu?", 9000),
      num("Giá trị của chữ số 3 trong số 3 206 541 là bao nhiêu?", 3000000),
      mc("Chọn dấu thích hợp: 450 321 ? 450 231", ">", ["<", "="]),
      mc("Chọn dấu thích hợp: 3 000 000 + 40 000 ? 3 400 000", "<", [">", "="], "3 040 000 < 3 400 000."),
      mc("Dân số ba tỉnh: X có 1 245 600 người, Y có 1 254 300 người, Z có 1 245 090 người. Tỉnh nào đông dân nhất?", "Tỉnh Y", ["Tỉnh X", "Tỉnh Z", "Ba tỉnh bằng nhau"]),
      mc("Cũng theo số liệu trên, tỉnh nào có ít dân nhất?", "Tỉnh Z", ["Tỉnh X", "Tỉnh Y", "Ba tỉnh bằng nhau"]),
      num("Làm tròn số 6 782 450 đến hàng trăm nghìn, ta được số nào?", 6800000),
      num("Làm tròn số 6 782 450 đến hàng nghìn, ta được số nào?", 6782000),
      num("Số bé nhất có tám chữ số là số nào?", 10000000),
      num("Viết số: chín mươi lăm triệu không trăm linh tám nghìn bảy trăm.", 95008700),
    ],
    adv: [
      num("Viết thêm chữ số 5 vào bên phải số 123 thì được số mới. Số mới lớn hơn số 123 bao nhiêu đơn vị?", 1235 - 123),
      num("Hiệu của số lớn nhất có chín chữ số và số bé nhất có tám chữ số là:", 999999999 - 10000000),
      num("Có bao nhiêu số có sáu chữ số mà chữ số hàng trăm nghìn là 5 và chữ số hàng đơn vị là 0?", 10000, "Bốn chữ số ở giữa mỗi chữ số có 10 cách chọn: 10 × 10 × 10 × 10."),
      num("Số tự nhiên bé nhất có tổng các chữ số bằng 30 là số nào?", 3999, "Cần ít chữ số nhất: ba chữ số tối đa 27 < 30 nên có bốn chữ số; hàng nghìn bé nhất là 3."),
      num("Dùng các chữ số 7, 0, 5, 0, 3, 9, 1 (mỗi chữ số dùng một lần), lập số lớn nhất có bảy chữ số. Số đó là:", 9753100),
      num("Dùng các chữ số 7, 0, 5, 0, 3, 9, 1 (mỗi chữ số dùng một lần), lập số bé nhất có bảy chữ số. Số đó là:", 1003579),
    ],
  },

  // Bài 34. Ôn tập phép cộng, phép trừ
  34: {
    intro: "Ôn lại cộng, trừ các số nhiều chữ số; tính chất giao hoán, kết hợp; bài toán tìm hai số biết tổng và hiệu.",
    questions: [
      num("Đặt tính rồi tính: 428 635 + 296 478 = ?", 428635 + 296478),
      num("Đặt tính rồi tính: 1 000 000 – 358 624 = ?", 1000000 - 358624),
      num("Đặt tính rồi tính: 5 678 901 + 1 234 099 = ?", 5678901 + 1234099),
      num("Tính bằng cách thuận tiện: 1 345 + 2 876 + 655 + 124 = ?", 1345 + 2876 + 655 + 124),
      num("Số ?  ? – 135 000 = 480 000", 480000 + 135000),
      num("Số ?  750 000 – ? = 285 000", 750000 - 285000),
      num("Hai số có tổng bằng 5 000 và hiệu bằng 800. Số lớn là:", (5000 + 800) / 2),
      num("Thửa ruộng A thu hoạch 12 450 kg thóc. Thửa ruộng B thu hoạch ít hơn thửa ruộng A 2 350 kg. Cả hai thửa ruộng thu hoạch được bao nhiêu ki-lô-gam thóc?", 12450 + 10100, undefined, "kg"),
      num("Ngày thứ nhất cửa hàng bán được 25 600 000 đồng, ngày thứ hai bán ít hơn ngày thứ nhất 3 450 000 đồng. Cả hai ngày cửa hàng bán được bao nhiêu đồng?", 25600000 + 22150000, undefined, "đồng"),
      num("Mẹ có 5 000 000 đồng. Mẹ mua tủ lạnh giá 3 450 000 đồng và bếp ga giá 1 250 000 đồng. Mẹ còn lại bao nhiêu đồng?", 5000000 - 3450000 - 1250000, undefined, "đồng"),
      num("Tổng số tuổi của ông và cháu là 72 tuổi, ông hơn cháu 60 tuổi. Cháu bao nhiêu tuổi?", (72 - 60) / 2, undefined, "tuổi"),
      num("Sân vận động có 40 000 chỗ ngồi. Trận thứ nhất có 27 850 khán giả, trận thứ hai có 31 240 khán giả. Cả hai trận, tổng số chỗ còn trống là bao nhiêu?", 40000 - 27850 + 40000 - 31240, undefined, "chỗ"),
      mc("Số lớn hơn 345 678 một trăm nghìn đơn vị là:", 445678, [355678, 345778, 346678]),
    ],
    adv: [
      num("Tổng của hai số là 2 026, số lớn hơn số bé 100 đơn vị. Số bé là:", (2026 - 100) / 2),
      num("Tính nhanh: 1 + 2 + 3 + ... + 50 = ?", 50 * 51 / 2),
      num("Tìm số x biết: x + x + 20 = 100. Số x là:", (100 - 20) / 2),
      num("Ba số có tổng bằng 600. Số thứ hai gấp đôi số thứ nhất, số thứ ba hơn số thứ hai 100 đơn vị. Số thứ nhất là:", 100, "Gọi số thứ nhất là a: a + 2a + (2a + 100) = 600, nên 5a = 500."),
      num("Hiệu của số lớn nhất có sáu chữ số khác nhau và số bé nhất có sáu chữ số khác nhau là:", 987654 - 102345),
      num("Mẹ 38 tuổi, con 8 tuổi. Sau bao nhiêu năm nữa thì tuổi mẹ gấp 4 lần tuổi con?", 2, "Hiệu tuổi luôn là 30. Khi tuổi mẹ gấp 4 lần tuổi con thì con có 30 : 3 = 10 tuổi, tức sau 2 năm.", "năm"),
    ],
  },

  // Bài 35. Ôn tập hình học
  35: {
    intro: "Ôn lại: góc nhọn, góc vuông, góc tù, góc bẹt; hai đường thẳng vuông góc, song song; hình bình hành, hình thoi; chu vi và diện tích.",
    questions: [
      mc("[[angle:75]]\nĐây là góc gì?", "góc nhọn", ["góc vuông", "góc tù", "góc bẹt"]),
      num("[[angle:165]]\nSố đo của góc trong hình là bao nhiêu độ?", 165, undefined, "độ"),
      num("[[clock:2:00]]\nLúc 2 giờ, kim giờ và kim phút tạo thành góc bao nhiêu độ?", 60, undefined, "độ"),
      mc("[[lines:perp]]\nHai đường thẳng trong hình:", "vuông góc với nhau", ["song song với nhau", "trùng nhau", "cắt nhau không vuông góc"]),
      mc("[[shape:parallelogram]]\nĐây là hình gì?", "hình bình hành", ["hình thoi", "hình chữ nhật", "hình vuông"]),
      num("Hình chữ nhật có chiều dài 18 cm, chiều rộng 11 cm. Chu vi hình chữ nhật là bao nhiêu xăng-ti-mét?", (18 + 11) * 2, undefined, "cm"),
      num("Hình chữ nhật có chiều dài 18 cm, chiều rộng 11 cm. Diện tích hình chữ nhật là bao nhiêu xăng-ti-mét vuông?", 18 * 11, undefined, "cm²"),
      num("Hình thoi có cạnh dài 13 cm. Chu vi hình thoi là bao nhiêu xăng-ti-mét?", 13 * 4, undefined, "cm"),
      num("Hình bình hành có hai cạnh kề dài 17 cm và 9 cm. Chu vi hình bình hành là bao nhiêu xăng-ti-mét?", (17 + 9) * 2, undefined, "cm"),
      num("Hình chữ nhật có chu vi 70 cm, chiều rộng 15 cm. Chiều dài là bao nhiêu xăng-ti-mét?", 70 / 2 - 15, undefined, "cm"),
      tf("Góc 100° là góc tù.", true),
      tf("Hai đường thẳng song song có một điểm chung.", false),
      num("Hình vuông cạnh 12 cm có diện tích bao nhiêu xăng-ti-mét vuông?", 12 * 12, undefined, "cm²"),
      num("Một góc bẹt được chia thành ba góc, hai góc có số đo 35° và 85°. Góc còn lại có số đo bao nhiêu độ?", 180 - 35 - 85, undefined, "độ"),
    ],
    adv: [
      num("Hình chữ nhật có chu vi 56 cm, chiều dài gấp 3 lần chiều rộng. Diện tích hình chữ nhật là bao nhiêu xăng-ti-mét vuông?", 7 * 21, "Nửa chu vi 28 cm gồm 4 phần bằng nhau: chiều rộng 7 cm, chiều dài 21 cm.", "cm²"),
      num("Hình vuông và hình chữ nhật đều có chu vi 40 cm, hình chữ nhật có chiều dài 12 cm. Diện tích hình vuông lớn hơn diện tích hình chữ nhật bao nhiêu xăng-ti-mét vuông?", 10 * 10 - 12 * 8, "Cạnh hình vuông 10 cm: 100 cm². Chiều rộng hình chữ nhật 20 – 12 = 8 cm: 96 cm².", "cm²"),
      num("[[clock:2:30]]\nLúc 2 giờ 30 phút, kim phút chỉ số 6 (180°), kim giờ nằm giữa số 2 và số 3 (75°). Góc giữa hai kim là bao nhiêu độ?", 180 - 75, undefined, "độ"),
      num("Ghép hai hình vuông cạnh 6 cm cạnh nhau thành một hình chữ nhật. Chu vi hình chữ nhật đó là bao nhiêu xăng-ti-mét?", (12 + 6) * 2, undefined, "cm"),
      num("Một lưới gồm 4 đường dọc và 3 đường ngang vuông góc nhau. Có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông)?", 6 * 3, "Chọn 2 trong 4 đường dọc: 6 cách; chọn 2 trong 3 đường ngang: 3 cách."),
    ],
  },

  // Bài 36. Ôn tập đo lường
  36: {
    intro: "Ôn lại: yến, tạ, tấn; dm², m², cm², mm²; giây, phút, giờ; thế kỉ.",
    questions: [
      num("4 tạ 5 yến = ? kg", 450),
      num("3 tấn 25 kg = ? kg", 3025),
      num("5 m² 8 dm² = ? dm²", 508),
      num("7 phút 15 giây = ? giây", 7 * 60 + 15),
      mc("Năm 1054 thuộc thế kỉ nào?", "thế kỉ XI", ["thế kỉ X", "thế kỉ XII", "thế kỉ IX"]),
      num("Tính: 12 tạ + 8 tấn = ? tạ", 12 + 80),
      num("Tính: 5 m² – 150 dm² = ? dm²", 500 - 150),
      num("Mua 3 bao gạo, mỗi bao nặng 5 yến và 2 bao ngô, mỗi bao nặng 3 yến. Tất cả nặng bao nhiêu ki-lô-gam?", 3 * 50 + 2 * 30, undefined, "kg"),
      num("Xe khách khởi hành lúc 7 giờ 45 phút và đến nơi lúc 11 giờ 20 phút. Xe đi hết bao nhiêu phút?", (11 * 60 + 20) - (7 * 60 + 45), undefined, "phút"),
      num("Phòng học dài 6 m, rộng 5 m được lát bằng các viên gạch hình vuông cạnh 5 dm. Cần bao nhiêu viên gạch?", 6 * 5 * 100 / 25, undefined, "viên"),
      mc("Xe tải chở 3 ... hàng.", "tấn", ["kg", "yến", "mm"]),
      num("Mai ngủ 9 giờ mỗi ngày. Trong một tuần Mai ngủ tất cả bao nhiêu giờ?", 9 * 7, undefined, "giờ"),
      mc("Năm 1000 thuộc thế kỉ nào?", "thế kỉ X", ["thế kỉ XI", "thế kỉ IX", "thế kỉ XX"]),
    ],
    adv: [
      num("Tàu chạy 3 giờ 40 phút, nghỉ 25 phút rồi chạy tiếp 1 giờ 50 phút mới đến nơi. Từ lúc xuất phát đến lúc đến nơi là bao nhiêu phút?", 220 + 25 + 110, undefined, "phút"),
      num("Cứ 1 tạ lúa xay được 65 kg gạo. 3 tấn lúa xay được bao nhiêu ki-lô-gam gạo?", 30 * 65, undefined, "kg"),
      num("Hình chữ nhật có diện tích 3 m² và chiều dài 20 dm. Chiều rộng là bao nhiêu đề-xi-mét?", 300 / 20, undefined, "dm"),
      num("Từ năm 1989 đến năm 2026 là bao nhiêu năm?", 2026 - 1989, undefined, "năm"),
      mc("Bình ra khỏi nhà lúc 6 giờ 50 phút, đi bộ 25 phút, đợi xe buýt 10 phút, rồi xe chạy 35 phút mới tới trường. Bình tới trường lúc:", "8 giờ", ["7 giờ 50 phút", "8 giờ 10 phút", "7 giờ 30 phút"]),
    ],
  },

  // Bài 37. Ôn tập chung
  37: {
    intro: "Ôn lại các kiến thức học kì 1: số tự nhiên, bốn phép tính, hình học, đo lường và giải toán.",
    questions: [
      num("Viết số: sáu mươi triệu hai trăm nghìn không trăm linh năm.", 60200005),
      num("Làm tròn số 5 249 800 đến hàng trăm nghìn, ta được số nào?", 5200000),
      num("Đặt tính rồi tính: 750 408 – 296 755 = ?", 750408 - 296755),
      num("Hai số có tổng bằng 90 và hiệu bằng 18. Số lớn là:", (90 + 18) / 2),
      num("3 tấn 5 tạ = ? yến", 350),
      mc("[[angle:150]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      num("Hình thoi có cạnh dài 11 cm. Chu vi hình thoi là bao nhiêu xăng-ti-mét?", 11 * 4, undefined, "cm"),
      tf("Số 125 000 là số chẵn.", true),
      num("Hai xe chở tất cả 8 tấn 6 tạ hàng. Xe thứ nhất chở nhiều hơn xe thứ hai 14 tạ. Xe thứ nhất chở bao nhiêu tạ hàng?", (86 + 14) / 2, undefined, "tạ"),
      num("Tính giá trị của biểu thức: 2 800 + 6 × 150 – 700 = ?", 2800 + 6 * 150 - 700),
      mc("Năm 1930 thuộc thế kỉ nào?", "thế kỉ XX", ["thế kỉ XIX", "thế kỉ XXI", "thế kỉ XVIII"]),
      num("Mẹ mua 4 hộp bánh, mỗi hộp 45 000 đồng và 3 chai nước ép, mỗi chai 12 000 đồng. Mẹ phải trả bao nhiêu đồng?", 4 * 45000 + 3 * 12000, undefined, "đồng"),
      num("Tính giá trị của biểu thức m × 4 + n với m = 125 và n = 78.", 125 * 4 + 78),
    ],
    adv: [
      num("Tổng của ba số tự nhiên liên tiếp là 2 025. Số bé nhất là:", (2025 - 3) / 3),
      num("Hình chữ nhật có chiều dài hơn chiều rộng 8 m và chu vi 72 m. Diện tích hình chữ nhật là bao nhiêu mét vuông?", 22 * 14, "Nửa chu vi 36 m: chiều dài (36 + 8) : 2 = 22 m, chiều rộng 14 m.", "m²"),
      num("Mai có 60 000 đồng. Mai mua 5 quyển vở, mỗi quyển 6 000 đồng, rồi dùng số tiền còn lại mua bút, mỗi chiếc 3 500 đồng. Mai mua được nhiều nhất bao nhiêu chiếc bút?", Math.floor((60000 - 5 * 6000) / 3500), undefined, "chiếc"),
      num("Một số nhân với 4 rồi trừ đi 18 thì được 90. Số đó là:", (90 + 18) / 4),
      num("Số lớn nhất có sáu chữ số khác nhau là số nào?", 987654),
    ],
  },
};
