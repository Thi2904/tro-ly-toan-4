import type { Question } from "../types";
import { mc, num, tf } from "./helpers";

type L = { intro: string; questions: Question[] };

export const ch6: Record<number, L> = {
  // Bài 27. Hai đường thẳng vuông góc
  27: {
    intro:
      "Hai đường thẳng vuông góc với nhau tạo thành bốn góc vuông có chung đỉnh. Ta dùng ê ke để kiểm tra hoặc vẽ hai đường thẳng vuông góc.",
    questions: [
      mc("[[lines:perp]]\nHai đường thẳng trong hình có quan hệ gì với nhau?", "vuông góc với nhau", ["song song với nhau", "trùng nhau", "cắt nhau nhưng không vuông góc"]),
      mc("[[lines:cross]]\nHai đường thẳng trong hình có quan hệ gì với nhau?", "cắt nhau nhưng không vuông góc", ["vuông góc với nhau", "song song với nhau", "trùng nhau"]),
      mc("Hai đường thẳng vuông góc với nhau tạo thành mấy góc vuông có chung đỉnh?", 4, [1, 2, 3]),
      mc("Dụng cụ thường dùng để kiểm tra hoặc vẽ hai đường thẳng vuông góc là:", "ê ke", ["com pa", "thước đo độ dài chia vạch xăng-ti-mét", "cái kéo"]),
      tf("Kéo dài hai cạnh AB và AD của hình chữ nhật ABCD ta được hai đường thẳng vuông góc với nhau.", true),
      mc(
        "Tứ giác ABCD có góc đỉnh A và góc đỉnh D là các góc vuông (AB và DC là hai cạnh đối diện). Cặp cạnh nào vuông góc với nhau?",
        "AB và AD",
        ["AB và BC", "BC và CD", "AB và DC"],
      ),
      tf("Tứ giác ABCD có góc đỉnh A và góc đỉnh D là các góc vuông. Hai cạnh BC và CD vuông góc với nhau.", false, "BC và CD cắt nhau nhưng không vuông góc."),
      mc("Hình chữ nhật ABCD: cạnh AB vuông góc với những cạnh nào?", "AD và BC", ["chỉ DC", "AC", "BD"]),
      mc("Không dùng ê ke, để tìm đường thẳng vuông góc với đường thẳng AB trên tờ giấy, ta có thể:", "gấp tờ giấy sao cho hai phần của đường thẳng AB chồng khít lên nhau, nếp gấp vuông góc với AB", ["gấp đôi tờ giấy theo chiều ngang bất kì", "dùng bút gạch một đường bất kì cắt AB", "đo độ dài AB rồi chia đôi"], "Khi gấp sao cho AB chồng khít lên nó, nếp gấp tạo với AB bốn góc vuông."),
      mc("[[clock:9:00]]\nLúc 9 giờ, kim giờ và kim phút của đồng hồ:", "vuông góc với nhau", ["song song với nhau", "trùng nhau", "tạo thành góc bẹt"]),
      tf("Hai đường thẳng vuông góc với nhau thì cắt nhau tại một điểm.", true),
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
      num("Vẽ đoạn thẳng AB dài 20 cm và trung điểm H của AB. Độ dài đoạn thẳng AH là bao nhiêu xăng-ti-mét?", 10, undefined, "cm"),
      num("Đoạn thẳng CD vuông góc với AB tại H, biết HC = 6 cm, HD = 18 cm. Độ dài CD là bao nhiêu xăng-ti-mét?", 24, undefined, "cm"),
      mc(
        "Khung tranh làm bằng 4 que gỗ, hai que kề nhau vuông góc với nhau, hai que đối diện song song và bằng nhau. Khung tranh có dạng hình gì?",
        "hình chữ nhật",
        ["hình tam giác", "hình tròn", "hình thang"],
      ),
      tf("Có thể dùng ê ke để vẽ hai đường thẳng vuông góc với nhau.", true),
      mc(
        "Đường chạy: vạch xuất phát MN dài 2 cm, vẽ MP vuông góc với MN, MP = 10 cm, vẽ NQ vuông góc với MN, NQ = 10 cm. Nối P với Q. Hình MNQP là hình gì?",
        "hình chữ nhật",
        ["hình tam giác", "hình thoi", "hình bình hành không có góc vuông"],
      ),
      num("Hình chữ nhật MNQP có MN = 2 cm và MP = 10 cm. Chu vi hình chữ nhật là bao nhiêu xăng-ti-mét?", (2 + 10) * 2, undefined, "cm"),
    ],
  },

  // Bài 29. Hai đường thẳng song song
  29: {
    intro:
      "Hai đường thẳng song song với nhau không bao giờ cắt nhau. Hai cạnh đối diện của hình chữ nhật (kéo dài) là hai đường thẳng song song.",
    questions: [
      mc("[[lines:parallel]]\nHai đường thẳng trong hình có quan hệ gì với nhau?", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng nhau"]),
      tf("Hai đường thẳng song song với nhau không bao giờ cắt nhau.", true),
      tf("Hai đường thẳng song song có thể cắt nhau tại một điểm.", false),
      mc("Kéo dài hai cạnh AB và DC của hình chữ nhật ABCD ta được hai đường thẳng:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng nhau"]),
      mc("Hình chữ nhật ABCD có AB song song với DC. Cặp cạnh song song còn lại là:", "AD và BC", ["AB và AD", "AB và BC", "DC và CB"]),
      mc("Hình vuông MNPQ có mấy cặp cạnh song song?", 2, [1, 3, 4]),
      mc("Hình chữ nhật ABCD được chia thành hai hình chữ nhật AMND và MBCN. Cạnh MN song song với những cạnh nào?", "AD và BC", ["AB và DC", "AM và MB", "AN và MC"]),
      tf("Hình ngôi nhà ABCDE (AE và CD thẳng đứng, ED nằm ngang): hai đoạn thẳng CD và AE song song với nhau.", true),
      tf("Hình ngôi nhà ABCDE (B là đỉnh mái, AE và CD thẳng đứng): hai đoạn thẳng AB và CD song song với nhau.", false, "AB là cạnh mái nghiêng, cắt CD khi kéo dài."),
      tf("Hình ngôi nhà ABCDE (AE thẳng đứng, ED nằm ngang): hai đoạn thẳng AE và ED vuông góc với nhau.", true),
      mc("Trong các chữ cái V, I, E, T xếp bằng que tính, chữ nào vừa có các que song song vừa có các que vuông góc?", "E", ["V", "T", "L"], "Chữ E có ba que nằm ngang song song nhau và vuông góc với que thẳng đứng."),
      tf("Hình tam giác không có cặp cạnh nào song song với nhau.", true),
    ],
  },

  // Bài 30. Thực hành và trải nghiệm vẽ hai đường thẳng song song
  30: {
    intro:
      "Vẽ đường thẳng CD đi qua H và song song với AB: Bước 1: vẽ MN đi qua H và vuông góc với AB. Bước 2: vẽ CD đi qua H và vuông góc với MN, ta được CD song song với AB.",
    questions: [
      mc("Để vẽ đường thẳng CD đi qua điểm H và song song với đường thẳng AB, bước 1 ta vẽ đường thẳng MN đi qua H và:", "vuông góc với AB", ["song song với AB", "cắt AB tại một điểm bất kì", "trùng với AB"]),
      mc("Ở bước 2, ta vẽ đường thẳng CD đi qua H và:", "vuông góc với MN", ["song song với MN", "vuông góc với AB tại H", "cắt MN nhưng không vuông góc"]),
      mc("Qua một điểm H ngoài đường thẳng AB, vẽ được bao nhiêu đường thẳng song song với AB?", 1, [0, 2, "vô số"]),
      mc("Dụng cụ cần dùng để vẽ hai đường thẳng song song bằng cách vẽ hai đường thẳng cùng vuông góc với một đường thẳng thứ ba là:", "thước thẳng và ê ke", ["com pa và kéo", "chỉ thước đo độ", "chỉ cái kéo"]),
      num("Vẽ đường thẳng CD đi qua H và song song với AB bằng ê ke cần mấy bước vẽ đường thẳng vuông góc (mỗi bước vẽ một đường thẳng vuông góc)?", 2, "Bước 1: vẽ MN qua H vuông góc với AB. Bước 2: vẽ CD qua H vuông góc với MN.", "bước"),
      mc("Hai đường thẳng AB và CD cùng vuông góc với đường thẳng MN. Khi đó AB và CD:", "song song với nhau", ["vuông góc với nhau", "cắt nhau", "trùng nhau"]),
      tf("Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song với nhau.", true),
      mc(
        "Đường chạy: MN = 2 cm, MP vuông góc MN, MP = 10 cm; HK song song MP, HK = 10 cm; NQ song song MP, NQ = 10 cm; nối P với Q. Hình MNQP là hình gì?",
        "hình chữ nhật",
        ["hình tam giác", "hình thoi", "hình thang"],
      ),
    ],
  },

  // Bài 31. Hình bình hành, hình thoi
  31: {
    intro:
      "Hình bình hành có hai cặp cạnh đối diện song song và bằng nhau. Hình thoi có hai cặp cạnh đối diện song song và bốn cạnh bằng nhau.",
    questions: [
      mc("Hình bình hành có đặc điểm nào sau đây?", "hai cặp cạnh đối diện song song và bằng nhau", ["bốn cạnh bằng nhau và bốn góc vuông", "chỉ có một cặp cạnh song song", "ba cạnh bằng nhau"]),
      mc("Hình thoi có đặc điểm nào sau đây?", "hai cặp cạnh đối diện song song và bốn cạnh bằng nhau", ["chỉ có hai cạnh bằng nhau", "bốn góc vuông", "ba cạnh song song"]),
      mc("[[shape:parallelogram]]\nĐây là hình gì?", "hình bình hành", ["hình thoi", "hình chữ nhật", "hình vuông"]),
      mc("[[shape:rhombus]]\nĐây là hình gì?", "hình thoi", ["hình bình hành", "hình chữ nhật", "hình tam giác"]),
      num("Hình bình hành ABCD có AB = 7 cm, AD = 4 cm. Cạnh DC dài bao nhiêu xăng-ti-mét?", 7, "Hai cạnh đối diện của hình bình hành bằng nhau: DC = AB = 7 cm.", "cm"),
      num("Hình bình hành ABCD có AB = 7 cm, AD = 4 cm. Chu vi hình bình hành là bao nhiêu xăng-ti-mét?", (7 + 4) * 2, undefined, "cm"),
      num("Hình thoi có độ dài mỗi cạnh là 6 cm. Chu vi hình thoi là bao nhiêu xăng-ti-mét?", 6 * 4, undefined, "cm"),
      tf("Hình thoi có bốn cạnh bằng nhau.", true),
      tf("Hình bình hành có bốn cạnh bằng nhau.", false, "Hình bình hành chỉ có các cạnh đối diện bằng nhau."),
      mc("Hai đường chéo của hình thoi:", "vuông góc với nhau", ["song song với nhau", "không cắt nhau", "bằng nhau và không vuông góc"]),
      num("ABCD và CDEG là các hình bình hành. Biết AB = 3 dm. Cạnh EG dài bao nhiêu đề-xi-mét?", 3, "AB = DC (hình bình hành ABCD) và DC = EG (hình bình hành CDEG).", "dm"),
      mc("Dãy hình: hình thoi, hình bình hành, hình thoi, hình bình hành, ?, hình bình hành. Hình thích hợp ở dấu ? là:", "hình thoi", ["hình bình hành", "hình chữ nhật", "hình vuông"]),
      mc("Kim nam châm của la bàn có dạng hình gì?", "hình thoi", ["hình tròn", "hình chữ nhật", "hình tam giác"]),
    ],
  },

  // Bài 32. Luyện tập chung
  32: {
    intro: "Ôn lại: hai đường thẳng vuông góc, hai đường thẳng song song, hình bình hành, hình thoi.",
    questions: [
      mc("Hình nào dưới đây có hai cặp cạnh đối diện song song?", "hình bình hành", ["hình tam giác", "hình tròn", "hình thang có một cặp cạnh song song"]),
      mc("[[shape:rectangle]]\nHình chữ nhật có mấy cặp cạnh song song?", 2, [1, 3, 4]),
      tf("Hình vuông có bốn góc vuông và bốn cạnh bằng nhau.", true),
      tf("Trong hình chiếc thuyền (A, E, H, M, P, B nằm trên một đường thẳng nằm ngang, D và C nằm ở đáy), đoạn thẳng AP song song với đoạn thẳng DC.", true),
      tf("Trong hình chiếc thuyền, đoạn thẳng GH (thẳng đứng) vuông góc với đoạn thẳng AB (nằm ngang).", true),
      tf("Trong hình chiếc thuyền, đoạn thẳng MN (thẳng đứng) vuông góc với đoạn thẳng NP (nghiêng).", false, "MN vuông góc với AB (đường nằm ngang), còn NP là đoạn thẳng nghiêng."),
      mc("Lúc 3 giờ, kim giờ và kim phút của đồng hồ vuông góc với nhau. Một thời điểm khác mà hai kim cũng vuông góc là:", "9 giờ", ["6 giờ", "12 giờ", "4 giờ"]),
      mc("Cắt hình vuông ABCD theo đoạn thẳng AC (đường chéo) ta được hai phần là:", "hai hình tam giác bằng nhau", ["hai hình vuông", "hai hình thoi", "hai hình chữ nhật"]),
      num("Hình thoi có chu vi 36 cm. Mỗi cạnh dài bao nhiêu xăng-ti-mét?", 36 / 4, undefined, "cm"),
      num("Hình bình hành có hai cạnh kề dài 8 cm và 5 cm. Chu vi hình bình hành là bao nhiêu xăng-ti-mét?", (8 + 5) * 2, undefined, "cm"),
      mc("Hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì:", "song song với nhau", ["vuông góc với nhau", "cắt nhau tại một điểm", "trùng nhau"]),
    ],
  },
};
