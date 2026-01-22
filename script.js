function loadData() {
    // Demo values (later replace with real API)
    const goldRate = 6200; // per gram
    const goldChange = +25; // positive = up, negative = down

    const goldRateEl = document.getElementById("gold-rate");
    const goldChangeEl = document.getElementById("gold-change");

    goldRateEl.innerText = `₹ ${goldRate} / gram`;

    if (goldChange > 0) {
        goldChangeEl.innerText = `⬆️ +${goldChange}`;
        goldChangeEl.className = "up";
    } else {
        goldChangeEl.innerText = `⬇️ ${goldChange}`;
        goldChangeEl.className = "down";
    }
}

// Gold Calculator
function calculateGold() {
    const weight = Number(document.getElementById("weight").value);
    const rate = Number(document.getElementById("rate").value);
    const gst = Number(document.getElementById("gst").value);
    const making = Number(document.getElementById("making").value);

    if (!weight || !rate) {
        alert("Enter weight and rate");
        return;
    }

    let basePrice = weight * rate;
    let makingCharge = (basePrice * making) / 100;
    let gstCharge = ((basePrice + makingCharge) * gst) / 100;
    let total = basePrice + makingCharge + gstCharge;

    document.getElementById("total").innerText =
        `Total Price: ₹ ${total.toFixed(2)}`;
}

loadData();