import type { Question } from "../types";
import { mc, num, tf, fr } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

const BOOKS = "[[bar:Số quyển sách thư viện cho mượn mỗi ngày|Thứ Hai=45,Thứ Ba=60,Thứ Tư=35,Thứ Năm=70,Thứ Sáu=40|quyển]]";

export const ch13: Record<number, L> = {
  // Bài 67. Ôn tập số tự nhiên
  67: {
    intro:
      "Số tự nhiên bé nhất là 0, không có số tự nhiên lớn nhất. Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị; hai số chẵn (hoặc lẻ) liên tiếp hơn kém nhau 2 đơn vị. Làm tròn: nhìn chữ số ở hàng bên phải hàng cần làm tròn, bé hơn 5 thì làm tròn xuống, từ 5 trở lên thì làm tròn lên.",
    questions: [
      num("Viết số gồm 3 trăm nghìn, 5 chục nghìn, 7 trăm, 4 chục và 2 đơn vị.", 350742),
      num("Viết số gồm 6 triệu, 4 trăm nghìn, 8 nghìn và 5 đơn vị.", 6408005),
      mc("Số 5 070 306 đọc là:", "năm triệu không trăm bảy mươi nghìn ba trăm linh sáu", ["năm triệu bảy trăm nghìn ba trăm linh sáu", "năm mươi triệu bảy mươi nghìn ba trăm linh sáu", "năm triệu không trăm bảy mươi ba nghìn không trăm sáu"]),
      num("Số ?  30 000 + 700 + ? + 5 = 30 745", 40),
      num("Giá trị của chữ số 7 trong số 3 472 910 là bao nhiêu?", 70000),
      num("Làm tròn số 48 765 321 đến hàng trăm nghìn, ta được số nào?", 48800000),
      num("Làm tròn số 253 489 đến hàng chục nghìn, ta được số nào?", 250000),
      mc("Số lớn nhất trong các số 905 431; 950 431; 905 341; 950 341 là:", "950 431", ["905 431", "905 341", "950 341"]),
      tf("Số liền trước của 1 000 000 là 999 999.", true),
      num("Số chẵn bé nhất có năm chữ số khác nhau là số nào?", 10234),
      num("Từ bốn thẻ số 0, 1, 2, 3 lập được số lẻ lớn nhất có bốn chữ số khác nhau. Đó là số nào?", 3201, "Chữ số hàng đơn vị phải lẻ (1 hoặc 3); số lớn nhất là 3 201."),
      num("Cho dãy số 5; 10; 15; 20; ... Số hạng thứ 20 của dãy là số nào?", 5 * 20),
      num("Dân số một thành phố là 8 245 000 người. Làm tròn đến hàng trăm nghìn, ta được bao nhiêu người?", 8200000, undefined, "người"),
      num("Có bao nhiêu số tròn trăm nghìn có sáu chữ số?", 9, "Đó là 100 000; 200 000; ...; 900 000."),
    ],
    adv: [
      num("Số bé nhất có tám chữ số là số nào?", 10000000),
      num("Số lớn nhất có bốn chữ số khác nhau và chia hết cho 5 là số nào?", 9875),
      num("Có bao nhiêu số tự nhiên có ba chữ số mà tổng các chữ số bằng 3?", 6, "Đó là 102; 111; 120; 201; 210; 300."),
      num("Viết thêm chữ số 0 vào bên phải số 12 345 thì được số mới gấp số cũ mấy lần?", 10, undefined, "lần"),
      num("Có bao nhiêu số tự nhiên n để 7 < n × 3 < 16?", 3, "n × 3 là 9; 12; 15 nên n = 3; 4; 5."),
    ],
  },

  // Bài 68. Ôn tập phép tính với số tự nhiên
  68: {
    intro: "Ôn lại bốn phép tính với số tự nhiên, tính chất giao hoán, kết hợp, phân phối và bài toán trung bình cộng, tổng – hiệu.",
    questions: [
      num("Đặt tính rồi tính: 703 452 + 298 679 = ?", 703452 + 298679),
      num("Đặt tính rồi tính: 1 000 000 – 462 385 = ?", 1000000 - 462385),
      num("Đặt tính rồi tính: 3 084 × 27 = ?", 3084 * 27),
      num("Đặt tính rồi tính: 58 464 : 36 = ?", 58464 / 36),
      num("Tính bằng cách thuận tiện: 125 × 7 × 8 = ?", 125 * 7 * 8),
      num("Tính bằng cách thuận tiện: 45 × 12 + 45 × 8 = ?", 45 * 12 + 45 * 8),
      num("Tính giá trị của biểu thức: 1 200 – 25 × 16 + 300 = ?", 1200 - 25 * 16 + 300),
      num("Tìm số trung bình cộng của 45, 55, 62 và 78.", (45 + 55 + 62 + 78) / 4),
      num("Hai số có tổng bằng 150 và hiệu bằng 30. Số lớn là:", (150 + 30) / 2),
      num("Xưởng may trong 3 ngày làm được 3 750 sản phẩm. Ngày thứ nhất làm 1 250 sản phẩm, ngày thứ hai làm 1 100 sản phẩm. Ngày thứ ba xưởng làm được bao nhiêu sản phẩm?", 3750 - 1250 - 1100, undefined, "sản phẩm"),
      num("Có 24 hộp bút, mỗi hộp 36 chiếc. Số bút đó được chia đều vào 18 túi. Mỗi túi có bao nhiêu chiếc bút?", 24 * 36 / 18, undefined, "chiếc"),
      num("Bác Hùng mua 5 kg gạo, mỗi ki-lô-gam giá 18 000 đồng và 3 kg thịt, mỗi ki-lô-gam giá 120 000 đồng. Bác đưa 500 000 đồng. Bác được trả lại bao nhiêu đồng?", 500000 - 5 * 18000 - 3 * 120000, undefined, "đồng"),
      num("Ô tô đi mỗi giờ được 48 km. Với vận tốc đó, ô tô đi 5 giờ được bao nhiêu ki-lô-mét?", 48 * 5, undefined, "km"),
    ],
    adv: [
      num("Tìm x biết: (x + 25) × 4 = 300. Số x là:", 300 / 4 - 25),
      num("Ba số có tổng bằng 114. Số thứ hai gấp đôi số thứ nhất, số thứ ba gấp ba lần số thứ nhất. Số lớn nhất là:", 3 * (114 / 6), "Tổng ba số gồm 1 + 2 + 3 = 6 phần bằng số thứ nhất: 114 : 6 = 19."),
      num("Tính nhanh: 2 026 × 99 + 2 026 = ?", 2026 * 99 + 2026),
      num("Chia 2 026 cho số có hai chữ số lớn nhất (99). Thương là bao nhiêu?", Math.floor(2026 / 99), "2 026 : 99 = 20 (dư 46)."),
      num("Trung bình cộng của ba số là 36. Thêm số thứ tư thì trung bình cộng của bốn số là 40. Số thứ tư là:", 40 * 4 - 36 * 3),
    ],
  },

  // Bài 69. Ôn tập phân số
  69: {
    intro: "Ôn lại: khái niệm phân số, tính chất cơ bản, rút gọn, quy đồng mẫu số, so sánh phân số và tìm phân số của một số.",
    questions: [
      mc("[[frac:7/12]]\nPhân số chỉ phần đã tô màu của hình tròn là:", fr(7, 12), [fr(5, 12), fr(12, 7), fr(7, 5)]),
      mc("Thương 9 : 14 viết dưới dạng phân số là:", fr(9, 14), [fr(14, 9), fr(9, 9), fr(5, 14)]),
      mc("Rút gọn phân số {36/48} được phân số tối giản:", fr(3, 4), [fr(18, 24), fr(9, 12), fr(4, 5)]),
      num("Số ?  {7/9} = {?/36}", 28),
      mc("Quy đồng mẫu số hai phân số {5/6} và {3/8} (mẫu số chung là 24), ta được:", "{20/24} và {9/24}", ["{5/24} và {3/24}", "{10/24} và {9/24}", "{20/24} và {3/24}"]),
      mc("Chọn dấu thích hợp: {5/9} ? {4/7}", "<", [">", "="], "{35/63} và {36/63}."),
      mc("Sắp xếp các phân số {2/3}; {5/6}; {3/4} theo thứ tự từ bé đến lớn:", "{2/3}; {3/4}; {5/6}", ["{5/6}; {3/4}; {2/3}", "{3/4}; {2/3}; {5/6}", "{2/3}; {5/6}; {3/4}"], "{8/12}; {10/12}; {9/12}."),
      mc("Phân số nào dưới đây bằng " + fr(3, 5) + "?", fr(12, 20), [fr(12, 15), fr(6, 15), fr(3, 10)]),
      num("{3/4} giờ bằng bao nhiêu phút?", 45, undefined, "phút"),
      num("Tìm {5/8} của 96.", 96 / 8 * 5),
      mc("Phân số nào dưới đây lớn hơn 1?", fr(13, 12), [fr(12, 13), fr(7, 8), fr(5, 6)]),
      num("Cuộn dây dài 48 m, đã dùng {3/8} chiều dài cuộn dây. Cuộn dây còn lại bao nhiêu mét?", 48 - 48 / 8 * 3, undefined, "m"),
      mc("Phân số nào dưới đây là phân số tối giản?", fr(21, 34), [fr(18, 27), fr(20, 45), fr(14, 35)]),
    ],
    adv: [
      num("Có bao nhiêu phân số có tử số là 1, mẫu số là số tự nhiên, lớn hơn {1/6} và bé hơn {1/2}?", 3, "Đó là " + fr(1, 3) + "; " + fr(1, 4) + "; " + fr(1, 5) + "."),
      num("Có số tự nhiên a duy nhất để {10/30} < {a/30} < {12/30}. Số a là:", 11),
      num("Phân số {x/y} bằng {4/7} và x + y = 77. Tử số x là:", 28, "Tổng 77 gồm 11 phần: 77 : 11 = 7; x = 4 × 7 = 28."),
      num("Một giỏ trứng: buổi sáng bán {1/4} số trứng, buổi chiều bán {2/5} số trứng, còn lại 14 quả. Giỏ trứng lúc đầu có bao nhiêu quả?", 40, "Đã bán {13/20}; còn {7/20} = 14 quả nên 1 phần hai mươi là 2 quả.", "quả"),
      mc("Trong hai phân số {99/100} và {100/101}, phân số nào lớn hơn?", fr(100, 101), [fr(99, 100), "Hai phân số bằng nhau", "Không so sánh được"], "{99/100} = 1 – {1/100}; {100/101} = 1 – {1/101}; {1/101} bé hơn {1/100}."),
    ],
  },

  // Bài 70. Ôn tập phép tính với phân số
  70: {
    intro: "Ôn lại: cộng, trừ, nhân, chia phân số; thứ tự thực hiện phép tính và giải toán lời văn có phân số.",
    questions: [
      mc("Tính: {3/8} + {5/12} = ?", fr(19, 24), [fr(8, 20), fr(15, 96), fr(8, 24)]),
      mc("Tính: {7/9} – {1/6} = ?", fr(11, 18), [fr(6, 3), fr(6, 18), fr(5, 18)]),
      mc("Tính: {4/5} × {15/16} = ? (rút gọn kết quả)", fr(3, 4), [fr(60, 80), fr(19, 21), fr(4, 3)]),
      mc("Tính: {5/6} : {10/9} = ? (rút gọn kết quả)", fr(3, 4), [fr(45, 60), fr(50, 54), fr(4, 3)]),
      mc("Tính: 5 – {2/7} = ?", fr(33, 7), [fr(3, 7), fr(3, 5), fr(35, 7)]),
      mc("Tính: {3/10} × 4 = ? (rút gọn kết quả)", fr(6, 5), [fr(12, 10), fr(3, 40), fr(7, 10)]),
      mc("Tính: {8/9} : 4 = ?", fr(2, 9), [fr(32, 9), fr(1, 18), fr(1, 9)]),
      mc("Tính: {1/2} + {1/3} × {3/4} = ?", fr(3, 4), [fr(5, 8), fr(5, 6), fr(1, 2)], "Nhân trước: {1/3} × {3/4} = {1/4}; {1/2} + {1/4} = {3/4}."),
      mc("Lan làm được {2/5} công việc, Mai làm được {1/4} công việc. Còn lại bao nhiêu phần công việc chưa làm?", fr(7, 20), [fr(13, 20), fr(3, 9), fr(1, 20)], "1 – {8/20} – {5/20} = {7/20}."),
      mc("Mảnh vườn hình chữ nhật có chiều dài {7/4} m, chiều rộng {2/3} m. Diện tích mảnh vườn là:", fr(7, 6) + " m²", [fr(9, 7) + " m²", fr(14, 7) + " m²", fr(21, 8) + " m²"], "{14/12} = {7/6}."),
      num("Sợi dây dài 3 m được cắt thành các đoạn, mỗi đoạn dài {3/4} m. Cắt được bao nhiêu đoạn?", 4, "3 : {3/4} = 4.", "đoạn"),
      mc("Rót đều {9/2} l dầu vào 6 chai. Mỗi chai có:", fr(3, 4) + " l", [fr(27, 1) + " l", fr(9, 6) + " l", fr(1, 3) + " l"], "{9/2} : 6 = {9/12} = {3/4}."),
      num("Tìm {3/4} của 80.", 80 / 4 * 3),
      mc("Tính nhanh: {7/5} × {5/7} × {3/4} = ?", fr(3, 4), [fr(15, 28), fr(4, 3), fr(7, 4)]),
    ],
    adv: [
      mc("Tìm x biết: x × {3/4} = {9/10}. Phân số x là:", fr(6, 5), [fr(27, 40), fr(5, 6), fr(3, 10)], "x = {9/10} : {3/4} = {9/10} × {4/3}."),
      mc("Tìm x biết: x : {2/3} = {9/8}. Phân số x là:", fr(3, 4), [fr(27, 16), fr(4, 3), fr(3, 16)], "x = {9/8} × {2/3} = {18/24}."),
      mc("Tìm x biết: {5/6} – x = {1/3}. Phân số x là:", fr(1, 2), [fr(7, 6), fr(5, 6), fr(1, 6)]),
      mc("Tính: {1/2} + {1/6} + {1/12} + {1/20} = ?", fr(4, 5), [fr(4, 40), fr(1, 2), fr(3, 4)], "Tổng bằng 1 – {1/5}."),
      num("Một người đi {2/5} quãng đường bằng xe đạp, {1/3} quãng đường bằng xe buýt, còn lại 8 km đi bộ. Quãng đường dài bao nhiêu ki-lô-mét?", 30, "Đã đi {11/15}; còn {4/15} = 8 km nên 1 phần mười lăm là 2 km.", "km"),
    ],
  },

  // Bài 71. Ôn tập hình học và đo lường
  71: {
    intro: "Ôn lại: các loại góc, hai đường thẳng vuông góc, song song, hình bình hành, hình thoi; chu vi, diện tích; các đơn vị đo khối lượng, diện tích, thời gian.",
    questions: [
      mc("[[angle:120]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      num("[[clock:5:00]]\nLúc 5 giờ, kim giờ và kim phút tạo thành góc bao nhiêu độ?", 150, undefined, "độ"),
      mc("[[lines:parallel]]\nHai đường thẳng trong hình:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng nhau"]),
      mc("[[shape:rhombus]]\nĐây là hình gì?", "hình thoi", ["hình bình hành có hai cạnh dài, hai cạnh ngắn", "hình chữ nhật", "hình tam giác"]),
      num("Hình chữ nhật có chiều dài 25 cm, chiều rộng 14 cm. Chu vi hình chữ nhật là bao nhiêu xăng-ti-mét?", (25 + 14) * 2, undefined, "cm"),
      num("Hình thoi có chu vi 52 cm. Mỗi cạnh của hình thoi dài bao nhiêu xăng-ti-mét?", 52 / 4, undefined, "cm"),
      num("4 tạ 3 yến = ? kg", 430),
      num("3 m² 25 dm² = ? dm²", 325),
      num("2 giờ 15 phút = ? phút", 135),
      mc("Năm 1968 thuộc thế kỉ nào?", "thế kỉ XX", ["thế kỉ XIX", "thế kỉ XXI", "thế kỉ XVIII"]),
      num("Phòng học dài 9 m, rộng 6 m được lát bằng các viên gạch hình vuông cạnh 3 dm. Cần bao nhiêu viên gạch?", 9 * 6 * 100 / 9, "Diện tích phòng: 54 m² = 5 400 dm²; mỗi viên: 9 dm².", "viên"),
      num("Xe buýt khởi hành lúc 6 giờ 40 phút và đến bến lúc 9 giờ 15 phút. Xe đi hết bao nhiêu phút?", (9 * 60 + 15) - (6 * 60 + 40), undefined, "phút"),
      num("Hình bình hành có hai cạnh kề dài 14 cm và 9 cm. Chu vi hình bình hành là bao nhiêu xăng-ti-mét?", (14 + 9) * 2, undefined, "cm"),
      num("Cửa hàng nhập 3 tạ 5 yến gạo và 250 kg ngô. Cửa hàng nhập tất cả bao nhiêu ki-lô-gam gạo và ngô?", 350 + 250, undefined, "kg"),
    ],
    adv: [
      num("Hình chữ nhật 18 cm × 12 cm được cắt bỏ một hình vuông cạnh 12 cm. Phần còn lại là hình chữ nhật. Chu vi phần còn lại là bao nhiêu xăng-ti-mét?", (6 + 12) * 2, undefined, "cm"),
      num("Hình vuông có cạnh 6 dm. Diện tích hình vuông là bao nhiêu xăng-ti-mét vuông?", 6 * 6 * 100, "6 × 6 = 36 dm² = 3 600 cm².", "cm²"),
      num("[[clock:10:30]]\nLúc 10 giờ 30 phút, kim phút chỉ số 6 (180°), kim giờ nằm giữa số 10 và số 11 (315°). Góc giữa hai kim (không lớn hơn góc bẹt) là bao nhiêu độ?", 315 - 180, undefined, "độ"),
      num("Từ 8 giờ 45 phút đến 14 giờ 20 phút là bao nhiêu phút?", (14 * 60 + 20) - (8 * 60 + 45), undefined, "phút"),
      num("Hình chữ nhật có chu vi 60 cm, chiều dài gấp đôi chiều rộng. Diện tích hình chữ nhật là bao nhiêu xăng-ti-mét vuông?", 10 * 20, "Nửa chu vi 30 cm gồm 3 phần: chiều rộng 10 cm, chiều dài 20 cm.", "cm²"),
    ],
  },

  // Bài 72. Ôn tập một số yếu tố thống kê và xác suất
  72: {
    intro: "Ôn lại: đọc biểu đồ cột, dãy số liệu thống kê, số trung bình cộng và các khả năng xảy ra của một sự kiện.",
    questions: [
      mc(`${BOOKS}\nNgày nào thư viện cho mượn nhiều sách nhất?`, "Thứ Năm", ["Thứ Hai", "Thứ Ba", "Thứ Sáu"]),
      num(`${BOOKS}\nCả 5 ngày thư viện cho mượn tất cả bao nhiêu quyển sách?`, 45 + 60 + 35 + 70 + 40, undefined, "quyển"),
      num(`${BOOKS}\nTrung bình mỗi ngày thư viện cho mượn bao nhiêu quyển sách?`, (45 + 60 + 35 + 70 + 40) / 5, undefined, "quyển"),
      num(`${BOOKS}\nThứ Năm cho mượn nhiều hơn Thứ Tư bao nhiêu quyển sách?`, 70 - 35, undefined, "quyển"),
      num(`${BOOKS}\nCó bao nhiêu ngày cho mượn nhiều hơn số sách trung bình mỗi ngày?`, 2, "Trung bình 50 quyển: Thứ Ba (60) và Thứ Năm (70).", "ngày"),
      num("Dãy số liệu 8, 10, 12, 14, 16 có số trung bình cộng là:", (8 + 10 + 12 + 14 + 16) / 5),
      num("Một dãy số liệu có 9 số và số trung bình cộng là 7. Tổng của 9 số đó là:", 63),
      mc("Trong hộp có 5 thẻ xanh và 2 thẻ đỏ. Lấy 1 thẻ, ghi màu rồi trả lại; làm nhiều lần. Sự kiện nào có khả năng xuất hiện nhiều lần hơn?", "lấy được thẻ xanh", ["lấy được thẻ đỏ", "hai sự kiện như nhau", "không lấy được thẻ nào"]),
      num("Quay vòng quay 50 lần: mũi tên dừng ở màu xanh 18 lần, màu đỏ 22 lần, còn lại dừng ở màu vàng. Mũi tên dừng ở màu vàng bao nhiêu lần?", 50 - 18 - 22, undefined, "lần"),
      num("Gieo hai xúc xắc và cộng số chấm ở hai mặt trên. Có bao nhiêu cách (xét thứ tự hai xúc xắc) để tổng bằng 5?", 4, "1 + 4; 2 + 3; 3 + 2; 4 + 1."),
      tf("Tung một đồng xu 10 lần thì chắc chắn có đúng 5 lần ra mặt sấp.", false),
      mc("Khi gieo một xúc xắc, sự kiện nào chắc chắn xảy ra?", "xuất hiện mặt có số chấm bé hơn 7", ["xuất hiện mặt 6 chấm", "xuất hiện mặt có số chấm chẵn", "xuất hiện mặt 7 chấm"]),
      num("Số học sinh đến lớp trong 4 ngày là 12, 15, 18 và 15. Trung bình mỗi ngày có bao nhiêu học sinh đến lớp?", (12 + 15 + 18 + 15) / 4, undefined, "học sinh"),
    ],
    adv: [
      num(`${BOOKS}\nMuốn số sách trung bình mỗi ngày tăng lên thành 55 quyển thì tổng số sách cho mượn của 5 ngày phải tăng thêm bao nhiêu quyển?`, 55 * 5 - 250, undefined, "quyển"),
      num("Tung một đồng xu 3 lần. Có bao nhiêu kết quả (xét thứ tự các lần tung) có ít nhất một lần ra mặt ngửa?", 7, "Có 8 kết quả, chỉ có 1 kết quả cả ba lần đều sấp."),
      num("Gieo hai xúc xắc. Có bao nhiêu kết quả (xét thứ tự hai xúc xắc) cho tích số chấm chia hết cho 5?", 11, "Phải có ít nhất một xúc xắc ra 5: 6 + 6 – 1 = 11."),
      num("Trung bình cộng của năm số là 20. Bớt đi một số thì trung bình cộng của bốn số còn lại là 18. Số bị bớt là:", 20 * 5 - 18 * 4),
      num("Bốn bạn có điểm trung bình là 9. Khi một bạn thứ năm điểm 4 tham gia thì điểm trung bình của năm bạn là:", (36 + 4) / 5),
    ],
  },

  // Bài 73. Ôn tập chung
  73: {
    intro: "Ôn lại toàn bộ chương trình Toán lớp 4: số tự nhiên, bốn phép tính, phân số, hình học, đo lường, thống kê và xác suất.",
    questions: [
      num("Viết số: bốn mươi hai triệu không trăm linh năm nghìn.", 42005000),
      num("Tính: 12 345 + 67 890 – 5 000 = ?", 12345 + 67890 - 5000),
      num("Đặt tính rồi tính: 2 506 × 34 = ?", 2506 * 34),
      num("Đặt tính rồi tính: 9 072 : 28 = ?", 9072 / 28),
      mc("Tính: {5/6} – {1/4} = ?", fr(7, 12), [fr(4, 2), fr(4, 12), fr(1, 12)]),
      mc("Tính: {2/3} × {9/10} = ? (rút gọn kết quả)", fr(3, 5), [fr(18, 30), fr(11, 13), fr(5, 3)]),
      num("3 tấn 4 tạ = ? kg", 3400),
      num("Tìm số trung bình cộng của 15, 28 và 32.", (15 + 28 + 32) / 3),
      num("Hai số có tổng bằng 68 và hiệu bằng 12. Số bé là:", (68 - 12) / 2),
      num("Cửa hàng có 150 kg gạo, đã bán {2/5} số gạo. Cửa hàng đã bán bao nhiêu ki-lô-gam gạo?", 150 / 5 * 2, undefined, "kg"),
      num("Hình chữ nhật có chiều dài 35 cm, chiều rộng 20 cm. Chu vi hình chữ nhật là bao nhiêu xăng-ti-mét?", (35 + 20) * 2, undefined, "cm"),
      mc("[[angle:135]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      mc("Năm 2026 thuộc thế kỉ nào?", "thế kỉ XXI", ["thế kỉ XX", "thế kỉ XXII", "thế kỉ XIX"]),
    ],
    adv: [
      num("Tuổi bố gấp 4 lần tuổi con, tổng số tuổi của hai bố con là 50. Bố bao nhiêu tuổi?", 50 / 5 * 4, undefined, "tuổi"),
      num("Hình chữ nhật có chu vi 64 cm, chiều dài hơn chiều rộng 8 cm. Diện tích hình chữ nhật là bao nhiêu xăng-ti-mét vuông?", 20 * 12, "Nửa chu vi 32 cm: chiều dài (32 + 8) : 2 = 20 cm, chiều rộng 12 cm.", "cm²"),
      num("Một số có ba chữ số. Khi viết thêm chữ số 1 vào bên trái số đó thì được số mới gấp 9 lần số ban đầu. Số ban đầu là:", 125, "Số mới hơn số cũ 1 000 đơn vị, tức 8 lần số cũ là 1 000."),
      num("Nam có 60 000 đồng. Nam dùng {1/3} số tiền mua vở, {1/4} số tiền mua bút. Nam còn lại bao nhiêu đồng?", 60000 - 20000 - 15000, undefined, "đồng"),
      num("Có 4 bạn gặp nhau, mỗi hai bạn bắt tay nhau đúng một lần. Có tất cả bao nhiêu cái bắt tay?", 6, "AB, AC, AD, BC, BD, CD."),
    ],
  },
};
