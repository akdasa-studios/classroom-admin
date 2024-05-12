<template>
  <div class="Auth">
    <div class="Panel">
      <div class="Step" v-if="step === 'request_email'">
        Email:
        <Input v-model="email" />
        <Button @click="onSendCodeClicked">Sign In</Button>
      </div>

      <div class="Step" v-if="step === 'validate_code'">
        Code:
        <Input v-model="code" />
        <Button @click="onValidateClicked">Validate</Button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useAppRouter, useConfig } from '@classroom/shared/composables'
import { useAuthService } from '@classroom/auth/composables'
import { Input, Button } from '@classroom/shared/components/Kit'

// --- Dependencies ------------------------------------------------------------
const router = useAppRouter()
const authService = useAuthService()
const config = useConfig()

// --- State -------------------------------------------------------------------
const step = ref<'request_email' | 'validate_code'>('request_email')
const email = ref(config.email.value)
const code = ref('')

// --- Handlers ----------------------------------------------------------------
async function onSendCodeClicked() {
  await authService.signIn({ email: email.value })
  config.email.value = email.value
  step.value = 'validate_code'
}

async function onValidateClicked() {
  const response = await authService.signIn({ email: email.value, code: code.value })
  config.accessToken.value = response.accessToken
  config.refreshToken.value = response.refreshToken
  router.go('root', {})
}
</script>


<style scoped>
.Auth {
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.Panel {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}

.Step {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
</style>
