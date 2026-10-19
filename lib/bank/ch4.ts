import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch4: Record<number, L> = {
  // Bài 17. Yến, tạ, tấn
  17: {
    intro: "1 yến = 10 kg;  1 tạ = 10 yến = 100 kg;  1 tấn = 10 tạ = 1 000 kg.",
    questions: [
      num("5 yến = ? kg", 50),
      num("600 kg = ? tạ", 6),
      num("7 tạ = ? kg", 700),
      num("80 yến = ? tạ", 8),
      num("3 tấn = ? kg", 3000),
      num("6 tấn 4 tạ = ? tạ", 64),
      num("5 yến 7 kg = ? kg", 57),
      num("2 tạ 30 kg = ? kg", 230),
      num("7 tấn 250 kg = ? kg", 7250),
      num("Tính: 36 tạ + 48 tạ = ? tạ", 36 + 48),
      num("Tính: 15 tấn × 6 = ? tấn", 15 * 6),
      num("Xe thứ nhất chở 2 tấn 5 tạ gạo, xe thứ hai chở 18 tạ gạo. Hai xe chở tất cả bao nhiêu tạ gạo?", 25 + 18, "2 tấn 5 tạ = 25 tạ; 25 + 18 = 43 tạ.", "tạ"),
      num("Cửa hàng có 3 tạ 40 kg đường, đã bán 1 tạ 75 kg. Cửa hàng còn lại bao nhiêu ki-lô-gam đường?", 340 - 175, "3 tạ 40 kg = 340 kg; 1 tạ 75 kg = 175 kg; 340 – 175 = 165.", "kg"),
      mc("Một con bò nặng khoảng:", "3 tạ", ["3 kg", "3 yến", "3 tấn"]),
      num("Mỗi bao gạo nặng 5 yến. Xe chở 40 bao gạo như vậy. Xe chở được bao nhiêu tạ gạo?", 5 * 40 / 10, "5 yến × 40 = 200 yến = 20 tạ.", "tạ"),
    ],
    adv: [
      num("Con voi nặng 5 tấn 200 kg, con hổ nặng 2 tạ. Con voi nặng gấp mấy lần con hổ?", 5200 / 200, "5 tấn 200 kg = 5 200 kg; 2 tạ = 200 kg."),
      num("Xe tải chở được tối đa 3 tấn hàng. Đã xếp 45 bao, mỗi bao nặng 40 kg. Xe còn chở thêm được nhiều nhất bao nhiêu ki-lô-gam?", 3000 - 45 * 40, undefined, "kg"),
      num("3 tấn 4 tạ 5 yến 6 kg = ? kg", 3000 + 400 + 50 + 6),
      num("Mỗi ngày cửa hàng bán 2 tạ 5 yến gạo. Trong 7 ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?", 250 * 7, "2 tạ 5 yến = 250 kg; 250 × 7 = 1 750.", "kg"),
      num("Một bao gạo nặng 50 kg, một bao ngô nặng 4 yến. 6 bao gạo và 5 bao ngô nặng tất cả bao nhiêu ki-lô-gam?", 6 * 50 + 5 * 40, undefined, "kg"),
      num("Kho A có 5 tấn 2 tạ thóc, kho B có 3 tấn 6 tạ thóc. Phải chuyển từ kho A sang kho B bao nhiêu tạ thóc để hai kho có số thóc bằng nhau?", ((52 + 36) / 2) - 36, "Cả hai kho có 88 tạ, mỗi kho 44 tạ; kho B cần thêm 44 – 36 = 8 tạ.", "tạ"),
    ],
  },

  // Bài 18. Đề-xi-mét vuông, mét vuông, mi-li-mét vuông
  18: {
    intro: "1 dm² = 100 cm²;  1 m² = 100 dm²;  1 cm² = 100 mm².",
    questions: [
      tf("1 m² = 100 dm²", true),
      num("7 dm² = ? cm²", 700),
      num("1 200 cm² = ? dm²", 12),
      num("9 dm² 8 cm² = ? cm²", 908),
      num("6 m² = ? dm²", 600),
      num("4 m² 5 dm² = ? dm²", 405),
      num("2 700 dm² = ? m²", 27),
      num("5 cm² 30 mm² = ? mm²", 530),
      mc("Diện tích sân trường khoảng 2 000 ...", "m²", ["mm²", "cm²", "dm²"]),
      mc("Diện tích một tờ giấy A4 khoảng 6 ...", "dm²", ["mm²", "m²", "km²"]),
      num("Hình chữ nhật có chiều dài 12 dm, chiều rộng 8 dm. Diện tích hình đó là bao nhiêu đề-xi-mét vuông?", 12 * 8, undefined, "dm²"),
      num("Hình vuông cạnh 9 dm có diện tích bao nhiêu xăng-ti-mét vuông?", 9 * 9 * 100, "9 × 9 = 81 dm² = 8 100 cm².", "cm²"),
      num("Phòng học hình chữ nhật dài 8 m, rộng 6 m. Diện tích phòng là bao nhiêu mét vuông?", 8 * 6, undefined, "m²"),
      num("Nền phòng dài 6 m, rộng 4 m được lát bằng các viên gạch hình vuông cạnh 5 dm. Cần bao nhiêu viên gạch để lát kín nền?", (6 * 4 * 100) / 25, "Diện tích nền: 24 m² = 2 400 dm². Mỗi viên: 5 × 5 = 25 dm². Số viên: 2 400 : 25 = 96.", "viên"),
    ],
    adv: [
      num("Hình chữ nhật có diện tích 48 dm² và chiều rộng 6 dm. Chu vi hình chữ nhật đó là bao nhiêu đề-xi-mét?", (48 / 6 + 6) * 2, "Chiều dài: 48 : 6 = 8 dm. Chu vi: (8 + 6) × 2 = 28 dm.", "dm"),
      num("Nền nhà hình chữ nhật dài 8 m, rộng 5 m được lát bằng các viên gạch hình vuông cạnh 4 dm. Cần bao nhiêu viên gạch?", (8 * 5 * 100) / 16, "Nền: 40 m² = 4 000 dm². Mỗi viên 16 dm². 4 000 : 16 = 250.", "viên"),
      num("Hình vuông có chu vi 36 dm. Diện tích hình vuông đó là bao nhiêu đề-xi-mét vuông?", 9 * 9, "Cạnh: 36 : 4 = 9 dm.", "dm²"),
      num("Một tấm gỗ hình chữ nhật dài 2 m, rộng 5 dm. Diện tích tấm gỗ là bao nhiêu đề-xi-mét vuông?", 20 * 5, "2 m = 20 dm; 20 × 5 = 100 dm².", "dm²"),
      num("Từ một tấm bìa hình chữ nhật 10 cm × 8 cm, bạn Nam cắt bỏ một hình vuông cạnh 6 cm. Diện tích phần bìa còn lại là bao nhiêu xăng-ti-mét vuông?", 10 * 8 - 6 * 6, undefined, "cm²"),
      num("1 m² = ? cm²", 10000),
    ],
  },

  // Bài 19. Giây, thế kỉ
  19: {
    intro: "1 phút = 60 giây;  1 giờ = 60 phút. 1 thế kỉ = 100 năm. Thế kỉ I từ năm 1 đến năm 100; thế kỉ II từ năm 101 đến năm 200; ...; thế kỉ XXI từ năm 2001 đến năm 2100.",
    questions: [
      num("3 phút = ? giây", 180),
      num("2 phút 15 giây = ? giây", 135),
      num("240 giây = ? phút", 4),
      num("1 giờ = ? giây", 3600),
      mc("Năm 1945 thuộc thế kỉ nào?", "thế kỉ XX", ["thế kỉ XIX", "thế kỉ XXI", "thế kỉ XVIII"]),
      mc("Năm 2026 thuộc thế kỉ nào?", "thế kỉ XXI", ["thế kỉ XX", "thế kỉ XXII", "thế kỉ XIX"]),
      mc("Năm 1010 thuộc thế kỉ nào?", "thế kỉ XI", ["thế kỉ X", "thế kỉ XII", "thế kỉ IX"], "Thế kỉ XI gồm các năm từ 1001 đến 1100."),
      mc("Năm 1900 thuộc thế kỉ nào?", "thế kỉ XIX", ["thế kỉ XX", "thế kỉ XVIII", "thế kỉ XXI"], "Thế kỉ XIX gồm các năm từ 1801 đến 1900."),
      num("5 thế kỉ bằng bao nhiêu năm?", 500, undefined, "năm"),
      tf("Năm 2000 thuộc thế kỉ XXI.", false, "Năm 2000 là năm cuối cùng của thế kỉ XX."),
      num("Bình chạy hết 1 phút 5 giây, An chạy hết 62 giây. An chạy nhanh hơn Bình bao nhiêu giây?", 65 - 62, "1 phút 5 giây = 65 giây.", "giây"),
      num("Kim giây quay một vòng hết 60 giây. Trong 5 phút, kim giây quay được mấy vòng?", 300 / 60, undefined, "vòng"),
      num("Từ 3 giờ 15 phút 20 giây đến 3 giờ 17 phút 5 giây là bao nhiêu giây?", 17 * 60 + 5 - (15 * 60 + 20), "Từ 15 phút 20 giây đến 17 phút 5 giây: 1 025 – 920 = 105 giây.", "giây"),
    ],
    adv: [
      num("Thế kỉ XXI bắt đầu từ năm nào?", 2001),
      num("Năm 2026 là năm thứ mấy của thế kỉ XXI?", 26, "Thế kỉ XXI bắt đầu từ năm 2001, năm 2001 là năm thứ nhất."),
      num("Từ năm 1975 đến năm 2026 là bao nhiêu năm?", 2026 - 1975, undefined, "năm"),
      num("Trong 1 giờ, kim giây của đồng hồ quay được mấy vòng?", 60, undefined, "vòng"),
      num("Một năm không nhuận có 365 ngày. 365 ngày bằng 52 tuần và mấy ngày?", 365 - 52 * 7, "52 × 7 = 364 ngày; 365 – 364 = 1 ngày.", "ngày"),
      num("Trận đấu kéo dài 2 giờ 5 phút. Đổi ra phút, trận đấu kéo dài bao nhiêu phút?", 125, undefined, "phút"),
    ],
  },

  // Bài 20. Thực hành và trải nghiệm sử dụng một số đơn vị đo đại lượng
  20: {
    intro: "Khi đo và ước lượng, hãy chọn đơn vị phù hợp: kg, yến, tạ, tấn đo khối lượng; cm², dm², m² đo diện tích; giây, phút, giờ, thế kỉ đo thời gian.",
    questions: [
      mc("Một học sinh lớp 4 nặng khoảng 32 ...", "kg", ["tấn", "tạ", "mm"]),
      mc("Một chiếc xe tải lớn chở 4 ... hàng.", "tấn", ["kg", "yến", "g"]),
      num("Mỗi tháng gia đình Lan dùng 45 kg gạo. Cả năm (12 tháng) gia đình dùng bao nhiêu yến gạo?", 45 * 12 / 10, "45 × 12 = 540 kg = 54 yến.", "yến"),
      num("Lớp học hình chữ nhật dài 8 m, rộng 6 m. Diện tích lớp học là bao nhiêu mét vuông?", 8 * 6, undefined, "m²"),
      num("Mặt bàn hình chữ nhật dài 12 dm, rộng 5 dm. Diện tích mặt bàn là bao nhiêu đề-xi-mét vuông?", 12 * 5, undefined, "dm²"),
      num("Kim giây của đồng hồ quay một vòng hết bao nhiêu giây?", 60, undefined, "giây"),
      num("Em chạy 3 vòng sân hết 4 phút 30 giây. Trung bình mỗi vòng em chạy hết bao nhiêu giây?", (4 * 60 + 30) / 3, undefined, "giây"),
      num("Tấm thảm hình chữ nhật dài 3 m, rộng 2 m. Diện tích tấm thảm bằng bao nhiêu đề-xi-mét vuông?", 3 * 2 * 100, "3 × 2 = 6 m² = 600 dm².", "dm²"),
      num("Mỗi túi bột nặng 2 yến 5 kg. 4 túi bột như vậy nặng bao nhiêu ki-lô-gam?", 25 * 4, undefined, "kg"),
      mc("Diện tích một quyển vở khoảng 4 ...", "dm²", ["mm²", "m²", "km²"]),
      num("Cửa hàng có 2 tấn gạo, đã bán 7 tạ 5 yến. Cửa hàng còn lại bao nhiêu yến gạo?", 200 - 75, "2 tấn = 200 yến; 7 tạ 5 yến = 75 yến; 200 – 75 = 125.", "yến"),
      num("Tàu hoả xuất phát lúc 6 giờ 15 phút và đến ga lúc 9 giờ 45 phút. Tàu đi hết bao nhiêu phút?", (9 * 60 + 45) - (6 * 60 + 15), "3 giờ 30 phút = 210 phút.", "phút"),
    ],
    adv: [
      num("Sân trường hình chữ nhật dài 60 m, rộng 40 m. Trên sân có một bồn hoa hình chữ nhật dài 12 m, rộng 10 m. Diện tích phần sân còn lại là bao nhiêu mét vuông?", 60 * 40 - 12 * 10, undefined, "m²"),
      num("Cô Hoa có 5 tạ lúa. Cứ 1 yến lúa xay được 7 kg gạo. Cô xay được bao nhiêu ki-lô-gam gạo?", 50 * 7, "5 tạ = 50 yến; 50 × 7 = 350 kg.", "kg"),
      num("Chạy một vòng sân 400 m hết 1 phút 20 giây. Với tốc độ đó, chạy 3 vòng hết bao nhiêu giây?", 80 * 3, undefined, "giây"),
      num("Phòng khách hình chữ nhật dài 7 m, rộng 4 m được lát bằng các viên gạch hình chữ nhật 5 dm × 5 dm. Cần bao nhiêu viên gạch?", 7 * 4 * 100 / 25, undefined, "viên"),
      num("Người ta đóng 1 tấn gạo vào các bao, mỗi bao 25 kg. Mỗi ngày cửa hàng bán đúng 3 bao. Số gạo đó đủ bán trong nhiều nhất bao nhiêu ngày?", Math.floor(1000 / 25 / 3), "1 tấn gạo đóng được 40 bao; 40 : 3 = 13 (dư 1).", "ngày"),
    ],
  },

  // Bài 21. Luyện tập chung
  21: {
    intro: "Ôn lại các đơn vị: yến, tạ, tấn; dm², m², mm²; giây, phút, giờ; thế kỉ.",
    questions: [
      num("7 tạ 5 yến = ? kg", 750),
      num("4 m² 6 dm² = ? dm²", 406),
      num("3 phút 20 giây = ? giây", 200),
      mc("Năm 1789 thuộc thế kỉ nào?", "thế kỉ XVIII", ["thế kỉ XVII", "thế kỉ XIX", "thế kỉ XX"]),
      num("Tính: 3 tấn 5 tạ + 1 tấn 8 tạ = ? tạ", 35 + 18),
      num("Tính: 8 tấn – 3 tấn 5 tạ = ? tạ", 80 - 35),
      num("Mỗi hộp bánh nặng 3 yến. 15 hộp bánh như vậy nặng bao nhiêu ki-lô-gam?", 3 * 10 * 15, undefined, "kg"),
      num("Tính: 450 dm² + 8 m² = ? dm²", 450 + 800),
      mc("Một con voi nặng khoảng 5 ...", "tấn", ["kg", "yến", "tạ"]),
      num("Hình chữ nhật dài 3 m, rộng 20 dm. Diện tích hình đó là bao nhiêu đề-xi-mét vuông?", 30 * 20, undefined, "dm²"),
      num("2 giờ 20 phút = ? phút", 140),
      num("Nhà máy mỗi giờ sản xuất được 3 tạ đường. Trong 8 giờ nhà máy sản xuất được bao nhiêu yến đường?", 30 * 8, undefined, "yến"),
      mc("Thế kỉ XXI bắt đầu từ năm 2001 và kết thúc vào năm:", 2100, [2000, 2101, 2099]),
    ],
    adv: [
      num("Một thùng hàng nặng 2 tấn 400 kg được chia đều lên 8 xe. Mỗi xe chở bao nhiêu ki-lô-gam?", 2400 / 8, undefined, "kg"),
      num("Cửa hàng bán gạo 3 ngày: ngày đầu 1 tạ 40 kg, ngày hai 2 tạ 5 yến, ngày ba 85 kg. Cả ba ngày bán được bao nhiêu ki-lô-gam gạo?", 140 + 250 + 85, undefined, "kg"),
      num("Sàn nhà hình chữ nhật dài 9 m, rộng 4 m được lát bằng các tấm ván hình chữ nhật 3 dm × 2 dm. Cần bao nhiêu tấm ván?", 9 * 4 * 100 / 6, "Sàn: 36 m² = 3 600 dm². Mỗi tấm: 6 dm². 3 600 : 6 = 600.", "tấm"),
      num("Chuyến tàu chạy hết 4 giờ 25 phút. Tàu đã chạy 135 phút. Tàu còn phải chạy bao nhiêu phút nữa?", (4 * 60 + 25) - 135, undefined, "phút"),
      num("Từ năm 1850 đến năm 2050 có bao nhiêu thế kỉ?", 2, "200 năm bằng 2 thế kỉ.", "thế kỉ"),
    ],
  },
};
