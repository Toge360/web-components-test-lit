import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-button')
export class SimpleButton extends LitElement {
  static styles = css`
    button {
      background-color: var(--simple-btn-bg, #3b82f6);
      color: var(--simple-btn-text, white);
      padding: var(--simple-btn-padding, 0.5rem 1rem);
      border: none;
      border-radius: var(--simple-btn-radius, 0.25rem);
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: var(--simple-btn-hover-bg, #2563eb);
    }

    button:active {
      background-color: var(--simple-btn-active-bg, #1d4ed8);
    }
  `;

  @property({ type: String }) label = 'Button';

  private _handleClick() {
    this.dispatchEvent(new CustomEvent('btn-click', {
      detail: { message: 'Button clicked!' },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <button @click="${this._handleClick}">
        ${this.label}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-button': SimpleButton
  }
}
