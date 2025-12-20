import React, { useState, useEffect } from 'react';
import './style.scss';

const LOCAL_IMG_KEY = 'client_qr_image';
const LOCAL_NAME_KEY = 'client_qr_name';

export default function ClientQR() {
    const [image, setImage] = useState(null);
    const [clientName, setClientName] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const storedImage = localStorage.getItem(LOCAL_IMG_KEY);
        const storedName = localStorage.getItem(LOCAL_NAME_KEY);
        if (storedImage) setImage(storedImage);
        if (storedName) setClientName(storedName);
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            localStorage.setItem(LOCAL_IMG_KEY, reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        setClientName(name);
        localStorage.setItem(LOCAL_NAME_KEY, name);
    };

    const handleDelete = () => {
        localStorage.removeItem(LOCAL_IMG_KEY);
        localStorage.removeItem(LOCAL_NAME_KEY);
        setImage(null);
        setClientName('');
    };

    return (
        <div className="client-qr-container glass">
            {!image ? (
                <label className="upload-area">
                    Загрузите ваш QR код
                    <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                </label>
            ) : (
                <>
                    <div className="name-with-qr">
                        <div className="name-with-info">
                            <input
                                type="text"
                                placeholder="Название ИП или ООО"
                                value={clientName}
                                onChange={handleNameChange}
                                className="client-name-input glass"
                            />
                            <p>*Данный QR покажите сотрудникам диктовки, чтобы они могли быстрее найти вас на нашей базе</p>

                        </div>
                        <img
                            src={image}
                            alt="QR клиента"
                            className="qr-preview"
                            onClick={() => setModalOpen(true)}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        <button className="glass" onClick={handleDelete}>Удалить</button>
                        <button className="glass" onClick={() => setModalOpen(true)}>Открыть</button>
                    </div>
                </>
            )}

            {modalOpen && (
                <div className="qr-modal" onClick={() => setModalOpen(false)}>
                    <img src={image} alt="Полный QR" />
                </div>
            )}
        </div>
    );
}
