export const resultPrice = ({ arr1 = [] }) => {
    let price;
    arr1.forEach((item, index) => {
        if (index === 0) {
            item.forEach((item1, index1) => {
                if (index1 === 0) {
                    price = item1.price;
                }
            });
        }
    });
    return price;
};

export const resultPriceOld = ({ arr1 = [] }) => {
    let price;
    arr1.forEach((item, index) => {
        if (index === 0) {
            item.forEach((item1, index1) => {
                if (index1 === 0) {
                    price = item1.old_price;
                }
            });
        }
    });
    return price;
};

export const resultDiscount = ({ arr1 = [] }) => {
    let price;
    arr1.forEach((item, index) => {
        if (index === 0) {
            item.forEach((item1, index1) => {
                if (index1 === 0) {
                    price = item1.discount;
                }
            });
        }
    });
    return price;
};

export const resultRandom = () => {
    // Tạo số ngẫu nhiên từ 0 đến 1
    let randomNumber = Math.random();

    // Chuyển đổi số ngẫu nhiên thành chuỗi và loại bỏ dấu chấm (.)
    let randomNumberString = String(randomNumber).replace('.', '');

    // Lấy 15 chữ số từ chuỗi, có thể thay đổi nếu bạn muốn số chữ số khác
    let fifteenDigitNumber = randomNumberString.slice(0, 15);

    // Đảm bảo rằng số bắt đầu không phải là 0 để giữ nguyên 15 chữ số
    while (fifteenDigitNumber.length < 15) {
        fifteenDigitNumber += '0';
    }

    return fifteenDigitNumber;
};
