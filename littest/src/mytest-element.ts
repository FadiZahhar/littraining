import {LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('mytest-element')
export class MyTestElement extends LitElement { 
   @property()
    title: string = 'Hello, World!';
    text: string = 'This is a test element.';
    name: string = 'Your name here';
    checked: boolean = true;

  render() {
    return html`
      <div>
        <h1>hello, ${this.name}</h1>
        <input @input=${this.changeName} placeholder="Enter your name" ?disabled=${this.checked} />
        <label>
            <input type="checkbox" @change=${this.setChecked} ?checked=${this.checked} />
            Disable input
        </label>   
    </div>

    `;
  }

  changeName(event: InputEvent) {
    const input = event.target as HTMLInputElement;
      this.name = input.value;
      this.requestUpdate();
  }

  setChecked(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.checked = checkbox.checked;
    this.requestUpdate();
  }
}
