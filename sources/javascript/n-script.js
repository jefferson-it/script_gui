"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ns_Dom_Uni_Cls_to, _ns_Dom_Uni_Cls_styles, _ns_Dom_List_Cls_styles, _NS_Component_proprieties, _NS_Component_defaultStyle;
// Class declaration
// Get The DOM
class NS_Elm {
    constructor(elm) {
        return elm;
    }
}
class ns_Dom_Uni_Cls extends NS_Elm {
    constructor(element, elm) {
        super(elm ? element : "");
        _ns_Dom_Uni_Cls_to.set(this, void 0);
        _ns_Dom_Uni_Cls_styles.set(this, void 0);
        /**
        * indica o elemento a qual o index se refere
        */
        this.to = element;
        __classPrivateFieldSet(this, _ns_Dom_Uni_Cls_to, this.to, "f");
        /**
         * domBy serve para dizer de onde vem o DOM
         */
        this.domBy = "NhacScript Module";
        __classPrivateFieldSet(this, _ns_Dom_Uni_Cls_styles, {}, "f");
        this.toString = () => {
            return `\x1b[31m<\x1b[33m${this.to["localName"]}-ns\x1b[31m/>`;
        };
        /**
         * O AddEnv trabalha como o addEventListener, sendo o primeiro parâmetro para o nome do evento
         * e o segundo para a função que ocorrerá ao acontecer determinado evento.
         * @param {keyof HTMLElementEventMap} nameEvent
         * @param {Function} env
        */
        this.AddEnv = (nameEvent, env) => {
            if (element) {
                this.to.addEventListener(nameEvent, env);
            }
        };
        /**
        * O método click realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de clique
        * @param {Function} env
        */
        this.Click = (env) => {
            if (!env) {
                this.to.click();
            }
            else {
                this.AddEnv("click", env);
            }
        };
        /**
        * O método dbClick realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de duplo clique
        * @param {Function} env
        */
        this.DbClick = (env) => {
            this.AddEnv("dblclick", env);
        };
        /**
        * O método change realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de mudança(mudar o valor do atributo value) ocorrer
        * @param {Function} env
        */
        this.Change = (env) => {
            this.AddEnv("change", env);
        };
        /**
        * O método submit realizará a função passada pelo parâmetro quando o formulário em questão for submetido
        * @param {Function} env
        */
        this.Submit = (env) => {
            this.AddEnv("submit", env);
        };
        /**
        * O método keypress realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keypress = (env) => {
            this.AddEnv("keypress", env);
        };
        /**
        * O método keydown realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keydown = (env) => {
            this.AddEnv("keydown", env);
        };
        /**
        * O método keyup realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando, logo depois solto no elemento
        * @param {Function} env
        */
        this.Keyup = (env) => {
            this.AddEnv("keyup", env);
        };
        /**
        * O método mouseenter realizará a função passada pelo parâmetro quando o mouse entrar no elemento
        * @param {Function} env
        */
        this.Mouseenter = (env) => {
            this.AddEnv("mouseenter", env);
        };
        /**
        * O método mouseout realizará a função passada pelo parâmetro quando o mouse sair no elemento
        * @param {Function} env
        */
        this.Mouseout = (env) => {
            this.AddEnv("mouseout", env);
        };
        /**
        * NOS ou Nhac Object Style é um método criado pro NS_DOM(NhacScript Document Object Module)
        * Sua principal função é estilizar os elementos por meio de objeto
        * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
        */
        this.NOS = (props) => {
            if (typeof props == "object") {
                var keys = Object.keys(props);
                for (let style of keys) {
                    let a = props;
                    this.to.style[style] = a[style];
                    __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styles, "f")[`${style}`] = this.to.style[style];
                }
            }
        };
        /**
         * Obtenha os estilos usado no seu elemento
         */
        this.GetStyle = () => {
            let styles = {
                ...__classPrivateFieldGet(this, _ns_Dom_Uni_Cls_styles, "f")
            };
            for (let st of Object.keys(this.to.style)) {
                let key = st;
                if (this.to.style[key] && !IsNum(st)) {
                    styles[key] = this.to.style[key];
                }
            }
            return styles;
        };
        /**
        * Obterá o conteúdo do elemento, se html, obterá as tags html, se txt, obterá apenas o texto
        * @param {("html"|"txt")} type
        * @returns {string}
        */
        this.GetContent = (type) => {
            if (type == void 0)
                type = "html";
            switch (type) {
                case "html":
                    return this.to.innerHTML;
                    break;
                case "txt":
                    return this.to.innerText;
                    break;
                default:
                    let a = "Error - o tipo é invalido";
                    console.error("Error - o tipo é invalido");
                    return a;
            }
        };
        /**
        * Obterá o conteúdo do elemento em html
        * @returns {string}
        */
        this.GetHtml = () => {
            return this.GetContent("html");
        };
        /**
        * Obterá o conteúdo do elemento em texto
        * @returns {string}
        */
        this.GetTXT = () => {
            return this.GetContent("txt");
        };
        /**
        * Obterá o valor do atributo value
        * @returns {string}
        */
        this.GetVal = () => {
            return element.value;
        };
        /**
        * Sobreporá(escreverá um novo) o valor do atributo value
        * @param {string} value - valor a ser atribuído
        */
        this.SetVal = (value) => {
            element.value = value;
        };
        /**
        * Escreverá o conteúdo em HTML no elemento sobrescrevendo o valor anterior
        *  @param {string} content - valor a ser escrito
        */
        this.SetHTML = (content) => {
            this.to.innerHTML = content;
        };
        /**
        * Escreverá o conteúdo em TEXTO no elemento sobrescrevendo o valor anterior
        * @param {string} content - valor a ser escrito
        */
        this.SetTXT = (content) => {
            this.to.innerText = content;
        };
        /**
        * Escreverá o conteúdo em HTML no elemento, sem sobrepor o conteúdo anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddHTML = (content) => {
            this.to.innerHTML += content;
        };
        /**
        * Escreverá o conteúdo em TXT no elemento, sem sobrepor o conteúdo anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddTXT = (content) => {
            this.to.innerText += content;
        };
        /**
        * Irá por o id no elemento em questão
        * @param {string} id
        */
        this.SetID = (id) => {
            this.to.id = id;
        };
        /**
        * Irá adicionar uma(ou mais) classe ao elemento
        * @param {...string} target
        */
        this.SetClass = (target) => {
            if (Array.isArray(target)) {
                target.forEach(elm => {
                    let a = this.to.classList.contains(elm);
                    switch (a) {
                        case false:
                            this.to.classList.add(elm);
                            break;
                        default:
                            console.error("Esta classe já existe neste elemento!");
                            break;
                    }
                });
            }
            else {
                let a = this.to.classList.contains(target);
                switch (a) {
                    case false:
                        this.to.classList.add(target);
                        break;
                    default:
                        console.error("Esta classe já existe neste elemento!");
                        break;
                }
            }
        };
        /**
        * Irá remover uma(ou mais) classe do elemento
        * @param {...string} target
        */
        this.RmClass = (target) => {
            if (Array.isArray(target)) {
                target.forEach(elm => {
                    let a = this.to.classList.contains(elm);
                    switch (a) {
                        case true:
                            this.to.classList.remove(elm);
                            break;
                        default:
                            console.error("Esta classe não existe neste elemento!");
                            break;
                    }
                });
            }
            else {
                let a = this.to.classList.contains(target);
                switch (a) {
                    case true:
                        this.to.classList.remove(target);
                        break;
                    default:
                        console.error("Esta classe não existe neste elemento!");
                        break;
                }
            }
        };
        /**
        * Irá adicionar um atributo ao elemento
        * @param {attrsNs} target
        */
        this.SetAttr = (target, value) => {
            this.to.setAttribute(target, value);
        };
        /**
        * Irá remover um atributo ao elemento
        * @param {string} target
        */
        this.RmAttr = (target) => {
            this.to.removeAttribute(target);
        };
        this.Append = (feather) => {
            if (!feather) {
                let b = document.body;
                Debug({ type: 2 }, `Como não passou o elemento pai, o elemento solicitado, foi adicionada ao body.`);
                b.appendChild(this.to);
            }
            else {
                feather.to.appendChild(this.to);
            }
        };
        this.Remove = () => {
            this.to.remove();
        };
        this.SetChild = (child) => {
            if (IsArray(child)) {
                for (let i in child) {
                    let a = child;
                    this.to.appendChild(a[i]);
                }
            }
            else {
                let a = child;
                this.to.appendChild(a);
            }
        };
        this.GetChild = () => {
            const itemReturn = [];
            for (let c of __classPrivateFieldGet(this, _ns_Dom_Uni_Cls_to, "f").children) {
                itemReturn.push(c);
            }
            return itemReturn;
        };
        this.Hover = (style) => {
            let oldStyle = this.GetStyle();
            this.Mouseenter(() => this.NOS(style));
            this.Mouseout(() => this.NOS(oldStyle));
        };
    }
}
_ns_Dom_Uni_Cls_to = new WeakMap(), _ns_Dom_Uni_Cls_styles = new WeakMap();
class ns_Dom_List_Cls {
    constructor(element) {
        _ns_Dom_List_Cls_styles.set(this, void 0);
        __classPrivateFieldSet(this, _ns_Dom_List_Cls_styles, {}, "f");
        this.length = element.length;
        /**
         * domBy serve para dizer de onde vem o DOM
         */
        this.domBy = "NhacScript Module";
        /**
         * O AddEnv trabalha como o addEventListener, sendo o primeiro parâmetro para o nome do evento
         * e o segundo para a função que ocorrerá ao acontecer determinado evento.
         * @param {('abort'| 'change'|  'click'|  'close'|  'compositionend'| 'copy'| 'cuechange'| 'cut'| 'dblclick'| 'keydown'| 'keypress'| "keyup"| 'load'| 'mousedown'| 'mouseenter'| 'mouseout'| 'mouseover'| 'mouseup'| 'submit')} nameEvent
         * @param {Function} env
        */
        this.AddEnv = (nameEvent, env) => {
            for (let e of element) {
                e.addEventListener(nameEvent, env);
            }
        };
        /**
        * O método click realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de clique
        * @param {Function} env
        */
        this.Click = (env) => {
            this.AddEnv("click", env);
        };
        /**
        * O método dbClick realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de duplo clique
        * @param {Function} env
        */
        this.DbClick = (env) => {
            this.AddEnv("dblclick", env);
        };
        /**
        * O método change realizará a função passada pelo parâmetro quando o elemento em questão receber o evento de mudança(mudar o valor do atributo value) ocorrer
        * @param {Function} env
        */
        this.Change = (env) => {
            this.AddEnv("change", env);
        };
        /**
        * O método submit realizará a função passada pelo parâmetro quando o formulário em questão for submetido
        * @param {Function} env
        */
        this.Submit = (env) => {
            this.AddEnv("submit", env);
        };
        /**
        * O método keypress realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keypress = (env) => {
            this.AddEnv("keypress", env);
        };
        /**
        * O método keydown realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando no elemento
        * @param {Function} env
        */
        this.Keydown = (env) => {
            this.AddEnv("keydown", env);
        };
        /**
        * O método keyup realizará a função passada pelo parâmetro quando o uma tecla do teclado for precisando, logo depois solto no elemento
        * @param {Function} env
        */
        this.Keyup = (env) => {
            this.AddEnv("keyup", env);
        };
        /**
        * O método mouseenter realizará a função passada pelo parâmetro quando o mouse entrar no elemento
        * @param {Function} env
        */
        this.Mouseenter = (env) => {
            this.AddEnv("mouseenter", env);
        };
        /**
        * O método mouseout realizará a função passada pelo parâmetro quando o mouse sair no elemento
        * @param {Function} env
        */
        this.Mouseout = (env) => {
            this.AddEnv("mouseout", env);
        };
        /**
        * NOS ou Nhac Object Style é um método criado pro NS_DOM(NhacScript Document Object Module)
        * Sua principal função é estilizar os elementos por meio de objeto
        * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} props
        */
        this.NOS = (props) => {
            for (let e in element) {
                if (IsNum(e)) {
                    if (typeof props == "object") {
                        var keys = Object.keys(props);
                        for (let style of keys) {
                            let a = props;
                            element[e].style[style] = a[style];
                            __classPrivateFieldGet(this, _ns_Dom_List_Cls_styles, "f")[style] = a[style];
                        }
                    }
                }
            }
        };
        /**
         * Obtenha os estilos usado no seu elemento
         */
        this.GetStyle = () => {
            let styles = [];
            styles.push(__classPrivateFieldGet(this, _ns_Dom_List_Cls_styles, "f"));
            let index = 1;
            for (let elm of element) {
                let e = elm;
                styles[index] = {};
                for (let st of Object.keys(e.style)) {
                    if (e.style[st] && !IsNum(st)) {
                        styles[index][st] = e.style[st];
                    }
                }
                index++;
            }
            return styles;
        };
        /**
        * Obterá o conteúdo do elemento, se html, obterá as tags html, se txt, obterá apenas o texto
        * @param {("html"|"txt")} type
        * @returns {string}
        */
        this.GetContent = (type) => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                switch (type) {
                    case "html":
                        ret.push(element[e].innerHTML);
                        break;
                    case "txt":
                        ret.push(element[e].innerText);
                        break;
                    default:
                        let a = "Error - o tipo é invalido";
                        console.error("Error - o tipo é invalido");
                        ret.push(a);
                        break;
                }
            }
            return ret;
        };
        /**
        * Obterá o conteúdo do elemento em html
        * @returns {string}
        */
        this.GetHtml = () => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                ret.push(element[e].innerHTML);
            }
            return ret;
        };
        /**
        * Obterá o conteúdo do elemento em texto
        * @returns {string}
        */
        this.GetTXT = () => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                ret.push(element[e].innerText);
            }
            return ret;
        };
        /**
        * Obterá o valor do atributo value
        * @returns {string}
        */
        this.GetVal = () => {
            let ret = new Array();
            for (let e = 0; e < element.length; e++) {
                ret.push(element[e].value);
            }
            return ret;
        };
        /**
        * Sobreporá(escreverá um novo) o valor do atributo value
        * @param {string} value - valor a ser atribuído
        */
        this.SetVal = (value) => {
            for (let e = 0; e < element.length; e++) {
                element[e].value = value;
            }
        };
        /**
        * Escreverá o conteúdo em HTML no elemento sobrescrevendo o valor anterior
        *  @param {string} content - valor a ser escrito
        */
        this.SetHTML = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerHTML = content;
            }
        };
        /**
        * Escreverá o conteúdo em TEXTO no elemento sobrescrevendo o valor anterior
        * @param {string} content - valor a ser escrito
        */
        this.SetTXT = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerText = content;
            }
        };
        /**
        * Escreverá o conteúdo em HTML no elemento, sem sobrepor o conteúdo anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddHTML = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerHTML += content;
            }
        };
        /**
        * Escreverá o conteúdo em TXT no elemento, sem sobrepor o conteúdo anterior
        *  @param {string} content - valor a ser escrito
        */
        this.AddTXT = (content) => {
            for (let e = 0; e < element.length; e++) {
                element[e].innerText += content;
            }
        };
        /**
        * Irá adicionar uma(ou mais) classe ao elemento
        * @param {...string} target
        */
        this.SetClass = (target) => {
            for (let e = 0; e < element.length; e++) {
                if (Array.isArray(target)) {
                    target.forEach(elm => {
                        let a = element[e].classList.contains(elm);
                        switch (a) {
                            case false:
                                element[e].classList.add(elm);
                                break;
                            default:
                                console.error("Esta classe já existe neste elemento!");
                                break;
                        }
                    });
                }
                else {
                    let a = element[e].classList.contains(target);
                    switch (a) {
                        case false:
                            element[e].classList.add(target);
                            break;
                        default:
                            console.error("Esta classe já existe neste elemento!");
                            break;
                    }
                }
            }
        };
        /**
        * Irá remover uma(ou mais) classe do elemento
        * @param {...string} target
        */
        this.RmClass = (target) => {
            for (let e = 0; e < element.length; e++) {
                if (Array.isArray(target)) {
                    target.forEach(elm => {
                        let a = element[e].classList.contains(elm);
                        switch (a) {
                            case true:
                                element[e].classList.remove(elm);
                                break;
                            default:
                                console.error("Esta classe não existe neste elemento!");
                                break;
                        }
                    });
                }
                else {
                    let a = element[e].classList.contains(target);
                    switch (a) {
                        case true:
                            element[e].classList.remove(target);
                            break;
                        default:
                            console.error("Esta classe não existe neste elemento!");
                            break;
                    }
                }
            }
        };
        /**
        * Irá adicionar um atributo ao elemento
        * @param {string} target
        */
        this.SetAttr = (target, value) => {
            for (let e of element) {
                e.setAttribute(target, value);
            }
        };
        /**
        * Irá remover um atributo ao elemento
        * @param {string} target
        */
        this.RmAttr = (target) => {
            for (let e of element) {
                e.removeAttribute(target);
            }
        };
        this.Append = (feather) => {
            if (!feather) {
                let b = document.body;
                Debug({ type: 2 }, `Como não passou o elemento pai, o elemento solicitado, foi adicionada ao body.`);
                for (let e of element) {
                    b.appendChild(e);
                }
            }
            else {
                for (let e of element) {
                    feather.to.appendChild(e);
                }
            }
        };
        this.Remove = () => {
            for (let e of element) {
                e.remove();
            }
        };
        this.GetChild = () => {
            const itemReturn = [];
            let index = 0;
            for (let i of element) {
                itemReturn[index] = new Array();
                for (let j of i?.children) {
                    itemReturn[index].push(j);
                }
                index++;
            }
            return itemReturn;
        };
    }
}
_ns_Dom_List_Cls_styles = new WeakMap();
// Get The HTML Elements
class get_Elm_Cls extends ns_Dom_Uni_Cls {
    constructor(syntax) {
        let elm = document.querySelector(syntax);
        super(elm, true);
        if (elm) {
            this.exist = true;
        }
        else {
            this.exist = false;
        }
        switch (syntax[0]) {
            case ".":
                this.getSyntax = "class";
                break;
            case "#":
                this.getSyntax = "id";
                break;
            default:
                if (syntax.includes("[name="))
                    this.getSyntax = "name";
                else if (syntax.includes("[type="))
                    this.getSyntax = "type";
                else
                    this.getSyntax = "other";
        }
    }
}
class get_List_Elm_Cls extends ns_Dom_List_Cls {
    constructor(syntax) {
        let elms = document.querySelectorAll(syntax);
        super(elms);
        if (elms) {
            this.elms = new Array();
            for (let elm of elms) {
                this.elms.push(new ns_Dom_Uni_Cls(elm, true));
            }
            this.syntaxGet = syntax;
        }
        switch (syntax[0]) {
            case ".":
                this.getSyntax = "class";
                break;
            default:
                if (syntax.includes("[type="))
                    this.getSyntax = "type";
                else
                    this.getSyntax = "other";
        }
    }
}
class create_Element_Cls extends ns_Dom_Uni_Cls {
    constructor(tag, preDefinition) {
        let elm = document.createElement(tag);
        super(elm, true);
        if (preDefinition) {
            let preKey = Object.keys(preDefinition);
            let preValue = Object.values(preDefinition);
            for (const keyPre in preKey) {
                let attr = preKey[keyPre];
                switch (attr) {
                    case "id":
                        this.SetID(preValue[keyPre]);
                        break;
                    case "class":
                        this.SetClass(preValue[keyPre]);
                        break;
                    case "style":
                        this.NOS(preValue[keyPre]);
                        break;
                    case "text":
                        this.SetTXT(preValue[keyPre]);
                        break;
                    default:
                        elm[attr] = preValue[keyPre];
                        break;
                }
            }
        }
    }
}
// Especial Class
class NS_Component {
    /**
     *
     * @param {object} props - Propriedades
     * @param {feather, main} preElm Elementos pre-inicializado
     * @param {boolean} autoStart Inicio automático? (por o feather no main)
     * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} defaultStyle Objeto de estilo
     */
    constructor(props, preElm, autoStart = true, defaultStyle = createElm.defaultStyle) {
        _NS_Component_proprieties.set(this, void 0);
        _NS_Component_defaultStyle.set(this, void 0);
        __classPrivateFieldSet(this, _NS_Component_proprieties, props ? props : new Object(), "f");
        __classPrivateFieldSet(this, _NS_Component_defaultStyle, { defaultStyle: defaultStyle }, "f");
        this.feather = preElm?.feather ? preElm.feather : Div({});
        this.main = preElm?.main ? preElm.main : GetElm("body");
        this.GetDefaultStyle = createElm.GetDefaultStyle.bind(__classPrivateFieldGet(this, _NS_Component_defaultStyle, "f"));
        this.SetDefaultStyle = createElm.SetDefaultStyle.bind(__classPrivateFieldGet(this, _NS_Component_defaultStyle, "f"));
        if (autoStart)
            this.Start();
    }
    /**
     * Obtenha os Elementos NS do componente
     */
    GetNSElement() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (item.domBy === "NhacScript Module") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Adicione uma propriedade
     */
    SetProps(name, value) {
        let item = __classPrivateFieldGet(this, _NS_Component_proprieties, "f");
        item[name] = value;
        let className = this.__proto__["constructor"].toString();
        className = className.split('\n');
        for (let line of className) {
            const invalidLines = ["var ", "let ", "const ", "{", "}", "[", "]"];
            if (line.includes("this.GetProps")) {
                for (let invalid of invalidLines) {
                    if (line.includes(invalid)) {
                        continue;
                    }
                }
                eval(line);
            }
        }
    }
    /**
     * Obtenha uma ou todas as propriedades
     */
    GetProps(propName) {
        let item = __classPrivateFieldGet(this, _NS_Component_proprieties, "f");
        if (propName)
            return item[propName] ? item[propName] : undefined;
        else
            return item;
    }
    /**
     * Obtenha todos os atributos string do componente
     */
    GetStringKeys() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (typeof item == "string") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Obtenha todos os atributos numéricos do componente
     */
    GetNumKeys() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (typeof item == "number") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Obtenha todos os atributos Booleanos do componente
     */
    GetBoolKeys() {
        let name = Object.keys(this);
        let value = Object.values(this);
        let index = 0;
        const returnItem = {};
        for (let item of value) {
            if (typeof item == "boolean") {
                returnItem[name[index]] = item;
            }
            index++;
        }
        return returnItem;
    }
    /**
     * Obtenha o elemento principal/pai do seu componente
     */
    GetFeather() {
        return this.feather;
    }
    /**
     * Adicione o elemento principal/pai do seu componente
     */
    SetFeather(feather) {
        this.feather = feather;
    }
    /**
     * Obtenha o elemento principal onde o seu componente estará
     */
    GetContainer() {
        return this.main;
    }
    /**
     * Adicione o elemento principal onde o seu componente estará
     */
    SetContainer(container) {
        this.main = container;
    }
    /**
     * Renderize automaticamente os elementos pai, e principal
     */
    Start() {
        let feather = this.feather;
        this.main.SetChild(feather);
    }
    Remove() {
        this.feather.Remove();
    }
}
_NS_Component_proprieties = new WeakMap(), _NS_Component_defaultStyle = new WeakMap();
class Data_NS {
    constructor(type, val) {
        this.type = type;
        this.val = val;
    }
}
class List extends Data_NS {
    constructor(...values) {
        super("List", values);
    }
    Map(filter, action) {
        let val = {};
        this.val.forEach((value, ind, arr) => {
            if (action) {
                if (filter && filter == value) {
                    action(value, ind);
                }
                else if (!filter) {
                    action(value, ind);
                }
            }
            if (filter && filter == value) {
                val[ind] = value;
            }
            else if (!filter) {
                val[ind] = value;
            }
        });
        return val;
    }
}
// Function
// Get The DOM
/**
 * Obtenha o DOM para manipular um elemento HTML
 * @param {Element|Node} element - Passe o elemento a ser manipulado
 * @returns {ns_Dom_Uni_Cls}
 */
function GetDom(element) {
    let elm = new ns_Dom_Uni_Cls(element);
    return elm;
}
/**
 * Obtenha o DOM para uma NodeList
 * @param {NodeList} element - Passe a NodeList a ser manipulada
 * @returns {ns_Dom_List_Cls}
 */
function GetListDom(element) {
    let elm = new ns_Dom_List_Cls(element);
    return elm;
}
// Get The HTML Elements
/**
 * Obtenha elementos HTML com o NhacScript para melhor manipulação
 * @param {string} syntax - use a mesma sintaxe que usaria no querySelector
 * @returns {get_Elm_Cls}
 */
function GetElm(syntax) {
    let element = new get_Elm_Cls(syntax);
    return element;
}
/**
 * Obtenha um array com vários elementos HTML com o NhacScript para melhor manipulação
 * @param {string} syntax - use a mesma sintaxe que usaria no querySelectorAll
 * @returns {get_List_Elm_Cls}
 */
function GetListElm(syntax) {
    let element = new get_List_Elm_Cls(syntax);
    return element;
}
// Especial Function
/**
 * Renderize um componente no seu DOM
 * @param {get_Elm_Cls | create_Element_Cls} feather  - Elemento que irá conter todo seu componente
 * @param {get_Elm_Cls | create_Element_Cls | string} contents - Componentes, elementos_NS, Elemento DOM ou string com notação HTML
 * Valor de contents é sequencial, isso é Render(feather, MeuComponente1, MeuComponente2, ...) - o ... quer dizer que pode ter mais valores
 * Caso passe uma classe/componente que herde o NS_Component como um dos itens de contents, ele retornará o componente criado em um Array.
 * Permitindo a manipulação
*/
function Render(feather, ...contents) {
    const returnComponent = [];
    feather.SetHTML("");
    for (let content of contents) {
        try {
            let item = new content();
            item.SetContainer(feather);
            feather.SetChild(item.feather);
            returnComponent.push(item);
        }
        catch (error) {
            try {
                if (typeof content === "string")
                    feather.AddHTML(content);
                else
                    feather.SetChild(content);
            }
            catch (_err) {
                feather.AddHTML(content);
            }
        }
    }
    return returnComponent;
}
/**
 * Renderize um componente no seu DOM
 * @param {get_Elm_Cls | create_Element_Cls} feather  - Elemento que irá conter todo seu componente
 * @param {get_Elm_Cls | create_Element_Cls | string} contents - Componentes, elementos_NS, Elemento DOM ou string com notação HTML
 * Valor de contents é sequencial, isso é RenderAdd(feather, MeuComponente1, MeuComponente2, ...) - o ... quer dizer que pode ter mais valores
 * Caso passe uma classe/componente que herde o NS_Component como um dos itens de contents, ele retornará o componente criado em um Array.
 * Permitindo a manipulação
*/
function RenderAdd(feather, ...contents) {
    const returnComponent = [];
    for (let content of contents) {
        try {
            let item = new content();
            item.SetContainer(feather);
            feather.SetChild(item.feather);
            returnComponent.push(item);
        }
        catch (error) {
            try {
                if (typeof content === "string")
                    feather.AddHTML(content);
                else
                    feather.SetChild(content);
            }
            catch (_err) {
                feather.AddHTML(content);
            }
        }
    }
    return returnComponent;
}
function Alert(warn, header, headerColor, btnHeader, style) {
    class Alert extends NS_Component {
        constructor() {
            super({ click: false });
            this.feather.NOS({
                position: "fixed",
                top: "0",
                width: "100%"
            });
            this.alert = Div({
                style: {
                    width: "50%",
                    minHeight: "10rem",
                    margin: "auto",
                    backgroundColor: "#84a0a898",
                    borderRadius: "0.5rem",
                    padding: "0.15rem",
                    boxSizing: "border-box",
                }
            });
            this.alert.SetHTML(`
                        <h2 style="margin: 0; color: ${headerColor || "red"};">${header || "Você tem um aviso"}</h2>
                        <hr style="border: none;border-top: #000 solid 0.1rem;border-bottom: #fff solid 0.1rem;"/>
                        <h3>${warn}</h3>
                    `);
            this.btnRemove = Btn({
                style: style?.btn || {
                    backgroundColor: "#9eabf7",
                    border: "none",
                    minWidth: "12rem",
                    minHeight: "2.5rem",
                    float: "right",
                    borderRadius: "1rem"
                },
                text: btnHeader || "OK!"
            });
            this.alert.SetChild(this.btnRemove);
            this.alert.NOS(style?.main || {});
            this.btnRemove.Click(() => this.Remove());
            this.feather.SetChild(this.alert);
        }
    }
    const alertItem = new Alert().feather;
}
function Prompt(question, set, convertTo) {
    class Prompt extends NS_Component {
        constructor() {
            super({ valueRet: "" });
            this.feather.NOS({
                position: "fixed",
                top: "0",
                width: "100%"
            });
            this.prompt = Div({
                style: {
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "#84a0a898",
                    borderRadius: "0.5rem",
                    padding: "0.15rem",
                    boxSizing: "border-box",
                }
            });
            this.prompt.SetHTML(`
                        <h3>${question}</h3>
                        <hr style="border: none;border-top: #000 solid 0.1rem;border-bottom: #fff solid 0.1rem;"/>
                    `);
            this.inputGet = Input({
                placeholder: set?.placeholder || "",
                style: set?.inputStyle || {
                    width: "95%",
                    margin: "0.5rem 0",
                    height: "2rem",
                    border: "none",
                    borderRadius: "0.15rem"
                }
            });
            this.btnOk = Btn({
                style: set?.btnStyle || {
                    backgroundColor: "#9eabf7",
                    border: "none",
                    minWidth: "12rem",
                    minHeight: "2.5rem",
                    borderRadius: "0.5em"
                },
                text: set?.btnLabel || "OK!"
            });
            this.btnCancel = Btn({
                style: set?.btnCancelStyle || {
                    backgroundColor: "#cc6c6c",
                    border: "none",
                    minWidth: "10rem",
                    minHeight: "2.5rem",
                    borderRadius: "0.15rem"
                },
                text: set?.btnLabelCancel || "Cancelar!"
            });
            this.prompt.SetChild(this.inputGet);
            this.prompt.SetChild(this.btnOk);
            this.prompt.SetChild(this.btnCancel);
            this.prompt.NOS(set?.mainStyle || {});
            this.val = this.GetProps("valueRet");
            this.time = setInterval(() => {
                this.SetProps("valueRet", this.inputGet.GetVal());
            });
            this.btnOk.Click(() => {
                if (convertTo) {
                    try {
                        this.SetProps("valueRet", Conversor({ to: convertTo, value: this.inputGet.GetVal() }));
                        this.val = this.GetProps("valueRet");
                        clearInterval(this.time);
                        this.Remove();
                    }
                    catch (error) {
                        if (!this.prompt.GetTXT().includes(`Valor invalido! escreva um: ${convertTo}`)) {
                            this.prompt.SetChild(createElm.P({ text: `Valor invalido! escreva um: ${convertTo}` }));
                        }
                    }
                }
                else {
                    this.Remove();
                    this.SetProps("valueRet", this.inputGet.GetVal());
                    this.val = this.GetProps("valueRet");
                    clearInterval(this.time);
                }
            });
            this.inputGet.Keypress((e) => {
                if (e.code == "Enter")
                    this.btnOk.Click();
            });
            this.prompt.NOS(set?.mainStyle || {});
            this.btnCancel.Click(() => this.Remove());
            this.feather.SetChild(this.prompt);
        }
    }
    const prompt = new Prompt();
    return prompt;
}
function Confirm(question, set) {
    class Confirm extends NS_Component {
        constructor() {
            super();
            this.feather.NOS({
                position: "fixed",
                top: "0",
                width: "100%"
            });
            this.confirm = Div({
                style: {
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "#84a0a898",
                    borderRadius: "0.5rem",
                    padding: "0.15rem",
                    boxSizing: "border-box",
                }
            });
            this.confirm.SetHTML(`
                        <h3>${question}</h3>
                    `);
            this.btnOk = Btn({
                style: set?.btnStyle || {
                    backgroundColor: "#9eabf7",
                    border: "none",
                    minWidth: "12rem",
                    minHeight: "2.5rem",
                    borderRadius: "0.5em"
                },
                text: set?.btnLabel || "OK!"
            });
            this.btnCancel = Btn({
                style: set?.btnCancelStyle || {
                    backgroundColor: "#cc6c6c",
                    border: "none",
                    minWidth: "10rem",
                    minHeight: "2.5rem",
                    borderRadius: "0.15rem"
                },
                text: set?.btnLabelCancel || "Cancelar!"
            });
            this.confirm.SetChild(this.btnOk);
            this.confirm.SetChild(this.btnCancel);
            this.confirm.NOS(set?.mainStyle || {});
            this.val = undefined;
            this.btnOk.Click(() => {
                this.Remove();
                this.val = true;
            });
            this.btnCancel.Click(() => {
                this.Remove();
                this.val = false;
            });
            this.confirm.NOS(set?.mainStyle || {});
            this.feather.SetChild(this.confirm);
        }
    }
    const confirm = new Confirm();
    return confirm;
}
/**
 * Adicione estilos
 * @param {keyof nosProps} style
 * @param {string} _class
 */
function SetStyle(style, _class) {
    const identifier = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cssTxt = `${_class}{`;
    let keys = Object.keys(style);
    let index = 0;
    for (let item of keys) {
        let st = style;
        let key = item;
        for (let subItem of key) {
            if (identifier.includes(subItem)) {
                key = item.replace(subItem, `-${subItem}`.toLocaleLowerCase());
            }
        }
        cssTxt += `${key}: ${st[item]};`;
    }
    cssTxt += "}";
    let styleLink = GetElm("#style-ns");
    styleLink = styleLink.to ? styleLink : CreateElm("style", {
        id: "style-ns"
    });
    styleLink.SetTXT(styleLink.GetTXT() + cssTxt);
    styleLink.Append(GetElm("head"));
}
function ImplementsNStyle() {
    SetStyle({
        padding: "0",
        margin: "0",
        boxSizing: "border-box"
    }, "*");
    SetStyle({
        width: "100%",
        height: "100%"
    }, "html");
    SetStyle({
        backgroundColor: "#EFEFEF",
        width: "100%",
        height: "100%"
    }, "body");
    SetStyle({
        minWidth: "5rem",
        minHeight: "2rem",
        margin: "0.2rem 0.5rem",
        border: "none",
        borderRadius: "0.12rem",
        backgroundColor: "#b7b7b7"
    }, "button");
    SetStyle({
        minWidth: "20rem",
        minHeight: "1.5rem",
        border: "none",
        padding: "0.2rem",
    }, "input");
    SetStyle({
        minWidth: "20rem",
        minHeight: "1.5rem",
        border: "none",
        margin: "0.5rem"
    }, "textarea");
    SetStyle({
        border: "none",
        borderTop: "0.12rem solid #000"
    }, "hr");
}
// Verify Types
/**
 * Verifica se o elemento é um número ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsNum(target) {
    return (target < 0) || (target >= 0);
}
/**
 * Verifica se o elemento é um Objeto(não array) ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsObj(target) {
    return (typeof target === "object" && Array.isArray(target) === false);
}
/**
 * Verifica se o elemento é um Array ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsArray(target) {
    return Array.isArray(target) === true;
}
/**
 * Verifica se o elemento é uma matriz ou não
 * @param {string} target - Valor a ser analisado
 * @returns {true|false}
 */
function IsMatriz(target) {
    let is = new Array();
    if (IsArray(target)) {
        is.push(true);
        for (let key of target) {
            is.push(IsArray(key));
        }
    }
    return !is.includes(false);
}
/**
 * Verifica o tipo da variável
 * @returns {{special?:string, literal: string, probability?: string}}
 */
function TypeVar(target) {
    let typeLiterals = typeof target;
    let objReturn = new Object();
    if (typeLiterals == "function") {
        objReturn = {
            probability: "Class or Function",
            literal: typeLiterals
        };
    }
    else if (typeLiterals == "object") {
        if (IsArray(target)) {
            objReturn = {
                special: "Array",
                literal: typeLiterals
            };
        }
        else {
            objReturn = {
                special: "Object Js",
                literal: typeLiterals
            };
        }
    }
    else {
        if (typeLiterals == "string" && IsNum(target)) {
            objReturn = {
                special: "str-num",
                literal: typeLiterals
            };
        }
        else {
            objReturn = {
                literal: typeLiterals
            };
        }
    }
    return objReturn;
}
// Math Function
/**
 * Gere um número aleatório
 * @param {number} min bote o valor mínimo a ser retornado
 * @param {number} max bote o valor máximo a ser retornado
 * @returns {number}
 */
function GenRandom(min, max) {
    return RoundNum(Math.random() * (max - min) + min);
}
/**
 * Arredonde o número de forma lógica
 * @param {number} num
 * @returns {number}
 */
function RoundNum(num) {
    let numbers = num.toString().split(".");
    if ((numbers[1] == undefined && IsNum(numbers[0])) || ToNum(numbers[1]) <= 4)
        return convertor.ToInt(`${num}`);
    else if (ToNum(numbers[1]) >= 5)
        return convertor.ToInt(`${num}`) + 1;
    else
        throw new Error("Operação inválida!");
}
/**
 * Arredonde o número para baixo
 * EX: 1.6
 * logica: 2.0 ou 2
 * retorno 1.0 ou 1
 * @param {number} num
 * @returns {number}
 */
function RoundNumDown(num) {
    return convertor.ToInt(`${num}`);
}
/**
* Arredonde o número para cima
* EX: 1.2
* logica: 1.0 ou 1
* retorno 2.0 ou 2
* @param {number} num
* @returns {number}
*/
function RoundNumUp(num) {
    return (convertor.ToInt(`${num}`) + 1);
}
// String and Array Working
/**
 * Gere um texto aleatório, defina o limite máximo dele.
 * @param {number} maxLength - Quantidade de caracteres máximo
 * @param {{templateMask?: string, noNum?: boolean, noLowerChar?: boolean, noUpChar?: boolean, firstChar?: string}} settings - Defina as configurações
 * O atributo templateMask do settings defina um tipo de texto para ser mascarado com o @function MaskText
 * O Atributo noNum deve ser um valor booleano, se for true, então não será gerado números
 * O Atributo noLowerChar deve ser um valor booleano, se for true, então não será gerado letras minusculas
 * O Atributo noUpChar deve ser um valor booleano, se for true, então não será gerado letras minusculas
 * O Atributo firstChar deve ser um valor em string, que deve ser o primeiro carácter.
 * @returns {string}
 */
function GenRandomText(maxLength, settings) {
    let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let spacialChar = "*&¨%$#@!+_)([]{}`^~Ç/:?|'\"\\|";
    let endIndexOf = {
        upperLetter: allChar.indexOf("Z"),
        loweLetter: allChar.indexOf("z"),
        numberLetter: allChar.indexOf("9"),
    };
    let ranText = "";
    for (let l = 0; l < maxLength; l++) {
        let ranNum = GenRandom(0, allChar.length + 10);
        if (settings?.firstChar && l == 0) {
            ranText += settings?.firstChar;
            continue;
        }
        if (settings?.noNum == true && IsNum(allChar[ranNum])) {
            l--;
            continue;
        }
        if (settings?.noLowerChar == true && (ranNum <= endIndexOf.loweLetter && ranNum > endIndexOf.upperLetter)) {
            l--;
            continue;
        }
        if (settings?.noUpChar == true && ranNum <= endIndexOf.upperLetter) {
            l--;
            continue;
        }
        if (!allChar[ranNum]) {
            if (settings?.noSpecial == true) {
                l--;
                continue;
            }
            else {
                ranNum = GenRandom(0, spacialChar.length - 1);
                ranText += spacialChar[ranNum];
                continue;
            }
        }
        ranText += allChar[ranNum];
    }
    if (settings?.templateMask) {
        ranText = MaskText(ranText, settings?.templateMask);
    }
    return ranText;
}
/**
 * Mascare sua string, defina o template exemplo:
 * "###.###.###-##"
 * E seu texto, exemplo:
 * "00000000000"
 * e virará:
 * "000.000.000-00"
 * @param {string} text - Texto a ser mascarado
 * @param {string} template - Templete - use as # para definir o valor para ser substituído
 * @returns {string}
 */
function MaskText(text, template) {
    let indexText = text.length;
    let indexMask = FindAllIndex(template, "#").length;
    let returnText = template;
    if (indexMask == indexText) {
        for (const textImplants of text) {
            returnText = returnText.replace("#", textImplants);
        }
    }
    else {
        Debug({ type: 1, forceStop: true }, "O template não coincide com o tamanho do texto a ser implementado!");
    }
    return returnText;
}
/**
 * Uma das coisas mais chatas, é verificar os arrays, e essa função retorna todos os indices de um determinado valor no array ou string.
 * Desde que, haja valores repetidos.
 * @param {any} to - Valor a ser pesquisado
 * @param {string|any} ofItem - Vetor mãe
 * @returns {number[]}
 */
function FindAllIndex(ofItem, to) {
    let found = new Array();
    let counter = 0;
    for (let item of ofItem) {
        let is = to == item;
        if (is) {
            found.push(counter);
        }
        counter++;
    }
    return found;
}
/**
 * Descubra os index de um caracter
 * @param {string} text
 * @param {string} search
 */
function FindAllChar(text, search) {
    let index = [];
    let ind = 0;
    if (search.length > 1) {
        Err("Pesquise apenas uma letra");
        return "unknown";
    }
    else {
        for (let c of text) {
            if (c == search.toLocaleUpperCase() || c == search.toLocaleLowerCase())
                index.push(ind);
            ind++;
        }
    }
    return index;
}
// MultiPlatform
/**
 * Defina funções para dispositivos nomeados como Desktops a função que ocorrerá somente nos aparelho com a tela maior que 800px
 * @param {Function} callback
 */
function SetDesktop(callback) {
    if (screen.width <= 800) {
        callback();
    }
}
/**
 * Defina funções para dispositivos nomeados como Celulares Mobile a função que ocorrerá somente nos aparelho com a tela menor que 801px
 * @param {Function} callback
 */
function SetMobile(callback) {
    if (screen.width >= 801) {
        callback();
    }
}
/**
 * Defina funções para dispositivos de tamanho diferente
 * @param {Function} mobile Defina função que ocorrerá somente nos aparelho com a tela menos que 801px
 * @param {Function} desktop Defina função que ocorrerá somente nos aparelho com a tela mais que 800px
 */
function SetResponsive(mobile, desktop) {
    SetMobile(mobile);
    SetDesktop(desktop);
}
// LocalStorage Manipulation
/**
* Remova o local storage
* @param {string} nameLocal - Nome do localStorage
*/
function RemoveLocal(nameLocal) {
    localStorage.removeItem(nameLocal);
}
/**
 * Adicione valores ao local storage
 * @param {string} localName - Nome do localStorage
 * @param {any} value - Valor a ser adicionado
 * @param {boolean} append - Esse valor vai ser adicionado ou sobreporá o anterior?
 * Se true, os valores serão concatenados, se false, o valor anterior será removido e o novo adicionado
 */
function SetLocal(localName, value, append = false) {
    if (typeof value == "object")
        ToJSON(value);
    if (append == false) {
        localStorage[localName] = value;
    }
    else {
        localStorage[localName] += value;
    }
}
/**
 * Obtenha os valores do localStorage;
 * Obtenha pre-convertido ou no tipo default(string)
 * @param {string} localName - Nome do localStorage
 * @param {{convert: boolean, targetType: "str"|"obj"|"num"|"JSON"|"obj"}} setting - Em convert defina se vai converter ou não, em targetType, defina o tipo da conversão de retorno.
 * @returns {any}
 */
function GetLocal(localName, setting) {
    let localValue = localStorage[localName];
    if (localValue == "" || localValue == undefined) {
        Debug({ type: 1, forceStop: true }, `O localStorage: ${localName} não foi encontrado ou o valor armazenado é invalido`);
        return "";
    }
    else {
        if (setting && setting.convert == true) {
            try {
                localValue = Conversor({ to: setting.targetType, value: localValue });
                return localValue;
            }
            catch (err) {
                Debug({ type: 1, forceStop: true }, `Impossível converter o valor de ${localName}, para ${setting.targetType}, então lhe foi retornado o tipo default do localStorage(string)`);
                throw new Error(err);
            }
        }
        return localValue;
    }
}
// Constant declaration
/**
 * Objeto padrão do NhacScript para conversão de tipo
*/
const convertor = {
    /**
     * Conversor geral, converte para qualquer tipo
     * @param {{to:("str"|"obj"|"num"|"JSON"|"obj"), value:any}} set - no set ponha: obj | str | num | int | float | bool
     * obj - Para objeto ; str - para string
     * num - Para número ; int - para inteiro
     * float - Para num flutuante ; bool - para booleano
     */
    Conversor: (set) => {
        switch (set.to) {
            case "str":
                return convertor.ToStr(set.value);
            case "obj":
                return convertor.ToObj(set.value);
            case "num":
                return convertor.ToNum(set.value);
            case "JSON":
                return convertor.ToJSON(set.value);
            default:
                return "Tipo inválido";
        }
    },
    ToStr: (value) => {
        if (typeof value == "number") {
            return value.toString();
        }
        else if (typeof value == "boolean") {
            switch (value) {
                case true:
                    return "true";
                case false:
                    return "false";
                default:
                    return `${value}`;
                    break;
            }
        }
        else {
            return `${value}`;
        }
    },
    ToNum: (value) => {
        if (value <= 0 || value > 0) {
            return Number(value);
        }
        else {
            throw new Error("Este valor pode virar um número!");
        }
    },
    ToInt: (value) => {
        try {
            let confNum = convertor.ToNum(value);
            let num = confNum.toString();
            return typeof num == "string" ? parseInt(num) : -1;
        }
        catch (error) {
            throw new Error("Este valor pode virar um número inteiro!");
        }
    },
    ToFloat: (value) => {
        try {
            let confNum = convertor.ToNum(value);
            let num = confNum.toString();
            return typeof num == "string" ? parseFloat(num) : 0;
        }
        catch (error) {
            throw new Error("Este valor pode virar um número real!");
        }
    },
    ToJSON: (obj) => {
        if (typeof obj == "object") {
            return JSON.stringify(obj, null, 3);
        }
        else {
            throw new Error("O valor passado como argumento não pode virar um JSON!");
        }
    },
    ToObj: (obj) => {
        try {
            return JSON.parse(obj);
        }
        catch (error) {
            throw new Error("O valor passado como argumento não pode virar um Objeto!");
        }
    }
};
/**
 * Objeto padrão do NhacScript para saída de texto
*/
const outObj = {
    /**
     * Por baixo dos panos usa o objeto console original, porém tudo é convertido em texto;
     * Você pode configurar a saída, definindo os tipos (0: log, 1: error, 2: warn, 3: table)
     * @param {{type:number, forceStop?: boolean}} settings - Configure a saída
     * @param message - bote suas mensagens
     * @returns
     */
    Debug: (settings, ...message) => {
        var msg = "";
        function verifyObj(val) {
            if (typeof val == "object")
                return val;
            else if (typeof val == "string")
                try {
                    return JSON.parse(val);
                }
                catch (_a) {
                    throw new Error("Não é possível converter o valor para objeto!");
                }
        }
        function appendMsg() {
            if (message.length == 1) {
                msg = message[0];
            }
            else if (message.length > 1) {
                for (let sendMes of message) {
                    if (typeof sendMes == "object") {
                        msg += JSON.stringify(sendMes);
                    }
                    else {
                        msg += sendMes;
                    }
                    msg += " ";
                }
            }
        }
        if (typeof settings != "object") {
            message.push(settings);
            settings = { type: 0 };
        }
        else if (typeof settings == "object") {
            appendMsg();
            switch (settings?.type) {
                case 0:
                    Log(msg);
                    break;
                case 1:
                    if (settings?.type == 1 && settings?.forceStop == true) {
                        throw new Error(msg);
                    }
                    Err(msg);
                    break;
                case 2:
                    Warn(msg);
                    break;
                case 3:
                    let objPrint = verifyObj(msg);
                    Table(objPrint);
                    break;
                default:
                    throw new Error(`O tipo ${settings?.type} é invalido no Debug!`);
                    break;
            }
        }
    },
    /**
    * Por baixo dos panos usa o objeto console.log original, porém tudo é convertido em texto;
    * @param message - bote suas mensagens
    * @returns
    */
    Log: (...message) => {
        var msg = "";
        if (message.length == 1) {
            msg = message[0];
        }
        else if (message.length > 1) {
            for (let i = 0; i < message.length; i++) {
                if (i < (message.length - 1)) {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                    msg += " ";
                }
                else {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                }
            }
        }
        console.log(msg);
    },
    /**
     * Mostrará uma tabela decorada para objetos e array
     * @param {object} obj Objeto a ser mostrado
     * @returns object
     */
    Table: (obj) => {
        if (typeof obj == "object") {
            if (Array.isArray(obj) == true) {
                Log("Depurando Array:");
                console.table(obj);
            }
            else {
                Log("Depurando Objeto:");
                console.table(obj);
            }
        }
        else {
            throw new Error("O Argumento não é um objeto!");
        }
    },
    /**
    * Exiba uma mensagem de erro
    * @param message - bote suas mensagens
    * @returns
    */
    Err: (message) => {
        var msg = message;
        if (message.length == 1) {
            msg = message[0];
        }
        else if (message.length > 1) {
            for (let i = 0; i < message.length; i++) {
                if (i < (message.length - 1)) {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                    msg += " ";
                }
                else {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                }
            }
        }
        console.error(msg);
    },
    /**
    * Exiba uma mensagem de aviso
    * @param message - bote suas mensagens
    * @returns
    */
    Warn: (message) => {
        var msg = message;
        if (message.length == 1) {
            msg = message[0];
        }
        else if (message.length > 1) {
            for (let i = 0; i < message.length; i++) {
                if (i < (message.length - 1)) {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                    msg += " ";
                }
                else {
                    if (typeof message[i] == "object") {
                        msg += JSON.stringify(message[i]);
                    }
                    else {
                        msg += message[i];
                    }
                }
            }
        }
        console.warn(msg);
    },
    Dir: (object) => {
        console.dir(object);
    }
};
/**
 * Crie elementos HTML em poucos texto
 */
const createElm = {
    /**
     * Crie qualquer tag
     * @param {string} tag use os sinais < text > para definir a tag.
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    CreateElm: (tag, preDefinition) => {
        let create = new create_Element_Cls(tag, preDefinition);
        return create;
    },
    /**
     * Crie um botão
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    Btn: (preDefinition) => {
        if (!preDefinition || !preDefinition.style && !preDefinition.class) {
            if (!preDefinition) {
                preDefinition = new Object();
            }
            if (!preDefinition.style && !preDefinition.class) {
                preDefinition.style = createElm.GetDefaultStyle("btn");
            }
        }
        let create = createElm.CreateElm("button", preDefinition);
        return create;
    },
    /**
     * Crie um input
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    Input: (preDefinition) => {
        if (!preDefinition || !preDefinition.style && !preDefinition.class) {
            if (!preDefinition) {
                preDefinition = new Object();
            }
            if (!preDefinition.style && !preDefinition.class) {
                preDefinition.style = createElm.GetDefaultStyle("input");
            }
        }
        let create = createElm.CreateElm("input", preDefinition);
        return create;
    },
    /**
     * Crie um output
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    Output: (preDefinition) => {
        if (!preDefinition || !preDefinition.style && !preDefinition.class) {
            if (!preDefinition) {
                preDefinition = new Object();
            }
            if (!preDefinition.style && !preDefinition.class) {
                preDefinition.style = createElm.GetDefaultStyle("output");
            }
        }
        let create = createElm.CreateElm("output", preDefinition);
        return create;
    },
    /**
     * Crie uma div
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    Div: (preDefinition) => {
        if (preDefinition) {
            if (!preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("div")) {
                preDefinition.style = createElm.GetDefaultStyle("div");
            }
        }
        let create = createElm.CreateElm("div", preDefinition);
        return create;
    },
    /**
     * Crie uma span
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    Span: (preDefinition) => {
        if (preDefinition && !preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("span")) {
            preDefinition.style = createElm.GetDefaultStyle("span");
        }
        let create = createElm.CreateElm("span", preDefinition);
        return create;
    },
    /**
     * Crie um parágrafo
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    P: (preDefinition) => {
        if (preDefinition && !preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("p")) {
            preDefinition.style = createElm.GetDefaultStyle("p");
        }
        let create = createElm.CreateElm("p", preDefinition);
        return create;
    },
    /**
     * Crie um formulário
     * @param {{value?: string, style?: {background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string},text?: string, name?: string, id?: string,class?: string}} preDefinition - Predefinição
     * @returns
     */
    Form: (preDefinition) => {
        if (preDefinition && !preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("form")) {
            preDefinition.style = createElm.GetDefaultStyle("form");
        }
        let create = createElm.CreateElm("form", preDefinition);
        return create;
    },
    Label: (preDefinition) => {
        if (preDefinition && !preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("textarea")) {
            preDefinition.style = createElm.GetDefaultStyle("div");
        }
        let create = createElm.CreateElm("label", preDefinition);
        return create;
    },
    Textarea: (preDefinition) => {
        if (preDefinition && !preDefinition?.style && !preDefinition?.class && createElm.GetDefaultStyle("textarea")) {
            preDefinition.style = createElm.GetDefaultStyle("div");
        }
        let create = createElm.CreateElm("textarea", preDefinition);
        return create;
    },
    Script: (preDefinition) => {
        if (!preDefinition) {
            Debug({ type: 2 }, "Erro não grave, o src não foi definido.");
        }
        let create = createElm.CreateElm("script", preDefinition);
        return create;
    },
    defaultStyle: {
        input: {
            backgroundColor: "#999999",
            color: "#000",
            border: "none",
            borderRadius: "3rem",
        },
        output: {
            backgroundColor: "#999999",
            color: "#000",
            border: "none",
            borderRadius: "3rem",
        },
        btn: {
            backgroundColor: "#999999",
            color: "#00ddff"
        }
    },
    /**
    * Obtenha o padrão de estilo de um(ou todos) elemento NS
    * @param {"input"|"btn"| "output"|"textarea"|"p"| "div"| "span"|"textarea"|"form"|"label"} item
    * @returns {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}}
    */
    GetDefaultStyle: function (item) {
        for (let k of Object.keys(this.defaultStyle)) {
            if (k === item) {
                let item = this.defaultStyle;
                return item[k];
            }
        }
    },
    /**
    * Adicione um padrão de estilo para os elementos NS
    * @param {"input"|"btn"| "output"|"textarea"|"p"| "div"| "span"|"textarea"|"form"|"label"} item
    * @param {{background?: string,backgroundColor?: string,backgroundPosition?: string,color?: string,textAlign?: string,textDecoration?: string,display?: string,margin?: string,marginTop?: string,marginBottom?: string,marginLeft?: string,marginRight?: string,padding?: string,paddingTop?: string,paddingBottom?: string,paddingLeft?: string,paddingRight?: string,maxWidth?: string,minWidth?: string,maxHeight?: string,minHeight?: string}} value
    */
    SetDefaultStyle: function (item, value) {
        if (item && value) {
            let i = this.defaultStyle;
            i[item] = value;
            this.defaultStyle = i;
        }
    }
};
// Extract of Objects
const { Conversor, ToNum, ToStr, ToObj, ToJSON } = convertor;
const { Log, Debug, Err, Warn, Table, Dir } = outObj;
const { Input, Output, Btn, Form, Div, CreateElm } = createElm;
