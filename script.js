document.getElementById("clearanceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.toUpperCase();
  const age = document.getElementById("age").value;
  const civilStatus = document.getElementById("civilStatus").value;
  const address = document.getElementById("address").value;
  const province = document.getElementById("province").value;
  const municipality = document.getElementById("municipality").value;
  const barangay = document.getElementById("barangay").value;
  const captain = document.getElementById("captain").value;

  const today = new Date();
  const day = today.getDate();
  const year = today.getFullYear();
  const month = today.toLocaleString('default', { month: 'long' });

  const output = `
Republic of the Philippines
Province of ${province}
Municipality of ${municipality}
Barangay ${barangay}

-------------------------------
        BARANGAY CLEARANCE
-------------------------------

TO WHOM IT MAY CONCERN:

This is to certify that:

        **${fullName}**
        Age: ${age}
        Civil Status: ${civilStatus}
        Address: ${address}

is a resident of this barangay and has no derogatory record or pending case as of this date.

This clearance is issued upon request of the above-named person for whatever legal purpose it may serve.

Issued this ${day} of ${month}, ${year}, at Barangay ${barangay}, ${municipality}, ${province}, Philippines.

_________________________
${captain}
Punong Barangay

(Barangay Official Seal or Dry Seal)
`;

  document.getElementById("clearanceOutput").textContent = output;
});
