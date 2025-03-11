      function DisplayPrice() {
        let from = parseInt(document.getElementById("fromStation").value) || 0;
        let to = parseInt(document.getElementById("toStation").value) || 0;
        let discount = document.getElementById("discountType").value;
        
        if (!from || !to) {
          document.getElementById("valueTotal").value = "P0.00";
          return;
        }
        
        let distance = Math.abs(from - to);
        let price = distance <= 2 ? 13.00 : distance <= 4 ? 16.00 : distance <= 7 ? 20.00 : distance <= 10 ? 24.00 : 28.00;
        if (discount !== "none") price *= 0.8;
        
        document.getElementById("valueTotal").value = `P${price.toFixed(2)}`;
      }
