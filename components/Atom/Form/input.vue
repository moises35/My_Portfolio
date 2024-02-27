<template>
  <label class="field">
    <input
      v-if="type === 'email'"
      class="input"
      type="email"
      placeholder=""
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <textarea
      v-else-if="type === 'textarea'"
      class="input textarea"
      rows="10"
      placeholder=""
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <input
      v-else
      class="input"
      type="text"
      placeholder=""
      :required="required"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
.field {
  position: relative;

  .input {
    width: 100%;
    padding: 20px 05px 05px 10px;
    color: var(--text-color-2);
    background-color: var(--bg-card);
    border: 1px solid var(--form-border);
    border-radius: 10px;
    outline: 0;

    &+span {
      position: absolute;
      top: 0;
      left: 10px;
      font-size: 0.8em;
      color: var(--gray);
      cursor: text;
      transition: 0.25s ease;
    }
  }

  .textarea {
    resize: none;
  }

  .input:placeholder-shown {
    &+span {
      top: 12.5px;
      font-size: 0.9em;
    }
  }

  @media screen and (min-width: 992px) {
    .input:placeholder-shown {
      &+span {
        top: 11.5px;
        font-size: 0.85em;
      }
    }

    .input + span {
      font-size: 0.75em;
    }
  }

  .input:focus + span {
    top: 0;
    font-size: 0.7em;
    font-weight: 600;
    color: var(--primary-color);
  }
}
</style>
