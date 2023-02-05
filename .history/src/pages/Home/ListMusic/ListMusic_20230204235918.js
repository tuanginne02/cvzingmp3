import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function ListMusic() {
    /* Song list */
var prevSongList = [
    {
      song_name: "Đừng Lo Nhé! Có Anh Đây",
      singer: ["Thiên Tú"],
      song_img: "./assets/Images/Playlist/1.webp",
      src: "./assets/Songs/Main_Song/song_1.mp3",
    },
    {
      song_name: "Trót Trao Duyên",
      singer: ["NB3 Hoài Bão", "CT"],
      song_img: "./assets/Images/Playlist/2.webp",
      src: "./assets/Songs/Main_Song/song_2.mp3",
    },
  ];
  
  var nextSongList = [
    {
      song_name: "Anh Chưa Nghĩ Tới",
      singer: ["Phan Duy Anh", "ACV"],
      song_img: "./assets/Images/Playlist/3.webp",
      src: "./assets/Songs/Main_Song/song_3.mp3",
    },
    {
      song_name: "Lỡ Duyên Kiếp Này, Liệu Có Kiếp Sau",
      singer: ["Khả Hiệp", "ACV"],
      song_img: "./assets/Images/Playlist/4.webp",
      src: "./assets/Songs/Main_Song/song_4.mp3",
    },
    {
      song_name: "Sao Cũng Được",
      singer: ["Thành Đạt"],
      song_img: "./assets/Images/Playlist/5.webp",
      src: "./assets/Songs/Main_Song/song_5.mp3",
    },
    {
      song_name: "Con Hứa Sẽ Về",
      singer: ["Lê Bảo Bình"],
      song_img: "./assets/Images/Playlist/6.webp",
      src: "./assets/Songs/Main_Song/song_6.mp3",
    },
    {
      song_name: "Người Thương Em Đây Mà",
      singer: ["Đinh Kiến Phong"],
      song_img: "./assets/Images/Playlist/7.webp",
      src: "./assets/Songs/Main_Song/song_7.mp3",
    },
    {
      song_name: "Chịu Em Đi",
      singer: ["Tracy Thảo My", "YuniBoo"],
      song_img: "./assets/Images/Playlist/8.webp",
      src: "./assets/Songs/Main_Song/song_8.mp3",
    },
  ];
  
  var personalSongList = [
    {
      song_name: "Thời Gian Sẽ Trả Lời",
      singer: ["Tiên Cookie", "JustaTee", "Big Daddy"],
      song_img: "./assets/Images/Personal_Song/1.webp",
      song_album: "Sau Tất Cả (Single)",
      src: "./assets/Songs/ThoiGianSeTraLoi.mp3",
      song_duration: "04:31",
    },
    {
      song_name: "Ngây Thơ (Ciray Remix)",
      singer: ["Tăng Duy Tăng", "Phong Max"],
      song_img: "./assets/Images/Personal_Song/2.webp",
      song_album: "",
      src: "./assets/Songs/NgayTho.mp3",
      song_duration: "03:51",
    },
    {
      song_name: "Thích Thích",
      singer: ["Phương Ly"],
      song_img: "./assets/Images/Personal_Song/3.webp",
      song_album: "ThichThich (Single)",
      src: "./assets/Songs/ThichThich.mp3",
      song_duration: "04:25",
    },
    {
      song_name: "Về",
      singer: ["Đạt G", "DuUyen", "BeeBB"],
      song_img: "./assets/Images/Personal_Song/4.webp",
      song_album: "Về (Single)",
      src: "./assets/Songs/Ve.mp3",
      song_duration: "05:24",
    },
    {
      song_name: "Đắm (Nhựt Trường Remix)",
      singer: ["Xesi", "Ricky Star"],
      song_img: "./assets/Images/Personal_Song/5.webp",
      song_album: "",
      src: "./assets/Songs/Dam.mp3",
      song_duration: "02:11",
    },
    {
      song_name: "Tình Ka Ngọt Ngào",
      singer: ["Lập Nguyên", "Yến Nồi Cơm Điện"],
      song_img: "./assets/Images/Personal_Song/6.webp",
      song_album: "Tình Ka Ngọt Ngào (Single)",
      src: "./assets/Songs/TinhKaNgotNgao.mp3",
      song_duration: "03:58",
    },
    {
      song_name: "Con Yêu Mẹ",
      singer: ["Bảo Thy"],
      song_img: "./assets/Images/Personal_Song/7.webp",
      song_album: "",
      src: "./assets/Songs/ConYeuMe.mp3",
      song_duration: "04:01",
    },
    {
      song_name: "Bên Trên Tầng Lầu (Zang Remix)",
      singer: ["Tăng Duy Tân"],
      song_img: "./assets/Images/Personal_Song/8.webp",
      song_album: "",
      src: "./assets/Songs/BenTrenTangLau.mp3",
      song_duration: "02:51",
    },
    {
      song_name: "Somewhere",
      singer: ["July"],
      song_img: "./assets/Images/Personal_Song/9.webp",
      song_album: "Somewhere",
      src: "./assets/Songs/Somewhere.mp3",
      song_duration: "03:30",
    },
    {
      song_name: "Umbrella (The White Panda Remix)",
      singer: ["Ember Island", "The White Panda"],
      song_img: "./assets/Images/Personal_Song/10.webp",
      song_album: "Umbrella (The White Panda Remix)",
      src: "./assets/Songs/TinhKaNgotNgao.mp3",
      song_duration: "03:58",
    },
    {
      song_name: "Nụ Cười 18 20",
      singer: ["Doãn Hiếu", "BMZ"],
      song_img: "./assets/Images/Personal_Song/11.webp",
      song_album: "Nụ Cười 18 20 (Single)",
      src: "./assets/Songs/NuCuoi1820.mp3",
      song_duration: "04:03",
    },
    {
      song_name: "Anh Đã Lạc Vào",
      singer: ["Green"],
      song_img: "./assets/Images/Personal_Song/12.webp",
      song_album: "Anh Đã Lạc Vào (Single)",
      src: "./assets/Songs/AnhDaLacVao.mp3",
      song_duration: "03:33",
    },
    {
      song_name: "Tell Ur Mom II (Curak Remix)",
      singer: ["Winno", "Heily", "CUKAK"],
      song_img: "./assets/Images/Personal_Song/13.webp",
      song_album: "Tell Ur Mom II (Cukak Remix) (Single)",
      src: "./assets/Songs/TellYourMom2.mp3",
      song_duration: "04:11",
    },
    {
      song_name: "Tương Tư Thành Họa",
      singer: ["Trịnh Diệc Thần"],
      song_img: "./assets/Images/Personal_Song/14.webp",
      song_album: "",
      src: "./assets/Songs/TuongTuThanhHoa.mp3",
      song_duration: "04:23",
    },
    {
      song_name: "I'm Coming Home - Skylar Grey (PART II)",
      singer: ["Skylar Grey"],
      song_img: "./assets/Images/Personal_Song/14.webp",
      song_album: "",
      src: "./assets/Songs/ImComingHome.mp3",
      song_duration: "02:47",
    },
    {
      song_name: "Kẻ Đuổi Theo Ánh Sáng",
      singer: ["Huy Vạc"],
      song_img: "./assets/Images/Personal_Song/15.webp",
      song_album: "Kẻ Đuổi Theo Ánh Sáng (Single)",
      src: "./assets/Songs/KeTheoDuoiAnhSang.mp3",
      song_duration: "03:47",
    },
    {
      song_name: "Không Bằng",
      singer: ["Na"],
      song_img: "./assets/Images/Personal_Song/16.webp",
      song_album: "Không Bằng (Single)",
      src: "./assets/Songs/KhongBang.mp3",
      song_duration: "04:11",
    },
    {
      song_name: "Em Sẽ Là Cô Dâu",
      singer: ["Minh Vương M4U", "Huy Cung"],
      song_img: "./assets/Images/Personal_Song/17.webp",
      song_album: "Em Sẽ Là Cô Dâu (Single)",
      src: "./assets/Songs/EmSeLaCoDau.mp3",
      song_duration: "04:53",
    },
    {
      song_name: "Xách Ba Lô Lên Đi Đi Thật Xa Cover",
      singer: ["Thực Mai Cover"],
      song_img: "./assets/Images/Personal_Song/14.webp",
      song_album: "",
      src: "./assets/Songs/XachBaLoMaDi.mp3",
      song_duration: "03:22",
    },
  ];
  
  var chartSongs = [
    {
      song_name: "Tết Là Đông Mới Vui",
      singer: ["Đức Phúc ★", "GDucky", "DTAP"],
      song_img: "./assets/Images/Chart_Page/0.webp",
      song_album: "Tết Là Đông Mới Vui (Single)",
      src: "./assets/Songs/TetLaDongMoiVui_0421.mp3",
      song_duration: "04:21",
    },
    {
      song_name: "Quả Phụ Tướng",
      singer: ["Dunghoangpham"],
      song_img: "./assets/Images/Chart_Page/1.webp",
      song_album: "Quả Phụ Tướng (Single)",
      status: null,
      src: "./assets/Songs/QuaPhuTuong_0335.mp3",
      song_duration: "03:35",
    },
    {
      song_name: "Đừng Lo Nhé! Có Anh Đây",
      singer: ["Thiên Tú"],
      song_img: "./assets/Images/Chart_Page/2.webp",
      song_album: "Đừng Lo Nhé! Có Anh Đây (Single)",
      status: null,
      src: "./assets/Songs/DungLoNheCoAnhDay_0455.mp3",
      song_duration: "04:55",
    },
    {
      song_name: "Cuối Cùng Thì",
      singer: ["Jack J97"],
      song_img: "./assets/Images/Chart_Page/3.webp",
      song_album: "Cuối Cùng Thì (Single)",
      status: null,
      src: "./assets/Songs/CuoiCungThi_0332.mp3",
      song_duration: "03:32",
    },
    {
      song_name: "Khuất Lối",
      singer: ["H-Kray"],
      song_img: "./assets/Images/Chart_Page/4.webp",
      song_album: "Khuất Lối (Single)",
      status: null,
      src: "./assets/Songs/KhuatLoi_0427.mp3",
      song_duration: "04:27",
    },
    {
      song_name: "Trịnh Gia",
      singer: ["Jack J97"],
      song_img: "./assets/Images/Chart_Page/5.webp",
      song_album: "Trịnh Gia (Single)",
      status: null,
      src: "./assets/Songs/TrinhGia_0300.mp3",
      song_duration: "03:00",
    },
    {
      song_name: "Trót Trao Duyên",
      singer: ["NB3 Hoài Bảo", "CT"],
      song_img: "./assets/Images/Chart_Page/6.webp",
      song_album: "Trót Trao Duyên (Single)",
      status: null,
      src: "./assets/Songs/TrotTraoDuyen_0410.mp3",
      song_duration: "04:10",
    },
    {
      song_name: "Sao Cũng Được",
      singer: ["Thành Đạt"],
      song_img: "./assets/Images/Chart_Page/7.webp",
      song_album: "Sao Cũng Được (Single)",
      status: [true, 1],
      src: "./assets/Songs/SaoCungDuoc_0607.mp3",
      song_duration: "06:07",
    },
    {
      song_name: "Thủy Chung",
      singer: ["Thương Võ", "K-ICM", "ACV"],
      song_img: "./assets/Images/Chart_Page/8.webp",
      song_album: "Thủy Chung (Single)",
      status: [false, 1],
      src: "./assets/Songs/ThuyChung_0432.mp3",
      song_duration: "04:32",
    },
    {
      song_name: "Lỡ Duyên Kiếp Này, Liệu Có Kiếp Sau",
      singer: ["Khả Hiệp", "ACV"],
      song_img: "./assets/Images/Chart_Page/9.webp",
      song_album: "Lỡ Duyên Kiếp Này, Liệu Có Kiếp Sau (Single)",
      status: null,
      src: "./assets/Songs/LoDuyenKiepNayLieuCoKiepSau_0444.mp3",
      song_duration: "04:44",
    },
    {
      song_name: "Cưới Hông Chốt Nha",
      singer: ["Út Nhị Mino", "Đỗ Thành Duy", "NH4T"],
      song_img: "./assets/Images/Chart_Page/10.webp",
      song_album: "Cưới Hông Chốt Nha (Single)",
      status: null,
      src: "./assets/Songs/CuoiHongChotNha_0408.mp3",
      song_duration: "04:08",
    },
    {
      song_name: "Tòng Phu",
      singer: ["Keyo"],
      song_img: "./assets/Images/Chart_Page/11.webp",
      song_album: "Tòng Phu (Single)",
      status: [true, 3],
      src: "./assets/Songs/TongPhu_0454.mp3",
      song_duration: "04:54",
    },
    {
      song_name: "Vui Đón Xuân",
      singer: ["Thiên Ân", "SOI", "LQ MEDIA"],
      song_img: "./assets/Images/Chart_Page/12.webp",
      song_album: "Vui Đón Xuân (Single)",
      status: [true, 1],
      src: "./assets/Songs/VuiDonXuan_0333.mp3",
      song_duration: "03:33",
    },
    {
      song_name: "Xuân Này Con Chưa Về",
      singer: ["Quang Hảo", "LQ MEDIA"],
      song_img: "./assets/Images/Chart_Page/13.webp",
      song_album: "Xuân Này Con Chưa Về (Single)",
      status: [false, 1],
      src: "./assets/Songs/XuanNayConChuaVe_0538.mp3",
      song_duration: "05:38",
    },
    {
      song_name: "Người Thương Em Đây Mà",
      singer: ["Đinh Kiến Phong"],
      song_img: "./assets/Images/Chart_Page/14.webp",
      song_album: "Người Thuomg7 Em Đây Mà (Single)",
      status: [true, 1],
      src: "./assets/Songs/NguoiThuongEmDayMa_0625.mp3",
      song_duration: "06:25",
    },
    {
      song_name: "Anh Chưa Nghĩ Tới",
      singer: ["Phan Duy Anh", "ACV"],
      song_img: "./assets/Images/Chart_Page/15.webp",
      song_album: "Anh Chưa Nghĩ Tới (Single)",
      status: [true, 2],
      src: "./assets/Songs/AnhChuaNghiToi_0413.mp3",
      song_duration: "04:13",
    },
    {
      song_name: "Không Đâu Bằng Nhà",
      singer: ["Phùng Ngọc Huy"],
      song_img: "./assets/Images/Chart_Page/16.webp",
      song_album: "Không Đâu Bằng Nhà (Single)",
      status: null,
      src: "./assets/Songs/KhongDauBangNha_0359.mp3",
      song_duration: "3:59",
    },
    {
      song_name: "Con Hứa Sẽ Về",
      singer: ["Lê Bảo Bình"],
      song_img: "./assets/Images/Chart_Page/17.webp",
      song_album: "Con Hứa Sẽ Về (Single)",
      status: [true, 1],
      src: "./assets/Songs/ConHuaSeVe_0502.mp3",
      song_duration: "05:02",
    },
    {
      song_name: "Trót Trao Duyên (Remix)",
      singer: ["NB3 Hoài Bảo", "CT"],
      song_img: "./assets/Images/Chart_Page/6.webp",
      song_album: "Trót Trao Duyên (Single)",
      status: [true, 1],
      src: "./assets/Songs/TrotTraoDuyenRemix_0411.mp3",
      song_duration: "04:11",
    },
    {
      song_name: "Tết Bình An (Remix)",
      singer: ["Hana Cẩm Tiên"],
      song_img: "./assets/Images/Chart_Page/19.webp",
      song_album: "Tết Bình An (Remix) (Single)",
      status: [false, 8],
      src: "./assets/Songs/TetBinhAn_0349.mp3",
      song_duration: "03:49",
    },
    {
      song_name: "Níu Duyên Không Thành",
      singer: ["Hương Ly", "LY.M"],
      song_img: "./assets/Images/Chart_Page/20.webp",
      song_album: "Níu Duyên Không Thành (Single)",
      status: [true, 1],
      src: "./assets/Songs/NiuDuyenKhongThanh_0530.mp3",
      song_duration: "05:30",
    },
    {
      song_name: "Ai Rồi Cũng Sẽ Khác",
      singer: ["Hà Nhi"],
      song_img: "./assets/Images/Chart_Page/21.webp",
      song_album: "Giao Lộ Thời Gian Tập 8",
      status: [true, 1],
      src: "./assets/Songs/AiRoiCungSeKhac_0446.mp3",
      song_duration: "04:46",
    },
    {
      song_name: "Trót Vô Tình",
      singer: ["Hồ Phương Liên", "CT"],
      song_img: "./assets/Images/Chart_Page/22.webp",
      song_album: "Trót Vô Tình (Single)",
      status: [true, 1],
      src: "./assets/Songs/TrotVoTinh_0514.mp3",
      song_duration: "05:14",
    },
    {
      song_name: "Có Chơi Có Chịu",
      singer: ["Karik ★", "Only C ★"],
      song_img: "./assets/Images/Chart_Page/23.webp",
      song_album: "Có Chơi Có Chịu (Single)",
      status: [true, 3],
      src: "./assets/Songs/CoChoiCoChiu_0446.mp3",
      song_duration: "04:46",
    },
    {
      song_name: "Đón Xuân",
      singer: ["Thanh Hà"],
      song_img: "./assets/Images/Chart_Page/24.webp",
      song_album: "Đón Xuân (Single)",
      status: [false, 4],
      src: "./assets/Songs/DonXuan_0333.mp3",
      song_duration: "03:33",
    },
    {
      song_name: "Đợi Chờ Đừng Cáu",
      singer: ["Phan Mạnh Quỳnh", "Hoàng Thùy Linh"],
      song_img: "./assets/Images/Chart_Page/25.webp",
      song_album: "Đợi Chờ Đừng Cáu (Single)",
      status: null,
      src: "./assets/Songs/DoiChoDungCau_0550.mp3",
      song_duration: "05:50",
    },
    {
      song_name: "Kỳ Vọng Sai Lầm",
      singer: ["Tăng Phúc", "Nguyễn Đình Vũ", "Yuno Bigboi"],
      song_img: "./assets/Images/Chart_Page/26.webp",
      song_album: "Kỳ Vọng Sai Lầm (Single)",
      status: [true, 2],
      src: "./assets/Songs/KyVongSaiLam_0351.mp3",
      song_duration: "03:51",
    },
    {
      song_name: "ngủ một mình",
      singer: ["HIEUTHUHAI", "Negav", "Kewtiie"],
      song_img: "./assets/Images/Chart_Page/27.webp",
      song_album: "ngủ một mình (Single)",
      status: null,
      src: "./assets/Songs/NguMotMinh_0325.mp3",
      song_duration: "03:25",
    },
    {
      song_name: "Trăm Ngàn Lời Thương",
      singer: ["Thủy Chi", "Ricky Star"],
      song_img: "./assets/Images/Chart_Page/28.webp",
      song_album: "Trăm Ngàn Lời Thương (Single)",
      status: [true, 2],
      src: "./assets/Songs/TramNganLoiThuong_0302.mp3",
      song_duration: "03:02",
    },
    {
      song_name: "Năm Qua Đã Làm Gì",
      singer: ["Hồ Ngọc Hà"],
      song_img: "./assets/Images/Chart_Page/29.webp",
      song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
      status: [false, 5],
      src: "./assets/Songs/NamQuaDaLamGi_0329.mp3",
      song_duration: "03:29",
    },
    {
      song_name: "để tôi ôm em bằng giai điệu này",
      singer: ["Kai Đinh", "MIN ★", "GREY D"],
      song_img: "./assets/Images/Chart_Page/30.webp",
      song_album: "winter warmer (AP)",
      status: [true, 2],
      src: "./assets/Songs/DeToiOmEmBangGiaiDieuNay_0434.mp3",
      song_duration: "03:34",
    },
    {
      song_name: "Yêu Người Có Ước Mơ",
      singer: ["buitruonglinh"],
      song_img: "./assets/Images/Chart_Page/31.webp",
      song_album: "Vọng",
      status: [true, 2],
      src: "./assets/Songs/YeuNguoiCoUocMo_0445.mp3",
      song_duration: "04:45",
    },
    {
      song_name: "Bao Lâu Chưa Về Nhà?",
      singer: ["DatKaa"],
      song_img: "./assets/Images/Chart_Page/32.webp",
      song_album: "Bao Lâu Chưa Về Nhà? (Single)",
      status: [false, 3],
      src: "./assets/Songs/BaoLauChuaVeNha_0523.mp3",
      song_duration: "05:23",
    },
    {
      song_name: "Ân Tình Sang Trang",
      singer: ["Châu Khải Phong", "ACV"],
      song_img: "./assets/Images/Chart_Page/33.webp",
      song_album: "Ân Tình Sang Trang (Single)",
      status: [true, 2],
      src: "./assets/Songs/AnTinhSangTrang_0542.mp3",
      song_duration: "05:42",
    },
    {
      song_name: "Cái Tết Giàu",
      singer: ["Bùi Công Nam", "Lương Bích Hữu", "Đông Nhi", "Bé Winnie"],
      song_img: "./assets/Images/Chart_Page/34.webp",
      song_album: "Cái Tết Giàu (Single)",
      status: [false, 3],
      src: "./assets/Songs/CaiTetGiau_0530.mp3",
      song_duration: "05:30",
    },
    {
      song_name: "Chịu Em Đi",
      singer: ["Tracy Thảo Mi", "YuniBoo"],
      song_img: "./assets/Images/Chart_Page/35.webp",
      song_album: "Chịu Em Đi (Single)",
      status: [false, 1],
      src: "./assets/Songs/ChiuEmDi_0434.mp3",
      song_duration: "04:34",
    },
    {
      song_name: "Waiting For You",
      singer: ["MONO", "Onionn"],
      song_img: "./assets/Images/Chart_Page/36.webp",
      song_album: "22",
      status: [true, 5],
      src: "./assets/Songs/WaitingForYou_0425.mp3",
      song_duration: "04:25",
    },
    {
      song_name: "Người Như Chúng Ta",
      singer: ["Mr. Siro ★"],
      song_img: "./assets/Images/Chart_Page/37.webp",
      song_album: "Người Như Chúng Ta (Single)",
      status: [false, 1],
      src: "./assets/Songs/NguoiNhuChungTa_0449.mp3",
      song_duration: "04:49",
    },
    {
      song_name: "Em Sẽ Quên Anh",
      singer: ["Nal", "CT"],
      song_img: "./assets/Images/Chart_Page/38.webp",
      song_album: "Em Sẽ Quên Anh (Single)",
      status: [false, 1],
      src: "./assets/Songs/EmSeQuenAnh_0403.mp3",
      song_duration: "04:03",
    },
    {
      song_name: "Tết Yêu, Tết Ghét",
      singer: ["Ninh Dương Lan Ngọc", "HuyR"],
      song_img: "./assets/Images/Chart_Page/39.webp",
      song_album: "Tết Yêu, Tết Ghét (Single)",
      status: null,
      src: "./assets/Songs/TetYeuTetGhet_0349.mp3",
      song_duration: "03:49",
    },
    {
      song_name: "Tết Bùng Nội Lực",
      singer: ["Hòa Minzy ★", "Bùi Công Nam"],
      song_img: "./assets/Images/Chart_Page/40.webp",
      song_album: "Tết Bùng Nội Lực (Single)",
      status: null,
      src: "./assets/Songs/TetBungNoiLuc_0330.mp3",
      song_duration: "03:30",
    },
    {
      song_name: "Chàng Trai Của Em",
      singer: ["Duy Văn Phạm", "ACV"],
      song_img: "./assets/Images/Chart_Page/41.webp",
      song_album: "Chàng Trai Của Em (Single)",
      status: [true, 3],
      src: "./assets/Songs/ChangTraiCuaEm_0330.mp3",
      song_duration: "03:30",
    },
    {
      song_name: "Nụ Cười Xuân",
      singer: ["Hương Ly", "YuniBoo"],
      song_img: "./assets/Images/Chart_Page/42.webp",
      song_album: "Nụ Cười Xuân (Single)",
      status: [false, 4],
      src: "./assets/Songs/NuCuoiXuan_0429.mp3",
      song_duration: "04:29",
    },
    {
      song_name: "Kiếp Má Hồng",
      singer: ["Tú Na", "Tiểu Nhi"],
      song_img: "./assets/Images/Chart_Page/43.webp",
      song_album: "Kiếp Má Hồng (Single)",
      status: [false, 1],
      src: "./assets/Songs/KiepMaHong_0443.mp3",
      song_duration: "04:43",
    },
    {
      song_name: "Vui Như Tết",
      singer: ["Văn Mai Hương", "Ricky Star"],
      song_img: "./assets/Images/Chart_Page/29.webp",
      song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
      status: [true, 6],
      src: "./assets/Songs/VuiNhuTet_0343.mp3",
      song_duration: "03:43",
    },
    {
      song_name: "Khuất Lối (Remix #1)",
      singer: ["H-Kray"],
      song_img: "./assets/Images/Chart_Page/4.webp",
      song_album: "Khuất Lối (Single)",
      status: [true, 1],
      src: "./assets/Songs/KhuatLoiRemix_0425.mp3",
      song_duration: "04:25",
    },
    {
      song_name: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
      singer: ["O.lew"],
      song_img: "./assets/Images/Chart_Page/46.webp",
      song_album: "",
      status: [true, 12],
      src: "./assets/Songs/RoiTaSeNgamPhaoHoaCungNhau_0442.mp3",
      song_duration: "04:42",
    },
    {
      song_name: "Tết Nay Con Hứa Về",
      singer: ["Đan Trường"],
      song_img: "./assets/Images/Chart_Page/47.webp",
      song_album: "Tết Nay Con Hứa Về (Single)",
      status: [true, 2],
      src: "./assets/Songs/TetNayConHuaVe_0451.mp3",
      song_duration: "04:51",
    },
    {
      song_name: "Định Mệnh",
      singer: ["Noo Phước Thịnh"],
      song_img: "./assets/Images/Chart_Page/48.webp",
      song_album: "Định Mệnh (Single)",
      status: [false, 5],
      src: "./assets/Songs/DinhMenh_0458.mp3",
      song_duration: "04:58",
    },
    {
      song_name: "Gấp Lắm Rồi",
      singer: ["Hana Cẩm Tiên", "TVk"],
      song_img: "./assets/Images/Chart_Page/49.webp",
      song_album: "Gấp Lắm Rồi (Single)",
      status: [true, 2],
      src: "./assets/Songs/GapLamRoi_0518.mp3",
      song_duration: "05:18",
    },
    {
      song_name: "Em Chịu Hông",
      singer: ["Hoàng Lan", "Jin Tuấn Nam"],
      song_img: "./assets/Images/Chart_Page/50.webp",
      song_album: "Em Chịu Hông (Single)",
      status: [false, 3],
      src: "./assets/Songs/EmChiuHong_0405.mp3",
      song_duration: "04:05",
    },
    {
      song_name: "Luyến Lưu",
      singer: ["Phát Hồ"],
      song_img: "./assets/Images/Chart_Page/51.webp",
      song_album: "Luyến Lưu (Single)",
      status: [false, 6],
      src: "./assets/Songs/LuyenLuu_0415.mp3",
      song_duration: "04:15",
    },
    {
      song_name: "Em Là Kẻ Đáng Thương",
      singer: ["Phát Huy T4"],
      song_img: "./assets/Images/Chart_Page/52.webp",
      song_album: "Em Là Kẻ Đáng Thương (Single)",
      status: null,
      src: "./assets/Songs/EmLaKeDangThuong_0421.mp3",
      song_duration: "04:21",
    },
    {
      song_name: "Bông Hoa Nở Muộn",
      singer: ["Khánh Trung", "Hana Cẩm Tiên"],
      song_img: "./assets/Images/Chart_Page/53.webp",
      song_album: "Bông Hoa Nở Muộn (Single)",
      status: [false, 5],
      src: "./assets/Songs/BongHoaNoMuon_0506.mp3",
      song_duration: "05:06",
    },
    {
      song_name: "Chia Cách Bình Yên (Live)",
      singer: ["Hoài Lâm"],
      song_img: "./assets/Images/Chart_Page/54.webp",
      song_album: "",
      status: [false, 1],
      src: "./assets/Songs/ChiaCachBinhYen_0402.mp3",
      song_duration: "04:02",
    },
    {
      song_name: "Ngày Mai Em Đi Mất",
      singer: ["Khải Đăng", "Đạt G"],
      song_img: "./assets/Images/Chart_Page/55.webp",
      song_album: "Ngày Mai Em Đi Mất (Single)",
      status: [true, 1],
      src: "./assets/Songs/NgayMaiEmDiMat_0413.mp3",
      song_duration: "04:13",
    },
    {
      song_name: "Ui Dza! Là Tết",
      singer: ["Ngọc Dolil"],
      song_img: "./assets/Images/Chart_Page/56.webp",
      song_album: "Ui Dza! Là Tết (Single)",
      status: [true, 3],
      src: "./assets/Songs/UiDzaLaTet_0256.mp3",
      song_duration: "02:56",
    },
    {
      song_name: "Người Như Anh",
      singer: ["Mai Tiến Dũng"],
      song_img: "./assets/Images/Chart_Page/57.webp",
      song_album: "Người Như Anh (Single)",
      status: [false, 3],
      src: "./assets/Songs/NguoiNhuAnh_0501.mp3",
      song_duration: "05:01",
    },
    {
      song_name: "Như Hoa Mùa Xuân",
      singer: ["Phùng Khánh Linh", "Wren Evans"],
      song_img: "./assets/Images/Chart_Page/29.webp",
      song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
      status: [false, 1],
      src: "./assets/Songs/NhuHoaMuaXuan_0459.mp3",
      song_duration: "04:59",
    },
    {
      song_name: "anh đến cùng cơn mưa",
      singer: ["Hứa Kim Tuyền", "GREY D"],
      song_img: "./assets/Images/Chart_Page/59.webp",
      song_album: "anh đến cùng cơn mưa (Single)",
      status: [true, 8],
      src: "./assets/Songs/AnhSeDenCungConMua_0428.mp3",
      song_duration: "04:28",
    },
    {
      song_name: "Em Nên Dừng Lại",
      singer: ["Khang Việt"],
      song_img: "./assets/Images/Chart_Page/60.webp",
      song_album: "Em Nên Đừng Lại (Single)",
      status: [true, 2],
      src: "./assets/Songs/EmNenDungLai_0554.mp3",
      song_duration: "05:54",
    },
    {
      song_name: "Thương Thì Về Đây",
      singer: ["Tiến Tới", "Trường Lê"],
      song_img: "./assets/Images/Chart_Page/61.webp",
      song_album: "Thương Thì Về Đây (Single)",
      status: [true, 5],
      src: "./assets/Songs/ThuongThiVeDay_0410.mp3",
      song_duration: "04:10",
    },
    {
      song_name: "Tình Yêu Đến Sau",
      singer: ["Myra Trần", "Đức Phúc ★"],
      song_img: "./assets/Images/Chart_Page/62.webp",
      song_album: "Tình Yêu Đến Sau (Single)",
      status: [true, 7],
      src: "./assets/Songs/TinhYeuDenSau_0533.mp3",
      song_duration: "05:33",
    },
    {
      song_name: "Cô Đơn Trên Sofa",
      singer: ["Hồ Ngọc Hà"],
      song_img: "./assets/Images/Chart_Page/63.webp",
      song_album: "Cô Đơn Trên Sofa (Single)",
      status: [true, 1],
      src: "./assets/Songs/CoDonTrenSofa_0437.mp3",
      song_duration: "04:37",
    },
    {
      song_name: "Chơi Banh Tết",
      singer: ["QNT", "Fanny"],
      song_img: "./assets/Images/Chart_Page/64.webp",
      song_album: "Chơi Banh Tết (Single)",
      status: [false, 4],
      src: "./assets/Songs/ChoiBanhTet_0323.mp3",
      song_duration: "03:23",
    },
    {
      song_name: "Yêu Mấy Cũng Đừng Quay Lại",
      singer: ["Mr. Siro ★"],
      song_img: "./assets/Images/Chart_Page/65.webp",
      song_album: "Yêu Mấy Cũng Đừng Quay Lại (Single)",
      status: [true, 11],
      src: "./assets/Songs/YeuMayCungDungQuayLai_0503.mp3",
      song_duration: "05:03",
    },
    {
      song_name: "Cơm Đoàn Viên",
      singer: ["Thành Đạt"],
      song_img: "./assets/Images/Chart_Page/66.webp",
      song_album: "Cơm Đoàn Viên (Single)",
      status: [true, 4],
      src: "./assets/Songs/ComDoanVien_0445.mp3",
      song_duration: "04:45",
    },
    {
      song_name: "Thèm Được Về Nhà",
      singer: ["Tăng Phúc", "Trương Thảo Nhi"],
      song_img: "./assets/Images/Chart_Page/67.webp",
      song_album: "Thèm Được Về Nhà (Single)",
      status: [true, 13],
      src: "./assets/Songs/ThemDuocVeNha_0430.mp3",
      song_duration: "04:30",
    },
    {
      song_name: "Tết Đi Em Ơi",
      singer: ["Masew", "Khoi Vu", "Kaybo"],
      song_img: "./assets/Images/Chart_Page/68.webp",
      song_album: "Tết Đi Em Ơi (Single)",
      status: [true, 5],
      src: "./assets/Songs/TetDiEmOi_0317.mp3",
      song_duration: "03:17",
    },
    {
      song_name: "Bài Ca Tết Cho Em",
      singer: ["Khánh Bình", "Hồ Việt Trung"],
      song_img: "./assets/Images/Chart_Page/69.webp",
      song_album: "Xuân Họp Mặt",
      status: [false, 14],
      src: "./assets/Songs/BaiCaTetChoEm_0315.mp3",
      song_duration: "03:15",
    },
    {
      song_name: "Anh Tệ",
      singer: ["DatKaa"],
      song_img: "./assets/Images/Chart_Page/70.webp",
      song_album: "Anh Tệ (Single)",
      status: [true, 11],
      src: "./assets/Songs/AnhTe_0354.mp3",
      song_duration: "03:54",
    },
    {
      song_name: "O Phải Hôm Nay",
      singer: ["QNT", "HuyR"],
      song_img: "./assets/Images/Chart_Page/71.webp",
      song_album: "O Phải Hôm Nay (Single)",
      status: [true, 6],
      src: "./assets/Songs/0PhaiHomNay_0237.mp3",
      song_duration: "02:37",
    },
    {
      song_name: "Cứu Vãn Kịp Không",
      singer: ["Vương Anh Tú"],
      song_img: "./assets/Images/Chart_Page/72.webp",
      song_album: "Cứu Vãn Kịp Không (Single)",
      status: [true, 13],
      src: "./assets/Songs/CuuVanKipKhong_0453.mp3",
      song_duration: "04:53",
    },
    {
      song_name: "Tết Rộn Ràng",
      singer: ["Hana Cẩm Tiên"],
      song_img: "./assets/Images/Chart_Page/73.webp",
      song_album: "Tết Rộn Ràng (Single)",
      status: [false, 5],
      src: "./assets/Songs/TetRonRang_0401.mp3",
      song_duration: "04:01",
    },
    {
      song_name: "Bông Hoa Nở Muộn",
      singer: ["Khánh Trung"],
      song_img: "./assets/Images/Chart_Page/74.webp",
      song_album: "Bông Hoa Nở Muộn (Single)",
      status: [false, 5],
      src: "./assets/Songs/BongHoaNoMuon_0415.mp3",
      song_duration: "04:15",
    },
    {
      song_name: "Bài này không để đi diễn",
      singer: ["Anh Tú Atus"],
      song_img: "./assets/Images/Chart_Page/75.webp",
      song_album: "Bài này không để đi diễn (Single)",
      status: [true, 3],
      src: "./assets/Songs/BaiNayKhongDeDiDien_0300.mp3",
      song_duration: "03:00",
    },
    {
      song_name: "Xuôi Dòng Cửu Long",
      singer: ["Diệu Kiên"],
      song_img: "./assets/Images/Chart_Page/76.webp",
      song_album: "Xuôi Dòng Cửu Long (Single)",
      status: [true, 6],
      src: "./assets/Songs/XuoiDongCuuLong_0354.mp3",
      song_duration: "03:54",
    },
    {
      song_name: "Nếu Không Yêu Sẽ Không Đau Lòng",
      singer: ["Minh Vương M4U", "ACV"],
      song_img: "./assets/Images/Chart_Page/77.webp",
      song_album: "Nếu Không Yêu Sẽ Không Đau Lòng (Single)",
      status: [false, 2],
      src: "./assets/Songs/NeuKhongYeuSeKhongDauLong_0419.mp3",
      song_duration: "04:19",
    },
    {
      song_name: "Mong Ước Sum Vầy",
      singer: ["Fanny", "Vũ Thịnh"],
      song_img: "./assets/Images/Chart_Page/78.webp",
      song_album: "Mong Ước Sum Vầy (Single)",
      status: [true, 9],
      src: "./assets/Songs/MongUocSungVay_0343.mp3",
      song_duration: "03:43",
    },
    {
      song_name: "Mang Hạnh Phúc Đến Thăm",
      singer: ["Huyền Tâm Môn"],
      song_img: "./assets/Images/Chart_Page/79.webp",
      song_album: "Mang Hạnh Phúc Đến Thăm (Single)",
      status: [true, 16],
      src: "./assets/Songs/MangHanhPhucDenTham_0320.mp3",
      song_duration: "03:20",
    },
    {
      song_name: "Thuyền Quyên",
      singer: ["Diệu Kiên"],
      song_img: "./assets/Images/Chart_Page/80.webp",
      song_album: "Thuyền Quyên (Single)",
      status: [true, 8],
      src: "./assets/Songs/ThuyenQuyen_0333.mp3",
      song_duration: "03:33",
    },
    {
      song_name: "Má La Anh Giờ",
      singer: ["Nana Liu"],
      song_img: "./assets/Images/Chart_Page/81.webp",
      song_album: "Má La Anh Giờ (Single)",
      status: [false, 9],
      src: "./assets/Songs/",
      song_duration: "03:06",
    },
    {
      song_name: "ngủ một mình (tình rất tình)",
      singer: ["HIEUTHUHAI", "Negav", "Kewtiie"],
      song_img: "./assets/Images/Chart_Page/82.webp",
      song_album: "ngủ một mình (tình rất tình) (Single)",
      status: [false, 19],
      src: "./assets/Songs/NguMotMinh_0301.mp3",
      song_duration: "03:01",
    },
    {
      song_name: "Tết Này Con Sẽ Về",
      singer: ["Hòa Minzy ★", "Lăng LD"],
      song_img: "./assets/Images/Chart_Page/29.webp",
      song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
      status: null,
      src: "./assets/Songs/TetNayConSeVe_0355.mp3",
      song_duration: "03:55",
    },
    {
      song_name: "Chung Rượu Hồng",
      singer: ["Anh Rồng", "Sakhar"],
      song_img: "./assets/Images/Chart_Page/84.webp",
      song_album: "Chung Rượu Hồng (Single)",
      status: [true, 14],
      src: "./assets/Songs/ChungRuouHong_0340.mp3",
      song_duration: "03:40",
    },
    {
      song_name: "Định Tết Này Con Không Về",
      singer: ["Trịnh Đình Quang"],
      song_img: "./assets/Images/Chart_Page/85.webp",
      song_album: "Định Tết Này Con Không Về (Single)",
      status: [false, 11],
      src: "./assets/Songs/DinhTetNayConKhongVe_0618.mp3",
      song_duration: "06:18",
    },
    {
      song_name: "Anh Tự Do Nhưng Cô Đơn",
      singer: ["Trung Quân Idol"],
      song_img: "./assets/Images/Chart_Page/86.webp",
      song_album: "Anh Tự Do Nhưng Cô Đơn (EP)",
      status: [false, 7],
      src: "./assets/Songs/AnhTuDoNhungCoDon_0540.mp3",
      song_duration: "05:40",
    },
    {
      song_name: "Tết Này Sâu Đậm",
      singer: ["Thanh Tú Vote For Five"],
      song_img: "./assets/Images/Chart_Page/87.webp",
      song_album: "Tết Này Sâu Đậm (Single)",
      status: [false, 3],
      src: "./assets/Songs/TetNaySauDam_0600.mp3",
      song_duration: "06:00",
    },
    {
      song_name: "Tết Là Đông Mới Vui",
      singer: ["Đức Phúc ★", "GDucky", "DTAP"],
      song_img: "./assets/Images/Chart_Page/88.webp",
      song_album: "Tết Là Đông Mới Vui (Single)",
      status: [true, 4],
      src: "./assets/Songs/TetLaDongMoiVui_0421.mp3",
      song_duration: "04:21",
    },
    {
      song_name: "Mashup Xuân",
      singer: ["W Girls"],
      song_img: "./assets/Images/Chart_Page/89.webp",
      song_album: "1st Mini Album - Mashup: Tết Đến Thật Rồi (EP)",
      status: [true, 3],
      src: "./assets/Songs/MashupXuan_0345.mp3",
      song_duration: "03:45",
    },
    {
      song_name: "Tết Cùng Đoàn Viên",
      singer: ["Bùi Dương Thái Hà"],
      song_img: "./assets/Images/Chart_Page/90.webp",
      song_album: "Tết Cùng Đoàn Viên (Single)",
      status: [true, 3],
      src: "./assets/Songs/TetCungDoanVien_0439.mp3",
      song_duration: "04:39",
    },
    {
      song_name: "Đừng Lo Nhé! Có Em Đây",
      singer: ["Oanh Tạ"],
      song_img: "./assets/Images/Chart_Page/91.webp",
      song_album: "Đừng Lo Nhé! Có Em Đây (Single)",
      status: [false, 2],
      src: "./assets/Songs/DungLoNheCoEmDay_0439.mp3",
      song_duration: "04:39",
    },
    {
      song_name: "Ghé Vào Tai",
      singer: ["UMIE", "Freaky", "Hổ"],
      song_img: "./assets/Images/Chart_Page/92.webp",
      song_album: "Ghé Vào Tai (Single)",
      status: [false, 31],
      src: "./assets/Songs/GheVaoTai_0257.mp3",
      song_duration: "02:57",
    },
    {
      song_name: "Anh Không Thể Ngờ",
      singer: ["Đinh Tùng Huy", "ACV"],
      song_img: "./assets/Images/Chart_Page/93.webp",
      song_album: "Anh Không Thể Ngờ (Single)",
      status: [true, 4],
      src: "./assets/Songs/AnhKhongTheNgo_0425.mp3",
      song_duration: "04:25",
    },
    {
      song_name: "Tết Này Phất Luôn",
      singer: ["Hồng Thanh"],
      song_img: "./assets/Images/Chart_Page/94.webp",
      song_album: "Tết Này Phất Luôn (Single)",
      status: [false, 4],
      src: "./assets/Songs/TetNayPhatLuon_0239.mp3",
      song_duration: "02:39",
    },
    {
      song_name: "Đến Giờ Cơm",
      singer: ["Ái Phương", "Minh Cà Ri"],
      song_img: "./assets/Images/Chart_Page/95.webp",
      song_album: "Đến Giờ Cơm (Single)",
      status: [true, 1],
      src: "./assets/Songs/DenGioCom_0503.mp3",
      song_duration: "05:03",
    },
    {
      song_name: "Rồi Em Sẽ Ổn Thôi",
      singer: ["Bảo Uyên", "RIN9"],
      song_img: "./assets/Images/Chart_Page/96.webp",
      song_album: "Rồi Em Sẽ Ổn Thôi (Single)",
      status: [false, 5],
      src: "./assets/Songs/RoiEmSeOnThoi_0429.mp3",
      song_duration: "04:29",
    },
    {
      song_name: "Thương Phận Đời Con Gái",
      singer: ["Hồ Việt Trung"],
      song_img: "./assets/Images/Chart_Page/97.webp",
      song_album: "Thương Phận Đời Con Gái (Single)",
      status: [false, 26],
      src: "./assets/Songs/ThuongPhanDoiConGai_0457.mp3",
      song_duration: "04:57",
    },
    {
      song_name: "Pháo Hồng",
      singer: ["Đạt Long Vinh"],
      song_img: "./assets/Images/Chart_Page/98.webp",
      song_album: "Pháo Hồng (Single)",
      status: [true, 1],
      src: "./assets/Songs/PhaoHong_0352.mp3",
      song_duration: "03:52",
    },
    {
      song_name: "Tự Nhiên Cái Tết",
      singer: ["Bùi Công Nam"],
      song_img: "./assets/Images/Chart_Page/99.webp",
      song_album: "",
      status: null,
      src: "./assets/Songs/TuNhienCaiTet_0309.mp3",
      song_duration: "03:09",
    },
    {
      song_name: "Vương Vấn (Qinn Remix)",
      singer: ["TVk", "Hana Cẩm Tiên", "93NEW-G"],
      song_img: "./assets/Images/Chart_Page/100.webp",
      song_album: "Vương Vấn (Single)",
      status: null,
      src: "./assets/Songs/VuongVan_0403.mp3",
      song_duration: "04:03",
    },
  ];
  
  var albumSongList = [
    {
      song_name: "Trăm Ngàn Lời Thương",
      singer: ["Thùy Chi", "Ricky Star"],
      song_img: "./assets/Images/Album_Image/TramNganLoiThuong.webp",
      song_album: "Trăm Ngàn Lời Thương (Single)",
      src: "./assets/Songs/TramNganLoiThuong_0302.mp3",
      song_duration: "03:02",
    },
    {
      song_name: "Bao Lâu Chưa Về Nhà",
      singer: ["DatKaa"],
      song_img: "./assets/Images/Album_Image/BaoLauChuaVeNha.webp",
      song_album: "Bao Lâu Chưa Về Nhà (Single)",
      src: "./assets/Songs/BaoLauChuaVeNha_0523.mp3",
      song_duration: "05:23",
    },
    {
      song_name: "Đợi Chờ Đừng Cáu",
      singer: ["Phan Mạnh Quỳnh", "Hoàng Thùy Link"],
      song_img: "./assets/Images/Album_Image/DoiChoDungCau.webp",
      song_album: "Đợi Chờ Đừng Cáu (Single)",
      src: "./assets/Songs/DoiChoDungCau_0550.mp3",
      song_duration: "05:50",
    },
    {
      song_name: "Như Hoa Mùa Xuân",
      singer: ["Phùng Khánh Linh", "Wren Evans"],
      song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
      song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
      src: "./assets/Songs/NhuHoaMuaXuan_0459.mp3",
      song_duration: "04:59",
    },
    {
      song_name: "Tết Bùng Nội Lực",
      singer: ["Hòa Minzy ★", "Bùi Công Nam"],
      song_img: "./assets/Images/Album_Image/TetBungNoiLuc.webp",
      song_album: "Tết Bùng Nội Lực (Single)",
      src: "./assets/Songs/TetBungNoiLuc_0330.mp3",
      song_duration: "03:30",
    },
    {
      song_name: "Tự Nhiên Cái Tết",
      singer: ["Bùi Công Nam"],
      song_img: "./assets/Images/Album_Image/TuNhienCaiTet.webp",
      song_album: "",
      src: "./assets/Songs/TuNhienCaiTet_0309.mp3",
      song_duration: "03:09",
    },
    {
      song_name: "Tết Yêu, Tết Ghét",
      singer: ["Ninh Dương Lan Ngọc", "HuyR"],
      song_img: "./assets/Images/Album_Image/TetYeuTetGhet.webp",
      song_album: "Tết Yêu, Tết Ghét (Single)",
      src: "./assets/Songs/TetYeuTetGhet_0349.mp3",
      song_duration: "03:49",
    },
    {
      song_name: "Mang Hạnh Phúc Đến Thăm",
      singer: ["Huyền Tâm Môn"],
      song_img: "./assets/Images/Album_Image/MangHanhPhucDenTham.webp",
      song_album: "Mang Hạnh Phúc Đến Thăm (Single)",
      src: "./assets/Songs/MangHanhPhucDenTham_0320.mp3",
      song_duration: "03:20",
    },
    {
      song_name: "Cái Tết Giàu",
      singer: ["Bùi Công Nam", "Lương Bích Hữu", "Đông Nhi", "Bé Winnie"],
      song_img: "./assets/Images/Album_Image/TramNganLoiThuong.webp",
      song_album: "Cái Tết Giàu (Single)",
      src: "./assets/Songs/CaiTetGiau_0530.mp3",
      song_duration: "05:30",
    },
    {
      song_name: "Chơi Banh Tết",
      singer: ["QNT", "Fanny"],
      song_img: "./assets/Images/Album_Image/ChoiBanhTet.webp",
      song_album: "Chơi Banh Tết (Single)",
      src: "./assets/Songs/ChoiBanhTet_0323.mp3",
      song_duration: "03:23",
    },
    {
      song_name: "Đón Xuân",
      singer: ["Thanh Hà"],
      song_img: "./assets/Images/Album_Image/DonXuan.webp",
      song_album: "Đón Xuân (Single)",
      src: "./assets/Songs/DonXuan_0333.mp3",
      song_duration: "03:33",
    },
    {
      song_name: "Năm Qua Đã Làm Gì",
      singer: ["Hồ Ngọc Hà"],
      song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
      song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
      src: "./assets/Songs/NamQuaDaLamGi_0329.mp3",
      song_duration: "03:29",
    },
    {
      song_name: "Ui Dza! Là Tết",
      singer: ["Ngọc Dolil"],
      song_img: "./assets/Images/Album_Image/UiDzaLaTet.webp",
      song_album: "Ui Dza! Là Tết (Single)",
      src: "./assets/Songs/UiDzaLaTet_0256.mp3",
      song_duration: "02:56",
    },
    {
      song_name: "Tết Là Đông Mới Vui",
      singer: ["Đức Phúc ★", "GDucky", "DTAP"],
      song_img: "./assets/Images/Album_Image/TetLaDongMoiVui.webp",
      song_album: "Tết Là Đông Mới Vui (Single)",
      src: "./assets/Songs/TetLaDongMoiVui_0421.mp3",
      song_duration: "04:21",
    },
    {
      song_name: "Tết Đi Em Ơi",
      singer: ["Masew", "Khoi Vu", "kaybo"],
      song_img: "./assets/Images/Album_Image/TetDiEmOi.webp",
      song_album: "Tết Đi Em Ơi (Single)",
      src: "./assets/Songs/TetDiEmOi_0317.mp3",
      song_duration: "03:17",
    },
    {
      song_name: "Đón Tết Quê Hương",
      singer: ["Ngọc Dolil"],
      song_img: "./assets/Images/Album_Image/NhuHoaMuaXuan.webp",
      song_album: "Gala Nhạc Việt: GreaTET - Thập Kỷ Nhạc Xuân",
      src: "./assets/Songs/DonTetQueHuong_0412.mp3",
      song_duration: "04:12",
    },
    {
      song_name: "Mừng Con Về Nhà",
      singer: ["Anh Tú"],
      song_img: "./assets/Images/Album_Image/MungConVeNha.webp",
      song_album: "Mừng Con Về Nhà (Single)",
      src: "./assets/Songs/MungConVeNha_0433.mp3",
      song_duration: "04:33",
    },
    {
      song_name: "Định Tết Này Con Không Về",
      singer: ["Trịnh Đình Quang"],
      song_img: "./assets/Images/Album_Image/DinhTetNayConKhongVe.webp",
      song_album: "Định Tết Này Con Không Về (Single)",
      src: "./assets/Songs/DinhTetNayConKhongVe_0618.mp3",
      song_duration: "06:18",
    },
    {
      song_name: "Thèm Được Về Nhà",
      singer: ["Tăng Phúc", "Trương Thảo Nhi"],
      song_img: "./assets/Images/Album_Image/ThemDuocVeNha.webp",
      song_album: "Thèm Được Về Nhà (Single)",
      src: "./assets/Songs/ThemDuocVeNha_0430.mp3",
      song_duration: "04:30",
    },
  ];
  
  return (
    <div className={cx('list-music')}>
      <div className={cx('list-music-content')}>
        <div className={cx('music-items')}>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              {/* <img src="/imgListMusic/1.webp" alt="1" /> */}
              <img src=/>

            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/2.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Có Một Ngày Trời Không Nắng</span>
              <span>Thái Đinh</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/3.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Kỷ Niệm Giam Cầm Chúng Ta</span>
              <span>Thanh Hưng</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/4.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Xin Lỗi Em Không Ổn</span>
              <span>Hương Giang</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
        </div>
        <div className={cx('music-items')}>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
        </div>
        <div className={cx('music-items')}>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('list-music-img')}>
              <img src="/imgListMusic/1.webp" alt="1" />
            </div>
            <div className={cx('list-music-title')}>
              <span>Lặng Im</span>
              <span>Hakoota Dũng Hà</span>
              <span> 1 Tháng trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMusic;
