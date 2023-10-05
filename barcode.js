function generateBarcode() {
            const barcodeData = document.getElementById("barcodeData").value;
            const barcodeOutput = document.getElementById("barcodeOutput");
			const barcodeNumber = document.getElementById("barcodeNumber");
			
			

            if (barcodeData) {
                // Clear the previous barcode, if any
                barcodeOutput.innerHTML = "";
				 barcodeNumber.textContent = "";
				 
				 
                // Generate the barcode
                JsBarcode("#barcodeOutput", barcodeData, {
                    format: "CODE128", // You can change the format as needed
                    displayValue: false,
                    fontSize: 14,
                });
				
				 // Display the entered number
                barcodeNumber.textContent = barcodeData;
            }
        }