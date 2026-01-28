const API_URL = "https://duo-project-mtrhee.onrender.com/api/v1/tarefas";

async function getTarefas() {
  const response = await fetch(API_URL);
  return response.json();
}

async function createTarefa(tarefa) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarefa),
  });
  return response.json();
}

async function deleteTarefa(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}

async function updateStatus(id, status) {
  const response = await fetch(`${API_URL}/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return response.json();
}

const form = document.getElementById("task-form");
const list = document.getElementById("task-list");

async function loadTarefas() {
  list.innerHTML = "";
  const data = await getTarefas();

  data.tarefas.forEach((tarefa) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${tarefa.titulo}</strong>
      <span>${tarefa.descricao}</span>

      <label>Status:</label>
      <select class="status-select">
        <option value="a fazer">A fazer</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluída">Concluída</option>
      </select>

      <div class="actions">
        <button class="status">Atualizar status</button>
        <button class="delete">Excluir</button>
      </div>
    `;

    const statusSelect = li.querySelector(".status-select");
    statusSelect.value = tarefa.status;

    // Atualizar status
    li.querySelector(".status").onclick = async () => {
      await updateStatus(tarefa.id, statusSelect.value);
      loadTarefas();
    };

    // Excluir tarefa
    li.querySelector(".delete").onclick = async () => {
      await deleteTarefa(tarefa.id);
      loadTarefas();
    };

    list.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const tarefa = {
    titulo: titulo.value,
    descricao: descricao.value,
    status: status.value,
  };

  await createTarefa(tarefa);
  form.reset();
  loadTarefas();
});

loadTarefas();