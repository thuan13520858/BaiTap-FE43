export const chonChe = (hang, thongTinGhe, huyFlg = false) => {
    let type;
    if (thongTinGhe.dangDat || huyFlg) {
        type = 'HUY_GHE'
    } else {
        type = 'CHON_GHE'
    }
    return {
        type,
        hang,
        thongTinGhe
    }
}