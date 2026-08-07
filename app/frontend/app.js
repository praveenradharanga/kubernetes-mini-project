async function loadHealth() {

    try {

        const response = await fetch("/api/health");

        const data = await response.json();

        document.getElementById("backend-status").innerHTML =
            `Backend : <span class="running">🟢 ${data.status}</span>`;

    } catch {

        document.getElementById("backend-status").innerHTML =
            `Backend : <span class="down">🔴 DOWN</span>`;
    }

}

async function loadEmployees() {

    try {

        const response = await fetch("/api/employees");

        const employees = await response.json();

        const table = document.getElementById("employee-table");

        table.innerHTML = "";

        employees.forEach(emp => {

            table.innerHTML += `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                </tr>
            `;

        });

    } catch {

        console.log("Unable to load employees");

    }

}

loadHealth();

loadEmployees();
