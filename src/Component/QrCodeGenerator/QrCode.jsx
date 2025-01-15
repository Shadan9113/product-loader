import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Import QRCodeCanvas instead of QRCode

const QrCode = () => {
  const [text, setText] = useState("");

  const handleReset = () => {
    setText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>QR Code Generator</h1>
      <div>
        <label htmlFor="qrInput" style={{ display: "block", marginBottom: "10px" }}>
          Enter Text or URL:
        </label>
        <input
          id="qrInput"
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "300px",
            marginBottom: "20px",
          }}
        />
        <div>
          <button
            onClick={handleReset}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {text && (
          <QRCodeCanvas
            value={text}
            size={256} // Size of the QR Code
            bgColor={"#ffffff"} // Background color
            fgColor={"#000000"} // Foreground color
          />
        )}
      </div>
    </div>
  );
};

export default QrCode;
