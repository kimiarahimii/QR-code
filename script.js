function generateQR() {
    const qrText = document.getElementById("qrText").value;
    
    if (qrText.trim() === "") {
        alert("Please enter text or a URL.");
        return;
    }

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error generating QR Code');
            }
            return response.blob();
        })
        .then(imageBlob => {
            const imageUrl = URL.createObjectURL(imageBlob);
            document.getElementById("qrCode").innerHTML = `<img src="${imageUrl}" alt="QR Code">`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
