let firstValue = document.getElementById("screen").textContent;

    document.getElementById("1").addEventListener("click",
        function screenWrite() {
            document.getElementById("screen").textContent += 1;
        });
    document.getElementById("2").addEventListener("click",
        function screenWrite() {
            document.getElementById("screen").textContent += 2;
        });
    document.getElementById("+").addEventListener("click",
        function screenWrite() {
            firstValue = document.getElementById("screen").textContent;
            document.getElementById("screen").textContent = "+";
        });
    document.getElementById("=").addEventListener("click",
        function screenWrite() {
            document.getElementById("screen").textContent = parseInt(document.getElementById("screen")
                .textContent) + parseInt(firstValue);
        }); 