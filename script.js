function loadData() {
    // Demo data (later we connect real API)
    const goldRate = 6200;      // per gram
    const goldChange = 25;      // positive = up, negative = down

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

// Gold price calculator
function calculateGold() {
    const weight = Number(document.getElementById("weight").value);
    const rate = Number(document.getElementById("rate").value);
    const making = Number(document.getElementById("making").value);
    const gst = Number(document.getElementById("gst").value);

    if (!weight || !rate) {
        alert("Please enter weight and rate");
        return;
    }

    const basePrice = weight * rate;
    const makingCharge = (basePrice * making) / 100;
    const gstCharge = ((basePrice + makingCharge) * gst) / 100;
    const total = basePrice + makingCharge + gstCharge;

    document.getElementById("total").innerText =
        `Total Price: ₹ ${total.toFixed(2)}`;
}

// Load data on page load
loadData();
