import React from 'react';
import './App.css';

/**
 * Importe na pasta que contem imagens, icones, logo e arquivo json
 */
import logo_teste from '../src/images_logos/logo-chaordic.png';
import icon_facebook from '../src/images_logos/icon-facebook.png';
import icon_twitter from '../src/images_logos/icon-twitter.png';
import image_background from '../src/images_logos/background-home.jpg';
import data from  '../src/images_logos/urls.json';

/**
 * Importe feito do Material-ui
 * Utilizado para a construcao do estilo para o botao e input 
 */
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/**
 * 
 * @param {*} styles 
 * @param {*} options 
 */

function createStyled(styles, options) {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }
  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };
  return withStyles(styles, options)(Styled);
}

const Styled = createStyled({
  textfieldInput: {
    '&::placeholder': {
        color:'orangered',
    },
    color:'orangered',
    border:'transparent',
    borderBottom:'2px solid orangered',
    position:'absolute',
    top: '70%',
    right:'42%',
    width:'400px',
    background:'transparent',
    height: '30px',
    fontSize:'16px',
  },
  buttom: {
    color:'white',
    background: 'orangered',
    borderRadius: 3,
    border: 0,
    height: 30,
    padding: '0 30px',
    position:'absolute',
    top: '70%',
    right:'34%',
  },
});

/**
 * Descriçao da classe App_header 
 * @class
 * @classdesc Classe que forma a header da pagina
 * Modulo que forma a header
 * @exports classe App_header
 * @return {HTMLElement} Formato da header
 */
export class App_header extends React.Component {
  render() {
    return (
      <div className="logo_header">
        <img src={logo_teste} alt="logo_teste"/>
      </div>

    );
  }
}

/**
 * Descrição da classe BodyPage 
 * @class
 * @classdesc Classe que forma o corpo da pagina
 * @constructor
 * @param {JSON} - dados - Dados do arquivo urls.json
 * @param {string} - botao - Nome que define o botao 
 * Modulo que forma o corpo
 * @exports classe BodyPage
 * @return {HTMLElement} Formato do corpo da pagina
 */
export  class  BodyPage extends React.Component {
  constructor() {
    super()
    this.state = {
      dados: data,
      botao:"ENCURTA",
    };
  }
  /**
   * @event Muda o nome do botao e valor do input
   * @type {object}
   * @property {string} - botao - valor do botao
   * @property {string} - encurta - retorno o valor apos a chamada do evento
   */
  changeNome = () => {
    this.setState({botao:"COPIAR", encurta:"http://chr.dc/xyzxyz"})
  }

  render() {
    return (
    <div>  
      <div className="container">
        <img id="imagem_tamanho" src={image_background} alt="image_background"/>
        <div className="centered"><b>Encurte seus links.</b>
          <p id="texto_centro">Links são longos. Encurte os links que você deseja compartilhar,<br />e acompanhe enquanto viajam através da internet.</p>
        </div>
        <div>
          <Styled>{({ classes }) => <input value={this.state.encurta} placeholder="Cole o seu link aqui" className={classes.textfieldInput}></input>}</Styled>
          <Styled>{({ classes }) => <Button className={classes.buttom} onClick={this.changeNome}>{this.state.botao}</Button>}</Styled>
        </div>
      </div>
      <div className="container_lista">
        <h1 className="info_lista">TOP 5</h1>
          <table id="table_style">
            <tbody>{this.state.dados.map(function(item, key) {
              return (
                <tr  key= {key}>
                  <td id="cor_link"><b>{item.shortUrl}</b></td>
                  <td id="cor_hits"><b>{item.hits}</b></td>
                </tr>
              )
              })}
            </tbody>
          </table>
      </div>
      <div className="container_Hits">
        <h1 className="info">HITS</h1>
        <div id="clicks">35.713.571</div>
        <span id="text_clicks">Cliques em links</span>
      </div>
      <div className="footer">
        <span id="sigla">chr.dc
          <img id="icon_twitter" src={icon_twitter} alt="icon-twitter"/>
          <img id="icon_facebook" src={icon_facebook} alt="icon-facebook"/> 
        </span>
        </div>
    </div>
    );
  }
}

BodyPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
