<!-- <template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-primary">
        <q-card class="bg--white"> Meu card login </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'PageName'
});
</script> -->

<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-primary">
        <q-card class="q-pa-md" style="width: 400px">
          <q-card-section>
            <div class="text-h6">Login</div>
          </q-card-section>

          <q-card-section>
            <q-form @submit="onSubmit">
              <q-input
                v-model="email"
                filled
                label="Email"
                type="email"
                class="q-mb-md"
                required
              />
              <q-input
                v-model="password"
                filled
                label="Senha"
                type="password"
                class="q-mb-md"
                required
              />
              <q-btn
                type="submit"
                label="Entrar"
                color="primary"
                class="full-width"
              />
            </q-form>
            <q-banner v-if="errorMessage" class="q-mt-md" type="warning">
              {{ errorMessage }}
            </q-banner>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const onSubmit = () => {
      // Verifica se o email e a senha são válidos
      if (email.value === 'germano@gmail.com' && password.value === '1234') {
        // Redireciona para a página home
        router.push('/');
      } else {
        // Exibe uma mensagem de erro
        errorMessage.value = 'Email ou senha incorretos!';
      }
    };

    return {
      email,
      password,
      onSubmit,
      errorMessage,
    };
  },
});
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
