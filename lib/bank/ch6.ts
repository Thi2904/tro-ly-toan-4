import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch6: Record<number, L> = {
  // Bài 27. Hai đường thẳng vuông góc
  27: {
    intro:
      "Hai đường thẳng vuông góc với nhau tạo thành bốn góc vuông có chung đỉnh. Ta dùng ê ke để kiểm tra hoặc vẽ hai đường thẳng vuông góc.",
    questions: [
      mc("[[lines:perp]]\nHai đường thẳng trong hình có quan hệ gì với nhau?", "vuông góc với nhau", ["song song với nhau", "trùng nhau", "cắt nhau nhưng không vuông góc"]),
      mc("[[lines:cross]]\nHai đường thẳng trong hình có quan hệ gì với nhau?", "cắt nhau nhưng không vuông góc", ["vuông góc với nhau", "song song với nhau", "trùng nhau"]),
      mc("[[lines:parallel]]\nHai đường thẳng trong hình có quan hệ gì với nhau?", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng nhau"]),
      num("Hai đường thẳng vuông góc cắt nhau tạo thành bốn góc vuông có chung đỉnh. Tổng số đo bốn góc đó là bao nhiêu độ?", 4 * 90, undefined, "độ"),
      tf("Hai đường thẳng vuông góc với nhau thì cắt nhau tại một điểm.", true),
      tf("Hai đường thẳng cắt nhau thì vuông góc với nhau.", false, "Hai đường thẳng cắt nhau chỉ vuông góc khi tạo ra góc vuông."),
      mc("Hình chữ nhật ABCD: cạnh AB vuông góc với những cạnh nào?", "AD và BC", ["chỉ CD", "AC", "BD"]),
      num("Hình chữ nhật có bao nhiêu cặp cạnh kề nhau vuông góc với nhau?", 4, "AB – BC, BC – CD, CD – DA, DA – AB."),
      mc("[[shape:rectangle]]\nTrong hình chữ nhật, hai cạnh kề nhau:", "vuông góc với nhau", ["song song với nhau", "trùng nhau", "tạo thành góc tù"]),
      mc("[[clock:3:00]]\nLúc 3 giờ, kim giờ và kim phút của đồng hồ:", "vuông góc với nhau", ["song song với nhau", "trùng nhau", "tạo thành góc bẹt"]),
      mc("Lúc nào kim giờ và kim phút của đồng hồ vuông góc với nhau?", "9 giờ", ["4 giờ", "6 giờ", "12 giờ"]),
      mc("Chữ cái nào dưới đây có hai nét vuông góc với nhau?", "L", ["V", "X", "N"]),
      num("Đường thẳng AB vuông góc với đường thẳng CD tại O. Biết góc AOC = 90°. Góc COB bằng bao nhiêu độ?", 90, undefined, "độ"),
    ],
    adv: [
      num("Hình vuông ABCD có bao nhiêu cặp cạnh kề nhau vuông góc?", 4),
      num("Tam giác vuông có bao nhiêu cặp cạnh vuông góc với nhau?", 1),
      num("Từ 1 giờ đến 12 giờ (các giờ đúng), có bao nhiêu thời điểm kim giờ và kim phút vuông góc với nhau?", 2, "Đó là 3 giờ và 9 giờ."),
      mc("Gấp tờ giấy hình chữ nhật làm đôi theo chiều dài rồi gấp đôi tiếp theo chiều rộng. Hai nếp gấp mở ra tạo thành hai đường thẳng:", "vuông góc với nhau", ["song song với nhau", "trùng nhau", "cắt nhau nhưng không vuông góc"]),
      mc("Tứ giác có bốn góc vuông là hình gì?", "hình chữ nhật", ["hình thoi", "hình bình hành không có góc vuông", "hình tam giác"]),
    ],
  },

  // Bài 28. Thực hành và trải nghiệm vẽ hai đường thẳng vuông góc
  28: {
    intro:
      "Vẽ đường thẳng CD đi qua điểm H và vuông góc với đường thẳng AB: Bước 1: đặt một cạnh góc vuông của ê ke trùng với đường thẳng AB, cạnh góc vuông thứ hai gặp điểm H. Bước 2: vạch đường thẳng theo cạnh góc vuông thứ hai của ê ke.",
    questions: [
      mc(
        "Để vẽ đường thẳng CD đi qua điểm H và vuông góc với đường thẳng AB, bước 1 ta đặt ê ke như thế nào?",
        "một cạnh góc vuông trùng với AB, cạnh góc vuông thứ hai gặp điểm H",
        ["cạnh huyền của ê ke trùng với AB", "đỉnh góc nhọn của ê ke trùng với H", "ê ke đặt bất kì trên tờ giấy"],
      ),
      mc("Ở bước 2, ta vạch đường thẳng CD theo:", "cạnh góc vuông thứ hai của ê ke", ["cạnh huyền của ê ke", "cạnh góc vuông thứ nhất của ê ke (trùng với AB)", "mép tờ giấy"]),
      mc("Qua một điểm H cho trước, vẽ được bao nhiêu đường thẳng vuông góc với đường thẳng AB?", 1, [0, 2, "vô số"]),
      num("Đoạn thẳng AB dài 24 cm, H là trung điểm của AB. Độ dài đoạn thẳng AH là bao nhiêu xăng-ti-mét?", 24 / 2, undefined, "cm"),
      num("Đoạn thẳng CD vuông góc với AB tại H, H nằm giữa C và D. Biết HC = 8 cm, HD = 15 cm. Độ dài CD là bao nhiêu xăng-ti-mét?", 8 + 15, undefined, "cm"),
      mc("Khung tranh làm bằng 4 que gỗ, hai que kề nhau vuông góc với nhau, hai que đối diện bằng nhau. Khung tranh có dạng hình gì?", "hình chữ nhật", ["hình tam giác", "hình tròn", "hình thoi"]),
      tf("Có thể dùng ê ke để vẽ hai đường thẳng vuông góc với nhau.", true),
      num("Hình chữ nhật có chiều dài 12 cm, chiều rộng 7 cm. Chu vi hình chữ nhật là bao nhiêu xăng-ti-mét?", (12 + 7) * 2, undefined, "cm"),
      mc("Vẽ hình chữ nhật ABCD có AB = 6 cm, BC = 4 cm. Cạnh AD dài:", "4 cm", ["6 cm", "10 cm", "2 cm"]),
      num("Hình vuông cạnh 5 cm có chu vi bao nhiêu xăng-ti-mét?", 5 * 4, undefined, "cm"),
      num("Mảnh vườn hình chữ nhật dài 30 m, rộng 18 m. Người ta rào xung quanh vườn. Hàng rào dài bao nhiêu mét?", (30 + 18) * 2, undefined, "m"),
      num("Mảnh vườn hình chữ nhật dài 30 m, rộng 18 m có diện tích bao nhiêu mét vuông?", 30 * 18, undefined, "m²"),
    ],
    adv: [
      num("Từ một tấm bìa hình chữ nhật dài 12 cm, rộng 5 cm, cắt ra các hình vuông cạnh 5 cm. Cắt được nhiều nhất bao nhiêu hình vuông?", Math.floor(12 / 5), undefined, "hình"),
      num("Hình vuông ABCD cạnh 8 cm. Đường thẳng đi qua trung điểm của AB và vuông góc với AB chia hình vuông thành hai hình chữ nhật. Chu vi mỗi hình chữ nhật là bao nhiêu xăng-ti-mét?", (4 + 8) * 2, undefined, "cm"),
      num("Hình chữ nhật có chu vi 46 cm, chiều dài hơn chiều rộng 5 cm. Diện tích hình chữ nhật là bao nhiêu xăng-ti-mét vuông?", 14 * 9, "Nửa chu vi: 23 cm. Chiều dài: (23 + 5) : 2 = 14 cm, chiều rộng: 9 cm.", "cm²"),
      num("Hình vuông có chu vi bằng chu vi hình chữ nhật dài 14 cm, rộng 6 cm. Cạnh hình vuông là bao nhiêu xăng-ti-mét?", (14 + 6) * 2 / 4, undefined, "cm"),
      num("Cắt hình vuông cạnh 6 cm thành các hình vuông nhỏ cạnh 2 cm. Cắt được tất cả bao nhiêu hình vuông nhỏ?", (6 / 2) * (6 / 2), undefined, "hình"),
    ],
  },

  // Bài 29. Hai đường thẳng song song
  29: {
    intro:
      "Hai đường thẳng song song là hai đường thẳng không bao giờ cắt nhau (không có điểm chung). Hai cạnh đối diện của hình chữ nhật song song với nhau.",
    questions: [
      mc("[[lines:parallel]]\nHai đường thẳng trong hình có quan hệ gì với nhau?", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng nhau"]),
      tf("Hai đường thẳng song song thì không bao giờ cắt nhau.", true),
      tf("Hai đường thẳng song song có một điểm chung.", false, "Hai đường thẳng song song không có điểm chung."),
      mc("Hình chữ nhật ABCD: cạnh AB song song với cạnh nào?", "CD", ["BC", "AD", "AC"]),
      num("Hình chữ nhật có bao nhiêu cặp cạnh song song với nhau?", 2),
      mc("[[shape:parallelogram]]\nHình bình hành trong hình có mấy cặp cạnh đối song song?", 2, [1, 3, 4]),
      mc("[[shape:rhombus]]\nHình thoi trong hình có các cạnh đối:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "không có quan hệ gì"]),
      mc("Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì hai đường thẳng đó:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng với đường thẳng thứ ba"]),
      num("Hình vuông có bao nhiêu cặp cạnh song song với nhau?", 2),
      mc("Hai đường ray của một đoạn đường tàu hoả thẳng thường:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "chéo nhau"]),
      mc("Các dòng kẻ ngang trong vở kẻ ô li là những đường thẳng:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "cùng đi qua một điểm"]),
      num("Hình chữ nhật ABCD có AB song song với CD, AB = 12 cm, BC = 5 cm. Độ dài CD là bao nhiêu xăng-ti-mét?", 12, undefined, "cm"),
      tf("Hai đường thẳng không cắt nhau thì song song với nhau.", true),
    ],
    adv: [
      num("Hình lục giác đều có bao nhiêu cặp cạnh đối song song với nhau?", 3),
      num("Trong hình chữ nhật, có 2 cặp cạnh song song và 4 cặp cạnh vuông góc. Tổng số cặp là:", 2 + 4),
      mc("Một hình có bốn cạnh, các cặp cạnh đối song song và bằng nhau, hai cạnh kề nhau không vuông góc. Đó là hình:", "hình bình hành", ["hình chữ nhật", "hình vuông", "hình tam giác"]),
      num("Một lưới có 5 đường ngang song song và 4 đường dọc song song, các đường dọc vuông góc với các đường ngang. Có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông) do các đường đó tạo thành?", 10 * 6, "Chọn 2 trong 5 đường ngang: 10 cách; chọn 2 trong 4 đường dọc: 6 cách; 10 × 6 = 60."),
      mc("Hai đường thẳng a và b song song với nhau, đường thẳng c cắt đường thẳng a. Đường thẳng c và đường thẳng b:", "cắt nhau", ["song song với nhau", "trùng nhau", "không xác định được"]),
    ],
  },

  // Bài 30. Thực hành và trải nghiệm vẽ hai đường thẳng song song
  30: {
    intro:
      "Vẽ đường thẳng đi qua điểm M và song song với đường thẳng AB: dùng thước và ê ke. Đặt một cạnh ê ke trùng với AB, áp thước vào cạnh góc vuông còn lại; giữ thước, trượt ê ke đến khi cạnh ấy đi qua M rồi vạch đường thẳng.",
    questions: [
      mc("Để vẽ đường thẳng qua M song song với AB, sau khi đặt một cạnh ê ke trùng AB và áp thước vào cạnh còn lại, ta:", "giữ chặt thước, trượt ê ke đến khi cạnh đó đi qua M rồi vạch", ["xoay ê ke một góc 45°", "bỏ thước ra rồi vạch tuỳ ý", "đo độ dài AB rồi chia đôi"]),
      mc("Qua một điểm M nằm ngoài đường thẳng AB, vẽ được bao nhiêu đường thẳng song song với AB?", 1, [0, 2, "vô số"]),
      mc("Có thể vẽ hai đường thẳng song song bằng cách vẽ hai đường thẳng cùng:", "vuông góc với một đường thẳng thứ ba", ["cắt nhau tại một điểm", "đi qua cùng một điểm", "dài bằng nhau"]),
      num("Hình bình hành ABCD có AB = 9 cm, BC = 5 cm. Chu vi hình bình hành là bao nhiêu xăng-ti-mét?", (9 + 5) * 2, undefined, "cm"),
      tf("Dùng ê ke và thước kẻ có thể vẽ hai đường thẳng song song.", true),
      num("Các dòng kẻ ngang trong vở cách đều nhau 8 mm. Dòng thứ nhất cách dòng thứ sáu bao nhiêu mi-li-mét?", 5 * 8, undefined, "mm"),
      num("Hình thoi ABCD có cạnh 7 cm. Chu vi hình thoi là bao nhiêu xăng-ti-mét?", 7 * 4, undefined, "cm"),
      num("Hình bình hành có chu vi 36 cm, một cạnh dài 11 cm. Cạnh kề với cạnh đó dài bao nhiêu xăng-ti-mét?", 36 / 2 - 11, undefined, "cm"),
      tf("Hai đường thẳng cắt nhau không thể song song với nhau.", true),
      mc("Hình nào dưới đây có hai cặp cạnh đối song song với nhau?", "hình bình hành", ["hình tam giác", "hình tròn", "hình thang có một cặp cạnh song song"]),
      mc("Một tờ giấy hình chữ nhật được gấp đôi theo chiều rộng. Nếp gấp và cạnh dài của tờ giấy:", "song song với nhau", ["vuông góc với nhau", "cắt nhau không vuông góc", "trùng nhau"]),
      num("Hình chữ nhật có hai cạnh dài 15 cm và hai cạnh ngắn 9 cm. Tổng độ dài hai cặp cạnh song song là bao nhiêu xăng-ti-mét?", 15 * 2 + 9 * 2, undefined, "cm"),
    ],
    adv: [
      num("Vẽ 5 đường thẳng song song với nhau rồi vẽ thêm một đường thẳng cắt cả 5 đường đó. Có tất cả bao nhiêu giao điểm?", 5),
      num("Hình bình hành ABCD có AB + BC = 17 cm. Chu vi hình bình hành là bao nhiêu xăng-ti-mét?", 17 * 2, undefined, "cm"),
      num("Cho ba đường thẳng a, b, c song song với nhau và đường thẳng d cắt đường thẳng a. Đường thẳng d cắt tất cả bao nhiêu đường thẳng trong ba đường a, b, c?", 3, "Đường thẳng cắt một trong các đường song song thì cũng cắt các đường còn lại."),
      num("Hai đường thẳng song song bị một đường thẳng khác cắt. Tạo ra tất cả bao nhiêu góc (không tính góc bẹt)?", 8, "Mỗi giao điểm tạo ra 4 góc, có 2 giao điểm."),
      num("Một lưới gồm 4 đường ngang và 4 đường dọc cách đều nhau tạo thành các ô vuông 3 × 3. Có tất cả bao nhiêu hình vuông (mọi kích thước)?", 9 + 4 + 1, "9 hình vuông 1 × 1, 4 hình 2 × 2 và 1 hình 3 × 3."),
    ],
  },

  // Bài 31. Hình bình hành, hình thoi
  31: {
    intro:
      "Hình bình hành có hai cặp cạnh đối song song và bằng nhau. Hình thoi có hai cặp cạnh đối song song và bốn cạnh bằng nhau. Chu vi hình bình hành = (a + b) × 2; chu vi hình thoi = cạnh × 4.",
    questions: [
      mc("[[shape:parallelogram]]\nĐây là hình gì?", "hình bình hành", ["hình thoi", "hình chữ nhật", "hình vuông"]),
      mc("[[shape:rhombus]]\nĐây là hình gì?", "hình thoi", ["hình bình hành", "hình chữ nhật", "hình tam giác"]),
      mc("Hình bình hành có đặc điểm nào dưới đây?", "Các cạnh đối song song và bằng nhau", ["Bốn cạnh bằng nhau", "Bốn góc vuông", "Chỉ có một cặp cạnh song song"]),
      mc("Hình thoi có đặc điểm nào dưới đây?", "Bốn cạnh bằng nhau", ["Có bốn góc vuông", "Chỉ có hai cạnh bằng nhau", "Không có cạnh nào song song"]),
      num("Hình bình hành có hai cạnh kề dài 12 cm và 7 cm. Chu vi hình bình hành là bao nhiêu xăng-ti-mét?", (12 + 7) * 2, undefined, "cm"),
      num("Hình thoi có cạnh dài 9 cm. Chu vi hình thoi là bao nhiêu xăng-ti-mét?", 9 * 4, undefined, "cm"),
      num("Hình thoi có chu vi 48 cm. Mỗi cạnh của hình thoi dài bao nhiêu xăng-ti-mét?", 48 / 4, undefined, "cm"),
      tf("Hình thoi là một hình bình hành đặc biệt.", true),
      tf("Hình chữ nhật cũng là hình bình hành.", true, "Hình chữ nhật có hai cặp cạnh đối song song và bằng nhau."),
      tf("Hình bình hành nào cũng có bốn cạnh bằng nhau.", false),
      num("Hình bình hành ABCD có AB = 15 cm và chu vi 56 cm. Cạnh BC dài bao nhiêu xăng-ti-mét?", 56 / 2 - 15, undefined, "cm"),
      mc("Tứ giác có bốn cạnh bằng nhau và hai cặp cạnh đối song song là:", "hình thoi", ["hình tam giác", "hình thang", "hình tròn"]),
      num("Mảnh đất hình bình hành có hai cạnh kề dài 25 m và 18 m. Để rào quanh mảnh đất cần dùng bao nhiêu mét hàng rào?", (25 + 18) * 2, undefined, "m"),
    ],
    adv: [
      num("Hình bình hành có chu vi 50 cm, cạnh dài hơn cạnh kề 5 cm. Cạnh dài là bao nhiêu xăng-ti-mét?", (25 + 5) / 2, "Nửa chu vi: 25 cm là tổng hai cạnh kề, hiệu 5 cm.", "cm"),
      num("Hình thoi có chu vi bằng chu vi hình vuông cạnh 12 cm. Cạnh hình thoi dài bao nhiêu xăng-ti-mét?", 12, undefined, "cm"),
      num("Trong các hình: hình tam giác, hình chữ nhật, hình vuông, hình thoi, hình bình hành, có bao nhiêu hình là hình bình hành (hai cặp cạnh đối song song)?", 4),
      num("Trong các hình: hình vuông, hình chữ nhật, hình thoi, hình bình hành, có bao nhiêu hình có bốn cạnh bằng nhau?", 2, "Đó là hình vuông và hình thoi."),
      num("Cạnh của hình thoi tăng thêm 3 cm. Chu vi hình thoi tăng thêm bao nhiêu xăng-ti-mét?", 3 * 4, undefined, "cm"),
    ],
  },

  // Bài 32. Luyện tập chung
  32: {
    intro: "Ôn lại: hai đường thẳng vuông góc, hai đường thẳng song song, hình bình hành, hình thoi và cách tính chu vi.",
    questions: [
      mc("[[lines:parallel]]\nHai đường thẳng trong hình:", "không bao giờ cắt nhau", ["vuông góc với nhau", "cắt nhau tại một điểm", "trùng nhau"]),
      mc("[[shape:rhombus]]\nHình thoi có các cặp cạnh đối:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "không bằng nhau"]),
      num("Hình bình hành có chu vi 54 cm, một cạnh dài 15 cm. Cạnh kề với cạnh đó dài bao nhiêu xăng-ti-mét?", 54 / 2 - 15, undefined, "cm"),
      num("Hình thoi có chu vi 60 cm. Mỗi cạnh của hình thoi dài bao nhiêu xăng-ti-mét?", 60 / 4, undefined, "cm"),
      tf("Hình chữ nhật có bốn góc vuông.", true),
      mc("Hình chữ nhật ABCD: cặp cạnh nào dưới đây song song với nhau?", "AB và CD", ["AB và BC", "BC và CD", "AB và AD"]),
      num("Từ tấm bìa hình chữ nhật dài 24 cm, rộng 8 cm, cắt thành các hình vuông cạnh 8 cm. Cắt được bao nhiêu hình vuông?", 24 / 8, undefined, "hình"),
      mc("Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng nhau"]),
      num("Mảnh vườn hình chữ nhật dài 40 m, rộng 25 m. Người ta rào quanh vườn. Hàng rào dài bao nhiêu mét?", (40 + 25) * 2, undefined, "m"),
      tf("Hai đường thẳng cắt nhau có thể vuông góc với nhau.", true),
      mc("Hình có bốn góc vuông và bốn cạnh bằng nhau là:", "hình vuông", ["hình chữ nhật có hai cạnh dài, hai cạnh ngắn", "hình thoi không có góc vuông", "hình bình hành"]),
      num("Hình bình hành ABCD có AB = 10 cm và tổng độ dài bốn cạnh là 34 cm. Cạnh BC dài bao nhiêu xăng-ti-mét?", 34 / 2 - 10, undefined, "cm"),
    ],
    adv: [
      num("Một lưới gồm 3 đường song song nằm ngang và 3 đường song song nghiêng cắt các đường ngang. Các đường đó tạo thành bao nhiêu hình bình hành?", 3 * 3, "Chọn 2 trong 3 đường ngang: 3 cách; chọn 2 trong 3 đường nghiêng: 3 cách."),
      num("Hình vuông cạnh 10 cm bị cắt bỏ một hình vuông nhỏ cạnh 4 cm ở một góc. Chu vi phần còn lại là bao nhiêu xăng-ti-mét?", 40, "Cắt bỏ ở góc thì chu vi không thay đổi: 10 × 4 = 40 cm.", "cm"),
      num("Hình chữ nhật ABCD có AB = 14 cm, BC = 6 cm. M, N là trung điểm của AB và CD. Đoạn MN chia hình chữ nhật thành hai hình chữ nhật. Chu vi mỗi hình chữ nhật nhỏ là bao nhiêu xăng-ti-mét?", (7 + 6) * 2, undefined, "cm"),
      num("Ghép hai hình vuông cạnh 5 cm cạnh nhau thành một hình chữ nhật. Chu vi hình chữ nhật đó là bao nhiêu xăng-ti-mét?", (10 + 5) * 2, undefined, "cm"),
      num("Có bao nhiêu hình chữ nhật (kể cả hình vuông) trong một lưới ô vuông 2 × 2 (3 đường ngang và 3 đường dọc)?", 3 * 3, "Chọn 2 trong 3 đường ngang: 3 cách; 2 trong 3 đường dọc: 3 cách."),
    ],
  },
};
