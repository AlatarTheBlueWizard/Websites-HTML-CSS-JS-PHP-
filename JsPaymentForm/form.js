window.onload = function () {
            document.getElementById("n").focus();
        };

        function getFocus() {
            document.getElementById("n").focus();
        }

        function validateForm() {
            var x = document.getElementById("n").value;
            var y = document.getElementById("ln").value;
            var z = document.getElementById("textarea").value;
            var p = document.getElementById("num").value;
            var cN = document.getElementById("cc").value;
            var cE = document.getElementById("cce").value;
            if (x === "") {
                document.getElementById("div1").innerHTML = "*First name must be filled out";
                document.getElementById("div1").style.color = "Red";
                return false;
            } else if (y === "") {
                document.getElementById("div2").innerHTML = "*Last name must be filled out";
                document.getElementById("div2").style.color = "Red";
                return false;
            } else if (z === "") {
                document.getElementById("div3").innerHTML = "*Address must be filled out";
                document.getElementById("div3").style.color = "Red";
                return false;
            } else if (p === "") {
                document.getElementById("div4").innerHTML = "*Phone number must be filled out";
                document.getElementById("div4").style.color = "Red";
                return false;
            } else if (cN === "") {
                document.getElementById("div5").innerHTML = "*Card number must be filled out";
                document.getElementById("div5").style.color = "Red";
                return false;
            } else if (cE === "") {
                document.getElementById("div6").innerHTML = "*Expiration date must be filled out";
                document.getElementById("div6").style.color = "Red";
                return false;
            }
        }

        function phoneValidation(input) {
            var phone = /^\d{3}-\d{3}-\d{4}$/;
            if (input.value.match(phone)) {
                return true;
            } else {
                document.getElementById("div4").innerHTML = "*Phone number must be 10 digits and be in format 123-456-7890";
                document.getElementById("div4").style.color = "Red";
                return false;
            }
        }

        var totalAmount = 0;
        function total(item) {
            if (item.checked) {
                totalAmount += parseInt(item.value);
            } else {
                totalAmount -= parseInt(item.value);
            }
            document.getElementById('t').innerHTML = "$" + totalAmount;
        }

        function validateCreditCard(input) {
            var card = /^\d{16}$/;
            if (input.value.match(card)) {
                return true;
            } else {
                document.getElementById("div5").innerHTML = "*Card number must be 16 digits";
                document.getElementById("div5").style.color = "Red";
                return false;
            }
        }

        function resetValidation() {
            document.getElementById("div1").innerHTML = "";
            document.getElementById("div2").innerHTML = "";
            document.getElementById("div3").innerHTML = "";
            document.getElementById("div4").innerHTML = "";
            document.getElementById("div5").innerHTML = "";
            document.getElementById("div6").innerHTML = "";
        }

        function cardYear(year) {
            var yearsAhead = 20;
            if (year < 100) {
                var currentYear = new Date().getFullYear();
                year += Math.floor(currentYear / 100) * 100;
                if (year > currentYear + yearsAhead) {
                    year -= 100;
                } else if (year <= currentYear - 100 + yearsAhead) {
                    year += 100;
                }
            }
            return year;
        }

        function checkExpiration(input) {
            var match = /^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/;
            if (input.value.match(match)) {
                return true;
            } else {
                document.getElementById("div6").innerHTML = "*Card date not formatted correctly";
                document.getElementById("div6").style.color = "Red";
                return false;
            }
            var input = new Date(cardYear(1 * match[2]), 1 * match[1] - 1, 1).valueOf();
            var now = new Date();
            var currentMonth = new Date(now.getFullYear(), now.getMonth(), 1).valueOf();
            if (input <= currentMonth) {
                document.getElementById("div6").innerHTML = "*Card date is expired";
                document.getElementById("div6").style.color = "Red";
                return false;
            } 
        }
