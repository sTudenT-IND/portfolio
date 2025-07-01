function calculateTimeDifference() {
  const fromZone = document.getElementById("fromZone").value;
  const toZone = document.getElementById("toZone").value;

  const now = new Date();

  // Get times in both zones
  const fromTime = new Intl.DateTimeFormat('en-US', {
    timeZone: fromZone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  }).format(now);

  const toTime = new Intl.DateTimeFormat('en-US', {
    timeZone: toZone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  }).format(now);

  // Parse time into hours and minutes
  const [fromHour, fromMinute] = fromTime.split(":").map(Number);
  const [toHour, toMinute] = toTime.split(":").map(Number);

  // Convert both times to minutes since midnight
  const fromTotalMinutes = fromHour * 60 + fromMinute;
  const toTotalMinutes = toHour * 60 + toMinute;

  let diffMinutes = toTotalMinutes - fromTotalMinutes;
  let direction = diffMinutes >= 0 ? "ahead of" : "behind";

  // Absolute value for clean output
  const absDiff = Math.abs(diffMinutes);
  const hours = Math.floor(absDiff / 60);
  const minutes = absDiff % 60;

  const result = document.getElementById("result");
  result.innerHTML = `
    ⏱️ Time in <strong>${toZone}</strong> is <strong>${hours} hour(s) ${minutes} minute(s)</strong> 
    ${direction} <strong>${fromZone}</strong>.
    <br><br>
    🕐 Now in ${fromZone}: ${fromHour}:${fromMinute.toString().padStart(2, '0')} <br>
    🕑 Now in ${toZone}: ${toHour}:${toMinute.toString().padStart(2, '0')}
  `;
}
