import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch1: Record<number, L> = {
  // Bài 1. Ôn tập các số đến 100 000
  1: {
    intro:
      "Số có năm chữ số gồm các hàng: chục nghìn, nghìn, trăm, chục, đơn vị. Muốn so sánh, hãy so sánh số chữ số trước, rồi so từng hàng từ trái sang phải.",
    questions: [
      num("Viết số: bốn mươi bảy nghìn không trăm tám mươi lăm.", 47085),
      num("Viết số: chín mươi nghìn sáu trăm linh bảy.", 90607),
      num("Viết số gồm 6 chục nghìn, 3 nghìn, 9 trăm và 2 đơn vị.", 63902),
      num("Viết số gồm 8 chục nghìn, 5 trăm và 6 đơn vị.", 80506),
      mc("Số 70 305 đọc là:", "bảy mươi nghìn ba trăm linh năm", ["bảy mươi nghìn ba trăm năm mươi", "bảy nghìn không trăm ba mươi lăm", "bảy mươi ba nghìn không trăm linh năm"]),
      num("Số ?  52 407 = 50 000 + 2 000 + ? + 7", 400),
      num("Số ?  41 086 = 40 000 + 1 000 + ? + 6", 80),
      num("Số liền trước của 70 000 là số nào?", 69999),
      num("Số ?  24 500; 25 000; 25 500; ?; 26 500. Số còn thiếu là:", 26000),
      mc("Chọn dấu thích hợp: 57 096 ? 57 960", "<", [">", "="], "Hàng nghìn bằng nhau, hàng trăm: 0 < 9."),
      mc("Số lớn nhất trong các số 48 312, 48 321, 48 231, 48 132 là:", 48321, [48312, 48231, 48132]),
      mc("Số dân một xã là 27 849 người. Làm tròn số dân đến hàng nghìn là:", 28000, [27000, 27800, 27900]),
      mc("Số dân ba xã: xã Hoà 12 480 người, xã Bình 12 084 người, xã An 12 840 người. Xã nào đông dân nhất?", "Xã An", ["Xã Hoà", "Xã Bình", "Ba xã bằng nhau"]),
      num("Từ ba chữ số 3, 0, 5 viết số có ba chữ số khác nhau bé nhất. Số đó là:", 305, "Chữ số 0 không đứng đầu: các số có thể là 305, 350, 503, 530; bé nhất là 305."),
    ],
    adv: [
      num("Số lớn nhất có năm chữ số khác nhau là số nào?", 98765),
      num("Số bé nhất có năm chữ số khác nhau là số nào?", 10234, "Chữ số hàng chục nghìn bé nhất là 1, rồi 0, 2, 3, 4."),
      num("Có bao nhiêu số có hai chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị 5 đơn vị?", 5, "Đó là 50, 61, 72, 83, 94."),
      num("Có bao nhiêu số tròn nghìn từ 12 000 đến 20 000 (tính cả hai số đầu và cuối)?", 9, "12 000; 13 000; ...; 20 000 là 9 số."),
      num("Viết liên tiếp các số tự nhiên từ 1 đến 30 thì phải dùng tất cả bao nhiêu chữ số?", 9 + 21 * 2, "9 số có một chữ số và 21 số có hai chữ số: 9 + 21 × 2 = 51.", "chữ số"),
      num("Cho dãy số 3; 8; 13; 18; ... Số hạng thứ 20 của dãy là số nào?", 3 + 19 * 5, "Mỗi số hơn số liền trước 5 đơn vị: 3 + 19 × 5 = 98."),
    ],
  },

  // Bài 2. Ôn tập các phép tính trong phạm vi 100 000
  2: {
    intro:
      "Cộng, trừ, nhân, chia các số trong phạm vi 100 000: đặt tính thẳng hàng rồi tính từ phải sang trái. Biểu thức có ngoặc thì tính trong ngoặc trước; có nhân, chia và cộng, trừ thì nhân, chia trước.",
    questions: [
      num("Tính nhẩm: 36 000 + 27 000 = ?", 36000 + 27000),
      num("Tính nhẩm: 90 000 – 48 000 = ?", 90000 - 48000),
      num("Tính nhẩm: 12 000 × 6 = ?", 12000 * 6),
      num("Tính nhẩm: 84 000 : 7 = ?", 84000 / 7),
      num("Đặt tính rồi tính: 47 386 + 28 459 = ?", 47386 + 28459),
      num("Đặt tính rồi tính: 90 004 – 36 718 = ?", 90004 - 36718),
      num("Đặt tính rồi tính: 14 276 × 6 = ?", 14276 * 6),
      num("Đặt tính rồi tính: 78 435 : 5 = ?", 78435 / 5),
      num("Thực hiện phép chia 83 507 : 6. Thương là bao nhiêu?", Math.floor(83507 / 6), "83 507 : 6 = 13 917 (dư 5)."),
      num("Tính giá trị của biểu thức: 45 000 – 6 000 × 5 + 2 500 = ?", 45000 - 6000 * 5 + 2500),
      num("Tính giá trị của biểu thức: (72 000 – 18 000) : 9 = ?", (72000 - 18000) / 9),
      mc("Tích của 18 245 và 4 là:", "72 980", ["72 820", "62 980", "72 880"]),
      num(
        "Nhà máy ngày thứ nhất làm 12 450 sản phẩm, ngày thứ hai làm gấp 2 lần ngày thứ nhất, ngày thứ ba làm ít hơn ngày thứ hai 3 700 sản phẩm. Cả ba ngày nhà máy làm được bao nhiêu sản phẩm?",
        12450 + 12450 * 2 + (12450 * 2 - 3700),
        "Ngày hai: 24 900. Ngày ba: 24 900 – 3 700 = 21 200. Tổng: 12 450 + 24 900 + 21 200 = 58 550.",
        "sản phẩm",
      ),
      num(
        "Bác Nam mua 3 bao gạo, mỗi bao giá 18 500 đồng, rồi đưa người bán hàng tờ 100 000 đồng. Người bán hàng phải trả lại bác Nam bao nhiêu đồng?",
        100000 - 3 * 18500,
        "3 bao gạo: 3 × 18 500 = 55 500 (đồng). Trả lại: 100 000 – 55 500 = 44 500 (đồng).",
        "đồng",
      ),
    ],
    adv: [
      num("Tính bằng cách thuận tiện: 6 250 + 3 750 + 4 800 + 200 = ?", 6250 + 3750 + 4800 + 200, "Ghép: (6 250 + 3 750) + (4 800 + 200) = 10 000 + 5 000."),
      num("Tìm x biết: x × 7 – 1 500 = 12 500. Số x là:", (12500 + 1500) / 7, "x × 7 = 12 500 + 1 500 = 14 000, nên x = 14 000 : 7 = 2 000."),
      num("Một số chia cho 8 được thương là 1 234 và số dư là 7. Số đó là:", 8 * 1234 + 7, "Số bị chia = thương × số chia + số dư = 1 234 × 8 + 7."),
      num("Hiệu của hai số là 5 000, số bé là 17 360. Tích của số lớn và 4 là:", (17360 + 5000) * 4, "Số lớn: 17 360 + 5 000 = 22 360; 22 360 × 4 = 89 440."),
      num("An có 150 000 đồng. An mua 4 quyển sách, mỗi quyển giá 24 500 đồng và một bộ bút giá 18 000 đồng. An còn lại bao nhiêu đồng?", 150000 - 4 * 24500 - 18000, undefined, "đồng"),
      num("Một người đi bộ 3 ngày liền. Ngày đầu đi 15 600 m, ngày hai đi ít hơn ngày đầu 2 400 m, ngày ba đi nhiều hơn ngày hai 1 800 m. Cả ba ngày người đó đi được bao nhiêu mét?", 15600 + (15600 - 2400) + (15600 - 2400 + 1800), undefined, "m"),
    ],
  },

  // Bài 3. Số chẵn, số lẻ
  3: {
    intro:
      "Số chẵn là số chia hết cho 2, có chữ số tận cùng là 0, 2, 4, 6, 8. Số lẻ là số không chia hết cho 2, có chữ số tận cùng là 1, 3, 5, 7, 9.",
    questions: [
      mc("Số nào dưới đây là số chẵn?", 3078, [5291, 7413, 1009]),
      mc("Số nào dưới đây là số lẻ?", 8465, [2740, 6118, 9202]),
      tf("Số 4 650 là số lẻ.", false, "Số 4 650 có chữ số tận cùng là 0 nên là số chẵn."),
      tf("Tổng của hai số lẻ là một số chẵn.", true, "Ví dụ: 3 + 5 = 8; 7 + 9 = 16."),
      num("Từ 100 đến 150 có bao nhiêu số chẵn (tính cả 100 và 150)?", (150 - 100) / 2 + 1, "(150 – 100) : 2 + 1 = 26."),
      num("Từ 21 đến 60 có bao nhiêu số lẻ?", (59 - 21) / 2 + 1, "Các số lẻ từ 21 đến 59: (59 – 21) : 2 + 1 = 20."),
      num("Số chẵn lớn nhất có bốn chữ số khác nhau là số nào?", 9876),
      num("Số lẻ bé nhất có ba chữ số khác nhau là số nào?", 103),
      num("Từ ba chữ số 2, 5, 8 lập các số có ba chữ số khác nhau. Có bao nhiêu số chẵn?", 4, "Số chẵn tận cùng 2 hoặc 8: 582, 852, 528, 258."),
      num("Dãy số nhà bên chẵn: 24, 26, 28, ... Ngôi nhà thứ 10 của dãy có số nhà là:", 24 + 9 * 2),
      mc("Tích 7 × 13 là:", "số lẻ", ["số chẵn", "vừa chẵn vừa lẻ", "không xác định được"], "7 × 13 = 91, tận cùng là 1."),
      num("Hai số chẵn liên tiếp có tổng bằng 154. Số bé là:", 76, "Hai số là 76 và 78."),
      num("Hai số lẻ liên tiếp có tổng bằng 96. Số lớn là:", 49, "Hai số là 47 và 49."),
    ],
    adv: [
      num("Tính tổng các số chẵn từ 2 đến 20.", 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20, "Ghép cặp: (2 + 20) × 10 : 2 = 110."),
      num("Có bao nhiêu số chẵn có ba chữ số?", (998 - 100) / 2 + 1, "Từ 100 đến 998: (998 – 100) : 2 + 1 = 450."),
      num("Tổng của ba số chẵn liên tiếp là 108. Số lớn nhất trong ba số là:", 38, "Số ở giữa là 108 : 3 = 36, nên ba số là 34; 36; 38."),
      num("Từ ba chữ số 0, 3, 6 lập các số có ba chữ số khác nhau. Có bao nhiêu số lẻ?", 1, "Số lẻ phải tận cùng bằng 3, chữ số 0 không đứng đầu nên chỉ có số 603."),
      num("Các ngôi nhà bên dãy lẻ được đánh số liên tiếp 1; 3; 5; ...; 99. Dãy đó có bao nhiêu ngôi nhà?", (99 - 1) / 2 + 1, undefined, "ngôi nhà"),
    ],
  },

  // Bài 4. Biểu thức chứa chữ
  4: {
    intro:
      "Biểu thức chứa chữ là biểu thức có chữ (a, b, m, ...). Mỗi lần thay chữ bằng một số, ta tính được một giá trị của biểu thức.",
    questions: [
      num("Tính giá trị của biểu thức 3 × a + 12 với a = 15.", 3 * 15 + 12),
      num("Tính giá trị của biểu thức 200 – b : 4 với b = 60.", 200 - 60 / 4, "Chia trước, trừ sau: 60 : 4 = 15; 200 – 15 = 185."),
      num("Tính giá trị của biểu thức (m + 18) × 5 với m = 22.", (22 + 18) * 5),
      num("Tính giá trị của biểu thức 5 × a + 4 × b với a = 6 và b = 7.", 5 * 6 + 4 * 7),
      num("Chu vi hình chữ nhật P = (a + b) × 2. Tính P khi a = 85 m và b = 47 m.", (85 + 47) * 2, undefined, "m"),
      num("Diện tích hình chữ nhật S = a × b. Tính S khi a = 24 cm và b = 15 cm.", 24 * 15, undefined, "cm²"),
      num("Chu vi hình vuông cạnh a được tính theo công thức P = a × 4. Tính P khi a = 125 dm.", 125 * 4, undefined, "dm"),
      num("Một quyển vở giá x đồng. Mẹ mua 6 quyển và đưa 50 000 đồng. Số tiền được trả lại là 50 000 – 6 × x. Tính số tiền trả lại khi x = 7 500.", 50000 - 6 * 7500, undefined, "đồng"),
      num("Tính giá trị của biểu thức a × 8 – a × 3 với a = 9.", 9 * 8 - 9 * 3),
      num("Tính giá trị của biểu thức 120 : (a – 2) với a = 8.", 120 / (8 - 2)),
      num("Ngày thứ nhất cửa hàng bán x kg gạo, ngày thứ hai bán gấp đôi ngày thứ nhất. Cả hai ngày bán x + x × 2 kg gạo. Tính số gạo đó khi x = 45.", 45 + 45 * 2, undefined, "kg"),
      mc("Biểu thức nào dưới đây tính chu vi tam giác có ba cạnh a, b, c?", "a + b + c", ["a × b × c", "(a + b) × 2", "a × 3 + b"]),
      mc("Lớp có a bạn nam và b bạn nữ, xếp thành các nhóm, mỗi nhóm 4 bạn. Số nhóm là:", "(a + b) : 4", ["a + b : 4", "(a + b) × 4", "a : 4 + b × 4"]),
      num("Tính giá trị của biểu thức 1 000 – (a + b) × 5 với a = 64 và b = 36.", 1000 - (64 + 36) * 5),
    ],
    adv: [
      num("Tính giá trị của biểu thức 100 – a × (a + 4) với a = 6.", 100 - 6 * (6 + 4)),
      num("Biểu thức a × 5 + 7 có giá trị bằng 62. Khi đó a bằng:", (62 - 7) / 5),
      num("Biểu thức (m – 4) × 9 có giá trị bằng 54. Khi đó m bằng:", 54 / 9 + 4, "m – 4 = 54 : 9 = 6, nên m = 6 + 4 = 10."),
      num("Số tự nhiên n lớn hơn 8, bé hơn 20 và 24 : n là một số tự nhiên. Số n là:", 12, "Các ước của 24 là 1, 2, 3, 4, 6, 8, 12, 24; chỉ có 12 nằm giữa 8 và 20."),
      num("Biết a + b = 17. Giá trị của biểu thức a × 4 + b × 4 là:", 17 * 4, "a × 4 + b × 4 = (a + b) × 4 = 17 × 4."),
      num("Chu vi hình chữ nhật là 90 cm, chiều dài là 28 cm. Chiều rộng là:", 90 / 2 - 28, "Nửa chu vi: 90 : 2 = 45; chiều rộng: 45 – 28 = 17.", "cm"),
    ],
  },

  // Bài 5. Giải bài toán có ba bước tính
  5: {
    intro:
      "Bài toán có ba bước tính: đọc kĩ đề, tìm các số chưa biết ở từng bước, rồi mới tìm đáp số. Có thể vẽ sơ đồ tóm tắt để dễ nhìn.",
    questions: [
      num(
        "Lớp 4A trồng 45 cây, lớp 4B trồng nhiều hơn lớp 4A 12 cây, lớp 4C trồng ít hơn lớp 4B 8 cây. Cả ba lớp trồng được bao nhiêu cây?",
        45 + 57 + 49,
        "Lớp 4B: 45 + 12 = 57 cây. Lớp 4C: 57 – 8 = 49 cây. Tổng: 45 + 57 + 49 = 151 cây.",
        "cây",
      ),
      num(
        "Mẹ mua 4 gói bánh, mỗi gói 12 500 đồng và 3 hộp sữa, mỗi hộp 8 000 đồng. Mẹ đưa người bán 100 000 đồng. Mẹ được trả lại bao nhiêu đồng?",
        100000 - 4 * 12500 - 3 * 8000,
        "Tiền bánh: 50 000. Tiền sữa: 24 000. Trả lại: 100 000 – 50 000 – 24 000 = 26 000.",
        "đồng",
      ),
      num(
        "Một xe chở hàng chạy 6 chuyến, mỗi chuyến chở 450 kg. Cửa hàng đã bán 1 200 kg rồi nhập thêm 800 kg. Hỏi cửa hàng có tất cả bao nhiêu ki-lô-gam hàng?",
        6 * 450 - 1200 + 800,
        "Hàng chở về: 6 × 450 = 2 700 kg. Sau khi bán: 2 700 – 1 200 = 1 500 kg. Sau khi nhập thêm: 1 500 + 800 = 2 300 kg.",
        "kg",
      ),
      num(
        "Mẹ cho An 200 000 đồng. An mua 2 chiếc áo, mỗi chiếc 65 000 đồng và 1 chiếc quần giá 48 000 đồng. An còn lại bao nhiêu đồng?",
        200000 - 2 * 65000 - 48000,
        undefined,
        "đồng",
      ),
      num(
        "Mảnh vườn trồng rau cải có diện tích 240 m². Diện tích trồng cà chua gấp đôi diện tích trồng rau cải, diện tích trồng đậu nhiều hơn diện tích trồng cà chua 60 m². Cả ba loại có diện tích bao nhiêu mét vuông?",
        240 + 480 + 540,
        "Cà chua: 240 × 2 = 480 m². Đậu: 480 + 60 = 540 m². Tổng: 240 + 480 + 540 = 1 260 m².",
        "m²",
      ),
      num(
        "Kho có 5 000 kg gạo. Ngày thứ nhất xuất 1 250 kg, ngày thứ hai xuất gấp đôi ngày thứ nhất. Trong kho còn lại bao nhiêu ki-lô-gam gạo?",
        5000 - 1250 - 2500,
        undefined,
        "kg",
      ),
      num(
        "Tổ một làm 125 sản phẩm, tổ hai làm nhiều hơn tổ một 35 sản phẩm, tổ ba làm bằng một nửa số sản phẩm của tổ hai. Cả ba tổ làm được bao nhiêu sản phẩm?",
        125 + 160 + 80,
        "Tổ hai: 125 + 35 = 160. Tổ ba: 160 : 2 = 80. Tổng: 125 + 160 + 80 = 365.",
        "sản phẩm",
      ),
      num(
        "Người ta bơm nước vào bể trong 3 giờ, mỗi giờ bơm được 850 l. Bể chứa được 4 000 l. Hỏi còn thiếu bao nhiêu lít nước thì đầy bể?",
        4000 - 3 * 850,
        undefined,
        "lít",
      ),
      num(
        "Thư viện có 3 giá sách, mỗi giá 125 quyển. Học sinh đã mượn 200 quyển, sau đó thư viện nhập thêm 85 quyển. Hỏi thư viện có bao nhiêu quyển sách?",
        3 * 125 - 200 + 85,
        undefined,
        "quyển",
      ),
      num(
        "Cô Lan mua 3 kg cam, mỗi ki-lô-gam giá 35 000 đồng và 2 kg táo, mỗi ki-lô-gam giá 42 000 đồng. Cô đưa 200 000 đồng. Cô được trả lại bao nhiêu đồng?",
        200000 - 3 * 35000 - 2 * 42000,
        undefined,
        "đồng",
      ),
      num(
        "Giờ thứ nhất ô tô đi được 52 km, giờ thứ hai đi nhiều hơn giờ thứ nhất 8 km, giờ thứ ba đi ít hơn giờ thứ hai 5 km. Cả ba giờ ô tô đi được bao nhiêu ki-lô-mét?",
        52 + 60 + 55,
        undefined,
        "km",
      ),
      num(
        "Con 9 tuổi. Tuổi mẹ gấp 4 lần tuổi con. Tuổi bà hơn tuổi mẹ 25 tuổi. Tổng số tuổi của ba bà cháu là bao nhiêu?",
        9 + 36 + 61,
        "Mẹ: 9 × 4 = 36 tuổi. Bà: 36 + 25 = 61 tuổi. Tổng: 9 + 36 + 61 = 106.",
        "tuổi",
      ),
    ],
    adv: [
      num("Mai có 14 viên kẹo, Lan có nhiều hơn Mai 6 viên, Hồng có số kẹo gấp đôi Lan. Cả ba bạn có bao nhiêu viên kẹo?", 14 + 20 + 40, undefined, "viên"),
      num("Ba bạn góp 150 000 đồng để mua quà. An góp 45 000 đồng, Bình góp gấp đôi An, còn lại là tiền Chi góp. Chi góp bao nhiêu đồng?", 150000 - 45000 - 90000, undefined, "đồng"),
      num("Buổi sáng cửa hàng bán 85 kg gạo, buổi chiều bán nhiều hơn buổi sáng 25 kg thì trong kho còn 45 kg. Lúc đầu kho có bao nhiêu ki-lô-gam gạo?", 85 + 110 + 45, undefined, "kg"),
      num("Tổng số tuổi của mẹ và con là 40 tuổi. Mẹ hơn con 28 tuổi. Con bao nhiêu tuổi?", (40 - 28) / 2, "Hai lần tuổi con là 40 – 28 = 12, nên con 6 tuổi.", "tuổi"),
      num("Thùng thứ nhất đựng 18 l dầu, thùng thứ hai đựng gấp đôi thùng thứ nhất, thùng thứ ba đựng ít hơn tổng hai thùng đầu 14 l. Cả ba thùng đựng bao nhiêu lít dầu?", 18 + 36 + (54 - 14), undefined, "lít"),
    ],
  },

  // Bài 6. Luyện tập chung
  6: {
    intro: "Ôn lại: số chẵn – số lẻ, so sánh và làm tròn số, bốn phép tính, tính giá trị biểu thức và giải toán lời văn.",
    questions: [
      mc("Trong các số 72 405, 48 316, 90 827, 55 553, số nào là số chẵn?", "48 316", ["72 405", "90 827", "55 553"]),
      mc("Làm tròn số 74 962 đến hàng nghìn, ta được:", 75000, [74000, 74900, 75900]),
      num("Đặt tính rồi tính: 56 207 – 18 649 = ?", 56207 - 18649),
      num("Đặt tính rồi tính: 24 815 + 37 698 = ?", 24815 + 37698),
      num("Đặt tính rồi tính: 9 306 × 8 = ?", 9306 * 8),
      num("Đặt tính rồi tính: 71 524 : 4 = ?", 71524 / 4),
      num("Tính giá trị của biểu thức: 3 500 × (12 – 7) + 4 250 = ?", 3500 * (12 - 7) + 4250),
      num("Tính giá trị của biểu thức m – n × 4 với m = 900 và n = 125.", 900 - 125 * 4),
      num(
        "Một xưởng may ngày thứ nhất may 235 cái áo, ngày thứ hai may 280 cái áo, ngày thứ ba may ít hơn tổng số áo hai ngày đầu 300 cái. Cả ba ngày xưởng may được bao nhiêu cái áo?",
        235 + 280 + (235 + 280 - 300),
        "Hai ngày đầu: 515 cái. Ngày ba: 515 – 300 = 215 cái. Cả ba ngày: 515 + 215 = 730 cái.",
        "cái áo",
      ),
      mc("Biểu thức nào dưới đây có giá trị lớn nhất?", "(20 000 + 5 000) × 3", ["20 000 + 5 000 × 3", "20 000 × 3 + 5 000", "20 000 + 5 000 + 3"], "75 000; 35 000; 65 000; 25 003."),
      num("Số lẻ lớn nhất có ba chữ số là số nào?", 999),
      num(
        "Cửa hàng có 36 thùng nước, mỗi thùng 24 chai. Cửa hàng đã bán 450 chai, số chai còn lại xếp đều vào 6 hộp. Mỗi hộp có bao nhiêu chai?",
        (36 * 24 - 450) / 6,
        "Tổng số chai: 864. Còn lại: 864 – 450 = 414. Mỗi hộp: 414 : 6 = 69.",
        "chai",
      ),
      mc("Giá trị của biểu thức 6 × a – 15 với a = 9 là:", 39, [69, 49, 135]),
    ],
    adv: [
      num("Số liền sau của số lớn nhất có bốn chữ số khác nhau là số nào?", 9877),
      num("Một số nhân với 5 rồi trừ đi 3 thì được 97. Số đó là:", (97 + 3) / 5),
      num("Tổng của số chẵn lớn nhất có ba chữ số và số lẻ bé nhất có ba chữ số là:", 998 + 101),
      num("Hiệu của hai số là 135, số lớn là 400. Tích của số bé và 3 là:", (400 - 135) * 3, "Số bé: 400 – 135 = 265; 265 × 3 = 795."),
      num("Tính nhanh: 25 × 4 × 36 = ?", 25 * 4 * 36, "Nhân 25 với 4 trước được 100."),
      num("Cô giáo có 120 quyển vở chia đều cho 5 tổ, mỗi tổ lại chia đều cho 4 bạn. Mỗi bạn nhận được bao nhiêu quyển vở?", 120 / 5 / 4, undefined, "quyển"),
    ],
  },
};
