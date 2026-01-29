// API MODULE
const API_URL = "https://duo-project-mtrhee.onrender.com/api/v1/tarefas";

async function apiFetch(endpoint, method = 'GET', body = null) {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" }
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(endpoint, options);
    
    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
    
    if (response.status === 204) return null; 
    
    return await response.json();
  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro na comunicação com a API. Verifique o console.");
    return null;
  }
}

// Funções da API
const API = {
  getTarefas: async () => await apiFetch(API_URL),
  
  createTarefa: async (tarefa) => await apiFetch(API_URL, 'POST', tarefa),
  
  deleteTarefa: async (id) => await apiFetch(`${API_URL}/${id}`, 'DELETE'),
  
  updateStatus: async (id, status) => await apiFetch(`${API_URL}/${id}/status`, 'PATCH', { status })
};


// INTERFACE DOM

const form = document.getElementById("task-form");
const list = document.getElementById("task-list");


function criarItemHTML(tarefa) {
  const isSelected = (val) => tarefa.status === val ? 'selected' : '';
  
  return `
    <li data-id="${tarefa.id}" class="task-item">
      <div class="task-info">
        <strong>${tarefa.titulo}</strong>
        <span>${tarefa.descricao}</span>
      </div>

      <div class="task-footer">
        <label>
            Status:
            <select class="status-select">
                <option value="a fazer" ${isSelected('a fazer')}>A fazer</option>
                <option value="em andamento" ${isSelected('em andamento')}>Em andamento</option>
                <option value="concluída" ${isSelected('concluída')}>Concluída</option>
            </select>
        </label>

        <div class="actions">
          <button class="btn-update" aria-label="Salvar alteração de status"> Salvar</button>
          <button class="btn-delete" aria-label="Excluir tarefa"> Excluir</button>
        </div>
      </div>
    </li>
  `;
}


async function renderizarLista() {
  list.innerHTML = '<p style="padding:10px">Carregando tarefas...</p>';
  
  const data = await API.getTarefas();
  
  if (!data || !data.tarefas || data.tarefas.length === 0) {
    list.innerHTML = '<p style="padding:10px">Nenhuma tarefa encontrada.</p>';
    return;
  }

  // Mapeia os dados para HTML e insere na lista
  list.innerHTML = data.tarefas.map(criarItemHTML).join("");
}


// EVENTOS (Interatividade)

//Adicionar Tarefa
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Feedback visual de carregamento
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  const novaTarefa = {
    titulo: form.querySelector('input[name="titulo"]').value,
    descricao: form.querySelector('input[name="descricao"]').value,
    status: form.querySelector('select[name="status"]').value,
  };

  await API.createTarefa(novaTarefa);

  form.reset();
  submitBtn.disabled = false;
  submitBtn.textContent = originalText;
  
  renderizarLista();
});

// Cliques na Lista
list.addEventListener('click', async (e) => {
  const target = e.target;
  const li = target.closest('li');
  
  if (!li) return;
  
  const id = li.dataset.id;

  // Botão Excluir
  if (target.classList.contains('btn-delete')) {
    if(confirm("Deseja realmente excluir esta tarefa?")) {
      await API.deleteTarefa(id);
      renderizarLista();
    }
  }

  // Botão Atualizar
  if (target.classList.contains('btn-update')) {
    const novoStatus = li.querySelector('.status-select').value;
    await API.updateStatus(id, novoStatus);
    alert('Status atualizado com sucesso!');
  }
});

renderizarLista();