import { html, css, LitElement } from 'lit-element';

export class LitComponent extends LitElement {
  static get properties() {
    return {
      response: { type: String }
    };
  }

  constructor() {
    super();
    this.response = "";
  }

  firstUpdated() {
    fetch("https://extreme-ip-lookup.com/json/")
      .then(r => r.json())
      .then(r => {
        this.response = r.country;
        console.log("Country: ", this.response);
      })
      .catch((data, status) => {
        console.log('Request failed');
      });
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

        div {
        border: 10px solid gray;
        padding: 8px;
      }

        h1 {
        text-align: center;
        text-transform: uppercase;
        color: #4CAF50;
      }

        p {
        text-align: center;
        font-size: 50px;
        text-align: center;
  
      }
      
    `;
  }


  render() {

    const { response } = this;

    return html`
    <div>
    <h1> You Are In </h1>
    <p>${response}</p>
    </div>
    `;
  }

}
