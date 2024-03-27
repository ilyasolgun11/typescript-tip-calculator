const billAmount = document.getElementById("bill") as HTMLInputElement;
const amountOfPeople = document.getElementById(
  "no-of-people"
) as HTMLInputElement;
const tipPercentage = document.getElementById(
  "tip-percent"
) as HTMLInputElement;
const tipAmountPp = document.getElementById("tip-amount-pp");
const totalAmountPp = document.getElementById("total-amount-pp");
const totalBill = document.getElementById("total-bill");
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");
const billRequired = document.getElementById("bill-required");
const tipRequired = document.getElementById("tip-required");

calculateBtn?.addEventListener("click", () => {
  const billValue = parseFloat(billAmount.value);
  const tipPercentageValue = parseFloat(tipPercentage.value);
  let amountOfPeopleValue = parseFloat(amountOfPeople.value);
  if (!isNaN(billValue) && !isNaN(tipPercentageValue)) {
    if (isNaN(amountOfPeopleValue)) {
      amountOfPeopleValue = 1;
    }

    const totalTipAmount = (billValue * tipPercentageValue) / 100;
    const totalBillCalc = billValue + totalTipAmount;
    const totalAmountPpCalc = (totalBillCalc / amountOfPeopleValue).toFixed(2);
    const totalTipAmountPpCalc = (totalTipAmount / amountOfPeopleValue).toFixed(
      2
    );

    billRequired!.style.display = "none";
    tipRequired!.style.display = "none";

    tipAmountPp!.textContent = totalTipAmountPpCalc;
    totalAmountPp!.textContent = totalAmountPpCalc;
    totalBill!.textContent = totalBillCalc.toFixed(2).toString();
  } else {
    if (isNaN(billValue)) {
      billRequired!.style.display = "block";
    }

    if (isNaN(billValue) && !isNaN(tipPercentageValue)) {
      billRequired!.style.display = "block";
      tipRequired!.style.display = "none";
    }

    if (isNaN(tipPercentageValue)) {
      tipRequired!.style.display = "block";
    }

    if (!isNaN(billValue) && isNaN(tipPercentageValue)) {
      billRequired!.style.display = "none";
      tipRequired!.style.display = "block";
    }
  }
});

resetBtn?.addEventListener("click", () => {
  billAmount.value = "";
  tipPercentage.value = "";
  amountOfPeople.value = "";
  tipAmountPp!.textContent = "0.00";
  totalAmountPp!.textContent = "0.00";
  totalBill!.textContent = "0.00";
  tipRequired!.style.display = "none";
  billRequired!.style.display = "none";
});
