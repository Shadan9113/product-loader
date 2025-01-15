import React from "react";
import ProductLoader from "./Component/ProductLoader"; // Handles product loading
import QrCode from "./Component/QrCodeGenerator/QrCode"; // Generates QR codes

const App = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Product Loader Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Product Loader</h2>
        <ProductLoader />
      </section>

      {/* QR Code Generator Section */}
      <section>
        <h2>QR Code Generator</h2>
        <QrCode />
      </section>
    </div>
  );
};

export default App;

