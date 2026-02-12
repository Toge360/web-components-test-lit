import { defineCustomElement } from 'vue'
import VueButton from './VueButton.ce.vue'
import BaseForm from './BaseForm.ce.vue'

// Convert Vue component to Custom Element
const VueButtonElement = defineCustomElement(VueButton)
const BaseFormElement = defineCustomElement(BaseForm)

// Register Custom Elements
customElements.define('my-vue-button', VueButtonElement)
customElements.define('my-base-form', BaseFormElement)
