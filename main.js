      function checkPrice() {
            let seat = document.getElementById('From').value;
            let option = document.getElementById('option').value;
            let price = 0;

            if (seat === "VIP") price = 1000;
            else if (seat === "Patron") price = 700;
            else if (seat === "Balcony") price = 500;

            if (option === "Student Discount") price *= 0.8;

            alert("DATA RECEIVED: Your ticket costs PHP " + price + ".");
        }
