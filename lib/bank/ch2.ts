import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[]; adv: Question[] };

export const ch2: Record<number, L> = {
  // Bài 7. Đo góc, đơn vị đo góc
  7: {
    intro:
      "Độ là đơn vị đo góc, kí hiệu là °. Góc vuông bằng 90°, góc bẹt bằng 180°. Dùng thước đo góc: đặt tâm thước trùng với đỉnh góc, một cạnh nằm trên vạch 0. Hai góc ghép liền nhau thì số đo cộng lại.",
    questions: [
      mc("Dụng cụ nào dùng để đo góc?", "thước đo góc", ["thước dây", "cân đồng hồ", "bình chia độ"]),
      num("[[angle:45]]\nSố đo của góc trong hình là bao nhiêu độ?", 45, undefined, "độ"),
      num("[[angle:135]]\nSố đo của góc trong hình là bao nhiêu độ?", 135, undefined, "độ"),
      num("[[angle:150]]\nSố đo của góc trong hình là bao nhiêu độ?", 150, undefined, "độ"),
      num("[[angle:30]]\nSố đo của góc trong hình là bao nhiêu độ?", 30, undefined, "độ"),
      num("[[clock:5:00]]\nKhi đồng hồ chỉ 5 giờ, kim giờ và kim phút tạo thành góc bao nhiêu độ?", 150, "Mỗi giờ kim giờ quay 30°; từ số 12 đến số 5 là 5 × 30° = 150°.", "độ"),
      num("[[clock:8:00]]\nKhi đồng hồ chỉ 8 giờ, kim giờ và kim phút tạo thành góc (không lớn hơn góc bẹt) bao nhiêu độ?", 120, "Từ số 8 đến số 12 có 4 khoảng: 4 × 30° = 120°.", "độ"),
      num("[[clock:10:00]]\nKhi đồng hồ chỉ 10 giờ, kim giờ và kim phút tạo thành góc (không lớn hơn góc bẹt) bao nhiêu độ?", 60, undefined, "độ"),
      num("Kim giờ của đồng hồ quay từ 1 giờ đến 4 giờ. Kim giờ đã quay được một góc bao nhiêu độ?", 3 * 30, "Mỗi giờ kim giờ quay 30°; 3 giờ quay 3 × 30° = 90°.", "độ"),
      num("Góc đỉnh O, cạnh OA, OB có số đo 35°; góc đỉnh O, cạnh OB, OC có số đo 40°; tia OB nằm giữa hai tia OA và OC. Góc đỉnh O, cạnh OA, OC có số đo bao nhiêu độ?", 35 + 40, "35° + 40° = 75°.", "độ"),
      num("Một góc bẹt được chia thành hai góc, một góc có số đo 115°. Góc còn lại có số đo bao nhiêu độ?", 180 - 115, "180° – 115° = 65°.", "độ"),
      num("Một góc vuông được chia thành hai góc, một góc có số đo 38°. Góc còn lại có số đo bao nhiêu độ?", 90 - 38, "90° – 38° = 52°.", "độ"),
      mc("Hình tứ giác MNPQ có góc đỉnh M bằng 75°, góc đỉnh N bằng 105°, góc đỉnh P bằng 90°, góc đỉnh Q bằng 90°. Góc nào có số đo bé nhất?", "Góc đỉnh M", ["Góc đỉnh N", "Góc đỉnh P", "Góc đỉnh Q"]),
    ],
    adv: [
      num("[[clock:3:30]]\nLúc 3 giờ 30 phút, kim phút chỉ số 6 (góc 180° tính từ số 12), kim giờ nằm giữa số 3 và số 4 (góc 105° tính từ số 12). Góc giữa hai kim là bao nhiêu độ?", 180 - 105, "180° – 105° = 75°.", "độ"),
      num("Một góc bẹt được chia thành ba góc, hai góc đầu có số đo 40° và 75°. Góc thứ ba có số đo bao nhiêu độ?", 180 - 40 - 75, undefined, "độ"),
      num("Một góc bẹt được chia thành 4 góc bằng nhau. Mỗi góc có số đo bao nhiêu độ?", 180 / 4, undefined, "độ"),
      num("Kim phút quay từ số 12 đến số 4. Kim phút đã quay được một góc bao nhiêu độ?", 4 * 30, "Mỗi khoảng giữa hai số liên tiếp trên mặt đồng hồ ứng với 30°.", "độ"),
      num("Trong 2 giờ, kim giờ của đồng hồ quay được một góc bao nhiêu độ?", 2 * 30, undefined, "độ"),
      num("Góc bẹt AOD có hai tia OB, OC nằm giữa hai tia OA và OD (theo thứ tự OA, OB, OC, OD). Biết góc AOB = 50°, góc BOC = 60°. Góc COD bằng bao nhiêu độ?", 180 - 50 - 60, "180° – 50° – 60° = 70°.", "độ"),
    ],
  },

  // Bài 8. Góc nhọn, góc tù, góc bẹt
  8: {
    intro:
      "Góc nhọn bé hơn góc vuông (bé hơn 90°). Góc tù lớn hơn góc vuông (lớn hơn 90° và bé hơn 180°). Góc bẹt bằng hai góc vuông (180°).",
    questions: [
      mc("[[angle:45]]\nĐây là góc gì?", "góc nhọn", ["góc vuông", "góc tù", "góc bẹt"]),
      mc("[[angle:135]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      mc("[[angle:150]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      mc("[[angle:30]]\nĐây là góc gì?", "góc nhọn", ["góc vuông", "góc tù", "góc bẹt"]),
      tf("Góc 89° là góc nhọn.", true, "89° bé hơn 90° nên là góc nhọn."),
      tf("Góc 91° là góc tù.", true, "91° lớn hơn 90° và bé hơn 180° nên là góc tù."),
      tf("Góc 180° là góc tù.", false, "Góc 180° là góc bẹt."),
      tf("Mọi góc tù đều lớn hơn mọi góc nhọn.", true),
      mc("[[clock:1:00]]\nLúc 1 giờ, kim giờ và kim phút của đồng hồ tạo thành:", "góc nhọn", ["góc vuông", "góc tù", "góc bẹt"]),
      mc("[[clock:5:00]]\nLúc 5 giờ, kim giờ và kim phút của đồng hồ tạo thành:", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      mc("[[clock:7:00]]\nLúc 7 giờ, kim giờ và kim phút của đồng hồ tạo thành:", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"], "Từ số 7 đến số 12 là 150°."),
      mc("Trong các góc có số đo 25°, 90°, 100°, 180°, góc tù là góc có số đo:", "100°", ["25°", "90°", "180°"]),
      num("Trong các góc có số đo 15°, 45°, 90°, 110°, 130°, 180°, có bao nhiêu góc tù?", 2, "Góc tù: 110° và 130°."),
      mc("Số đo nào dưới đây không thể là số đo của một góc nhọn?", "100°", ["20°", "45°", "89°"]),
    ],
    adv: [
      num("Số đo của góc tù là số tròn chục lớn nhất. Số đo đó là bao nhiêu độ?", 170, "Góc tù bé hơn 180°, số tròn chục lớn nhất là 170°.", "độ"),
      num("Có bao nhiêu số đo góc nhọn là số tự nhiên chẵn (1°, 2°, 3°, ... 89°)?", 44, "Các số chẵn từ 2 đến 88: (88 – 2) : 2 + 1 = 44."),
      num("Từ 1 giờ đến 12 giờ (các giờ đúng), có bao nhiêu thời điểm kim giờ và kim phút tạo thành góc tù?", 4, "Đó là 4 giờ, 5 giờ, 7 giờ và 8 giờ."),
      num("Từ 1 giờ đến 12 giờ (các giờ đúng), có bao nhiêu thời điểm kim giờ và kim phút tạo thành góc vuông hoặc góc bẹt?", 3, "Đó là 3 giờ, 6 giờ và 9 giờ."),
      num("Số đo của góc nhọn lớn nhất (tính theo độ, là số tự nhiên) là bao nhiêu?", 89, undefined, "độ"),
      num("Lúc 7 giờ, kim giờ và kim phút tạo hai góc, góc nhỏ hơn có số đo bao nhiêu độ?", 150, "Từ số 7 đến số 12 có 5 khoảng, 5 × 30° = 150°; góc còn lại là 210°.", "độ"),
    ],
  },

  // Bài 9. Luyện tập chung
  9: {
    intro: "Ôn lại cách đo góc và phân biệt góc nhọn, góc vuông, góc tù, góc bẹt. Hai góc ghép liền nhau thì cộng số đo.",
    questions: [
      num("[[angle:105]]\nĐo góc rồi nêu số đo của góc trong hình.", 105, undefined, "độ"),
      num("[[angle:75]]\nĐo góc rồi nêu số đo của góc trong hình.", 75, undefined, "độ"),
      mc("[[angle:165]]\nĐây là góc gì?", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"]),
      num("Hai góc kề nhau ghép thành một góc bẹt, một góc có số đo 74°. Góc còn lại có số đo bao nhiêu độ?", 180 - 74, undefined, "độ"),
      num("Góc xOt có hai tia Oy, Oz nằm giữa hai tia Ox và Ot (theo thứ tự Ox, Oy, Oz, Ot). Biết góc xOy = 35°, góc yOz = 55°, góc zOt = 90°. Góc xOt có số đo bao nhiêu độ?", 35 + 55 + 90, "35° + 55° + 90° = 180°. Đó là một góc bẹt.", "độ"),
      mc("Một góc vuông ghép với một góc 45° (hai góc kề nhau) được một góc:", "góc tù", ["góc nhọn", "góc vuông", "góc bẹt"], "90° + 45° = 135°, là góc tù."),
      mc("Vào lúc nào kim giờ và kim phút của đồng hồ tạo thành góc bẹt?", "6 giờ", ["3 giờ", "9 giờ", "12 giờ"]),
      num("Kim giờ quay từ 3 giờ đến 9 giờ. Kim giờ đã quay được một góc bao nhiêu độ?", 6 * 30, "6 giờ × 30° = 180°.", "độ"),
      num("Trong các góc có số đo 20°, 80°, 100°, 160°, có bao nhiêu góc nhọn?", 2, "Góc nhọn: 20° và 80°."),
      num("Số đo của một góc bằng hai lần góc vuông trừ đi 30°. Số đo góc đó là bao nhiêu độ?", 2 * 90 - 30, undefined, "độ"),
      tf("Góc bẹt gấp đôi góc vuông.", true),
      tf("Góc 100° và góc 80° ghép liền nhau thì được một góc bẹt.", true, "100° + 80° = 180°."),
      mc("Gấp đôi một góc vuông của tờ giấy (đường gấp chia đôi góc vuông) thì mỗi góc nhỏ có số đo 45°. Góc 45° là:", "góc nhọn", ["góc vuông", "góc tù", "góc bẹt"]),
    ],
    adv: [
      num("Hai góc ghép liền nhau thành một góc bẹt, góc này gấp đôi góc kia. Góc lớn có số đo bao nhiêu độ?", 120, "Góc bé là 180° : 3 = 60°, góc lớn là 60° × 2 = 120°.", "độ"),
      num("[[clock:4:30]]\nLúc 4 giờ 30 phút, kim phút chỉ số 6 (180°), kim giờ nằm giữa số 4 và số 5 (135°). Góc giữa hai kim là bao nhiêu độ?", 180 - 135, undefined, "độ"),
      num("Một góc bẹt được chia thành các góc bằng nhau, mỗi góc 36°. Có bao nhiêu góc như vậy?", 180 / 36, undefined, "góc"),
      num("Trong 10 phút, kim phút của đồng hồ quay được một góc bao nhiêu độ?", 2 * 30, "10 phút ứng với 2 khoảng giữa các số, mỗi khoảng 30°.", "độ"),
      num("Hai góc kề nhau tạo thành một góc vuông. Góc thứ nhất lớn hơn góc thứ hai 20°. Góc thứ nhất có số đo bao nhiêu độ?", (90 + 20) / 2, "Hai lần góc bé là 90° – 20° = 70°, góc bé 35°, góc lớn 55°.", "độ"),
    ],
  },
};
