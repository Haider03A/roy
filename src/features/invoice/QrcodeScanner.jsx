import { useEffect, useRef, useState } from 'react'
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode'
import { PopUpTemp } from "./components/PopUpTemp"

const qrcodeRegionId = "html5qr-code-full-region";

export const QrcodeScanner = ({ onScanSuccess, onScanFailure }) => {

    const html5QrCodeRef = useRef(null); // لتخزين الكائن دون التأثير على حالة المكون

    useEffect(() => {
        const initializeScanner = async () => {
            try {
                const devices = await Html5Qrcode.getCameras();
                if (devices && devices.length > 0) {
                    const html5QrCode = new Html5Qrcode(qrcodeRegionId, false);
                    html5QrCodeRef.current = html5QrCode; // تخزين الكائن في ref

                    // بدء المسح باستخدام الكاميرا الخلفية
                    await html5QrCode.start(
                        { deviceId: devices[3].id },
                        {
                            fps: 10,
                            qrbox: { width: 200, height: 200 },
                        },
                        onScanSuccess,
                        onScanFailure // عند الفشل في المسح
                    );
                } else {
                    alert("No cameras found");
                }
            } catch (error) {
                console.error("Error starting QR Code scanner:", error);
            }
        };

        initializeScanner();

        // تنظيف الماسح عند إلغاء المكون
        return () => {
            if (html5QrCodeRef.current) {
                html5QrCodeRef.current.stop().then(() => {
                    html5QrCodeRef.current.clear();
                }).catch((err) => {
                    console.error("Error stopping QR Code scanner:", err);
                });
            }
        };
    }, [])


    return (
        <PopUpTemp>
            <div className="container p-4 bg-white rounded-lg">
                <h1 className="pb-2 border-b font-semibold">Code Sacnner</h1>
                <div className=" flex justify-center">
                    <div id={qrcodeRegionId} clas className="mt-2 w-[250px] h-[250px] overflow-hidden" ></div>
                </div>
            </div>
        </PopUpTemp >
    );
}