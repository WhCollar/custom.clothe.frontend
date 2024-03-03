<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { RequestForm } from 'features/rquest.form';
import { Config } from 'entities/static';
import { RouterEnum } from 'shared/model/router';
import { Container, Button, TelegramButton } from 'shared/ui';

const router = useRouter();
</script>

<template>
  <Header class="bg-section bg-no-repeat bg-left-bottom bg-graffiti-1-half-1">
    <div class="py-32 leading-[70px]">
      <div class="mb-10">
        <h2 class="text-[64px]">
          Авторская кастомизаци <br />
          одежды, обуви и аксессуаров
        </h2>
      </div>
      <div class="text-[40px] mb-10">
        <span> Создание вашей индивидуальности </span>
      </div>
      <div>
        <Button
          class="mr-10"
          @click="router.push({ name: RouterEnum.Main, hash: '#contacts' })"
        >
          Заказать кастом
        </Button>
        <Button
          styleType="ghost"
          @click="router.push({ name: RouterEnum.Main, hash: '#works' })"
        >
          Перейти к работам
        </Button>
      </div>
    </div>
  </Header>
  <section class="bg-no-repeat bg-right-bottom bg-graffiti-2-half-1">
    <div class="bg-no-repeat bg-left-top bg-graffiti-1-half-2">
      <Container class="py-40">
        <div>Преимущества</div>
      </Container>
    </div>
  </section>
  <section class="bg-section bg-no-repeat bg-left-bottom bg-graffiti-3-half-1">
    <div class="bg-no-repeat bg-right-top bg-graffiti-2-half-2">
      <Container class="h-96">
        Продащий текст, возможно секция "О нас"
      </Container>
    </div>
  </section>
  <section>
    <div class="bg-no-repeat bg-left-top bg-graffiti-3-half-2">
      <Container class="h-96"> Примеры работ </Container>
    </div>
  </section>
  <section class="bg-section bg-no-repeat bg-cover bg-request-form-section">
    <Container>
      <div></div>
      <div
        class="bg-section h-full flex justify-center items-center py-16"
        style="clip-path: polygon(0 0, 85% 0, 100% 100%, 15% 100%)"
      >
        <div class="h-full">
          <div class="mb-8 text-4xl">Закажите прямо сейчас</div>
          <RequestForm class="mb-8" />
          <div>
            <div class="mb-2">
              <span>SocialMedia ;)</span>
            </div>
            <TelegramButton
              :share-url="Config.telegramButton.shareUrl"
              :size="Config.telegramButton.size"
              :comment="Config.telegramButton.comment"
              :text="Config.telegramButton.text"
            />
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  </section>
  <Footer />
</template>
