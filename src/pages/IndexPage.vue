<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page class="q-pa-md">
        <q-btn
          label="Criar Nova Página"
          color="primary"
          class="q-mb-md"
          @click="openCreateDialog"
        />
        <div class="q-mt-md">
          <q-btn
            label="Atualizar"
            color="secondary"
            @click="openUpdateDialog"
            :disable="!selectedPage"
            class="q-mr-sm"
          />
          <q-btn
            label="Deletar"
            color="negative"
            @click="handleDelete"
            :disable="!selectedPage"
          />
        </div>

        <q-list bordered>
          <q-item-label header class="text-h5">Web Pages</q-item-label>

          <div
            v-for="webpage in webpages"
            :key="webpage.id"
            class="item-bordered item-spacing"
          >
            <q-item
              clickable
              tag="div"
              class="q-pa-lg full-width"
              style="min-height: 50px"
            >
              <q-item-section>
                <q-checkbox
                  v-model="selectedPage"
                  :true-value="webpage.id"
                  :false-value="null"
                  label="Selecionar"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label class="title">{{ webpage.title }}</q-item-label>
                <q-item-label class="content">{{
                  webpage.content
                }}</q-item-label>
                <q-item-label class="url">{{ webpage.url }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-list>

        <!-- Diálogo para criar ou atualizar página -->
        <q-dialog v-model="isDialogOpen">
          <q-card>
            <q-card-section>
              <div class="text-h6">
                {{ isEditing ? 'Atualizar Página' : 'Criar Nova Página' }}
              </div>
            </q-card-section>

            <q-card-section class="card-section">
              <q-input
                v-model="formData.title"
                label="Título"
                filled
                class="input-spacing"
              />
              <q-input
                v-model="formData.content"
                label="Conteúdo"
                filled
                class="input-spacing"
              />
              <q-input
                v-model="formData.url"
                label="URL"
                filled
                class="input-spacing"
              />
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancelar" color="primary" v-close-popup />
              <q-btn flat label="Salvar" color="primary" @click="saveWebPage" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface WebPage {
  id: number;
  title: string;
  content: string;
  url: string;
}

export default defineComponent({
  name: 'HomePage',
  setup() {
    const webpages = ref<WebPage[]>([]);
    const selectedPage = ref<number | null>(null); // Armazena o ID da página selecionada
    const isDialogOpen = ref(false); // Controla se o diálogo está aberto ou não
    const isEditing = ref(false); // Controla se estamos criando ou editando uma página
    const formData = ref<WebPage>({ id: 0, title: '', content: '', url: '' }); // Dados do formulário

    // Função para buscar todas as páginas da API
    const fetchWebpages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/webpages');
        webpages.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar webpages:', error);
      }
    };

    // Função para abrir o diálogo de criação
    const openCreateDialog = () => {
      isEditing.value = false; // Garantir que estamos criando, não editando
      formData.value = { id: 0, title: '', content: '', url: '' }; // Limpar os dados do formulário
      isDialogOpen.value = true; // Abrir o diálogo
    };

    // Função para abrir o diálogo de atualização
    const openUpdateDialog = () => {
      const page = webpages.value.find(
        (webpage) => webpage.id === selectedPage.value
      );
      if (page) {
        formData.value = { ...page }; // Preenche o formulário com os dados da página selecionada
        isEditing.value = true; // Definir o estado como edição
        isDialogOpen.value = true; // Abrir o diálogo
      }
    };

    const saveWebPage = async () => {
      try {
        if (isEditing.value) {
          await axios.put(
            `http://localhost:3000/webpages/${formData.value.id}`,
            formData.value
          );
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id, ...data } = formData.value; // Remove o ID do formData ao criar
          await axios.post('http://localhost:3000/webpages', data);
        }
        fetchWebpages();
        isDialogOpen.value = false;
      } catch (error) {
        console.error('Erro ao salvar webpage:', error);
      }
    };

    const handleDelete = async () => {
      if (selectedPage.value) {
        try {
          await axios.delete(
            `http://localhost:3000/webpages/${selectedPage.value}`
          );
          webpages.value = webpages.value.filter(
            (webpage) => webpage.id !== selectedPage.value
          );
          selectedPage.value = null; // Resetar a seleção após deletar
        } catch (error) {
          console.error('Erro ao deletar webpage:', error);
        }
      }
    };

    onMounted(() => {
      fetchWebpages();
    });

    return {
      webpages,
      selectedPage,
      isDialogOpen,
      isEditing,
      formData,
      openCreateDialog,
      openUpdateDialog,
      saveWebPage,
      handleDelete,
    };
  },
});
</script>

<style scoped>
.full-width {
  width: 100%;
}

.item-bordered {
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  background-color: white;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.content {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 6px;
}

.url {
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}

.item-spacing {
  margin-bottom: 50px;
}

.card-section {
  width: 400px;
  height: 500px;
}
</style>
