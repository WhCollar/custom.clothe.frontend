<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { TextInput, Button } from 'shared/ui';
import { sendForm } from './api';

const requiredField = 'Это поле является обязательным';

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    object({
      name: string().required(requiredField),
      phone: string()
        .phone('Неверно введён номер телефона')
        .required(requiredField),
      commentary: string(),
    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  sendForm(values).then(() => resetForm());
});
</script>

<template>
  <Form @submit="onSubmit">
    <div class="mb-8">
      <TextInput name="name" type="text" placeholder="Имя" />
    </div>
    <div class="mb-8">
      <TextInput name="phone" type="text" placeholder="Телефон" />
    </div>
    <div class="mb-8">
      <TextInput
        name="commentary"
        type="text"
        as="textarea"
        placeholder="Комментарий"
      />
    </div>
    <div>
      <Button
        type="submit"
        class="text-xl px-7 py-2 rounded-lg border-dark-gray"
      >
        Отправить
      </Button>
    </div>
  </Form>
</template>
