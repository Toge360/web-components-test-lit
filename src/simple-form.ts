import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './index.css?inline'; // Import main styles for Tailwind

@customElement('simple-form')
export class SimpleForm extends LitElement {
  static styles = [unsafeCSS(styles)];

  @property({ type: String }) name = '';
  @property({ type: String }) email = '';
  @property({ type: String }) message = '';

  private _handleSubmit(e: Event) {
    e.preventDefault();
    console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
    alert(`Thank you, ${this.name}! We received your message.`);
    this.name = '';
    this.email = '';
    this.message = '';
  }

  render() {
    return html`
      <div part="container">
        <h2 part="title">Contact Us</h2>
        <form @submit="${this._handleSubmit}" part="form">
          <div part="field">
            <label for="name" part="label">Name</label>
            <input 
              part="input"
              type="text" 
              id="name" 
              .value="${this.name}" 
              @input="${(e: Event) => this.name = (e.target as HTMLInputElement).value}"
              required
            >
          </div>
          <div part="field">
            <label for="email" part="label">Email</label>
            <input 
              part="input"
              type="email" 
              id="email" 
              .value="${this.email}" 
              @input="${(e: Event) => this.email = (e.target as HTMLInputElement).value}"
              required
            >
          </div>
          <div part="field">
            <label for="message" part="label">Message</label>
            <textarea 
              part="textarea"
              id="message" 
              rows="4" 
              .value="${this.message}" 
              @input="${(e: Event) => this.message = (e.target as HTMLTextAreaElement).value}"
              required
            ></textarea>
          </div>
          <div part="actions">
            <button 
              part="button"
              type="submit" 
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-form': SimpleForm
  }
}
