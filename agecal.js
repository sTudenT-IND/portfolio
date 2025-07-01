function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const resultBox = document.getElementById("ageResult");

  if (!dobInput) {
    resultBox.textContent = "⚠️ Please select your Date of Birth!";
    resultBox.style.color = "red";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultBox.style.color = "#bf360c";
  resultBox.innerHTML = `🎉 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old! 👏`;
}
