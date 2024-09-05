import PasswordInput from 'components/PasswordInput.vue';
import { boot } from 'quasar/wrappers';
import App from 'src/App.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PasswordInput: typeof PasswordInput;
  }
}
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  App.component('PasswordInput', PasswordInput);
});
