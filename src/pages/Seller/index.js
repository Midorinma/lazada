import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react'; // cai extension analys bundle nay no nang lam ban , lam lag vscode
import classNames from 'classnames/bind';
import styles from './Seller.module.scss';

const cx = classNames.bind(styles);
function Sell() {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const courseApi = `${process.env.REACT_APP_LOCALHOST}/shirt`;
    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: 'Nhập nội dung cho sản phẩm của bạn',
        }),
        [],
    );

    const handleCreateForm = () => {
        var Data = {
            infoProduct: content,
        };
        createCourse(Data);
    };

    const createCourse = async (data, callback) => {
        var options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data), // body data type must match "Content-Type" header
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        await fetch(courseApi, options)
            .then((res) => res.json())
            .then(callback);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3>Sell Page</h3>

            <div>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={console.log}
                />
            </div>
            <button onClick={handleCreateForm}>Post API</button>
            {/* <CopyToClipboard
                text={content}
                onCopy={() => alert('Copy thành cong')}
            >
                <button>Copy to clipboard</button>
            </CopyToClipboard> */}
            <div
                className={cx('preview')}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}

export default Sell;

// roi do ban oi
//vậy có điều gì mình cần xem lại không
// minh chua hieu y ban lam ban muon hoi gi?
//Bạn có muốn dặn dò gì mình không
// à. với cái data nay thay vi copy passte thi ban co the send no qua server thong qua axios de luu vao database, roi tu product page, ban get cai data do va hien thi ra thoi
//à mình sẽ xem sau nha, okec obna2n j nữa không
// voi ban nen chia ra component rieng le voi nhau cho dễ quan li va kiem soat code nha, thằng seller dùng làm j á bạn la trang de up sản pham á bạn, ví dụ admin up san pham, có import vào product được ko duoc ban ok
// oke vay la xong nha rồi mình cảm ơn bạn, mình bận xíu nc sau nha, oke ban
