<template>
  <q-page padding class="user-background">
    <div class="my-class"></div>
    <q-form>
      <div class="q-mb-md">
        <q-input v-model="name" label="Nome" outlined />
      </div>
      <div class="row q-col-gutter-x-md">
        <q-input
          class="col-8"
          v-model="bornDate"
          mask="##/##/####"
          label="Data Nascimento"
          outlined
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date v-model="bornDate" mask="DD/MM/YYYY" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-select
          class="col-4"
          v-model="gender"
          label="Genero"
          outlined
          :options="['Masculino', 'Feminino', 'Outro']"
        />
      </div>
      <password-input v-model="password" />
      <div class="column">
        <q-checkbox v-model="term" label="Aceito os termos dde uso" />
        <q-btn label="Salvar" color="primary" @click="onSave"></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import PasswordInput from '../components/PasswordInput.vue';
export default defineComponent({
  components: { PasswordInput },
  name: 'UserPage',

  setup() {
    const { notify } = useQuasar();

    const name = ref<string>();
    const bornDate = ref<string>();
    const gender = ref<string>();
    const term = ref<boolean>(false);
    const password = ref<string>('');

    const onSave = () => {
      notify({
        message: `${name.value} salvo com sucesso`,
        type: 'positivo',
      });
    };

    return {
      name,
      bornDate,
      gender,
      term,
      onSave,
      password,
    };
  },
});
</script>

<style lang="scss" scoped>
.user-background {
  background-color: white;
}
</style>
