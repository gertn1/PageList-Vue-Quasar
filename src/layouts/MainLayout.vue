<!-- <template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        
        <q-toolbar-title>Minha Aplicação</q-toolbar-title>

   
        <q-btn
          flat
          dense
          label="Home"
          icon="home"
          @click="navigateTo('home')"
        />
        <q-btn
          flat
          dense
          label="Sobre"
          icon="info"
          @click="navigateTo('about')"
        />
        <q-btn
          flat
          dense
          label="Contato"
          icon="phone"
          @click="navigateTo('contact')"
        />
        <q-btn
          flat
          dense
          label="Serviços"
          icon="build"
          @click="navigateTo('services')"
        />

       
        <q-space />

        
        <q-btn
          flat
          dense
          icon="brightness_6"
          @click="toggleTheme"
          aria-label="Toggle Theme"
        />

      Versão do Quasar 
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

     Conteúdo da página 
    <q-page-container>
      <router-view />
    </q-page-container> 

     <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
        <q-btn flat dense label="Política de Privacidade" />
        <q-btn flat dense label="Termos de Uso" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template> -->

<!-- <script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();


function navigateTo(page: string) {
  router.push({ name: page });
}


function toggleTheme() {
  $q.dark.set(!$q.dark.isActive);
} -->

<!-- // export default defineComponent({
//   name: 'MainLayout',
//   setup() {
//     const authStore = useAuthStore();

//     const { name } = storeToRefs(authStore);
//     return {
//       authStore,
//       name,
//     };
//   },
// });
//
 </script> -->

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- Título da aplicação -->
        <q-toolbar-title>Minha Aplicação</q-toolbar-title>

        <!-- Botões de navegação na Navbar -->
        <q-btn
          rounded
          flat
          label="Home"
          icon="person"
          @click="navigateTo('home')"
        />
        <q-btn
          flat
          dense
          label="Sobre"
          icon="info"
          @click="navigateTo('about')"
        />
        <q-btn
          flat
          dense
          label="Contato"
          icon="phone"
          @click="navigateTo('contact')"
        />
        <q-btn
          flat
          dense
          label="Serviços"
          icon="build"
          @click="navigateTo('services')"
        />

        <!-- Espaçamento -->
        <q-space />

        <!-- Botão de tema escuro/claro -->
        <q-btn
          flat
          dense
          icon="brightness_6"
          @click="toggleTheme"
          aria-label="Toggle Theme"
        />

        <!-- Versão do Quasar -->
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Conteúdo da página -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer fixo na parte inferior -->
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
        <q-btn flat dense label="Política de Privacidade" />
        <q-btn flat dense label="Termos de Uso" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();

// Função para navegação
function navigateTo(page: string) {
  router.push({ name: page });
}

// Função para alternar tema escuro/claro
function toggleTheme() {
  $q.dark.set(!$q.dark.isActive);
}

// Pega a store de autenticação
const authStore = useAuthStore();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { name } = storeToRefs(authStore);
</script>
